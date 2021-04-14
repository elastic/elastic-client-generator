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

import { JobStatistics } from '../../../xpack/x_pack_usage/JobStatistics'
import { integer, long } from '../../../__common/common'
import { Dictionary } from '../../../__spec_utils/Dictionary'

export class JobForecastStatistics {
  memory_bytes?: JobStatistics
  processing_time_ms?: JobStatistics
  records?: JobStatistics
  status?: Dictionary<string, long>
  total: long
  forecasted_jobs: integer
}