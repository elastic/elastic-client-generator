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
 * @type_stability stable
 */
@class_serializer('MultiGetResponseFormatter')
class MultiGetResponse<TDocument> extends ResponseBase {
  docs: MultiGetHit<TDocument>[]
}

class MultiGetHit<TDocument> {
  error?: MainError
  fields?: Dictionary<string, LazyDocument>
  found?: boolean
  _id: string
  _index: string
  _primary_term?: long
  _routing?: Routing
  _seq_no?: long
  _source?: TDocument
  _type?: TypeName
  _version?: long
}
