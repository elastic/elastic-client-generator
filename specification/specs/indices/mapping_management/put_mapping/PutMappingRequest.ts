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

 /**
 * @rest_spec_name indices.put_mapping
 * @since 0.0.0
 * @stability TODO
 */
interface PutMappingRequest extends RequestBase {
  path_parts?: {
    index?: Indices
    type?: TypeName
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_unavailable?: boolean
    include_type_name?: boolean
    master_timeout?: Time
    timeout?: Time
  }
  body?: {
    all_field?: AllField
    date_detection?: boolean
    dynamic?: Union<boolean, DynamicMapping>
    dynamic_date_formats?: string[]
    dynamic_templates?:
      | Dictionary<string, DynamicTemplate>
      | Dictionary<string, DynamicTemplate>[]
    field_names_field?: FieldNamesField
    index_field?: IndexField
    meta?: Dictionary<string, UserDefinedValue>
    numeric_detection?: boolean
    properties?: Dictionary<PropertyName, PropertyBase>
    routing_field?: RoutingField
    size_field?: SizeField
    source_field?: SourceField
  }
}
