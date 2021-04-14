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

import { float, long } from '@common/common'
import { BoolQuery } from '@common/query_dsl/compound/bool/BoolQuery'
import { BoostingQuery } from '@common/query_dsl/compound/boosting/BoostingQuery'
import { ConstantScoreQuery } from '@common/query_dsl/compound/constant_score/ConstantScoreQuery'
import { DisMaxQuery } from '@common/query_dsl/compound/dismax/DisMaxQuery'
import { FunctionScoreQuery } from '@common/query_dsl/compound/function_score/FunctionScoreQuery'
import { CommonTermsQuery } from '@common/query_dsl/full_text/common_terms/CommonTermsQuery'
import { IntervalsQuery } from '@common/query_dsl/full_text/intervals/IntervalsQuery'
import { MatchQuery } from '@common/query_dsl/full_text/match/MatchQuery'
import { MatchBoolPrefixQuery } from '@common/query_dsl/full_text/match_bool_prefix/MatchBoolPrefixQuery'
import { MatchPhraseQuery } from '@common/query_dsl/full_text/match_phrase/MatchPhraseQuery'
import { MatchPhrasePrefixQuery } from '@common/query_dsl/full_text/match_phrase_prefix/MatchPhrasePrefixQuery'
import { MultiMatchQuery } from '@common/query_dsl/full_text/multi_match/MultiMatchQuery'
import { QueryStringQuery } from '@common/query_dsl/full_text/query_string/QueryStringQuery'
import { SimpleQueryStringQuery } from '@common/query_dsl/full_text/simple_query_string/SimpleQueryStringQuery'
import { GeoBoundingBoxQuery } from '@common/query_dsl/geo/bounding_box/GeoBoundingBoxQuery'
import { GeoDistanceQuery } from '@common/query_dsl/geo/distance/GeoDistanceQuery'
import { GeoPolygonQuery } from '@common/query_dsl/geo/polygon/GeoPolygonQuery'
import { GeoShapeQuery } from '@common/query_dsl/geo/shape/GeoShapeQuery'
import { HasChildQuery } from '@common/query_dsl/joining/has_child/HasChildQuery'
import { HasParentQuery } from '@common/query_dsl/joining/has_parent/HasParentQuery'
import { NestedQuery } from '@common/query_dsl/joining/nested/NestedQuery'
import { ParentIdQuery } from '@common/query_dsl/joining/parent_id/ParentIdQuery'
import { MatchAllQuery } from '@common/query_dsl/MatchAllQuery'
import { MatchNoneQuery } from '@common/query_dsl/MatchNoneQuery'
import { SpanContainingQuery } from '@common/query_dsl/span/containing/SpanContainingQuery'
import { SpanFieldMaskingQuery } from '@common/query_dsl/span/field_masking/SpanFieldMaskingQuery'
import { SpanFirstQuery } from '@common/query_dsl/span/first/SpanFirstQuery'
import { SpanMultiTermQuery } from '@common/query_dsl/span/multi_term/SpanMultiTermQuery'
import { SpanNearQuery } from '@common/query_dsl/span/near/SpanNearQuery'
import { SpanNotQuery } from '@common/query_dsl/span/not/SpanNotQuery'
import { SpanOrQuery } from '@common/query_dsl/span/or/SpanOrQuery'
import { SpanTermQuery } from '@common/query_dsl/span/term/SpanTermQuery'
import { SpanWithinQuery } from '@common/query_dsl/span/within/SpanWithinQuery'
import { DistanceFeatureQuery } from '@common/query_dsl/specialized/distance_feature/DistanceFeatureQuery'
import { MoreLikeThisQuery } from '@common/query_dsl/specialized/more_like_this/MoreLikeThisQuery'
import { PercolateQuery } from '@common/query_dsl/specialized/percolate/PercolateQuery'
import { PinnedQuery } from '@common/query_dsl/specialized/pinned/PinnedQuery'
import { RankFeatureQuery } from '@common/query_dsl/specialized/rank_feature/RankFeatureQuery'
import { ScriptQuery } from '@common/query_dsl/specialized/script/ScriptQuery'
import { ScriptScoreQuery } from '@common/query_dsl/specialized/script_score/ScriptScoreQuery'
import { ShapeQuery } from '@common/query_dsl/specialized/shape/ShapeQuery'
import { ExistsQuery } from '@common/query_dsl/term_level/exists/ExistsQuery'
import { FuzzyQuery } from '@common/query_dsl/term_level/fuzzy/FuzzyQuery'
import { IdsQuery } from '@common/query_dsl/term_level/ids/IdsQuery'
import { PrefixQuery } from '@common/query_dsl/term_level/prefix/PrefixQuery'
import { RangeQuery } from '@common/query_dsl/term_level/range/RangeQuery'
import { RegexpQuery } from '@common/query_dsl/term_level/regexp/RegexpQuery'
import { TermQuery } from '@common/query_dsl/term_level/term/TermQuery'
import { TermsQuery } from '@common/query_dsl/term_level/terms/TermsQuery'
import { TermsSetQuery } from '@common/query_dsl/term_level/terms_set/TermsSetQuery'
import { TypeQuery } from '@common/query_dsl/term_level/type/TypeQuery'
import { WildcardQuery } from '@common/query_dsl/term_level/wildcard/WildcardQuery'
import { SingleKeyDictionary } from '__spec_utils/Dictionary'
import { NamedQuery } from '../query/Query'
import { QueryTemplate } from './QueryTemplate'

