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

import { IndexStats } from '../../indices/stats/IndexStats'
import { long } from '../../__common/common'
import { Dictionary } from '../../__spec_utils/Dictionary'
import { NodeRole } from '../nodes_info/NodeRole'
import { AdaptiveSelectionStats } from './AdaptiveSelectionStats'
import { BreakerStats } from './BreakerStats'
import { FileSystemStats } from './FileSystemStats'
import { HttpStats } from './HttpStats'
import { NodeJvmStats } from './NodeJvmStats'
import { OperatingSystemStats } from './OperatingSystemStats'
import { ProcessStats } from './ProcessStats'
import { ScriptStats } from './ScriptStats'
import { NodeIngestStats } from './statistics/NodeIngestStats'
import { ThreadCountStats } from './ThreadCountStats'
import { TransportStats } from './TransportStats'

export class NodeStats {
  adaptive_selection: Dictionary<string, AdaptiveSelectionStats>
  breakers: Dictionary<string, BreakerStats>
  fs: FileSystemStats
  host: string
  http: HttpStats
  indices: IndexStats
  ingest: NodeIngestStats
  ip: string[]
  jvm: NodeJvmStats
  name: string
  os: OperatingSystemStats
  process: ProcessStats
  roles: NodeRole[]
  script: ScriptStats
  thread_pool: Dictionary<string, ThreadCountStats>
  timestamp: long
  transport: TransportStats
  transport_address: string
}
