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
@rest_spec_name('indices.stats')
@since('0.0.0')
class IndicesStatsRequest extends RequestBase {
  path_parts?: {
    metric?: Metrics
    index?: Indices
  }
  query_parameters?: {
    completion_fields?: Fields
    expand_wildcards?: ExpandWildcards
    fielddata_fields?: Fields
    fields?: Fields
    forbid_closed_indices?: boolean
    groups?: string | string[]
    include_segment_file_sizes?: boolean
    include_unloaded_segments?: boolean
    level?: Level
    types?: TypeNames
  }
  body?: {}
}
