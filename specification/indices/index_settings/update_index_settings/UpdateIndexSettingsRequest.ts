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

import { Indices, integer } from '../../../__common/common'
import { ExpandWildcards } from '../../../__common/common/ExpandWildcards'
import { RequestBase } from '../../../__common/common_abstractions/request/RequestBase'
import { Time } from '../../../__common/common_options/time_unit/Time'
import { Dictionary } from '../../../__spec_utils/Dictionary'
import { UserDefinedValue } from '../../../__spec_utils/UserDefinedValue'

/**
 * @rest_spec_name indices.put_settings
 * @since 0.0.0
 *
 * @stability TODO
 */
export interface UpdateIndexSettingsRequest extends RequestBase {
  path_parts?: {
    index?: Indices
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    flat_settings?: boolean
    ignore_unavailable?: boolean
    master_timeout?: Time
    preserve_existing?: boolean
    timeout?: Time
  }
  body?: {
    index?: Dictionary<string, UserDefinedValue>
    refresh_interval?: Time
    number_of_replicas?: integer
  }
}
