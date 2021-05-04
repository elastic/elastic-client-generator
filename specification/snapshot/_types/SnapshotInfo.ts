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

import { Dictionary } from '@spec_utils/Dictionary'
import { IndexName, Metadata, Name, Uuid, VersionNumber, VersionString } from '@_types/common'
import { ShardStatistics } from '@_types/Stats'
import { EpochMillis, Time } from '@_types/Time'
import { SnapshotIndexDetails } from './SnapshotIndexDetails'
import { SnapshotInfoFeatureState } from './SnapshotInfoFeatureState'
import { SnapshotShardFailure } from './SnapshotShardFailure'

export class SnapshotInfo {
  data_streams: Array<string>
  duration?: Time
  duration_in_millis?: EpochMillis
  end_time?: Time
  end_time_in_millis?: EpochMillis
  failures?: SnapshotShardFailure[]
  include_global_state?: boolean
  indices: IndexName[]
  /** @since 7.13.0 */
  index_details?: Dictionary<IndexName, SnapshotIndexDetails>
  metadata?: Metadata
  reason?: string
  snapshot: Name
  shards?: ShardStatistics
  start_time?: Time
  start_time_in_millis?: EpochMillis
  state?: string
  uuid: Uuid
  version?: VersionString
  version_id?: VersionNumber
  feature_states?: SnapshotInfoFeatureState[]
}
