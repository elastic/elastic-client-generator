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

export enum Bytes {
  b = 0,
  k = 1,
  kb = 2,
  m = 3,
  mb = 4,
  g = 5,
  gb = 6,
  t = 7,
  tb = 8,
  p = 9,
  pb = 10
}

/**
 * Whenever the byte size of data needs to be specified, e.g. when setting a buffer size parameter, the value must specify the unit, like 10kb for 10 kilobytes. Note that these units use powers of 1024, so 1kb means 1024 bytes.
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html#byte-units
 */
//type ByteSize = long | string
// TODO -- move here
