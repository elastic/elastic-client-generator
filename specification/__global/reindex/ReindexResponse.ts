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

import { ResponseBase } from '@common/Base'
import { TaskId } from '@common/common'
import { BulkIndexByScrollFailure } from '@common/Errors'
import { integer, long } from '@common/Numeric'
import { Retries } from '@common/Retries'
import { EpochMillis, Time } from '@common/Time'

export class ReindexResponse extends ResponseBase {
  batches?: long
  created?: long
  deleted?: long
  failures?: BulkIndexByScrollFailure[]
  noops?: long
  retries?: Retries
  requests_per_second?: long
  slice_id?: integer
  task?: TaskId
  throttled_millis?: EpochMillis
  throttled_until_millis?: EpochMillis
  timed_out?: boolean
  took?: Time
  total?: long
  updated?: long
  version_conflicts?: long
}
