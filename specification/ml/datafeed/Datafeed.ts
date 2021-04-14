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
import { Id, Indices, integer, Timestamp } from "../../__common/common";
import { ScriptField } from "../../__common/common_options/scripting/ScriptField";
import { Time } from "../../__common/common_options/time_unit/Time";
import { RuntimeFields } from "../../__common/mapping/runtime_fields/RuntimeFields";
import { QueryContainer } from "../../__common/query_dsl/abstractions/container/QueryContainer";
import { Dictionary } from "../../__spec_utils/Dictionary";
import { DatafeedIndicesOptions } from "../update_data_feed/DatafeedIndicesOptions";
import { ChunkingConfig } from "./ChunkingConfig";

export class Datafeed {
  aggregations?: Dictionary<string, AggregationContainer>;
  aggs?: Dictionary<string, AggregationContainer>;
  chunking_config?: ChunkingConfig;
  datafeed_id: Id;
  frequency?: Timestamp;
  indices: Indices;
  indexes?: string[];
  job_id: Id;
  max_empty_searches?: integer;
  query: QueryContainer;
  query_delay?: Timestamp;
  script_fields?: Dictionary<string, ScriptField>;
  scroll_size?: integer;
  delayed_data_check_config: DelayedDataCheckConfig;
  runtime_mappings?: RuntimeFields;
  indices_options?: DatafeedIndicesOptions;
}

export class DelayedDataCheckConfig {
  check_window?: Time; // default: null
  enabled: boolean; // default: true
}
