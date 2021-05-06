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

import { UnassignedInformation } from '@cluster/cluster_allocation_explain/UnassignedInformation'
import { ShardRoutingState } from '@indices/stats/ShardRoutingState'
import { NodeRoles } from '@nodes/nodes_info/NodeRole'
import { Dictionary } from '@spec_utils/Dictionary'
import { ErrorCause } from '@_types/Errors'
import { integer } from '@_types/Numeric'
import { Id, IndexName, Name, NodeName } from './common'
import { TransportAddress } from './Networking'

export class NodeStatistics {
  failures?: ErrorCause[]
  /** Total number of nodes selected by the request. */
  total: integer
  /** Number of nodes that responded successfully to the request. */
  successful: integer
  /** Number of nodes that rejected the request or failed to respond. If this value is not 0, a reason for the rejection or failure is included in the response. */
  failed: integer
}

export class NodeAttributes {
  /** Lists node attributes. */
  attributes: Dictionary<string, string>
  /** The ephemeral ID of the node. */
  ephemeral_id: Id
  /** The unique identifier of the node. */
  id?: Id
  /** The unique identifier of the node. */
  name: NodeName
  /** The host and port where transport HTTP connections are accepted. */
  transport_address: TransportAddress
  roles?: NodeRoles
}

export class NodeShard {
  state: ShardRoutingState
  primary: boolean
  node?: NodeName
  shard: integer
  index: IndexName
  allocation_id?: Dictionary<string, Id>
  recovery_source?: Dictionary<string, Id>
  unassigned_info?: UnassignedInformation
}
