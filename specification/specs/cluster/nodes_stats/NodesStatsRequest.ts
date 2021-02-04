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

@rest_spec_name('nodes.stats')
class NodesStatsRequest extends RequestBase {
  path_parts?: {
    node_id?: NodeIds
    metric?: Metrics
    index_metric?: Metrics
  }
  query_parameters?: {
    completion_fields?: Field[]
    fielddata_fields?: Field[]
    fields?: Field[]
    groups?: boolean
    include_segment_file_sizes?: boolean
    level?: Level
    timeout?: Time
    types?: string[]
  }
  body?: {}
}
