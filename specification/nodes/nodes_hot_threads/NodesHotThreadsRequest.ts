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

import { long, NodeIds } from '../../__common/common'
import { ThreadType } from '../../__common/common/ThreadType'
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase'
import { Time } from '../../__common/common_options/time_unit/Time'

/**
 * @rest_spec_name nodes.hot_threads
 * @since 0.0.0
 * @stability TODO
 */
export interface NodesHotThreadsRequest extends RequestBase {
  path_parts?: {
    node_id?: NodeIds
  }
  query_parameters?: {
    ignore_idle_threads?: boolean
    interval?: Time
    snapshots?: long
    threads?: long
    thread_type?: ThreadType
    timeout?: Time
  }
  body?: {}
}