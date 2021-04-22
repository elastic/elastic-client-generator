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

import { ResponseBase } from '@_types/Base'
import { NodeStatistics } from './NodeStatistics'

export class NodesResponseBase extends ResponseBase {
  /**
   * Contains statistics about the number of nodes selected by the request’s node filters.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster.html#cluster-nodes
   */
  _nodes: NodeStatistics
}
