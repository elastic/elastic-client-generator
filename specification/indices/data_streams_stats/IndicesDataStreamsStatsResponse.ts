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

import { ResponseBase } from '@_types/Base'
import { ByteSize, Name } from '@_types/common'
import { integer } from '@_types/Numeric'
import { ShardStatistics } from '@_types/Stats'

export class Response {
  body: {
    _shards: ShardStatistics
    backing_indices: integer
    data_stream_count: integer
    total_store_sizes?: ByteSize
    total_store_size_bytes: integer
    data_streams: DataStreamsStatsItem[]
  }
}

export class DataStreamsStatsItem {
  backing_indices: integer
  data_stream: Name
  store_size?: ByteSize
  store_size_bytes: integer
  maximum_timestamp: integer
}
