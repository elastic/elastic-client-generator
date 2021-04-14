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

import { Id, long } from '../../__common/common'
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase'
import { Time } from '../../__common/common_options/time_unit/Time'
import { Dictionary } from '../../__spec_utils/Dictionary'
import { UserDefinedValue } from '../../__spec_utils/UserDefinedValue'
import { AnalysisMemoryLimit } from '../job/config/AnalysisMemoryLimit'
import { ModelPlotConfigEnabled } from '../job/config/ModelPlotConfigEnabled'

/**
 * @rest_spec_name ml.update_job
 * @since 5.4.0
 * @stability TODO
 */
export interface UpdateJobRequest extends RequestBase {
  path_parts?: {
    job_id: Id
  }
  query_parameters?: {}
  body?: {
    allow_lazy_open?: boolean
    analysis_limits?: AnalysisMemoryLimit
    background_persist_interval?: Time
    custom_settings?: Dictionary<string, UserDefinedValue>
    description?: string
    model_plot_config?: ModelPlotConfigEnabled
    model_snapshot_retention_days?: long
    renormalization_window_days?: long
    results_retention_days?: long
    groups?: string[]
  }
}