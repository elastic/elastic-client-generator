import * as path from 'path'
import { SpecValidator } from './specification/validator'
import { TypeReader } from './specification/type-reader'
import { RestSpecMapping } from './specification/rest-spec-mapping'
import _ from 'lodash'
import * as glob from 'glob'
import * as ts from 'byots'
import Domain = require('./domain');

export type TypeDictionary = { [p: string]: Domain.TypeDeclaration };
export class Specification {
  private specsFolder = path.join(__dirname, '..', 'specs');
  private configPath = path.join(this.specsFolder, 'tsconfig.json');
  private readonly program: ts.Program;

  types: Domain.TypeDeclaration[] = [];
  typeLookup: TypeDictionary = {};
  domain_errors: string[] = [];
  endpoints: Domain.Endpoint[] = [];
  endpoint_errors: string[] = [];

  private constructor (validate: boolean) {
    const config = ts.readConfigFile(this.configPath, file => ts.sys.readFile(file))
    const commandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, this.specsFolder)
    this.program = ts.createProgram(commandLine.fileNames, commandLine.options)

    if (validate) {
      this.domain_errors = SpecValidator.validate(this.program)
      if (this.domain_errors.length > 0) {
        const errorString = ['The specification contains the following type mapping errors:']
          .concat(this.domain_errors).map(e => '  - ' + e)
          .join('\n')
        throw Error(errorString)
      }
    }

    const specVisitor = new TypeReader(this.program)
    const types = [].concat(specVisitor.interfaces).concat(specVisitor.enums)
    // resolve inherits by creating the proper pointers to instances, pretty hairy but it works
    const dictTypes = types.reduce((o, p) => ({ ...o, [p.name]: p }), {}) as TypeDictionary
    const stringType = new Domain.Interface('string', 'internal')
    const lookup = (key: string) => key === 'string' ? stringType : (dictTypes[key] as Domain.Interface)
    types.forEach(t => {
      if (!(t instanceof Domain.Interface)) return
      t.inherits = []
      for (const key of Object.keys(t.inheritsFromUnresolved)) {
        const refType = lookup(key)
        const ref = new Domain.ImplementsReference(refType)
        ref.closedGenerics = t.inheritsFromUnresolved[key]
        t.inherits.push(ref)
      }
    })
    this.types = types
    this.typeLookup = dictTypes

    const endpointReader = new EndpointReader(specVisitor.interfaces, specVisitor.restSpecMapping)
    this.endpoints = endpointReader.endpoints

    // Add the path properties to the respective RequestInterface
    for (const endpoint of this.endpoints) {
      const requestInterface = this.typeLookup[endpoint.typeMapping.request] as Domain.RequestInterface
      for (const routePart of endpoint.routeParts) {
        const property = new Domain.InterfaceProperty(
          routePart.name,
          new Domain.Type(routePart.type),
          true,
          routePart.required
        )
        requestInterface.path.push(property)
      }
    }
  }

  static load = () => new Specification(false);
  static loadWithValidation = () => new Specification(true);
}

export class EndpointReader {
  endpoints: Domain.Endpoint[];

  constructor (types: Domain.TypeDeclaration[], restSpecMapping: { [p: string]: RestSpecMapping }) {
    this.endpoints = _(glob.sync(path.join(__dirname, '..', 'specs', '**', '*.json')))
      .filter(f => !f.match(/tsconfig/))
      .filter(f => !f.match(/tslint/))
      .map(f => new Domain.Endpoint(f, restSpecMapping))
      // @ts-ignore
      .value()
  }
}
