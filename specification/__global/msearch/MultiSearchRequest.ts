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

import { AggregationContainer } from "../../__common/aggregations/AggregationContainer";
import { Indices, integer, long, Types } from "../../__common/common";
import { ExpandWildcards } from "../../__common/common/ExpandWildcards";
import { SearchType } from "../../__common/common/SearchType";
import { RequestBase } from "../../__common/common_abstractions/request/RequestBase";
import { QueryContainer } from "../../__common/query_dsl/abstractions/container/QueryContainer";
import { Dictionary } from "../../__spec_utils/Dictionary";
import { PointInTimeReference } from "../search/point_in_time/PointInTimeReference";
import { SuggestContainer } from "../search/suggesters/SuggestContainer";

/**
 * @rest_spec_name msearch
 * @since 0.0.0
 *
 * @stability TODO
 */
export interface MultiSearchRequest extends RequestBase {
  path_parts?: {
    index?: Indices;
    type?: Types;
  };
  query_parameters?: {
    ccs_minimize_roundtrips?: boolean;
    max_concurrent_searches?: long;
    max_concurrent_shard_requests?: long;
    pre_filter_shard_size?: long;
    search_type?: SearchType;
    rest_total_hits_as_int?: boolean;
    typed_keys?: boolean;
  };
  body?: Array<MultiSearchHeader | MultiSearchBody>;
}

export class MultiSearchHeader {
  allow_no_indices?: boolean;
  expand_wildcards?: ExpandWildcards;
  ignore_unavailable?: boolean;
  index?: Indices;
  preference?: string;
  request_cache?: boolean;
  routing?: string;
  search_type?: SearchType;
}

// Might contain the same parameters of SearchRequest['body'], but there are inconsistencies
// https://github.com/elastic/elasticsearch/issues/4227
export class MultiSearchBody {
  aggregations?: Dictionary<string, AggregationContainer>;
  aggs?: Dictionary<string, AggregationContainer>;
  query?: QueryContainer;
  from?: integer;
  size?: integer;
  pit?: PointInTimeReference;
  track_total_hits?: boolean | integer;
  suggest?: SuggestContainer | Dictionary<string, SuggestContainer>;
}
