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

import { Field, Fields } from '@common/common'
import { integer } from '@common/Numeric'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'
import { BoundaryScanner } from './BoundaryScanner'
import { HighlighterFragmenter } from './HighlighterFragmenter'
import { HighlighterOrder } from './HighlighterOrder'
import { HighlighterTagsSchema } from './HighlighterTagsSchema'
import { HighlighterType } from './HighlighterType'

export class HighlightField {
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: BoundaryScanner
  boundary_scanner_locale?: string
  //TODO I THINK this field does not exist
  field?: Field
  force_source?: boolean
  fragmenter?: HighlighterFragmenter
  fragment_offset?: integer
  fragment_size?: integer
  highlight_query?: QueryContainer
  matched_fields?: Fields
  max_fragment_length?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  order?: HighlighterOrder
  phrase_limit?: integer
  post_tags?: string[]
  pre_tags?: string[]
  require_field_match?: boolean
  tags_schema?: HighlighterTagsSchema
  type?: HighlighterType | string
}
