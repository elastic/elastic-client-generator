/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {Specification} from "../../specification/src/api-specification";
import {Path, Schema, Operation, Response, Parameter} from "swagger-schema-official";
import {Endpoint, QueryStringParameter, RoutePart, UrlPath} from "../../specification/src/domain";

export type Paths = { [p: string]: Path};

export class SwaggerEndpointBuilder {

  constructor(private specification: Specification) { }

  build(): Paths {
    return this.specification.endpoints
      .map(e => e.url.paths.map(p => ({ endpoint: e, path: p})))
      .reduce((a, paths) => a.concat(paths), [])
      .reduce((o, e) => ({...o, [e.path.path]: SwaggerEndpointBuilder.createPath(e.endpoint, e.path)}), {});
  }

  private static createPath(e: Endpoint, url: UrlPath): Path {
    const path: Path = {
      parameters: e.queryStringParameters
        .map(SwaggerEndpointBuilder.urlQueryStringToParameter)
    };

    if (e.body)
      path.parameters.push(SwaggerEndpointBuilder.urlBodyToParameter(e));

    return url.methods
      .map(m => m.toLowerCase())
      .reduce((o, m) => ({...o, [m]: SwaggerEndpointBuilder.createOperation(e, url)}), path);
  }

  private static createOperation(endpoint: Endpoint, url: UrlPath): Operation {
    const defaultContentTypes = ["application/json"];
    return {
      responses: SwaggerEndpointBuilder.getResponses(endpoint),
      tags: [endpoint.name],
      consumes: defaultContentTypes,
      produces: defaultContentTypes,
      parameters: url.parts
        .map(SwaggerEndpointBuilder.urlPartToParameter),
      externalDocs: endpoint.documentation ? {url: endpoint.documentation.url || ""} : null
    };
  }

  private static urlBodyToParameter(e: Endpoint) {
    return {
      in: "body",
      name: "request",
      description: e.body ? e.body.description : null,
      required: e.body ? e.body.required : false,
      schema: {$ref: "#/definitions/" + e.typeMapping.request }
    };
  }

  private static urlQueryStringToParameter(query: QueryStringParameter) {
    const q = {
      in: "query",
      name: query.name,
      description: query.description
    };
    return SwaggerEndpointBuilder.amendSchema(q, query.type);
  }
  private static urlPartToParameter(part: RoutePart) {
    const p = {
          in: "path",
          name: part.name,
          required: true,
          description: part.description
    };
    return SwaggerEndpointBuilder.amendSchema(p, part.type);
  }
  private static amendSchema(p: Parameter, type: string): Parameter {
    const schema = SwaggerEndpointBuilder.toSchema(type);
    return { ...p, ... schema } as Parameter;
  }

  private static getValidResponse(e): Response {
    let schema = e.typeMapping.response;
    if (schema.startsWith("Cat"))
      schema += "/properties/records";

    return {
      description: "Request accepted and processed response",
      schema: {$ref: "#/definitions/" + schema}
    };
  }

  private static getResponses(e): { [responseName: string]: Response } {
    return {
      200: SwaggerEndpointBuilder.getValidResponse(e)
    };
  }

  private static toSchema(type: string): Schema {
    if (type === "boolean") return { type: "boolean" };
    if (type === "string") return { type: "string" };
    switch (type) {
      case "Uri" : return { type: "string", format: "uri" };
      case "Date" : return { type: "string", format: "date-time" };
      case "Time" : return { type: "string", format: "time" };
      case "TimeSpan" : return { type: "string", format: "time" };
      case "SourceDocument" : return { type: "object" };
      case "short":
      case "byte":
      case "integer" :
      case "long" :
        return { type: "integer", format: type };
      case "float" :
      case "double" :
        return { type: "number", format: type};
    }
    return { type: "string", format: type };
    // $ref is valid here but swagger UI barfs.
    // return {$ref: "#/definitions/" + type};
  }
}
