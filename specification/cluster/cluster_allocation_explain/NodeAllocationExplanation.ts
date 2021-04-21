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

import { Id, Name } from '@_types/common'
import { TransportAddress } from '@_types/Networking'
import { integer } from '@_types/Numeric'
import { Dictionary } from '_spec_utils/Dictionary'
import { AllocationDecision } from './AllocationDecision'
import { AllocationStore } from './AllocationStore'
import { Decision } from './Decision'

export class NodeAllocationExplanation {
  deciders: AllocationDecision[]
  node_attributes: Dictionary<string, string>
  node_decision: Decision
  node_id: Id
  node_name: Name
  store?: AllocationStore
  transport_address: TransportAddress
  weight_ranking: integer
}
