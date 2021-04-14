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

import { LifecycleOperationMode } from '../ilm/get_status/LifecycleOperationMode'
import { Phases } from '../ilm/Phases'
import { DateString, IndexName, long, VersionNumber } from '../__common/common'
import { Dictionary } from '../__spec_utils/Dictionary'

export class ClusterStateIndexLifecycle {
  policies: Dictionary<IndexName, ClusterStateIndexLifecycleSummary>
  operation_mode: LifecycleOperationMode
}

export class ClusterStateIndexLifecycleSummary {
  policy: ClusterStateIndexLifecyclePolicy
  headers: Dictionary<string, string>
  version: VersionNumber
  modified_date: long
  modified_date_string: DateString
}

export class ClusterStateIndexLifecyclePolicy {
  phases: Phases
}
