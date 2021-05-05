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

import { double } from '@_types/Numeric'
import { DocValuesPropertyBase } from './core'

export class RangePropertyBase extends DocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  index?: boolean
}

export type RangeProperty =
  | LongRangeProperty
  | IpRangeProperty
  | IntegerRangeProperty
  | FloatRangeProperty
  | DoubleRangeProperty
  | DateRangeProperty

export class DateRangeProperty extends RangePropertyBase {
  format?: string
  type: 'date_range'
}

export class DoubleRangeProperty extends RangePropertyBase {
  type: 'double_range'
}

export class FloatRangeProperty extends RangePropertyBase {
  type: 'float_range'
}

export class IntegerRangeProperty extends RangePropertyBase {
  type: 'integer_range'
}

export class IpRangeProperty extends RangePropertyBase {
  type: 'ip_range'
}

export class LongRangeProperty extends RangePropertyBase {
  type: 'long_range'
}
