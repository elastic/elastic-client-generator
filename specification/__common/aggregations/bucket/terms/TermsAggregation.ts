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

import { SortOrder } from '../../../../__global/search/sort/SortOrder'
import { Dictionary } from '../../../../__spec_utils/Dictionary'
import { Field, integer } from '../../../common'
import { Script } from '../../../common_options/scripting/Script'
import { Missing } from '../../AggregationContainer'
import { BucketAggregationBase } from '../BucketAggregationBase'
import { TermsAggregationCollectMode } from './TermsAggregationCollectMode'
import { TermsAggregationExecutionHint } from './TermsAggregationExecutionHint'
import { TermsInclude } from './TermsInclude'

export class TermsAggregation extends BucketAggregationBase {
  collect_mode?: TermsAggregationCollectMode
  exclude?: string | string[]
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  include?: string | string[] | TermsInclude
  min_doc_count?: integer
  missing?: Missing
  missing_bucket?: boolean
  value_type?: string
  order?: TermsAggregationOrder
  script?: Script
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
}

export type TermsAggregationOrder =
  | SortOrder
  | Dictionary<string, SortOrder>
  | Dictionary<string, SortOrder>[]