export class QueryContainer {
  bool?: BoolQuery
  boosting?: BoostingQuery
  common?: SingleKeyDictionary<CommonTermsQuery | string>
  constant_score?: ConstantScoreQuery
  dis_max?: DisMaxQuery
  // TODO?: can be both { __field__ ?: { options } } and { field?: "" ...options }
  // very lenient parser on the server, never documented as such but used in yamltests as such
  distance_feature?:
    | SingleKeyDictionary<DistanceFeatureQuery | string>
    | DistanceFeatureQuery
  exists?: ExistsQuery
  function_score?: FunctionScoreQuery
  fuzzy?: SingleKeyDictionary<FuzzyQuery | string>
  geo_bounding_box?: NamedQuery<GeoBoundingBoxQuery | string>
  geo_distance?: NamedQuery<GeoDistanceQuery | string>
  geo_polygon?: NamedQuery<GeoPolygonQuery | string>
  geo_shape?: NamedQuery<GeoShapeQuery | string>
  has_child?: HasChildQuery
  has_parent?: HasParentQuery
  ids?: IdsQuery
  intervals?: NamedQuery<IntervalsQuery | string>
  is_conditionless?: boolean
  is_strict?: boolean
  is_verbatim?: boolean
  is_writable?: boolean
  match?: NamedQuery<MatchQuery | string | float | boolean>
  match_all?: MatchAllQuery
  match_bool_prefix?: NamedQuery<MatchBoolPrefixQuery | string>
  match_none?: MatchNoneQuery
  match_phrase?: NamedQuery<MatchPhraseQuery | string>
  match_phrase_prefix?: NamedQuery<MatchPhrasePrefixQuery | string>
  more_like_this?: MoreLikeThisQuery
  multi_match?: MultiMatchQuery
  nested?: NestedQuery
  parent_id?: ParentIdQuery
  percolate?: PercolateQuery
  pinned?: PinnedQuery
  prefix?: NamedQuery<PrefixQuery | string>
  query_string?: QueryStringQuery
  range?: NamedQuery<RangeQuery>
  rank_feature?: NamedQuery<RankFeatureQuery | string>
  regexp?: NamedQuery<RegexpQuery | string>
  script?: ScriptQuery
  script_score?: ScriptScoreQuery
  shape?: NamedQuery<ShapeQuery | string>
  simple_query_string?: SimpleQueryStringQuery
  span_containing?: SpanContainingQuery
  field_masking_span?: SpanFieldMaskingQuery
  span_first?: SpanFirstQuery
  span_multi?: SpanMultiTermQuery
  span_near?: SpanNearQuery
  span_not?: SpanNotQuery
  span_or?: SpanOrQuery
  span_term?: NamedQuery<SpanTermQuery | string>
  span_within?: SpanWithinQuery
  template?: QueryTemplate
  term?: NamedQuery<TermQuery | string | float | boolean>
  terms?: NamedQuery<TermsQuery | string[] | long[]>
  terms_set?: NamedQuery<TermsSetQuery | string>
  wildcard?: NamedQuery<WildcardQuery | string>

  /**
   * @obsolete 7.0.0
   * @obsolete_description https://www.elastic.co/guide/en/elasticsearch/reference/7.x/removal-of-types.html
   */
  type?: TypeQuery
}
