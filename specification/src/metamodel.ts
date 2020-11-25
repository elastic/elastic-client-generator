
/**
 * The name of a type, composed of a simple name and a namespace. Hierarchical namespace elements are separated by
 * a dot, e.g 'cat.cat_aliases'.
 *
 * Builtin namespaces:
 * - "generic" for type names that are generic parameter values from the enclosing type.
 * - "internal" for primitive and builtin types (e.g. Id, IndexName, etc)
 */
export class TypeName {
  namespace: string;
  name: string;
}

// ------------------------------------------------------------------------------------------------
// Value types

// Note: "required" is part of Property. This means we can have optional properties but we can't have null entries in
// containers (array and dictionary), which doesn't seem to be needed.
//
// About the '_kind' property used to tag union type members:
// https://blog.logrocket.com/pattern-matching-and-type-safety-in-typescript-1da1231a2e34/
// https://medium.com/@fillopeter/pattern-matching-with-typescript-done-right-94049ddd671c

/**
 * Type of a value. Used both for property types and nested type definitions.
 */
export type ValueOf = InstanceOf | ArrayOf | UnionOf | DictionaryOf | NamedValueOf

/**
 * A single value
 */
export class InstanceOf {
  _kind: "instance";
  type: TypeName;
  // generic parameters: either concrete types or open parameters from the enclosing type
  generics?: ValueOf[];
}

/**
 * An array
 */
export class ArrayOf {
  _kind: "array";
  value: ValueOf;
}

/**
 * One of several possible types which don't necessarily have a common superclass
 */
export class UnionOf {
  _kind: "union";
  items: ValueOf[];
}

/**
 * A dictionary (or map)
 */
export class DictionaryOf {
  _kind: "dictionary";
  key: ValueOf;
  value: ValueOf;
}

/**
 * A named value. This is a common pattern in ES APIs that deserves its own representation. It's often used to
 * associate some value to a field name, e.g. the "sort" field in search.
 */
export class NamedValueOf {
  _kind: "named_value";
  value: ValueOf;
}

// ------------------------------------------------------------------------------------------------

/**
 * An interface or request interface property.
 */
export class Property {
  name: string;
  type: ValueOf;
  required: boolean;
  description?: string;
  annotations?: Record<string, string>;
}

// ------------------------------------------------------------------------------------------------
// Type definitions

export type TypeDefinition = Interface | RequestInterface | Union | Enum | TypeAlias;

/**
 * Common attributes for all type definitions
 */
abstract class BaseType {
  name: TypeName;
  description?: string;
  annotations?: Record<string, string>;
}

/**
 * Inherits clause (aka extends or implements) for an interface or request
 */
export class Inherits {
  type: TypeName;
  generics?: ValueOf[];
}

/**
 * An interface type
 */
export class Interface extends BaseType {
  _kind: "interface";
  generics?: string[];
  inherits?: Inherits[];
  properties: Property[];
}

/**
 * A request type
 */
export class RequestInterface extends BaseType {
  // Note: does not extend Interface as properties are split across path, query and body
  _kind: "request";
  generics?: string[];
  inherits?: Inherits[];
  /** URL path properties */
  path: Property[];
  /** Query string properties */
  query: Property[];
  // FIXME: we need an annotation that lists query params replaced by a body property so that we can skip them.
  // Examples on _search: sort -> sort, _source -> (_source, _source_include, _source_exclude)
  // Or can we say that implicitly a body property replaces all path params starting with its name?
  // Is there a priority rule between path and body parameters?
  //
  // We can also pull path parameter descriptions on body properties they replace

  /**
   * Body type. In most cases this is just a list of properties, except for a few specific cases like bulk requests
   * (an array of bulk operations) or create requests (a user provided document type).
   */
  body?: ValueOf | Property[];
}

/**
 * A union type, containing a list of type references.
 *
 * As type references can themselves be unions (see `UnionOf`) a code generator will likely have to flatten a union or
 * a unionOf in a single list of type references.
 */
export class Union extends BaseType {
  _kind: "union";
  items: ValueOf[];
}

/**
 * An enumeration member.
 */
export class EnumMember {
  name: string;
  description?: string;
  // See DateMathTimeUnit - could we use string enums for this?
  stringValue: string;
  annotations?: Record<string, string>;
}

/**
 * An enumeration
 */
export class Enum extends BaseType {
  _kind: "enum";
  members: EnumMember[];
}

/**
 * An alias for an existing type.
 */
export class TypeAlias extends BaseType {
  _kind: "alias";
  type: ValueOf
}

// ------------------------------------------------------------------------------------------------

export enum Stability {
  stable = "stable",
  beta = "beta",
  experimental = "experimental"
  // NOTE: do we filter out "private"?
}

export class Deprecation {
  version: string;
  description: string;
}

export class Endpoint {
  name: string;
  description: string;
  docUrl: string;
  stability: Stability;
  deprecation: Deprecation

  request: TypeName;
  requestBodyRequired: boolean; // Not sure this is useful

  response: TypeName;

  urls: UrlTemplate[];
}

export class UrlTemplate {
  path: string;
  methods: string[];
  deprecation?: Deprecation;
}

export class Model {
  types: TypeDefinition[];
  endpoints: Endpoint[];
}
