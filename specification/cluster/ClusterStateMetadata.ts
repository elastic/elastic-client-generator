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

import {
  DateString,
  Id,
  IndexName,
  integer,
  long,
  Name,
  Uuid
} from '../__common/common'
import { Dictionary } from '../__spec_utils/Dictionary'
import { UserDefinedValue } from '../__spec_utils/UserDefinedValue'
import { ClusterStateBlockIndex } from './ClusterStateBlocks'
import { ClusterStateIndexLifecycle } from './ClusterStateIndexLifecycle'
import { ClusterStateIngest } from './ClusterStateIngest'

export class ClusterStateMetadata {
  cluster_uuid: Uuid
  cluster_uuid_committed: boolean
  templates: ClusterStateMetadataTemplate
  indices?: Dictionary<IndexName, ClusterStateBlockIndex>
  'index-graveyard': ClusterStateMetadataIndexGraveyard
  cluster_coordination: ClusterStateMetadataClusterCoordination
  ingest?: ClusterStateIngest
  repositories?: Dictionary<string, string>
  component_template?: Dictionary<string, UserDefinedValue>
  index_template?: Dictionary<string, UserDefinedValue>
  index_lifecycle?: ClusterStateIndexLifecycle
}

export class ClusterStateMetadataIndexGraveyard {
  tombstones: Tombstone[]
}

export class Tombstone {
  index: TombstoneIndex
  delete_date?: DateString
  delete_date_in_millis: long
}

export class TombstoneIndex {
  index_name: Name
  index_uuid: Uuid
}

export class ClusterStateMetadataTemplate {
  // TODO: check server code for validation
}

export class ClusterStateMetadataClusterCoordination {
  term: integer
  last_committed_config: string[]
  last_accepted_config: string[]
  voting_config_exclusions: VotingConfigExclusionsItem[]
}

export class VotingConfigExclusionsItem {
  node_id: Id
  node_name: Name
}
