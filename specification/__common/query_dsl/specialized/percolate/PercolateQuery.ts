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

import { Field, Id, IndexName, Routing, VersionNumber } from '@common/common'
import { QueryBase } from '@common/query_dsl/abstractions/query/Query'
import { UserDefinedValue } from '__spec_utils/UserDefinedValue'

export class PercolateQuery extends QueryBase {
  /** @prop_serializer SourceFormatter`1 */
  document?: UserDefinedValue
  /** @prop_serializer SourceFormatter`1 */
  documents?: UserDefinedValue[]
  field?: Field
  id?: Id
  index?: IndexName
  preference?: string
  routing?: Routing
  version?: VersionNumber
}
