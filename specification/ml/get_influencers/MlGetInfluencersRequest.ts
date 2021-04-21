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

import { RequestBase } from '@common/Base'
import { Field, Id } from '@common/common'
import { double } from '@common/Numeric'
import { DateString } from '@common/Time'
import { Page } from '@ml/Page'

/**
 * @rest_spec_name ml.get_influencers
 * @since 5.4.0
 * @stability TODO
 */
export interface MlGetInfluencersRequest extends RequestBase {
  path_parts: {
    job_id: Id
  }
  query_parameters?: {}
  body?: {
    descending?: boolean
    end?: DateString
    exclude_interim?: boolean
    influencer_score?: double
    page?: Page
    sort?: Field
    start?: DateString
  }
}
