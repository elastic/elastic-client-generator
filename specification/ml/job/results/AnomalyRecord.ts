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

import { double, EpochMillis, integer } from "../../../__common/common";
import { Time } from "../../../__common/common_options/time_unit/Time";
import { AnomalyCause } from "./AnomalyCause";
import { Influence } from "./Influence";

export class AnomalyRecord {
  actual?: double[];
  bucket_span: Time;
  by_field_name?: string;
  by_field_value?: string;
  causes?: AnomalyCause[];
  detector_index: integer;
  field_name?: string;
  function?: string;
  function_description?: string;
  influencers?: Influence[];
  initial_record_score: double;
  is_interim: boolean;
  job_id: string;
  over_field_name?: string;
  over_field_value?: string;
  partition_field_name?: string;
  partition_field_value?: string;
  probability: double;
  record_score: double;
  result_type: string;
  timestamp: EpochMillis;
  typical?: double[];
}
