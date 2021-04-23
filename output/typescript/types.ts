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

export type SecurityAccessTokenGrantType = 'password' | 'client_credentials' | '_kerberos' | 'refresh_token'

export interface WatcherAckWatchAcknowledgeState {
  state: WatcherAckWatchAcknowledgementState
  timestamp: DateString
}

export interface AcknowledgedResponseBase extends ResponseBase {
  acknowledged: boolean
}

export type WatcherAckWatchAcknowledgementState = 'awaits_successful_execution' | 'ackable' | 'acked'

export interface WatcherAction {
  action_type?: WatcherActionType
  condition?: WatcherConditionContainer
  foreach?: string
  max_iterations?: integer
  name?: string
  throttle_period?: Time
  throttle_period_in_millis?: EpochMillis
  transform?: WatcherTransformContainer
  index?: WatcherActionIndex
  logging?: WatcherLoggingAction
}

export type WatcherActionExecutionMode = 'simulate' | 'force_simulate' | 'execute' | 'force_execute' | 'skip'

export type WatcherExecuteWatchActionExecutionState = 'awaits_execution' | 'checking' | 'execution_not_needed' | 'throttled' | 'executed' | 'failed' | 'deleted_while_queued' | 'not_executed_already_queued'

export interface WatcherActionIndex {
  index: IndexName
  doc_id?: Id
}

export interface WatcherAckWatchActionStatus {
  ack: WatcherAckWatchAcknowledgeState
  last_execution?: WatcherAckWatchExecutionState
  last_successful_execution?: WatcherAckWatchExecutionState
  last_throttle?: WatcherAckWatchThrottleState
}

export type WatcherActionType = 'email' | 'webhook' | 'index' | 'logging' | 'slack' | 'pagerduty'

export interface WatcherAckWatchActivationState {
  active: boolean
  timestamp: Timestamp
}

export interface WatcherActivateWatchActivationStatus {
  actions: Record<IndexName, WatcherAckWatchActionStatus>
  state: WatcherAckWatchActivationState
  version: VersionNumber
}

export interface NodesNodesStatsAdaptiveSelectionStats {
  avg_queue_size: long
  avg_response_time: long
  avg_response_time_ns: long
  avg_service_time: string
  avg_service_time_ns: long
  outgoing_searches: long
  rank: string
}

export interface AggregationsBucketAdjacencyMatrixAdjacencyMatrixAggregation extends AggregationsBucketBucketAggregationBase {
  filters?: Record<string, QueryDslAbstractionsContainerQueryContainer>
}

export type AggregationsAggregate = AggregationsSingleBucketAggregate | AggregationsAutoDateHistogramAggregate | AggregationsFiltersAggregate | AggregationsSignificantTermsAggregate<any> | AggregationsTermsAggregate<any> | AggregationsBucketAggregate | AggregationsCompositeBucketAggregate | AggregationsMultiBucketAggregate<AggregationsBucket> | AggregationsMatrixStatsAggregate | AggregationsKeyedValueAggregate | AggregationsMetricAggregate

export interface AggregationsAggregateBase {
  meta?: Record<string, any>
}

export type AggregateName = string

export interface AggregationsAggregation {
  meta?: Record<string, any>
  name?: string
}

export interface SearchProfileAggregationBreakdown {
  build_aggregation: long
  build_aggregation_count: long
  build_leaf_collector: long
  build_leaf_collector_count: long
  collect: long
  collect_count: long
  initialize: long
  initialize_count: long
  post_collection?: long
  post_collection_count?: long
  reduce: long
  reduce_count: long
}

export interface AggregationsAggregationContainer {
  aggs?: Record<string, AggregationsAggregationContainer>
  meta?: Record<string, any>
  adjacency_matrix?: AggregationsBucketAdjacencyMatrixAdjacencyMatrixAggregation
  aggregations?: Record<string, AggregationsAggregationContainer>
  auto_date_histogram?: AggregationsBucketAutoDateHistogramAutoDateHistogramAggregation
  avg?: AggregationsMetricAverageAverageAggregation
  avg_bucket?: AggregationsPipelineAverageBucketAverageBucketAggregation
  boxplot?: AggregationsMetricBoxplotBoxplotAggregation
  bucket_script?: AggregationsPipelineBucketScriptBucketScriptAggregation
  bucket_selector?: AggregationsPipelineBucketSelectorBucketSelectorAggregation
  bucket_sort?: AggregationsPipelineBucketSortBucketSortAggregation
  cardinality?: AggregationsMetricCardinalityCardinalityAggregation
  children?: AggregationsBucketChildrenChildrenAggregation
  composite?: AggregationsBucketCompositeCompositeAggregation
  cumulative_cardinality?: AggregationsPipelineCumulativeCardinalityCumulativeCardinalityAggregation
  cumulative_sum?: AggregationsPipelineCumulativeSumCumulativeSumAggregation
  date_histogram?: AggregationsBucketDateHistogramDateHistogramAggregation
  date_range?: AggregationsBucketDateRangeDateRangeAggregation
  derivative?: AggregationsPipelineDerivativeDerivativeAggregation
  diversified_sampler?: AggregationsBucketDiversifiedSamplerDiversifiedSamplerAggregation
  extended_stats?: AggregationsMetricExtendedStatsExtendedStatsAggregation
  extended_stats_bucket?: AggregationsPipelineExtendedStatsBucketExtendedStatsBucketAggregation
  filter?: QueryDslAbstractionsContainerQueryContainer
  filters?: AggregationsBucketFiltersFiltersAggregation
  geo_bounds?: AggregationsMetricGeoBoundsGeoBoundsAggregation
  geo_centroid?: AggregationsMetricGeoCentroidGeoCentroidAggregation
  geo_distance?: AggregationsBucketGeoDistanceGeoDistanceAggregation
  geohash_grid?: AggregationsBucketGeoHashGridGeoHashGridAggregation
  geo_line?: AggregationsMetricGeoLineGeoLineAggregation
  geotile_grid?: AggregationsBucketGeoTileGridGeoTileGridAggregation
  global?: AggregationsBucketGlobalGlobalAggregation
  histogram?: AggregationsBucketHistogramHistogramAggregation
  ip_range?: AggregationsBucketIpRangeIpRangeAggregation
  inference?: AggregationsPipelineInferenceBucketInferenceAggregation
  line?: AggregationsMetricGeoLineGeoLineAggregation
  matrix_stats?: AggregationsMatrixMatrixStatsMatrixStatsAggregation
  max?: AggregationsMetricMaxMaxAggregation
  max_bucket?: AggregationsPipelineMaxBucketMaxBucketAggregation
  median_absolute_deviation?: AggregationsMetricMedianAbsoluteDeviationMedianAbsoluteDeviationAggregation
  min?: AggregationsMetricMinMinAggregation
  min_bucket?: AggregationsPipelineMinBucketMinBucketAggregation
  missing?: AggregationsBucketMissingMissingAggregation
  moving_avg?: AggregationsPipelineMovingAverageMovingAverageAggregation
  moving_percentiles?: AggregationsPipelineMovingPercentilesMovingPercentilesAggregation
  moving_fn?: AggregationsPipelineMovingFunctionMovingFunctionAggregation
  multi_terms?: AggregationsBucketMultiTermsMultiTermsAggregation
  nested?: AggregationsBucketNestedNestedAggregation
  normalize?: AggregationsPipelineNormalizeNormalizeAggregation
  parent?: AggregationsBucketParentParentAggregation
  percentile_ranks?: AggregationsMetricPercentileRanksPercentileRanksAggregation
  percentiles?: AggregationsMetricPercentilesPercentilesAggregation
  percentiles_bucket?: AggregationsPipelinePercentilesBucketPercentilesBucketAggregation
  range?: AggregationsBucketRangeRangeAggregation
  rare_terms?: AggregationsBucketRareTermsRareTermsAggregation
  rate?: AggregationsMetricRateRateAggregation
  reverse_nested?: AggregationsBucketReverseNestedReverseNestedAggregation
  sampler?: AggregationsBucketSamplerSamplerAggregation
  scripted_metric?: AggregationsMetricScriptedMetricScriptedMetricAggregation
  serial_diff?: AggregationsPipelineSerialDifferencingSerialDifferencingAggregation
  significant_terms?: AggregationsBucketSignificantTermsSignificantTermsAggregation
  significant_text?: AggregationsBucketSignificantTextSignificantTextAggregation
  stats?: AggregationsMetricStatsStatsAggregation
  stats_bucket?: AggregationsPipelineStatsBucketStatsBucketAggregation
  string_stats?: AggregationsMetricStringStatsStringStatsAggregation
  sum?: AggregationsMetricSumSumAggregation
  sum_bucket?: AggregationsPipelineSumBucketSumBucketAggregation
  terms?: AggregationsBucketTermsTermsAggregation
  top_hits?: AggregationsMetricTopHitsTopHitsAggregation
  t_test?: AggregationsMetricTTestTTestAggregation
  top_metrics?: AggregationsMetricTopMetricsTopMetricsAggregation
  value_count?: AggregationsMetricValueCountValueCountAggregation
  weighted_avg?: AggregationsMetricWeightedAverageWeightedAverageAggregation
  variable_width_histogram?: AggregationsBucketVariableWidthHistogramVariableWidthHistogramAggregation
}

export interface SearchProfileAggregationProfile {
  breakdown: SearchProfileAggregationBreakdown
  description: string
  time_in_nanos: long
  type: string
  debug?: SearchProfileAggregationProfileDebug
  children?: SearchProfileAggregationProfileDebug[]
}

export interface SearchProfileAggregationProfileDebug {
}

export interface AggregationsBucketRangeAggregationRange {
  from?: double | string
  key?: string
  to?: double | string
}

export interface IndicesAlias {
  filter?: QueryDslAbstractionsContainerQueryContainer
  index_routing?: Routing
  is_hidden?: boolean
  is_write_index?: boolean
  routing?: Routing
  search_routing?: Routing
}

export interface IndicesAliasDefinition {
  filter?: QueryDslAbstractionsContainerQueryContainer
  index_routing?: string
  is_write_index?: boolean
  routing?: string
  search_routing?: string
}

export interface MappingMetaFieldsAllAllField {
  analyzer: string
  enabled: boolean
  omit_norms: boolean
  search_analyzer: string
  similarity: string
  store: boolean
  store_term_vector_offsets: boolean
  store_term_vector_payloads: boolean
  store_term_vector_positions: boolean
  store_term_vectors: boolean
}

export interface ClusterClusterAllocationExplainAllocationDecision {
  decider: string
  decision: ClusterClusterAllocationExplainAllocationExplainDecision
  explanation: string
}

export type ClusterClusterAllocationExplainAllocationExplainDecision = 'NO' | 'YES' | 'THROTTLE' | 'ALWAYS'

export interface ClusterClusterAllocationExplainAllocationStore {
  allocation_id: string
  found: boolean
  in_sync: boolean
  matching_size_in_bytes: long
  matching_sync_id: boolean
  store_exception: string
}

export interface WatcherAlwaysCondition {
}

export interface MlAnalysisConfig {
  bucket_span: TimeSpan
  categorization_field_name?: Field
  categorization_filters?: string[]
  detectors: MlDetector[]
  influencers?: Field[]
  latency?: Time
  multivariate_by_fields?: boolean
  per_partition_categorization?: MlPerPartitionCategorization
  summary_count_field_name?: Field
  categorization_analyzer?: MlInfoCategorizationAnalyzer | string
}

export interface MlAnalysisLimits {
  categorization_examples_limit?: long
  model_memory_limit: string
}

export interface MlAnalysisMemoryLimit {
  model_memory_limit: string
}

export interface XpackUsageAnalyticsStatsUsage {
  boxplot_usage: long
  cumulative_cardinality_usage: long
  string_stats_usage: long
  top_metrics_usage: long
  t_test_usage: long
  moving_percentiles_usage: long
  normalize_usage: long
  rate_usage: long
  multi_terms_usage?: long
}

export interface XpackUsageAnalyticsUsage extends XpackUsageXPackUsage {
  stats: XpackUsageAnalyticsStatsUsage
}

export interface IndicesAnalyzeAnalyzeDetail {
  analyzer?: IndicesAnalyzeAnalyzerDetail
  charfilters?: IndicesAnalyzeCharFilterDetail[]
  custom_analyzer: boolean
  tokenfilters?: IndicesAnalyzeTokenDetail[]
  tokenizer?: IndicesAnalyzeTokenDetail
}

export interface IndicesAnalyzeAnalyzeToken {
  end_offset: long
  position: long
  position_length?: long
  start_offset: long
  token: string
  type: string
}

export interface IndicesAnalyzeAnalyzerDetail {
  name: string
  tokens: IndicesAnalyzeExplainAnalyzeToken[]
}

export interface MlAnomalyCause {
  actual: double[]
  by_field_name: Name
  by_field_value: string
  correlated_by_field_value: string
  field_name: Field
  function: string
  function_description: string
  influencers: MlInfluence[]
  over_field_name: Name
  over_field_value: string
  partition_field_name: string
  partition_field_value: string
  probability: double
  typical: double[]
}

export interface MlInfoAnomalyDetectors {
  categorization_analyzer: MlInfoCategorizationAnalyzer
  categorization_examples_limit: integer
  model_memory_limit: ByteSize
  model_snapshot_retention_days: integer
  daily_model_snapshot_retention_after_days: integer
}

export interface MlAnomalyRecord {
  actual?: double[]
  bucket_span: Time
  by_field_name?: string
  by_field_value?: string
  causes?: MlAnomalyCause[]
  detector_index: integer
  field_name?: string
  function?: string
  function_description?: string
  influencers?: MlInfluence[]
  initial_record_score: double
  is_interim: boolean
  job_id: string
  over_field_name?: string
  over_field_value?: string
  partition_field_name?: string
  partition_field_value?: string
  probability: double
  record_score: double
  result_type: string
  timestamp: EpochMillis
  typical?: double[]
}

export interface SecurityGrantApiKeyApiKey {
  name: Name
  expiration?: Time
  role_descriptors?: Record<string, any>[]
}

export interface SecurityCreateApiKeyApiKeyApplication {
  application: string
  privileges: string[]
  resources: string[]
}

export type SecurityGrantApiKeyApiKeyGrantType = 'access_token' | 'password'

export interface SecurityCreateApiKeyApiKeyPrivileges {
  names: Indices
  privileges: string[]
}

export interface SecurityCreateApiKeyApiKeyRole {
  cluster: string[]
  index: SecurityCreateApiKeyApiKeyPrivileges[]
  applications?: SecurityCreateApiKeyApiKeyApplication[]
}

export interface SecurityGetApiKeyApiKeys {
  creation: long
  expiration?: long
  id: Id
  invalidated: boolean
  name: Name
  realm: string
  username: Username
  metadata?: Record<string, any>
}

export interface IngestProcessorsAppendProcessor extends IngestProcessorBase {
  field: Field
  value: any[]
  allow_duplicates?: boolean
}

export interface SecurityGetUserPrivilegesApplicationGlobalUserPrivileges {
  manage: SecurityGetUserPrivilegesManageUserPrivileges
}

export interface SecurityPutRoleApplicationPrivileges {
  application: string
  privileges: string[]
  resources: string[]
}

export interface SecurityHasPrivilegesApplicationPrivilegesCheck {
  application: string
  privileges: string[]
  resources: string[]
}

export interface SecurityGetUserPrivilegesApplicationResourcePrivileges {
  application: string
  privileges: string[]
  resources: string[]
}

export type SecurityHasPrivilegesApplicationsPrivileges = Record<Name, SecurityHasPrivilegesResourcePrivileges>

export type MlAppliesTo = 'actual' | 'typical' | 'diff_from_typical' | 'time'

export interface WatcherArrayCompareCondition {
  array_path: string
  comparison: string
  path: string
  quantifier: WatcherQuantifier
  value: any
}

export interface AnalysisTokenFiltersAsciiFoldingTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  preserve_original: boolean
}

export interface AsyncSearchAsyncSearch<TDocument = unknown> {
  aggregations?: Record<string, AggregationsAggregate>
  _clusters?: ClusterStatistics
  fields?: Record<string, any>
  hits: SearchHitsHitsMetadata<TDocument>
  max_score?: double
  num_reduce_phases?: long
  profile?: SearchProfileProfile
  pit_id?: Id
  _scroll_id?: Id
  _shards: ShardStatistics
  suggest?: Record<SuggestionName, SearchSuggestersSuggest<TDocument>[]>
  terminated_early?: boolean
  timed_out: boolean
  took: long
}

export interface AsyncSearchDeleteAsyncSearchDeleteRequest extends RequestBase {
  id: Id
}

export interface AsyncSearchDeleteAsyncSearchDeleteResponse extends AcknowledgedResponseBase {
}

export interface AsyncSearchAsyncSearchDocumentResponseBase<TDocument = unknown> extends AsyncSearchAsyncSearchResponseBase {
  response: AsyncSearchAsyncSearch<TDocument>
}

export interface AsyncSearchGetAsyncSearchGetRequest extends RequestBase {
  id: Id
  keep_alive?: Time
  typed_keys?: boolean
  wait_for_completion_timeout?: Time
}

export interface AsyncSearchGetAsyncSearchGetResponse<TDocument = unknown> extends AsyncSearchAsyncSearchDocumentResponseBase<TDocument> {
}

export interface AsyncSearchAsyncSearchResponseBase extends ResponseBase {
  id?: Id
  is_partial: boolean
  is_running: boolean
  expiration_time_in_millis: EpochMillis
  start_time_in_millis: EpochMillis
}

export interface AsyncSearchStatusAsyncSearchStatusRequest extends RequestBase {
  id: Id
}

export interface AsyncSearchStatusAsyncSearchStatusResponse<TDocument = unknown> extends AsyncSearchAsyncSearchResponseBase {
  _shards: ShardStatistics
  completion_status: integer
}

export interface AsyncSearchSubmitAsyncSearchSubmitRequest extends RequestBase {
  index?: Indices
  batched_reduce_size?: long
  wait_for_completion_timeout?: Time
  keep_on_completion?: boolean
  typed_keys?: boolean
  body?: {
    aggs?: Record<string, AggregationsAggregationContainer>
    allow_no_indices?: boolean
    allow_partial_search_results?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    batched_reduce_size?: long
    collapse?: SearchCollapsingFieldCollapse
    default_operator?: DefaultOperator
    df?: string
    docvalue_fields?: Fields
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    from?: integer
    highlight?: SearchHighlightingHighlight
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    indices_boost?: Record<IndexName, double>[]
    keep_alive?: Time
    keep_on_completion?: boolean
    lenient?: boolean
    max_concurrent_shard_requests?: long
    min_score?: double
    post_filter?: QueryDslAbstractionsContainerQueryContainer
    preference?: string
    profile?: boolean
    pit?: SearchPointInTimePointInTimeReference
    query?: QueryDslAbstractionsContainerQueryContainer
    query_on_query_string?: string
    request_cache?: boolean
    rescore?: SearchRescoringRescore[]
    routing?: Routing
    script_fields?: Record<string, ScriptField>
    search_after?: any[]
    search_type?: SearchType
    sequence_number_primary_term?: boolean
    size?: integer
    sort?: SearchSortSort
    _source?: boolean | SearchSourceFilteringSourceFilter
    stats?: string[]
    stored_fields?: Fields
    suggest?: Record<string, SearchSuggestersSuggestContainer>
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    suggest_text?: string
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    track_total_hits?: boolean
    typed_keys?: boolean
    version?: boolean
    wait_for_completion_timeout?: Time
    fields?: Field | DateField[]
  }
}

export interface AsyncSearchSubmitAsyncSearchSubmitResponse<TDocument = unknown> extends AsyncSearchAsyncSearchDocumentResponseBase<TDocument> {
}

export interface IngestProcessorsPluginsAttachmentProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  indexed_chars?: long
  indexed_chars_field?: Field
  properties?: string[]
  target_field?: Field
  resource_name?: string
}

export interface XpackUsageAuditUsage extends XpackUsageSecurityFeatureToggle {
  outputs?: string[]
}

export interface SecurityGetTokenAuthenticatedUser extends SecurityXPackUser {
  authentication_realm: SecurityGetTokenUserRealm
  lookup_realm: SecurityGetTokenUserRealm
  authentication_provider?: SecurityGetTokenAuthenticationProvider
  authentication_type: string
}

export interface SecurityGetTokenAuthenticationProvider {
  type: string
  name: Name
}

export interface AggregationsAutoDateHistogramAggregate extends AggregationsMultiBucketAggregate<AggregationsKeyedBucket<long>> {
  interval: DateMathTime
}

export interface AggregationsBucketAutoDateHistogramAutoDateHistogramAggregation extends AggregationsBucketBucketAggregationBase {
  buckets?: integer
  field?: Field
  format?: string
  minimum_interval?: AggregationsBucketAutoDateHistogramMinimumInterval
  missing?: DateString
  offset?: string
  params?: Record<string, any>
  script?: Script
  time_zone?: string
}

export interface CcrGetAutoFollowPatternAutoFollowPattern {
  active: boolean
  remote_cluster: string
  follow_index_pattern?: IndexPattern
  leader_index_patterns: IndexPatterns
  max_outstanding_read_requests: integer
}

export interface CcrGetAutoFollowPatternAutoFollowPatternItem {
  name: Name
  pattern: CcrGetAutoFollowPatternAutoFollowPattern
}

export interface CcrStatsAutoFollowedCluster {
  cluster_name: Name
  last_seen_metadata_version: VersionNumber
  time_since_last_check_millis: DateString
}

export interface AggregationsMetricAverageAverageAggregation extends AggregationsMetricFormatMetricAggregationBase {
}

export interface AggregationsPipelineAverageBucketAverageBucketAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export interface SpecUtilsBaseNode {
  attributes: Record<string, string>
  host: Host
  ip: Ip
  name: Name
  roles?: NodesNodesInfoNodeRole[]
  transport_address: TransportAddress
}

export interface XpackUsageBaseUrlConfig {
  url_name: string
  url_value: string
}

export interface MappingTypesCoreBinaryBinaryProperty extends MappingTypesDocValuesPropertyBase {
  type: 'binary'
}

export interface QueryDslCompoundBoolBoolQuery extends QueryDslAbstractionsQueryQueryBase {
  filter?: QueryDslAbstractionsContainerQueryContainer | QueryDslAbstractionsContainerQueryContainer[]
  minimum_should_match?: MinimumShouldMatch
  must?: QueryDslAbstractionsContainerQueryContainer | QueryDslAbstractionsContainerQueryContainer[]
  must_not?: QueryDslAbstractionsContainerQueryContainer | QueryDslAbstractionsContainerQueryContainer[]
  should?: QueryDslAbstractionsContainerQueryContainer | QueryDslAbstractionsContainerQueryContainer[]
}

export interface MappingTypesCoreBooleanBooleanProperty extends MappingTypesDocValuesPropertyBase {
  boost?: double
  fielddata?: IndicesNumericFielddata
  index?: boolean
  null_value?: boolean
  type: 'boolean'
}

export interface QueryDslCompoundBoostingBoostingQuery extends QueryDslAbstractionsQueryQueryBase {
  negative_boost?: double
  negative?: QueryDslAbstractionsContainerQueryContainer
  positive?: QueryDslAbstractionsContainerQueryContainer
}

export type SearchHighlightingBoundaryScanner = 'chars' | 'sentence' | 'word'

export interface QueryDslGeoBoundingBoxBoundingBox {
  bottom_right?: QueryDslGeoGeoLocation
  top_left?: QueryDslGeoGeoLocation
  wkt?: string
}

export interface AggregationsBoxPlotAggregate extends AggregationsAggregateBase {
  min: double
  max: double
  q1: double
  q2: double
  q3: double
}

export interface AggregationsMetricBoxplotBoxplotAggregation extends AggregationsMetricMetricAggregationBase {
  compression?: double
}

export interface NodesNodesStatsBreakerStats {
  estimated_size: string
  estimated_size_in_bytes: long
  limit_size: string
  limit_size_in_bytes: long
  overhead: float
  tripped: float
}

export type AggregationsBucket = AggregationsCompositeBucket | AggregationsDateHistogramBucket | AggregationsFiltersBucketItem | AggregationsIpRangeBucket | AggregationsRangeBucket | AggregationsRareTermsBucket<any> | AggregationsSignificantTermsBucket<any> | AggregationsKeyedBucket<any>

export interface AggregationsBucketAggregate extends AggregationsAggregateBase {
  after_key: Record<string, any>
  bg_count: long
  doc_count: long
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
  interval: DateMathTime
  items: AggregationsBucket
}

export interface AggregationsBucketBucketAggregationBase extends AggregationsAggregation {
  aggregations?: Record<string, AggregationsAggregationContainer>
}

export interface MlBucketInfluencer {
  bucket_span: long
  influencer_field_name: string
  influencer_field_value: string
  influencer_score: double
  initial_influencer_score: double
  is_interim: boolean
  job_id: Id
  probability: double
  result_type: string
  timestamp: DateString
}

export interface AggregationsPipelineBucketScriptBucketScriptAggregation extends AggregationsPipelinePipelineAggregationBase {
  script?: Script
}

export interface AggregationsPipelineBucketSelectorBucketSelectorAggregation extends AggregationsPipelinePipelineAggregationBase {
  script?: Script
}

export interface AggregationsPipelineBucketSortBucketSortAggregation extends AggregationsAggregation {
  from?: integer
  gap_policy?: AggregationsPipelineGapPolicy
  size?: integer
  sort?: SearchSortSort
}

export interface AggregationsPipelineBucketsPath {
}

export interface BulkBulkCreateOperation extends BulkBulkOperation {
}

export interface BulkBulkCreateResponseItem extends BulkBulkResponseItemBase {
}

export interface BulkBulkDeleteOperation extends BulkBulkOperation {
}

export interface BulkBulkDeleteResponseItem extends BulkBulkResponseItemBase {
}

export interface BulkIndexByScrollFailure {
  cause: MainError
  id: Id
  index: IndexName
  status: integer
  type: string
}

export interface BulkBulkIndexOperation extends BulkBulkOperation {
}

export interface BulkBulkIndexResponseItem extends BulkBulkResponseItemBase {
}

export interface MonitoringBulkBulkMonitoringRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body: {
    stub_c: string
  }
}

export interface MonitoringBulkBulkMonitoringResponse extends ResponseBase {
  stub: integer
}

export interface BulkBulkOperation {
  _id: Id
  _index: IndexName
  retry_on_conflict: integer
  routing: Routing
  version: VersionNumber
  version_type: VersionType
}

export interface BulkBulkOperationContainer {
  index?: BulkBulkIndexOperation
  create?: BulkBulkCreateOperation
  update?: BulkBulkUpdateOperation
  delete?: BulkBulkDeleteOperation
}

export interface BulkBulkRequest<TSource = unknown> extends RequestBase {
  index?: IndexName
  type?: Type
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  require_alias?: boolean
  body: BulkBulkOperationContainer | TSource[]
}

export interface BulkBulkResponse extends ResponseBase {
  errors: boolean
  items: BulkBulkResponseItemContainer[]
  took: long
  ingest_took?: long
}

export interface BulkBulkResponseItemBase {
  _id?: string | null
  _index: string
  status: integer
  error?: ErrorCause
  _primary_term?: long
  result?: string
  _seq_no?: SequenceNumber
  _shards?: ShardStatistics
  _type?: string
  _version?: VersionNumber
  forced_refresh?: boolean
  get?: ExplainInlineGet<Record<string, any>>
}

export interface BulkBulkResponseItemContainer {
  index?: BulkBulkIndexResponseItem
  create?: BulkBulkCreateResponseItem
  update?: BulkBulkUpdateResponseItem
  delete?: BulkBulkDeleteResponseItem
}

export interface BulkStats {
  total_operations: long
  total_time?: string
  total_time_in_millis: long
  total_size?: ByteSize
  total_size_in_bytes: long
  avg_time?: string
  avg_time_in_millis: long
  avg_size?: ByteSize
  avg_size_in_bytes: long
}

export interface BulkBulkUpdateOperation extends BulkBulkOperation {
}

export interface BulkBulkUpdateResponseItem extends BulkBulkResponseItemBase {
}

export type ByteSize = long | string

export type Bytes = 'b' | 'k' | 'kb' | 'm' | 'mb' | 'g' | 'gb' | 't' | 'tb' | 'p' | 'pb'

export interface IngestProcessorsBytesProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface NodesNodesStatsCPUStats {
  percent: integer
  sys: string
  sys_in_millis: long
  total: string
  total_in_millis: long
  user: string
  user_in_millis: long
}

export interface MlGetCalendarsCalendar {
  calendar_id: Id
  description: string
  job_ids: Id[]
}

export interface TaskCancelTasksCancelTasksRequest extends RequestBase {
  task_id?: TaskId
  actions?: string | string[]
  nodes?: string[]
  parent_task_id?: string
  wait_for_completion?: boolean
}

export interface TaskCancelTasksCancelTasksResponse extends ResponseBase {
  node_failures?: ErrorCause[]
  nodes: Record<string, TaskListTasksTaskExecutingNode>
}

export interface AggregationsMetricCardinalityCardinalityAggregation extends AggregationsMetricMetricAggregationBase {
  precision_threshold?: integer
  rehash?: boolean
}

export interface CatCatAliasesCatAliasesRecord {
  alias?: string
  a?: string
  index?: IndexName
  i?: IndexName
  idx?: IndexName
  filter?: string
  f?: string
  fi?: string
  'routing.index'?: string
  ri?: string
  routingIndex?: string
  'routing.search'?: string
  rs?: string
  routingSearch?: string
  is_write_index?: string
  w?: string
  isWriteIndex?: string
}

export interface CatCatAliasesCatAliasesRequest extends CatCatRequestBase {
  name?: Names
  expand_wildcards?: ExpandWildcards
}

export type CatCatAliasesCatAliasesResponse = CatCatAliasesCatAliasesRecord[]

export interface CatCatAllocationCatAllocationRecord {
  shards?: string
  s?: string
  'disk.indices'?: ByteSize
  di?: ByteSize
  diskIndices?: ByteSize
  'disk.used'?: ByteSize
  du?: ByteSize
  diskUsed?: ByteSize
  'disk.avail'?: ByteSize
  da?: ByteSize
  diskAvail?: ByteSize
  'disk.total'?: ByteSize
  dt?: ByteSize
  diskTotal?: ByteSize
  'disk.percent'?: Percentage
  dp?: Percentage
  diskPercent?: Percentage
  host?: Host
  h?: Host
  ip?: Ip
  node?: string
  n?: string
}

export interface CatCatAllocationCatAllocationRequest extends CatCatRequestBase {
  node_id?: NodeIds
  bytes?: Bytes
}

export type CatCatAllocationCatAllocationResponse = CatCatAllocationCatAllocationRecord[]

export interface CatCatCountCatCountRecord {
  epoch?: EpochMillis
  t?: EpochMillis
  time?: EpochMillis
  timestamp?: DateString
  ts?: DateString
  hms?: DateString
  hhmmss?: DateString
  count?: string
  dc?: string
  'docs.count'?: string
  docsCount?: string
}

export interface CatCatCountCatCountRequest extends CatCatRequestBase {
  index?: Indices
}

export type CatCatCountCatCountResponse = CatCatCountCatCountRecord[]

export interface CatCatDataFrameAnalyticsCatDataFrameAnalyticsRecord {
  id?: Id
  type?: Type
  t?: Type
  create_time?: string
  ct?: string
  createTime?: string
  version?: VersionString
  v?: VersionString
  source_index?: IndexName
  si?: IndexName
  sourceIndex?: IndexName
  dest_index?: IndexName
  di?: IndexName
  destIndex?: IndexName
  description?: string
  d?: string
  model_memory_limit?: string
  mml?: string
  modelMemoryLimit?: string
  state?: string
  s?: string
  failure_reason?: string
  fr?: string
  failureReason?: string
  progress?: string
  p?: string
  assignment_explanation?: string
  ae?: string
  assignmentExplanation?: string
  'node.id'?: Id
  ni?: Id
  nodeId?: Id
  'node.name'?: Name
  nn?: Name
  nodeName?: Name
  'node.ephemeral_id'?: Id
  ne?: Id
  nodeEphemeralId?: Id
  'node.address'?: string
  na?: string
  nodeAddress?: string
}

export interface CatCatDataFrameAnalyticsCatDataFrameAnalyticsRequest extends CatCatRequestBase {
  id?: Id
  allow_no_match?: boolean
  bytes?: Bytes
}

export type CatCatDataFrameAnalyticsCatDataFrameAnalyticsResponse = CatCatDataFrameAnalyticsCatDataFrameAnalyticsRecord[]

export interface CatCatDatafeedsCatDatafeedsRecord {
  id?: string
  state?: MlDatafeedState
  s?: MlDatafeedState
  assignment_explanation?: string
  ae?: string
  'buckets.count'?: string
  bc?: string
  bucketsCount?: string
  'search.count'?: string
  sc?: string
  searchCount?: string
  'search.time'?: string
  st?: string
  searchTime?: string
  'search.bucket_avg'?: string
  sba?: string
  searchBucketAvg?: string
  'search.exp_avg_hour'?: string
  seah?: string
  searchExpAvgHour?: string
  'node.id'?: string
  ni?: string
  nodeId?: string
  'node.name'?: string
  nn?: string
  nodeName?: string
  'node.ephemeral_id'?: string
  ne?: string
  nodeEphemeralId?: string
  'node.address'?: string
  na?: string
  nodeAddress?: string
}

export interface CatCatDatafeedsCatDatafeedsRequest extends CatCatRequestBase {
  datafeed_id?: Id
  allow_no_datafeeds?: boolean
}

export type CatCatDatafeedsCatDatafeedsResponse = CatCatDatafeedsCatDatafeedsRecord[]

export interface CatCatFielddataCatFielddataRecord {
  id?: string
  host?: string
  h?: string
  ip?: string
  node?: string
  n?: string
  field?: string
  f?: string
  size?: string
}

export interface CatCatFielddataCatFielddataRequest extends CatCatRequestBase {
  fields?: Fields
  bytes?: Bytes
}

export type CatCatFielddataCatFielddataResponse = CatCatFielddataCatFielddataRecord[]

export interface CatCatHealthCatHealthRecord {
  epoch?: EpochMillis
  time?: EpochMillis
  timestamp?: DateString
  ts?: DateString
  hms?: DateString
  hhmmss?: DateString
  cluster?: string
  cl?: string
  status?: string
  st?: string
  'node.total'?: string
  nt?: string
  nodeTotal?: string
  'node.data'?: string
  nd?: string
  nodeData?: string
  shards?: string
  t?: string
  sh?: string
  'shards.total'?: string
  shardsTotal?: string
  pri?: string
  p?: string
  'shards.primary'?: string
  shardsPrimary?: string
  relo?: string
  r?: string
  'shards.relocating'?: string
  shardsRelocating?: string
  init?: string
  i?: string
  'shards.initializing'?: string
  shardsInitializing?: string
  unassign?: string
  u?: string
  'shards.unassigned'?: string
  shardsUnassigned?: string
  pending_tasks?: string
  pt?: string
  pendingTasks?: string
  max_task_wait_time?: string
  mtwt?: string
  maxTaskWaitTime?: string
  active_shards_percent?: string
  asp?: string
  activeShardsPercent?: string
}

export interface CatCatHealthCatHealthRequest extends CatCatRequestBase {
  include_timestamp?: boolean
  ts?: boolean
}

export type CatCatHealthCatHealthResponse = CatCatHealthCatHealthRecord[]

export interface CatCatHelpCatHelpRecord {
  endpoint: string
}

export interface CatCatHelpCatHelpRequest extends CatCatRequestBase {
}

export type CatCatHelpCatHelpResponse = CatCatHelpCatHelpRecord[]

export interface CatCatIndicesCatIndicesRecord {
  health?: string
  h?: string
  status?: string
  s?: string
  index?: string
  i?: string
  idx?: string
  uuid?: string
  id?: string
  pri?: string
  p?: string
  'shards.primary'?: string
  shardsPrimary?: string
  rep?: string
  r?: string
  'shards.replica'?: string
  shardsReplica?: string
  'docs.count'?: string
  dc?: string
  docsCount?: string
  'docs.deleted'?: string
  dd?: string
  docsDeleted?: string
  'creation.date'?: string
  cd?: string
  'creation.date.string'?: string
  cds?: string
  'store.size'?: string
  ss?: string
  storeSize?: string
  'pri.store.size'?: string
  'completion.size'?: string
  cs?: string
  completionSize?: string
  'pri.completion.size'?: string
  'fielddata.memory_size'?: string
  fm?: string
  fielddataMemory?: string
  'pri.fielddata.memory_size'?: string
  'fielddata.evictions'?: string
  fe?: string
  fielddataEvictions?: string
  'pri.fielddata.evictions'?: string
  'query_cache.memory_size'?: string
  qcm?: string
  queryCacheMemory?: string
  'pri.query_cache.memory_size'?: string
  'query_cache.evictions'?: string
  qce?: string
  queryCacheEvictions?: string
  'pri.query_cache.evictions'?: string
  'request_cache.memory_size'?: string
  rcm?: string
  requestCacheMemory?: string
  'pri.request_cache.memory_size'?: string
  'request_cache.evictions'?: string
  rce?: string
  requestCacheEvictions?: string
  'pri.request_cache.evictions'?: string
  'request_cache.hit_count'?: string
  rchc?: string
  requestCacheHitCount?: string
  'pri.request_cache.hit_count'?: string
  'request_cache.miss_count'?: string
  rcmc?: string
  requestCacheMissCount?: string
  'pri.request_cache.miss_count'?: string
  'flush.total'?: string
  ft?: string
  flushTotal?: string
  'pri.flush.total'?: string
  'flush.total_time'?: string
  ftt?: string
  flushTotalTime?: string
  'pri.flush.total_time'?: string
  'get.current'?: string
  gc?: string
  getCurrent?: string
  'pri.get.current'?: string
  'get.time'?: string
  gti?: string
  getTime?: string
  'pri.get.time'?: string
  'get.total'?: string
  gto?: string
  getTotal?: string
  'pri.get.total'?: string
  'get.exists_time'?: string
  geti?: string
  getExistsTime?: string
  'pri.get.exists_time'?: string
  'get.exists_total'?: string
  geto?: string
  getExistsTotal?: string
  'pri.get.exists_total'?: string
  'get.missing_time'?: string
  gmti?: string
  getMissingTime?: string
  'pri.get.missing_time'?: string
  'get.missing_total'?: string
  gmto?: string
  getMissingTotal?: string
  'pri.get.missing_total'?: string
  'indexing.delete_current'?: string
  idc?: string
  indexingDeleteCurrent?: string
  'pri.indexing.delete_current'?: string
  'indexing.delete_time'?: string
  idti?: string
  indexingDeleteTime?: string
  'pri.indexing.delete_time'?: string
  'indexing.delete_total'?: string
  idto?: string
  indexingDeleteTotal?: string
  'pri.indexing.delete_total'?: string
  'indexing.index_current'?: string
  iic?: string
  indexingIndexCurrent?: string
  'pri.indexing.index_current'?: string
  'indexing.index_time'?: string
  iiti?: string
  indexingIndexTime?: string
  'pri.indexing.index_time'?: string
  'indexing.index_total'?: string
  iito?: string
  indexingIndexTotal?: string
  'pri.indexing.index_total'?: string
  'indexing.index_failed'?: string
  iif?: string
  indexingIndexFailed?: string
  'pri.indexing.index_failed'?: string
  'merges.current'?: string
  mc?: string
  mergesCurrent?: string
  'pri.merges.current'?: string
  'merges.current_docs'?: string
  mcd?: string
  mergesCurrentDocs?: string
  'pri.merges.current_docs'?: string
  'merges.current_size'?: string
  mcs?: string
  mergesCurrentSize?: string
  'pri.merges.current_size'?: string
  'merges.total'?: string
  mt?: string
  mergesTotal?: string
  'pri.merges.total'?: string
  'merges.total_docs'?: string
  mtd?: string
  mergesTotalDocs?: string
  'pri.merges.total_docs'?: string
  'merges.total_size'?: string
  mts?: string
  mergesTotalSize?: string
  'pri.merges.total_size'?: string
  'merges.total_time'?: string
  mtt?: string
  mergesTotalTime?: string
  'pri.merges.total_time'?: string
  'refresh.total'?: string
  rto?: string
  refreshTotal?: string
  'pri.refresh.total'?: string
  'refresh.time'?: string
  rti?: string
  refreshTime?: string
  'pri.refresh.time'?: string
  'refresh.external_total'?: string
  reto?: string
  'pri.refresh.external_total'?: string
  'refresh.external_time'?: string
  reti?: string
  'pri.refresh.external_time'?: string
  'refresh.listeners'?: string
  rli?: string
  refreshListeners?: string
  'pri.refresh.listeners'?: string
  'search.fetch_current'?: string
  sfc?: string
  searchFetchCurrent?: string
  'pri.search.fetch_current'?: string
  'search.fetch_time'?: string
  sfti?: string
  searchFetchTime?: string
  'pri.search.fetch_time'?: string
  'search.fetch_total'?: string
  sfto?: string
  searchFetchTotal?: string
  'pri.search.fetch_total'?: string
  'search.open_contexts'?: string
  so?: string
  searchOpenContexts?: string
  'pri.search.open_contexts'?: string
  'search.query_current'?: string
  sqc?: string
  searchQueryCurrent?: string
  'pri.search.query_current'?: string
  'search.query_time'?: string
  sqti?: string
  searchQueryTime?: string
  'pri.search.query_time'?: string
  'search.query_total'?: string
  sqto?: string
  searchQueryTotal?: string
  'pri.search.query_total'?: string
  'search.scroll_current'?: string
  scc?: string
  searchScrollCurrent?: string
  'pri.search.scroll_current'?: string
  'search.scroll_time'?: string
  scti?: string
  searchScrollTime?: string
  'pri.search.scroll_time'?: string
  'search.scroll_total'?: string
  scto?: string
  searchScrollTotal?: string
  'pri.search.scroll_total'?: string
  'segments.count'?: string
  sc?: string
  segmentsCount?: string
  'pri.segments.count'?: string
  'segments.memory'?: string
  sm?: string
  segmentsMemory?: string
  'pri.segments.memory'?: string
  'segments.index_writer_memory'?: string
  siwm?: string
  segmentsIndexWriterMemory?: string
  'pri.segments.index_writer_memory'?: string
  'segments.version_map_memory'?: string
  svmm?: string
  segmentsVersionMapMemory?: string
  'pri.segments.version_map_memory'?: string
  'segments.fixed_bitset_memory'?: string
  sfbm?: string
  fixedBitsetMemory?: string
  'pri.segments.fixed_bitset_memory'?: string
  'warmer.current'?: string
  wc?: string
  warmerCurrent?: string
  'pri.warmer.current'?: string
  'warmer.total'?: string
  wto?: string
  warmerTotal?: string
  'pri.warmer.total'?: string
  'warmer.total_time'?: string
  wtt?: string
  warmerTotalTime?: string
  'pri.warmer.total_time'?: string
  'suggest.current'?: string
  suc?: string
  suggestCurrent?: string
  'pri.suggest.current'?: string
  'suggest.time'?: string
  suti?: string
  suggestTime?: string
  'pri.suggest.time'?: string
  'suggest.total'?: string
  suto?: string
  suggestTotal?: string
  'pri.suggest.total'?: string
  'memory.total'?: string
  tm?: string
  memoryTotal?: string
  'pri.memory.total'?: string
  'search.throttled'?: string
  sth?: string
  'bulk.total_operations'?: string
  bto?: string
  bulkTotalOperation?: string
  'pri.bulk.total_operations'?: string
  'bulk.total_time'?: string
  btti?: string
  bulkTotalTime?: string
  'pri.bulk.total_time'?: string
  'bulk.total_size_in_bytes'?: string
  btsi?: string
  bulkTotalSizeInBytes?: string
  'pri.bulk.total_size_in_bytes'?: string
  'bulk.avg_time'?: string
  bati?: string
  bulkAvgTime?: string
  'pri.bulk.avg_time'?: string
  'bulk.avg_size_in_bytes'?: string
  basi?: string
  bulkAvgSizeInBytes?: string
  'pri.bulk.avg_size_in_bytes'?: string
}

export interface CatCatIndicesCatIndicesRequest extends CatCatRequestBase {
  index?: Indices
  bytes?: Bytes
  expand_wildcards?: ExpandWildcards
  health?: Health
  include_unloaded_segments?: boolean
  pri?: boolean
}

export type CatCatIndicesCatIndicesResponse = CatCatIndicesCatIndicesRecord[]

export interface CatCatJobsCatJobsRecord {
  id?: Id
  state?: MlJobState
  s?: MlJobState
  opened_time?: string
  ot?: string
  assignment_explanation?: string
  ae?: string
  'data.processed_records'?: string
  dpr?: string
  dataProcessedRecords?: string
  'data.processed_fields'?: string
  dpf?: string
  dataProcessedFields?: string
  'data.input_bytes'?: ByteSize
  dib?: ByteSize
  dataInputBytes?: ByteSize
  'data.input_records'?: string
  dir?: string
  dataInputRecords?: string
  'data.input_fields'?: string
  dif?: string
  dataInputFields?: string
  'data.invalid_dates'?: string
  did?: string
  dataInvalidDates?: string
  'data.missing_fields'?: string
  dmf?: string
  dataMissingFields?: string
  'data.out_of_order_timestamps'?: string
  doot?: string
  dataOutOfOrderTimestamps?: string
  'data.empty_buckets'?: string
  deb?: string
  dataEmptyBuckets?: string
  'data.sparse_buckets'?: string
  dsb?: string
  dataSparseBuckets?: string
  'data.buckets'?: string
  db?: string
  dataBuckets?: string
  'data.earliest_record'?: string
  der?: string
  dataEarliestRecord?: string
  'data.latest_record'?: string
  dlr?: string
  dataLatestRecord?: string
  'data.last'?: string
  dl?: string
  dataLast?: string
  'data.last_empty_bucket'?: string
  dleb?: string
  dataLastEmptyBucket?: string
  'data.last_sparse_bucket'?: string
  dlsb?: string
  dataLastSparseBucket?: string
  'model.bytes'?: ByteSize
  mb?: ByteSize
  modelBytes?: ByteSize
  'model.memory_status'?: CatCatJobsModelMemoryStatus
  mms?: CatCatJobsModelMemoryStatus
  modelMemoryStatus?: CatCatJobsModelMemoryStatus
  'model.bytes_exceeded'?: ByteSize
  mbe?: ByteSize
  modelBytesExceeded?: ByteSize
  'model.memory_limit'?: string
  mml?: string
  modelMemoryLimit?: string
  'model.by_fields'?: string
  mbf?: string
  modelByFields?: string
  'model.over_fields'?: string
  mof?: string
  modelOverFields?: string
  'model.partition_fields'?: string
  mpf?: string
  modelPartitionFields?: string
  'model.bucket_allocation_failures'?: string
  mbaf?: string
  modelBucketAllocationFailures?: string
  'model.categorization_status'?: CatCatJobsModelCategorizationStatus
  mcs?: CatCatJobsModelCategorizationStatus
  modelCategorizationStatus?: CatCatJobsModelCategorizationStatus
  'model.categorized_doc_count'?: string
  mcdc?: string
  modelCategorizedDocCount?: string
  'model.total_category_count'?: string
  mtcc?: string
  modelTotalCategoryCount?: string
  'model.frequent_category_count'?: string
  modelFrequentCategoryCount?: string
  'model.rare_category_count'?: string
  mrcc?: string
  modelRareCategoryCount?: string
  'model.dead_category_count'?: string
  mdcc?: string
  modelDeadCategoryCount?: string
  'model.failed_category_count'?: string
  mfcc?: string
  modelFailedCategoryCount?: string
  'model.log_time'?: string
  mlt?: string
  modelLogTime?: string
  'model.timestamp'?: string
  mt?: string
  modelTimestamp?: string
  'forecasts.total'?: string
  ft?: string
  forecastsTotal?: string
  'forecasts.memory.min'?: string
  fmmin?: string
  forecastsMemoryMin?: string
  'forecasts.memory.max'?: string
  fmmax?: string
  forecastsMemoryMax?: string
  'forecasts.memory.avg'?: string
  fmavg?: string
  forecastsMemoryAvg?: string
  'forecasts.memory.total'?: string
  fmt?: string
  forecastsMemoryTotal?: string
  'forecasts.records.min'?: string
  frmin?: string
  forecastsRecordsMin?: string
  'forecasts.records.max'?: string
  frmax?: string
  forecastsRecordsMax?: string
  'forecasts.records.avg'?: string
  fravg?: string
  forecastsRecordsAvg?: string
  'forecasts.records.total'?: string
  frt?: string
  forecastsRecordsTotal?: string
  'forecasts.time.min'?: string
  ftmin?: string
  forecastsTimeMin?: string
  'forecasts.time.max'?: string
  ftmax?: string
  forecastsTimeMax?: string
  'forecasts.time.avg'?: string
  ftavg?: string
  forecastsTimeAvg?: string
  'forecasts.time.total'?: string
  ftt?: string
  forecastsTimeTotal?: string
  'node.id'?: NodeId
  ni?: NodeId
  nodeId?: NodeId
  'node.name'?: string
  nn?: string
  nodeName?: string
  'node.ephemeral_id'?: NodeId
  ne?: NodeId
  nodeEphemeralId?: NodeId
  'node.address'?: string
  na?: string
  nodeAddress?: string
  'buckets.count'?: string
  bc?: string
  bucketsCount?: string
  'buckets.time.total'?: string
  btt?: string
  bucketsTimeTotal?: string
  'buckets.time.min'?: string
  btmin?: string
  bucketsTimeMin?: string
  'buckets.time.max'?: string
  btmax?: string
  bucketsTimeMax?: string
  'buckets.time.exp_avg'?: string
  btea?: string
  bucketsTimeExpAvg?: string
  'buckets.time.exp_avg_hour'?: string
  bteah?: string
  bucketsTimeExpAvgHour?: string
}

export interface CatCatJobsCatJobsRequest extends CatCatRequestBase {
  job_id?: Id
  allow_no_jobs?: boolean
  bytes?: Bytes
}

export type CatCatJobsCatJobsResponse = CatCatJobsCatJobsRecord[]

export interface CatCatMasterCatMasterRecord {
  id?: string
  host?: string
  h?: string
  ip?: string
  node?: string
  n?: string
}

export interface CatCatMasterCatMasterRequest extends CatCatRequestBase {
}

export type CatCatMasterCatMasterResponse = CatCatMasterCatMasterRecord[]

export interface CatCatNodeAttributesCatNodeAttributesRecord {
  node?: string
  id?: string
  pid?: string
  host?: string
  h?: string
  ip?: string
  i?: string
  port?: string
  attr?: string
  value?: string
}

export interface CatCatNodeAttributesCatNodeAttributesRequest extends CatCatRequestBase {
}

export type CatCatNodeAttributesCatNodeAttributesResponse = CatCatNodeAttributesCatNodeAttributesRecord[]

export interface CatCatNodesCatNodesRecord {
  id?: Id
  nodeId?: Id
  pid?: string
  p?: string
  ip?: string
  i?: string
  port?: string
  po?: string
  http_address?: string
  http?: string
  version?: VersionString
  v?: VersionString
  flavor?: string
  f?: string
  type?: Type
  t?: Type
  build?: string
  b?: string
  jdk?: string
  j?: string
  'disk.total'?: ByteSize
  dt?: ByteSize
  diskTotal?: ByteSize
  'disk.used'?: ByteSize
  du?: ByteSize
  diskUsed?: ByteSize
  'disk.avail'?: ByteSize
  d?: ByteSize
  da?: ByteSize
  disk?: ByteSize
  diskAvail?: ByteSize
  'disk.used_percent'?: Percentage
  dup?: Percentage
  diskUsedPercent?: Percentage
  'heap.current'?: string
  hc?: string
  heapCurrent?: string
  'heap.percent'?: Percentage
  hp?: Percentage
  heapPercent?: Percentage
  'heap.max'?: string
  hm?: string
  heapMax?: string
  'ram.current'?: string
  rc?: string
  ramCurrent?: string
  'ram.percent'?: Percentage
  rp?: Percentage
  ramPercent?: Percentage
  'ram.max'?: string
  rn?: string
  ramMax?: string
  'file_desc.current'?: string
  fdc?: string
  fileDescriptorCurrent?: string
  'file_desc.percent'?: Percentage
  fdp?: Percentage
  fileDescriptorPercent?: Percentage
  'file_desc.max'?: string
  fdm?: string
  fileDescriptorMax?: string
  cpu?: string
  load_1m?: string
  load_5m?: string
  load_15m?: string
  l?: string
  uptime?: string
  u?: string
  'node.role'?: string
  r?: string
  role?: string
  nodeRole?: string
  master?: string
  m?: string
  name?: Name
  n?: Name
  'completion.size'?: string
  cs?: string
  completionSize?: string
  'fielddata.memory_size'?: string
  fm?: string
  fielddataMemory?: string
  'fielddata.evictions'?: string
  fe?: string
  fielddataEvictions?: string
  'query_cache.memory_size'?: string
  qcm?: string
  queryCacheMemory?: string
  'query_cache.evictions'?: string
  qce?: string
  queryCacheEvictions?: string
  'query_cache.hit_count'?: string
  qchc?: string
  queryCacheHitCount?: string
  'query_cache.miss_count'?: string
  qcmc?: string
  queryCacheMissCount?: string
  'request_cache.memory_size'?: string
  rcm?: string
  requestCacheMemory?: string
  'request_cache.evictions'?: string
  rce?: string
  requestCacheEvictions?: string
  'request_cache.hit_count'?: string
  rchc?: string
  requestCacheHitCount?: string
  'request_cache.miss_count'?: string
  rcmc?: string
  requestCacheMissCount?: string
  'flush.total'?: string
  ft?: string
  flushTotal?: string
  'flush.total_time'?: string
  ftt?: string
  flushTotalTime?: string
  'get.current'?: string
  gc?: string
  getCurrent?: string
  'get.time'?: string
  gti?: string
  getTime?: string
  'get.total'?: string
  gto?: string
  getTotal?: string
  'get.exists_time'?: string
  geti?: string
  getExistsTime?: string
  'get.exists_total'?: string
  geto?: string
  getExistsTotal?: string
  'get.missing_time'?: string
  gmti?: string
  getMissingTime?: string
  'get.missing_total'?: string
  gmto?: string
  getMissingTotal?: string
  'indexing.delete_current'?: string
  idc?: string
  indexingDeleteCurrent?: string
  'indexing.delete_time'?: string
  idti?: string
  indexingDeleteTime?: string
  'indexing.delete_total'?: string
  idto?: string
  indexingDeleteTotal?: string
  'indexing.index_current'?: string
  iic?: string
  indexingIndexCurrent?: string
  'indexing.index_time'?: string
  iiti?: string
  indexingIndexTime?: string
  'indexing.index_total'?: string
  iito?: string
  indexingIndexTotal?: string
  'indexing.index_failed'?: string
  iif?: string
  indexingIndexFailed?: string
  'merges.current'?: string
  mc?: string
  mergesCurrent?: string
  'merges.current_docs'?: string
  mcd?: string
  mergesCurrentDocs?: string
  'merges.current_size'?: string
  mcs?: string
  mergesCurrentSize?: string
  'merges.total'?: string
  mt?: string
  mergesTotal?: string
  'merges.total_docs'?: string
  mtd?: string
  mergesTotalDocs?: string
  'merges.total_size'?: string
  mts?: string
  mergesTotalSize?: string
  'merges.total_time'?: string
  mtt?: string
  mergesTotalTime?: string
  'refresh.total'?: string
  'refresh.time'?: string
  'refresh.external_total'?: string
  rto?: string
  refreshTotal?: string
  'refresh.external_time'?: string
  rti?: string
  refreshTime?: string
  'refresh.listeners'?: string
  rli?: string
  refreshListeners?: string
  'script.compilations'?: string
  scrcc?: string
  scriptCompilations?: string
  'script.cache_evictions'?: string
  scrce?: string
  scriptCacheEvictions?: string
  'script.compilation_limit_triggered'?: string
  scrclt?: string
  scriptCacheCompilationLimitTriggered?: string
  'search.fetch_current'?: string
  sfc?: string
  searchFetchCurrent?: string
  'search.fetch_time'?: string
  sfti?: string
  searchFetchTime?: string
  'search.fetch_total'?: string
  sfto?: string
  searchFetchTotal?: string
  'search.open_contexts'?: string
  so?: string
  searchOpenContexts?: string
  'search.query_current'?: string
  sqc?: string
  searchQueryCurrent?: string
  'search.query_time'?: string
  sqti?: string
  searchQueryTime?: string
  'search.query_total'?: string
  sqto?: string
  searchQueryTotal?: string
  'search.scroll_current'?: string
  scc?: string
  searchScrollCurrent?: string
  'search.scroll_time'?: string
  scti?: string
  searchScrollTime?: string
  'search.scroll_total'?: string
  scto?: string
  searchScrollTotal?: string
  'segments.count'?: string
  sc?: string
  segmentsCount?: string
  'segments.memory'?: string
  sm?: string
  segmentsMemory?: string
  'segments.index_writer_memory'?: string
  siwm?: string
  segmentsIndexWriterMemory?: string
  'segments.version_map_memory'?: string
  svmm?: string
  segmentsVersionMapMemory?: string
  'segments.fixed_bitset_memory'?: string
  sfbm?: string
  fixedBitsetMemory?: string
  'suggest.current'?: string
  suc?: string
  suggestCurrent?: string
  'suggest.time'?: string
  suti?: string
  suggestTime?: string
  'suggest.total'?: string
  suto?: string
  suggestTotal?: string
  'bulk.total_operations'?: string
  bto?: string
  bulkTotalOperations?: string
  'bulk.total_time'?: string
  btti?: string
  bulkTotalTime?: string
  'bulk.total_size_in_bytes'?: string
  btsi?: string
  bulkTotalSizeInBytes?: string
  'bulk.avg_time'?: string
  bati?: string
  bulkAvgTime?: string
  'bulk.avg_size_in_bytes'?: string
  basi?: string
  bulkAvgSizeInBytes?: string
}

export interface CatCatNodesCatNodesRequest extends CatCatRequestBase {
  bytes?: Bytes
  full_id?: boolean | string
}

export type CatCatNodesCatNodesResponse = CatCatNodesCatNodesRecord[]

export interface CatCatPendingTasksCatPendingTasksRecord {
  insertOrder?: string
  o?: string
  timeInQueue?: string
  t?: string
  priority?: string
  p?: string
  source?: string
  s?: string
}

export interface CatCatPendingTasksCatPendingTasksRequest extends CatCatRequestBase {
}

export type CatCatPendingTasksCatPendingTasksResponse = CatCatPendingTasksCatPendingTasksRecord[]

export interface CatCatPluginsCatPluginsRecord {
  id?: NodeId
  name?: Name
  n?: Name
  component?: string
  c?: string
  version?: VersionString
  v?: VersionString
  description?: string
  d?: string
  type?: Type
  t?: Type
}

export interface CatCatPluginsCatPluginsRequest extends CatCatRequestBase {
}

export type CatCatPluginsCatPluginsResponse = CatCatPluginsCatPluginsRecord[]

export interface CatCatRecoveryCatRecoveryRecord {
  index?: IndexName
  i?: IndexName
  idx?: IndexName
  shard?: string
  s?: string
  sh?: string
  start_time?: string
  start?: string
  start_time_millis?: string
  start_millis?: string
  stop_time?: string
  stop?: string
  stop_time_millis?: string
  stop_millis?: string
  time?: string
  t?: string
  ti?: string
  type?: Type
  ty?: Type
  stage?: string
  st?: string
  source_host?: string
  shost?: string
  source_node?: string
  snode?: string
  target_host?: string
  thost?: string
  target_node?: string
  tnode?: string
  repository?: string
  rep?: string
  snapshot?: string
  snap?: string
  files?: string
  f?: string
  files_recovered?: string
  fr?: string
  files_percent?: Percentage
  fp?: Percentage
  files_total?: string
  tf?: string
  bytes?: string
  b?: string
  bytes_recovered?: string
  br?: string
  bytes_percent?: Percentage
  bp?: Percentage
  bytes_total?: string
  tb?: string
  translog_ops?: string
  to?: string
  translog_ops_recovered?: string
  tor?: string
  translog_ops_percent?: Percentage
  top?: Percentage
}

export interface CatCatRecoveryCatRecoveryRequest extends CatCatRequestBase {
  index?: Indices
  active_only?: boolean
  bytes?: Bytes
  detailed?: boolean
}

export type CatCatRecoveryCatRecoveryResponse = CatCatRecoveryCatRecoveryRecord[]

export interface CatCatRepositoriesCatRepositoriesRecord {
  id?: string
  repoId?: string
  type?: string
  t?: string
}

export interface CatCatRepositoriesCatRepositoriesRequest extends CatCatRequestBase {
}

export type CatCatRepositoriesCatRepositoriesResponse = CatCatRepositoriesCatRepositoriesRecord[]

export interface CatCatRequestBase extends RequestBase, SpecUtilsCommonCatQueryParameters {
}

export interface CatCatResponseBase<TCatRecord = unknown> extends ResponseBase {
}

export interface CatCatSegmentsCatSegmentsRecord {
  index?: IndexName
  i?: IndexName
  idx?: IndexName
  shard?: string
  s?: string
  sh?: string
  prirep?: string
  p?: string
  pr?: string
  primaryOrReplica?: string
  ip?: string
  id?: NodeId
  segment?: string
  seg?: string
  generation?: string
  g?: string
  gen?: string
  'docs.count'?: string
  dc?: string
  docsCount?: string
  'docs.deleted'?: string
  dd?: string
  docsDeleted?: string
  size?: ByteSize
  si?: ByteSize
  'size.memory'?: ByteSize
  sm?: ByteSize
  sizeMemory?: ByteSize
  committed?: string
  ic?: string
  isCommitted?: string
  searchable?: string
  is?: string
  isSearchable?: string
  version?: VersionString
  v?: VersionString
  compound?: string
  ico?: string
  isCompound?: string
}

export interface CatCatSegmentsCatSegmentsRequest extends CatCatRequestBase {
  index?: Indices
  bytes?: Bytes
}

export type CatCatSegmentsCatSegmentsResponse = CatCatSegmentsCatSegmentsRecord[]

export interface CatCatShardsCatShardsRecord {
  index?: string
  i?: string
  idx?: string
  shard?: string
  s?: string
  sh?: string
  prirep?: string
  p?: string
  pr?: string
  primaryOrReplica?: string
  state?: string
  st?: string
  docs?: string
  d?: string
  dc?: string
  store?: string
  sto?: string
  ip?: string
  id?: string
  node?: string
  n?: string
  sync_id?: string
  'unassigned.reason'?: string
  ur?: string
  'unassigned.at'?: string
  ua?: string
  'unassigned.for'?: string
  uf?: string
  'unassigned.details'?: string
  ud?: string
  'recoverysource.type'?: string
  rs?: string
  'completion.size'?: string
  cs?: string
  completionSize?: string
  'fielddata.memory_size'?: string
  fm?: string
  fielddataMemory?: string
  'fielddata.evictions'?: string
  fe?: string
  fielddataEvictions?: string
  'query_cache.memory_size'?: string
  qcm?: string
  queryCacheMemory?: string
  'query_cache.evictions'?: string
  qce?: string
  queryCacheEvictions?: string
  'flush.total'?: string
  ft?: string
  flushTotal?: string
  'flush.total_time'?: string
  ftt?: string
  flushTotalTime?: string
  'get.current'?: string
  gc?: string
  getCurrent?: string
  'get.time'?: string
  gti?: string
  getTime?: string
  'get.total'?: string
  gto?: string
  getTotal?: string
  'get.exists_time'?: string
  geti?: string
  getExistsTime?: string
  'get.exists_total'?: string
  geto?: string
  getExistsTotal?: string
  'get.missing_time'?: string
  gmti?: string
  getMissingTime?: string
  'get.missing_total'?: string
  gmto?: string
  getMissingTotal?: string
  'indexing.delete_current'?: string
  idc?: string
  indexingDeleteCurrent?: string
  'indexing.delete_time'?: string
  idti?: string
  indexingDeleteTime?: string
  'indexing.delete_total'?: string
  idto?: string
  indexingDeleteTotal?: string
  'indexing.index_current'?: string
  iic?: string
  indexingIndexCurrent?: string
  'indexing.index_time'?: string
  iiti?: string
  indexingIndexTime?: string
  'indexing.index_total'?: string
  iito?: string
  indexingIndexTotal?: string
  'indexing.index_failed'?: string
  iif?: string
  indexingIndexFailed?: string
  'merges.current'?: string
  mc?: string
  mergesCurrent?: string
  'merges.current_docs'?: string
  mcd?: string
  mergesCurrentDocs?: string
  'merges.current_size'?: string
  mcs?: string
  mergesCurrentSize?: string
  'merges.total'?: string
  mt?: string
  mergesTotal?: string
  'merges.total_docs'?: string
  mtd?: string
  mergesTotalDocs?: string
  'merges.total_size'?: string
  mts?: string
  mergesTotalSize?: string
  'merges.total_time'?: string
  mtt?: string
  mergesTotalTime?: string
  'refresh.total'?: string
  'refresh.time'?: string
  'refresh.external_total'?: string
  rto?: string
  refreshTotal?: string
  'refresh.external_time'?: string
  rti?: string
  refreshTime?: string
  'refresh.listeners'?: string
  rli?: string
  refreshListeners?: string
  'search.fetch_current'?: string
  sfc?: string
  searchFetchCurrent?: string
  'search.fetch_time'?: string
  sfti?: string
  searchFetchTime?: string
  'search.fetch_total'?: string
  sfto?: string
  searchFetchTotal?: string
  'search.open_contexts'?: string
  so?: string
  searchOpenContexts?: string
  'search.query_current'?: string
  sqc?: string
  searchQueryCurrent?: string
  'search.query_time'?: string
  sqti?: string
  searchQueryTime?: string
  'search.query_total'?: string
  sqto?: string
  searchQueryTotal?: string
  'search.scroll_current'?: string
  scc?: string
  searchScrollCurrent?: string
  'search.scroll_time'?: string
  scti?: string
  searchScrollTime?: string
  'search.scroll_total'?: string
  scto?: string
  searchScrollTotal?: string
  'segments.count'?: string
  sc?: string
  segmentsCount?: string
  'segments.memory'?: string
  sm?: string
  segmentsMemory?: string
  'segments.index_writer_memory'?: string
  siwm?: string
  segmentsIndexWriterMemory?: string
  'segments.version_map_memory'?: string
  svmm?: string
  segmentsVersionMapMemory?: string
  'segments.fixed_bitset_memory'?: string
  sfbm?: string
  fixedBitsetMemory?: string
  'seq_no.max'?: string
  sqm?: string
  maxSeqNo?: string
  'seq_no.local_checkpoint'?: string
  sql?: string
  localCheckpoint?: string
  'seq_no.global_checkpoint'?: string
  sqg?: string
  globalCheckpoint?: string
  'warmer.current'?: string
  wc?: string
  warmerCurrent?: string
  'warmer.total'?: string
  wto?: string
  warmerTotal?: string
  'warmer.total_time'?: string
  wtt?: string
  warmerTotalTime?: string
  'path.data'?: string
  pd?: string
  dataPath?: string
  'path.state'?: string
  ps?: string
  statsPath?: string
  'bulk.total_operations'?: string
  bto?: string
  bulkTotalOperations?: string
  'bulk.total_time'?: string
  btti?: string
  bulkTotalTime?: string
  'bulk.total_size_in_bytes'?: string
  btsi?: string
  bulkTotalSizeInBytes?: string
  'bulk.avg_time'?: string
  bati?: string
  bulkAvgTime?: string
  'bulk.avg_size_in_bytes'?: string
  basi?: string
  bulkAvgSizeInBytes?: string
}

export interface CatCatShardsCatShardsRequest extends CatCatRequestBase {
  index?: Indices
  bytes?: Bytes
}

export type CatCatShardsCatShardsResponse = CatCatShardsCatShardsRecord[]

export interface CatCatSnapshotsCatSnapshotsRecord {
  id?: string
  snapshot?: string
  repository?: string
  re?: string
  repo?: string
  status?: string
  s?: string
  start_epoch?: EpochMillis
  ste?: EpochMillis
  startEpoch?: EpochMillis
  start_time?: DateString
  sti?: DateString
  startTime?: DateString
  end_epoch?: EpochMillis
  ete?: EpochMillis
  endEpoch?: EpochMillis
  end_time?: DateString
  eti?: DateString
  endTime?: DateString
  duration?: Time
  dur?: Time
  indices?: string
  i?: string
  successful_shards?: string
  ss?: string
  failed_shards?: string
  fs?: string
  total_shards?: string
  ts?: string
  reason?: string
  r?: string
}

export interface CatCatSnapshotsCatSnapshotsRequest extends CatCatRequestBase {
  repository?: Names
  ignore_unavailable?: boolean
}

export type CatCatSnapshotsCatSnapshotsResponse = CatCatSnapshotsCatSnapshotsRecord[]

export interface CatCatTasksCatTasksRecord {
  id?: Id
  action?: string
  ac?: string
  task_id?: Id
  ti?: Id
  parent_task_id?: string
  pti?: string
  type?: Type
  ty?: Type
  start_time?: string
  start?: string
  timestamp?: string
  ts?: string
  hms?: string
  hhmmss?: string
  running_time_ns?: string
  running_time?: string
  time?: string
  node_id?: NodeId
  ni?: NodeId
  ip?: string
  i?: string
  port?: string
  po?: string
  node?: string
  n?: string
  version?: VersionString
  v?: VersionString
  x_opaque_id?: string
  x?: string
  description?: string
  desc?: string
}

export interface CatCatTasksCatTasksRequest extends CatCatRequestBase {
  actions?: string[]
  detailed?: boolean
  node_id?: string[]
  parent_task?: long
}

export type CatCatTasksCatTasksResponse = CatCatTasksCatTasksRecord[]

export interface CatCatTemplatesCatTemplatesRecord {
  name?: Name
  n?: Name
  index_patterns?: string
  t?: string
  order?: string
  o?: string
  p?: string
  version?: VersionString
  v?: VersionString
  composed_of?: string
  c?: string
}

export interface CatCatTemplatesCatTemplatesRequest extends CatCatRequestBase {
  name?: Name
}

export type CatCatTemplatesCatTemplatesResponse = CatCatTemplatesCatTemplatesRecord[]

export interface CatCatThreadPoolCatThreadPoolRecord {
  node_name?: string
  nn?: string
  node_id?: NodeId
  id?: NodeId
  ephemeral_node_id?: string
  eid?: string
  pid?: string
  p?: string
  host?: string
  h?: string
  ip?: string
  i?: string
  port?: string
  po?: string
  name?: string
  n?: string
  type?: string
  t?: string
  active?: string
  a?: string
  pool_size?: string
  psz?: string
  queue?: string
  q?: string
  queue_size?: string
  qs?: string
  rejected?: string
  r?: string
  largest?: string
  l?: string
  completed?: string
  c?: string
  core?: string
  cr?: string
  max?: string
  mx?: string
  size?: string
  sz?: string
  keep_alive?: string
  ka?: string
}

export interface CatCatThreadPoolCatThreadPoolRequest extends CatCatRequestBase {
  thread_pool_patterns?: Names
  size?: Size | boolean
}

export type CatCatThreadPoolCatThreadPoolResponse = CatCatThreadPoolCatThreadPoolRecord[]

export interface CatCatTrainedModelsCatTrainedModelsRecord {
  id?: Id
  created_by?: string
  c?: string
  createdBy?: string
  heap_size?: ByteSize
  hs?: ByteSize
  modelHeapSize?: ByteSize
  operations?: string
  o?: string
  modelOperations?: string
  license?: string
  l?: string
  create_time?: DateString
  ct?: DateString
  version?: VersionString
  v?: VersionString
  description?: string
  d?: string
  'ingest.pipelines'?: string
  ip?: string
  ingestPipelines?: string
  'ingest.count'?: string
  ic?: string
  ingestCount?: string
  'ingest.time'?: string
  it?: string
  ingestTime?: string
  'ingest.current'?: string
  icurr?: string
  ingestCurrent?: string
  'ingest.failed'?: string
  if?: string
  ingestFailed?: string
  'data_frame.id'?: string
  dfid?: string
  dataFrameAnalytics?: string
  'data_frame.create_time'?: string
  dft?: string
  dataFrameAnalyticsTime?: string
  'data_frame.source_index'?: string
  dfsi?: string
  dataFrameAnalyticsSrcIndex?: string
  'data_frame.analysis'?: string
  dfa?: string
  dataFrameAnalyticsAnalysis?: string
}

export interface CatCatTrainedModelsCatTrainedModelsRequest extends CatCatRequestBase {
  model_id?: Id
  allow_no_match?: boolean
  bytes?: Bytes
  from?: integer
  size?: integer
}

export type CatCatTrainedModelsCatTrainedModelsResponse = CatCatTrainedModelsCatTrainedModelsRecord[]

export interface CatCatTransformsCatTransformsRecord {
  id?: Id
  state?: string
  s?: string
  checkpoint?: string
  c?: string
  documents_processed?: string
  docp?: string
  documentsProcessed?: string
  checkpoint_progress?: string
  cp?: string
  checkpointProgress?: string
  last_search_time?: string
  lst?: string
  lastSearchTime?: string
  changes_last_detection_time?: string
  cldt?: string
  create_time?: string
  ct?: string
  createTime?: string
  version?: VersionString
  v?: VersionString
  source_index?: string
  si?: string
  sourceIndex?: string
  dest_index?: string
  di?: string
  destIndex?: string
  pipeline?: string
  p?: string
  description?: string
  d?: string
  transform_type?: string
  tt?: string
  frequency?: string
  f?: string
  max_page_search_size?: string
  mpsz?: string
  docs_per_second?: string
  dps?: string
  reason?: string
  r?: string
  search_total?: string
  st?: string
  search_failure?: string
  sf?: string
  search_time?: string
  stime?: string
  index_total?: string
  it?: string
  index_failure?: string
  if?: string
  index_time?: string
  itime?: string
  documents_indexed?: string
  doci?: string
  delete_time?: string
  dtime?: string
  documents_deleted?: string
  docd?: string
  trigger_count?: string
  tc?: string
  pages_processed?: string
  pp?: string
  processing_time?: string
  pt?: string
  checkpoint_duration_time_exp_avg?: string
  cdtea?: string
  checkpointTimeExpAvg?: string
  indexed_documents_exp_avg?: string
  idea?: string
  processed_documents_exp_avg?: string
  pdea?: string
}

export interface CatCatTransformsCatTransformsRequest extends CatCatRequestBase {
  transform_id?: Id
  allow_no_match?: boolean
  from?: integer
  size?: integer
}

export type CatCatTransformsCatTransformsResponse = CatCatTransformsCatTransformsRecord[]

export interface MlInfoCategorizationAnalyzer {
  filter?: string | AnalysisTokenFiltersTokenFilter[]
  tokenizer?: string | AnalysisTokenizersTokenizer
  char_filter?: string | AnalysisCharFiltersCharFilter[]
}

export interface MlCategoryDefinition {
  category_id: long
  examples: string[]
  job_id: Id
  max_matching_length: long
  regex: string
  terms: string
}

export type CategoryId = string

export interface CcrStatsCcrAutoFollowStats {
  auto_followed_clusters: CcrStatsAutoFollowedCluster[]
  number_of_failed_follow_indices: long
  number_of_failed_remote_cluster_state_requests: long
  number_of_successful_follow_indices: long
  recent_auto_follow_errors: ErrorCause[]
}

export interface CcrStatsCcrFollowStats {
  indices: CcrFollowIndexStatsFollowIndexStats[]
}

export interface CcrStatsCcrStatsRequest extends RequestBase {
}

export interface CcrStatsCcrStatsResponse extends ResponseBase {
  auto_follow_stats: CcrStatsCcrAutoFollowStats
  follow_stats: CcrStatsCcrFollowStats
}

export interface XpackUsageCcrUsage extends XpackUsageXPackUsage {
  auto_follow_patterns_count: integer
  follower_indices_count: integer
}

export interface WatcherChainInput {
  inputs: WatcherInputContainer[]
}

export interface WatcherChainTransform {
  transforms: WatcherTransformContainer[]
}

export type AnalysisCharFiltersCharFilter = AnalysisCharFiltersHtmlStripCharFilter | AnalysisCharFiltersMappingCharFilter | AnalysisTokenFiltersPatternReplaceTokenFilter

export interface AnalysisCharFiltersCharFilterBase {
  type: string
  version?: VersionString
}

export interface IndicesAnalyzeCharFilterDetail {
  filtered_text: string[]
  name: string
}

export interface ClusterClusterStatsCharFilterTypes {
  char_filter_types: ClusterClusterStatsFieldTypesStats[]
  tokenizer_types: ClusterClusterStatsFieldTypesStats[]
  filter_types: ClusterClusterStatsFieldTypesStats[]
  analyzer_types: ClusterClusterStatsFieldTypesStats[]
  built_in_char_filters: ClusterClusterStatsFieldTypesStats[]
  built_in_tokenizers: ClusterClusterStatsFieldTypesStats[]
  built_in_filters: ClusterClusterStatsFieldTypesStats[]
  built_in_analyzers: ClusterClusterStatsFieldTypesStats[]
}

export interface AnalysisTokenizersCharGroupTokenizer extends AnalysisTokenizersTokenizerBase {
  tokenize_on_chars: string[]
}

export interface AggregationsBucketSignificantTermsHeuristicsChiSquareHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export type QueryDslJoiningHasChildChildScoreMode = 'none' | 'avg' | 'sum' | 'max' | 'min'

export interface AggregationsBucketChildrenChildrenAggregation extends AggregationsBucketBucketAggregationBase {
  type?: RelationName
}

export interface MlChunkingConfig {
  mode: MlChunkingMode
  time_span?: Time
}

export type MlChunkingMode = 'auto' | 'manual' | 'off'

export interface IngestProcessorsCircleProcessor extends IngestProcessorBase {
  error_distance: double
  field: Field
  ignore_missing: boolean
  shape_type: IngestProcessorsShapeType
  target_field: Field
}

export interface AggregationsPipelineInferenceBucketClassificationInferenceOptions {
  num_top_classes?: integer
  num_top_feature_importance_values?: integer
  prediction_field_type?: string
}

export interface SnapshotCleanupRepositoryCleanupRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
}

export interface SnapshotCleanupRepositoryCleanupRepositoryResponse extends ResponseBase {
  results: SnapshotCleanupRepositoryCleanupRepositoryResults
}

export interface SnapshotCleanupRepositoryCleanupRepositoryResults {
  deleted_blobs: long
  deleted_bytes: long
}

export interface SecurityClearApiKeyCacheClearApiKeyCacheNode {
  name: Name
}

export interface SecurityClearCachedPrivilegesClearCachedPrivilegeNode {
  name: Name
}

export interface ClearScrollClearScrollRequest extends RequestBase {
  scroll_id?: Ids
  body?: {
    scroll_id?: Ids
  }
}

export interface ClearScrollClearScrollResponse extends ResponseBase {
}

export interface SqlClearSqlCursorClearSqlCursorRequest extends RequestBase {
  body: {
    cursor: string
  }
}

export interface SqlClearSqlCursorClearSqlCursorResponse extends ResponseBase {
  succeeded: boolean
}

export interface IndicesCloseCloseIndexResult {
  closed: boolean
  shards?: Record<string, IndicesCloseCloseShardResult>
}

export interface ClosePointInTimeClosePointInTimeRequest extends RequestBase {
  body?: {
    id: Id
  }
}

export interface ClosePointInTimeClosePointInTimeResponse extends ResponseBase {
  succeeded: boolean
  num_freed: integer
}

export interface IndicesCloseCloseShardResult {
  failures: ShardFailure[]
}

export interface ClusterClusterAllocationExplainClusterAllocationExplainRequest extends RequestBase {
  include_disk_info?: boolean
  include_yes_decisions?: boolean
  body?: {
    current_node?: string
    index?: IndexName
    primary?: boolean
    shard?: integer
  }
}

export interface ClusterClusterAllocationExplainClusterAllocationExplainResponse extends ResponseBase {
  allocate_explanation?: string
  allocation_delay?: string
  allocation_delay_in_millis?: long
  can_allocate?: ClusterClusterAllocationExplainDecision
  can_move_to_other_node?: ClusterClusterAllocationExplainDecision
  can_rebalance_cluster?: ClusterClusterAllocationExplainDecision
  can_rebalance_cluster_decisions?: ClusterClusterAllocationExplainAllocationDecision[]
  can_rebalance_to_other_node?: ClusterClusterAllocationExplainDecision
  can_remain_decisions?: ClusterClusterAllocationExplainAllocationDecision[]
  can_remain_on_current_node?: ClusterClusterAllocationExplainDecision
  cluster_info?: ClusterClusterAllocationExplainClusterInfo
  configured_delay?: string
  configured_delay_in_millis?: long
  current_node?: ClusterClusterAllocationExplainCurrentNode
  current_state: string
  index: IndexName
  move_explanation?: string
  node_allocation_decisions?: ClusterClusterAllocationExplainNodeAllocationExplanation[]
  primary: boolean
  rebalance_explanation?: string
  remaining_delay?: string
  remaining_delay_in_millis?: long
  shard: integer
  unassigned_info?: ClusterClusterAllocationExplainUnassignedInformation
}

export interface SslGetCertificatesClusterCertificateInformation {
  alias?: string
  expiry: DateString
  format: string
  has_private_key: boolean
  path: string
  serial_number: string
  subject_dn: string
}

export interface ClusterClusterExistsComponentTemplateClusterComponentTemplateExistsRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface ClusterClusterExistsComponentTemplateClusterComponentTemplateExistsResponse extends ResponseBase {
  stub: integer
}

export interface ClusterClusterDeleteComponentTemplateClusterDeleteComponentTemplateRequest extends RequestBase {
  name: Name
  master_timeout?: Time
  timeout?: Time
}

export interface ClusterClusterDeleteComponentTemplateClusterDeleteComponentTemplateResponse extends AcknowledgedResponseBase {
}

export interface ClusterClusterDeleteVotingConfigExclusionsClusterDeleteVotingConfigExclusionsRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ClusterClusterDeleteVotingConfigExclusionsClusterDeleteVotingConfigExclusionsResponse extends ResponseBase {
  stub: integer
}

export interface ClusterClusterStatsClusterFileSystem {
  available_in_bytes: long
  free_in_bytes: long
  total_in_bytes: long
}

export interface ClusterClusterGetComponentTemplateClusterGetComponentTemplateRequest extends RequestBase {
  name?: Name
  flat_settings?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface ClusterClusterGetComponentTemplateClusterGetComponentTemplateResponse extends ResponseBase {
  component_templates: ClusterComponentTemplate[]
}

export interface ClusterClusterGetSettingsClusterGetSettingsRequest extends RequestBase {
  flat_settings?: boolean
  include_defaults?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface ClusterClusterGetSettingsClusterGetSettingsResponse extends ResponseBase {
  persistent: Record<string, any>
  transient: Record<string, any>
  defaults?: Record<string, any>
}

export interface ClusterClusterHealthClusterHealthRequest extends RequestBase {
  index?: Indices
  expand_wildcards?: ExpandWildcards
  level?: Level
  local?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  wait_for_events?: WaitForEvents
  wait_for_nodes?: string
  wait_for_no_initializing_shards?: boolean
  wait_for_no_relocating_shards?: boolean
  wait_for_status?: WaitForStatus
}

export interface ClusterClusterHealthClusterHealthResponse extends ResponseBase {
  active_primary_shards: integer
  active_shards: integer
  active_shards_percent_as_number: Percentage
  cluster_name: string
  delayed_unassigned_shards: integer
  indices?: Record<IndexName, ClusterClusterHealthIndexHealthStats>
  initializing_shards: integer
  number_of_data_nodes: integer
  number_of_in_flight_fetch: integer
  number_of_nodes: integer
  number_of_pending_tasks: integer
  relocating_shards: integer
  status: Health
  task_max_waiting_in_queue_millis: EpochMillis
  timed_out: boolean
  unassigned_shards: integer
}

export interface ClusterClusterStatsClusterIndicesShardsIndexStats {
  primaries: ClusterClusterStatsClusterShardMetrics
  replication: ClusterClusterStatsClusterShardMetrics
  shards: ClusterClusterStatsClusterShardMetrics
}

export interface ClusterClusterStatsClusterIndicesShardsStats {
  index?: ClusterClusterStatsClusterIndicesShardsIndexStats
  primaries?: double
  replication?: double
  total?: double
}

export interface ClusterClusterStatsClusterIndicesStats {
  completion: CompletionStats
  count: long
  docs: DocStats
  fielddata: FielddataStats
  query_cache: QueryCacheStats
  segments: SegmentsStats
  shards: ClusterClusterStatsClusterIndicesShardsStats
  store: StoreStats
  mappings: ClusterClusterStatsFieldTypesMappings
  analysis: ClusterClusterStatsCharFilterTypes
  versions?: ClusterClusterStatsIndicesVersionsStats[]
}

export interface ClusterClusterAllocationExplainClusterInfo {
  nodes: Record<string, ClusterClusterAllocationExplainNodeDiskUsage>
  shard_sizes: Record<string, long>
  shard_data_set_sizes?: Record<string, string>
  shard_paths: Record<string, string>
  reserved_sizes: ClusterClusterAllocationExplainReservedSize[]
}

export interface ClusterClusterStatsClusterIngestStats {
  number_of_pipelines: integer
  processor_stats: Record<string, ClusterClusterStatsClusterProcessorStats>
}

export interface ClusterClusterStatsClusterJvm {
  max_uptime_in_millis: long
  mem: ClusterClusterStatsClusterJvmMemory
  threads: long
  versions: ClusterClusterStatsClusterJvmVersion[]
}

export interface ClusterClusterStatsClusterJvmMemory {
  heap_max_in_bytes: long
  heap_used_in_bytes: long
}

export interface ClusterClusterStatsClusterJvmVersion {
  bundled_jdk: boolean
  count: integer
  using_bundled_jdk: boolean
  version: VersionString
  vm_name: string
  vm_vendor: string
  vm_version: VersionString
}

export interface ClusterClusterStatsClusterNetworkTypes {
  http_types: Record<string, integer>
  transport_types: Record<string, integer>
}

export interface ClusterClusterStatsClusterNodeCount {
  coordinating_only: integer
  data: integer
  ingest: integer
  master: integer
  total: integer
  voting_only: integer
  data_cold: integer
  data_frozen?: integer
  data_content: integer
  data_warm: integer
  data_hot: integer
  ml: integer
  remote_cluster_client: integer
  transform: integer
}

export interface ClusterClusterStatsClusterNodesStats {
  count: ClusterClusterStatsClusterNodeCount
  discovery_types: Record<string, integer>
  fs: ClusterClusterStatsClusterFileSystem
  ingest: ClusterClusterStatsClusterIngestStats
  jvm: ClusterClusterStatsClusterJvm
  network_types: ClusterClusterStatsClusterNetworkTypes
  os: ClusterClusterStatsClusterOperatingSystemStats
  packaging_types: ClusterClusterStatsNodePackagingType[]
  plugins: PluginStats[]
  process: ClusterClusterStatsClusterProcess
  versions: VersionString[]
}

export interface ClusterClusterStatsClusterOperatingSystemArchitecture {
  count: integer
  arch: string
}

export interface ClusterClusterStatsClusterOperatingSystemName {
  count: integer
  name: string
}

export interface NodesNodesInfoClusterOperatingSystemPrettyName {
  count: integer
  pretty_name: string
}

export interface ClusterClusterStatsClusterOperatingSystemStats {
  allocated_processors: integer
  available_processors: integer
  mem: ClusterClusterStatsOperatingSystemMemoryInfo
  names: ClusterClusterStatsClusterOperatingSystemName[]
  pretty_names: NodesNodesInfoClusterOperatingSystemPrettyName[]
  architectures?: ClusterClusterStatsClusterOperatingSystemArchitecture[]
}

export interface ClusterClusterPendingTasksClusterPendingTasksRequest extends RequestBase {
  local?: boolean
  master_timeout?: Time
}

export interface ClusterClusterPendingTasksClusterPendingTasksResponse extends ResponseBase {
  tasks: ClusterClusterPendingTasksPendingTask[]
}

export interface ClusterClusterPutVotingConfigExclusionsClusterPostVotingConfigExclusionsRequest extends RequestBase {
  node_names?: Names
  node_ids?: Ids
  timeout?: Time
  wait_for_removal?: boolean
}

export interface ClusterClusterPutVotingConfigExclusionsClusterPostVotingConfigExclusionsResponse extends ResponseBase {
  stub: integer
}

export interface ClusterClusterStatsClusterProcess {
  cpu: ClusterClusterStatsClusterProcessCpu
  open_file_descriptors: ClusterClusterStatsClusterProcessOpenFileDescriptors
}

export interface ClusterClusterStatsClusterProcessCpu {
  percent: integer
}

export interface ClusterClusterStatsClusterProcessOpenFileDescriptors {
  avg: long
  max: long
  min: long
}

export interface ClusterClusterStatsClusterProcessorStats {
  count: long
  current: long
  failed: long
  time_in_millis: long
}

export interface ClusterClusterPutComponentTemplateClusterPutComponentTemplateRequest extends RequestBase {
  name: Name
  create?: boolean
  master_timeout?: Time
  body: {
    template: IndexIndexState
    aliases?: Record<string, IndicesAliasDefinition>
    mappings?: MappingTypeMapping
    settings?: IndexIndexSettings
    version?: VersionNumber
    _meta?: IndexMetaData
  }
}

export interface ClusterClusterPutComponentTemplateClusterPutComponentTemplateResponse extends AcknowledgedResponseBase {
}

export interface ClusterClusterPutSettingsClusterPutSettingsRequest extends RequestBase {
  flat_settings?: boolean
  master_timeout?: Time
  timeout?: Time
  body: {
    persistent?: Record<string, any>
    transient?: Record<string, any>
  }
}

export interface ClusterClusterPutSettingsClusterPutSettingsResponse extends ResponseBase {
  acknowledged: boolean
  persistent: Record<string, any>
  transient: Record<string, any>
}

export interface ClusterClusterRemoteInfoClusterRemoteInfo {
  connected: boolean
  initial_connect_timeout: Time
  max_connections_per_cluster: integer
  num_nodes_connected: long
  seeds: string[]
  skip_unavailable: boolean
}

export interface ClusterClusterRemoteInfoClusterRemoteInfoRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ClusterClusterRemoteInfoClusterRemoteInfoResponse extends DictionaryResponseBase<string, ClusterClusterRemoteInfoClusterRemoteInfo> {
}

export interface ClusterClusterRerouteClusterRerouteCommand {
  cancel?: ClusterClusterRerouteClusterRerouteCommandCancelAction
  move?: ClusterClusterRerouteClusterRerouteCommandMoveAction
  allocate_replica?: ClusterClusterRerouteClusterRerouteCommandAllocateReplicaAction
  allocate_stale_primary?: ClusterClusterRerouteClusterRerouteCommandAllocatePrimaryAction
  allocate_empty_primary?: ClusterClusterRerouteClusterRerouteCommandAllocatePrimaryAction
}

export interface ClusterClusterRerouteClusterRerouteCommandAllocatePrimaryAction {
  index: IndexName
  shard: integer
  node: string
  accept_data_loss: boolean
}

export interface ClusterClusterRerouteClusterRerouteCommandAllocateReplicaAction {
  index: IndexName
  shard: integer
  node: string
}

export interface ClusterClusterRerouteClusterRerouteCommandCancelAction {
  index: IndexName
  shard: integer
  node: string
  allow_primary?: boolean
}

export interface ClusterClusterRerouteClusterRerouteCommandMoveAction {
  index: IndexName
  shard: integer
  from_node: string
  to_node: string
}

export interface ClusterClusterRerouteClusterRerouteDecision {
  decider: string
  decision: string
  explanation: string
}

export interface ClusterClusterRerouteClusterRerouteExplanation {
  command: string
  decisions: ClusterClusterRerouteClusterRerouteDecision[]
  parameters: ClusterClusterRerouteClusterRerouteParameters
}

export interface ClusterClusterRerouteClusterRerouteParameters {
  allow_primary: boolean
  index: IndexName
  node: NodeName
  shard: integer
  from_node?: NodeName
  to_node?: NodeName
}

export interface ClusterClusterRerouteClusterRerouteRequest extends RequestBase {
  dry_run?: boolean
  explain?: boolean
  metric?: Metrics
  retry_failed?: boolean
  master_timeout?: Time
  timeout?: Time
  body?: {
    commands?: ClusterClusterRerouteClusterRerouteCommand[]
  }
}

export interface ClusterClusterRerouteClusterRerouteResponse extends AcknowledgedResponseBase {
  explanations?: ClusterClusterRerouteClusterRerouteExplanation[]
  state: ClusterClusterRerouteClusterRerouteState
}

export interface ClusterClusterRerouteClusterRerouteState {
  cluster_uuid: Uuid
  state_uuid?: Uuid
  master_node?: string
  version?: VersionNumber
  blocks?: EmptyObject
  nodes?: Record<NodeName, NodesNodeAttributes>
  routing_table?: Record<string, EmptyObject>
  routing_nodes?: ClusterClusterStateRoutingNodes
  security_tokens?: Record<string, string>
  snapshots?: ClusterClusterStateSnapshots
  snapshot_deletions?: ClusterClusterStateDeletedSnapshots
  metadata?: ClusterClusterStateMetadata
}

export interface ClusterClusterStatsClusterShardMetrics {
  avg: double
  max: double
  min: double
}

export interface ClusterClusterStateBlockIndex {
  description?: string
  retryable?: boolean
  levels?: string[]
  aliases?: IndexAlias[]
  aliases_version?: VersionNumber
  version?: VersionNumber
  mapping_version?: VersionNumber
  settings_version?: VersionNumber
  routing_num_shards?: VersionNumber
  state?: string
  settings?: Record<IndexName, IndexIndexSettings>
  in_sync_allocations?: Record<string, string[]>
  primary_terms?: Record<string, integer>
  mappings?: Record<string, MappingTypeMapping>
  rollover_info?: Record<string, IndicesRolloverIndicesRolloverConditions>
  timestamp_range?: Record<string, any>
  system?: boolean
}

export interface ClusterClusterStateClusterStateBlocks {
  indices?: Record<IndexName, Record<string, ClusterClusterStateBlockIndex>>
}

export interface ClusterClusterStateDeletedSnapshots {
  snapshot_deletions: string[]
}

export interface ClusterClusterStateIndexLifecycle {
  policies: Record<IndexName, ClusterClusterStateIndexLifecycleSummary>
  operation_mode: IlmGetStatusLifecycleOperationMode
}

export interface ClusterClusterStateIndexLifecyclePolicy {
  phases: IlmPhases
}

export interface ClusterClusterStateIndexLifecycleSummary {
  policy: ClusterClusterStateIndexLifecyclePolicy
  headers: HttpHeaders
  version: VersionNumber
  modified_date: long
  modified_date_string: DateString
}

export interface ClusterClusterStateIngest {
  pipeline: ClusterClusterStateIngestPipeline[]
}

export interface ClusterClusterStateIngestPipeline {
  id: Id
  config: ClusterClusterStateIngestPipelineConfig
}

export interface ClusterClusterStateIngestPipelineConfig {
  description?: string
  version?: VersionNumber
  processors: IngestProcessorContainer[]
}

export interface ClusterClusterStateMetadata {
  cluster_uuid: Uuid
  cluster_uuid_committed: boolean
  templates: ClusterClusterStateMetadataTemplate
  indices?: Record<IndexName, ClusterClusterStateBlockIndex>
  'index-graveyard': ClusterClusterStateMetadataIndexGraveyard
  cluster_coordination: ClusterClusterStateMetadataClusterCoordination
  ingest?: ClusterClusterStateIngest
  repositories?: Record<string, string>
  component_template?: Record<string, any>
  index_template?: Record<string, any>
  index_lifecycle?: ClusterClusterStateIndexLifecycle
}

export interface ClusterClusterStateMetadataClusterCoordination {
  term: integer
  last_committed_config: string[]
  last_accepted_config: string[]
  voting_config_exclusions: ClusterVotingConfigExclusionsItem[]
}

export interface ClusterClusterStateMetadataIndexGraveyard {
  tombstones: ClusterTombstone[]
}

export interface ClusterClusterStateMetadataTemplate {
}

export interface ClusterClusterStateClusterStateRequest extends RequestBase {
  metric?: Metrics
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  local?: boolean
  master_timeout?: Time
  wait_for_metadata_version?: VersionNumber
  wait_for_timeout?: Time
}

export interface ClusterClusterStateClusterStateResponse extends ResponseBase {
  cluster_name: Name
  cluster_uuid: Uuid
  master_node?: string
  state?: string[]
  state_uuid?: Uuid
  version?: VersionNumber
  blocks?: ClusterClusterStateClusterStateBlocks
  metadata?: ClusterClusterStateMetadata
  nodes?: Record<NodeName, NodesNodeAttributes>
  routing_table?: Record<string, EmptyObject>
  routing_nodes?: ClusterClusterStateRoutingNodes
  snapshots?: ClusterClusterStateSnapshots
  snapshot_deletions?: ClusterClusterStateDeletedSnapshots
}

export interface ClusterClusterStateRoutingNodes {
  unassigned: NodesNodeShard[]
  nodes: Record<string, NodesNodeShard[]>
}

export interface ClusterClusterStateSnapshots {
  snapshots: SnapshotSnapshotStatus[]
}

export interface ClusterStatistics {
  skipped: integer
  successful: integer
  total: integer
}

export interface ClusterClusterStatsClusterStatsRequest extends RequestBase {
  node_id?: NodeIds
  flat_settings?: boolean
  timeout?: Time
}

export interface ClusterClusterStatsClusterStatsResponse extends NodesNodesResponseBase {
  cluster_name: Name
  cluster_uuid: Uuid
  indices: ClusterClusterStatsClusterIndicesStats
  nodes: ClusterClusterStatsClusterNodesStats
  status: ClusterClusterStatus
  timestamp: long
}

export type ClusterClusterStatus = 'green' | 'yellow' | 'red'

export interface SearchProfileCollector {
  name: string
  reason: string
  time_in_nanos: long
  children?: SearchProfileCollector[]
}

export interface AnalysisTokenFiltersCommonGramsTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  common_words: string[]
  common_words_path: string
  ignore_case: boolean
  query_mode: boolean
}

export interface QueryDslFullTextCommonTermsCommonTermsQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  cutoff_frequency?: double
  high_freq_operator?: QueryDslOperator
  low_freq_operator?: QueryDslOperator
  minimum_should_match?: MinimumShouldMatch
  query?: string
}

export interface SnapshotVerifyRepositoryCompactNodeInfo {
  name: Name
}

export interface WatcherCompareCondition {
  comparison?: string
  path?: string
  value?: any
  'ctx.payload.match'?: WatcherCompareContextPayloadCondition
  'ctx.payload.value'?: WatcherCompareContextPayloadCondition
}

export interface WatcherCompareContextPayloadCondition {
  eq?: any
  lt?: any
  gt?: any
  lte?: any
  gte?: any
}

export interface MappingTypesSpecializedCompletionCompletionProperty extends MappingTypesDocValuesPropertyBase {
  analyzer?: string
  contexts?: MappingTypesSpecializedCompletionSuggestContext[]
  max_input_length?: integer
  preserve_position_increments?: boolean
  preserve_separators?: boolean
  search_analyzer?: string
  type: 'completion'
}

export interface CompletionStats {
  size_in_bytes: long
  size?: ByteSize
  fields?: Record<Field, FieldSizeUsage>
}

export interface SearchSuggestersCompletionSuggestOption<TDocument = unknown> {
  collate_match?: boolean
  contexts?: Record<string, SearchSuggestersContextSuggesterContext[]>
  fields?: Record<string, any>
  _id: string
  _index: IndexName
  _type?: Type
  _routing?: Routing
  _score: double
  _source: TDocument
  text: string
}

export interface SearchSuggestersCompletionSuggesterCompletionSuggester extends SearchSuggestersSuggesterBase {
  contexts?: Record<string, string | string[] | QueryDslGeoGeoLocation | SearchSuggestersContextSuggesterSuggestContextQuery[]>
  fuzzy?: SearchSuggestersCompletionSuggesterSuggestFuzziness
  prefix?: string
  regex?: string
  skip_duplicates?: boolean
}

export interface ClusterComponentTemplate {
  name: Name
  component_template: ClusterComponentTemplateNode
}

export interface ClusterComponentTemplateNode {
  template: ClusterComponentTemplateSummary
  version?: VersionNumber
  _meta?: IndexMetaData
}

export interface ClusterComponentTemplateSummary {
  _meta?: IndexMetaData
  version?: VersionNumber
  settings: Record<IndexName, IndexIndexSettings>
  mappings?: MappingTypeMapping
  aliases?: Record<string, IndicesAliasDefinition>
}

export interface AggregationsBucketCompositeCompositeAggregation extends AggregationsBucketBucketAggregationBase {
  after?: Record<string, string | float | null>
  size?: integer
  sources?: Record<string, AggregationsBucketCompositeCompositeAggregationSource>[]
}

export interface AggregationsBucketCompositeCompositeAggregationSource {
  terms?: AggregationsBucketTermsTermsAggregation
  histogram?: AggregationsBucketHistogramHistogramAggregation
  date_histogram?: AggregationsBucketDateHistogramDateHistogramAggregation
  geotile_grid?: AggregationsBucketGeoTileGridGeoTileGridAggregation
}

export interface AggregationsCompositeBucketKeys {
}
export type AggregationsCompositeBucket = AggregationsCompositeBucketKeys |
    { [property: string]: AggregationsAggregate }

export interface AggregationsCompositeBucketAggregate extends AggregationsMultiBucketAggregate<Record<string, any>> {
  after_key: Record<string, any>
}

export interface AnalysisTokenFiltersCompoundWordCompoundWordTokenFilterBase extends AnalysisTokenFiltersTokenFilterBase {
  hyphenation_patterns_path: string
  max_subword_size: integer
  min_subword_size: integer
  min_word_size: integer
  only_longest_match: boolean
  word_list: string[]
  word_list_path: string
}

export interface WatcherConditionContainer {
  always?: WatcherAlwaysCondition
  array_compare?: WatcherArrayCompareCondition
  compare?: WatcherCompareCondition
  never?: WatcherNeverCondition
  script?: WatcherScriptCondition
}

export type MlConditionOperator = 'gt' | 'gte' | 'lt' | 'lte'

export interface AnalysisTokenFiltersConditionTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  filter: string[]
  script: Script
}

export type WatcherConditionType = 'always' | 'never' | 'script' | 'compare' | 'array_compare'

export type Conflicts = 'abort' | 'proceed'

export type WatcherConnectionScheme = 'http' | 'https'

export interface MappingTypesSpecializedConstantKeywordConstantKeywordProperty extends MappingTypesPropertyBase {
  value?: any
  type: 'constant_keyword'
}

export interface QueryDslCompoundConstantScoreConstantScoreQuery extends QueryDslAbstractionsQueryQueryBase {
  filter?: QueryDslAbstractionsContainerQueryContainer
  boost?: float
}

export type SearchSuggestersContextSuggesterContext = string | QueryDslGeoGeoLocation

export interface IngestProcessorsConvertProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
  type: IngestProcessorsConvertProcessorType
}

export type IngestProcessorsConvertProcessorType = 'integer' | 'long' | 'float' | 'double' | 'string' | 'boolean' | 'auto'

export interface EnrichStatsCoordinatorStats {
  executed_searches_total: long
  node_id: string
  queue_size: integer
  remote_requests_current: integer
  remote_requests_total: long
}

export type MappingTypesCoreProperty = MappingTypesComplexObjectObjectProperty | MappingTypesComplexNestedNestedProperty | MappingTypesCoreSearchAsYouTypeSearchAsYouTypeProperty | MappingTypesCoreTextTextProperty | MappingTypesDocValuesProperty

export interface MappingTypesCorePropertyBase extends MappingTypesPropertyBase {
  copy_to?: Fields
  similarity?: string
  store?: boolean
}

export interface CountCountRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  min_score?: double
  preference?: string
  query_on_query_string?: string
  routing?: Routing
  terminate_after?: long
  q?: string
  body?: {
    query?: QueryDslAbstractionsContainerQueryContainer
  }
}

export interface CountCountResponse extends ResponseBase {
  count: long
  _shards: ShardStatistics
}

export interface CcrCreateFollowIndexCreateFollowIndexRequest extends RequestBase {
  index: IndexName
  wait_for_active_shards?: WaitForActiveShards
  body: {
    leader_index?: IndexName
    max_outstanding_read_requests?: long
    max_outstanding_write_requests?: long
    max_read_request_operation_count?: long
    max_read_request_size?: string
    max_retry_delay?: Time
    max_write_buffer_count?: long
    max_write_buffer_size?: string
    max_write_request_operation_count?: long
    max_write_request_size?: string
    read_poll_timeout?: Time
    remote_cluster?: string
  }
}

export interface CcrCreateFollowIndexCreateFollowIndexResponse extends ResponseBase {
  follow_index_created: boolean
  follow_index_shards_acked: boolean
  index_following_started: boolean
}

export interface CreateCreateRequest<TDocument = unknown> extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
  body: TDocument
}

export interface CreateCreateResponse extends WriteResponseBase {
}

export interface RollupCreateRollupJobCreateRollupJobRequest extends RequestBase {
  id: Id
  body: {
    cron?: string
    groups?: RollupRollupConfigurationRollupGroupings
    index_pattern?: string
    metrics?: RollupRollupConfigurationRollupFieldMetric[]
    page_size?: long
    rollup_index?: IndexName
  }
}

export interface RollupCreateRollupJobCreateRollupJobResponse extends AcknowledgedResponseBase {
}

export interface WatcherCronExpression extends WatcherScheduleBase {
}

export interface IngestProcessorsCsvProcessor extends IngestProcessorBase {
  empty_value: any
  description?: string
  field: Field
  ignore_missing?: boolean
  quote?: string
  separator?: string
  target_fields: Fields
  trim: boolean
}

export interface AggregationsPipelineCumulativeCardinalityCumulativeCardinalityAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export interface AggregationsPipelineCumulativeSumCumulativeSumAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export interface ClusterClusterAllocationExplainCurrentNode {
  id: Id
  name: Name
  attributes: Record<string, string>
  transport_address: TransportAddress
  weight_ranking: integer
}

export interface XpackUsageCustomSettings {
  custom_urls?: XpackUsageUrlConfig[]
  created_by?: string
  job_tags?: Record<string, string>
}

export interface WatcherDailySchedule {
  at: string[] | WatcherTimeOfDay
}

export interface MlDataCounts {
  bucket_count: long
  earliest_record_timestamp?: long
  empty_bucket_count: long
  input_bytes: long
  input_field_count: long
  input_record_count: long
  invalid_date_count: long
  job_id: Id
  last_data_time?: long
  latest_empty_bucket_timestamp?: long
  latest_record_timestamp?: long
  latest_sparse_bucket_timestamp?: long
  latest_bucket_timestamp?: long
  missing_field_count: long
  out_of_order_timestamp_count: long
  processed_field_count: long
  processed_record_count: long
  sparse_bucket_count: long
}

export interface MlDataDescription {
  format?: string
  time_field: Field
  time_format?: string
  field_delimiter?: string
}

export interface NodesNodesStatsDataPathStats {
  available: string
  available_in_bytes: long
  disk_queue: string
  disk_reads: long
  disk_read_size: string
  disk_read_size_in_bytes: long
  disk_writes: long
  disk_write_size: string
  disk_write_size_in_bytes: long
  free: string
  free_in_bytes: long
  mount: string
  path: string
  total: string
  total_in_bytes: long
  type: string
}

export type IndicesDataStreamHealthStatus = 'GREEN' | 'green' | 'YELLOW' | 'yellow' | 'RED' | 'red'

export type DataStreamName = string

export interface IndicesDataStreamsStatsDataStreamsStatsItem {
  backing_indices: integer
  data_stream: Name
  store_size?: ByteSize
  store_size_bytes: integer
  maximum_timestamp: integer
}

export interface XpackUsageDataStreamsUsage extends XpackUsageXPackUsage {
  data_streams: long
  indices_count: long
}

export interface XpackUsageDataTierPhaseCountUsage {
  node_count: long
  index_count: long
  total_shard_count: long
  primary_shard_count: long
  doc_count: long
  total_size_bytes: long
  primary_size_bytes: long
  primary_shard_size_avg_bytes: long
  primary_shard_size_median_bytes: long
  primary_shard_size_mad_bytes: long
}

export interface XpackUsageDataTiersUsage extends XpackUsageXPackUsage {
  data_warm: XpackUsageDataTierPhaseCountUsage
  data_frozen?: XpackUsageDataTierPhaseCountUsage
  data_cold: XpackUsageDataTierPhaseCountUsage
  data_content: XpackUsageDataTierPhaseCountUsage
  data_hot: XpackUsageDataTierPhaseCountUsage
}

export interface MlDatafeed {
  aggregations?: Record<string, AggregationsAggregationContainer>
  aggs?: Record<string, AggregationsAggregationContainer>
  chunking_config?: MlChunkingConfig
  datafeed_id: Id
  frequency?: Timestamp
  indices: Indices
  indexes?: string[]
  job_id: Id
  max_empty_searches?: integer
  query: QueryDslAbstractionsContainerQueryContainer
  query_delay?: Timestamp
  script_fields?: Record<string, ScriptField>
  scroll_size?: integer
  delayed_data_check_config: MlDelayedDataCheckConfig
  runtime_mappings?: MappingRuntimeFieldsRuntimeFields
  indices_options?: MlUpdateDataFeedDatafeedIndicesOptions
}

export interface XpackUsageDatafeedCount {
  count: long
}

export interface MlUpdateDataFeedDatafeedIndicesOptions {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  ignore_throttled?: boolean
}

export type MlDatafeedState = 'started' | 'stopped' | 'starting' | 'stopping'

export interface MlDatafeedStats {
  assignment_explanation?: string
  datafeed_id: Id
  node?: MlDiscoveryNode
  state: MlDatafeedState
  timing_stats: MlDatafeedTimingStats
}

export interface MlDatafeedTimingStats {
  bucket_count: long
  exponential_average_search_time_per_hour_ms: double
  job_id: string
  search_count: long
  total_search_time_ms: double
}

export interface MlInfoDatafeeds {
  scroll_size: integer
}

export interface QueryDslCompoundFunctionScoreFunctionsDateDecayFunctionKeys extends QueryDslCompoundFunctionScoreFunctionsDecayFunctionBase {
}
export type QueryDslCompoundFunctionScoreFunctionsDateDecayFunction = QueryDslCompoundFunctionScoreFunctionsDateDecayFunctionKeys |
    { [property: string]: QueryDslCompoundFunctionScoreFunctionsDecayPlacement<DateMath, Time> }

export interface DateField {
  field: Field
  format?: string
  include_unmapped?: boolean
}

export interface AggregationsBucketDateHistogramDateHistogramAggregation extends AggregationsBucketBucketAggregationBase {
  calendar_interval?: AggregationsBucketDateHistogramDateInterval | Time
  extended_bounds?: AggregationsBucketHistogramExtendedBounds<DateMath | long>
  hard_bounds?: AggregationsBucketHistogramExtendedBounds<DateMath | long>
  field?: Field
  fixed_interval?: AggregationsBucketDateHistogramDateInterval | Time
  format?: string
  interval?: AggregationsBucketDateHistogramDateInterval | Time
  min_doc_count?: integer
  missing?: DateString
  offset?: Time
  order?: AggregationsBucketHistogramHistogramOrder
  params?: Record<string, any>
  script?: Script
  time_zone?: string
}

export interface AggregationsDateHistogramBucketKeys {
}
export type AggregationsDateHistogramBucket = AggregationsDateHistogramBucketKeys |
    { [property: string]: AggregationsAggregate }

export interface RollupRollupConfigurationDateHistogramRollupGrouping {
  delay?: Time
  field: Field
  format?: string
  interval?: Time
  calendar_interval?: Time
  fixed_interval?: Time
  time_zone?: string
}

export interface IngestProcessorsDateIndexNameProcessor extends IngestProcessorBase {
  date_formats: string[]
  date_rounding: string | IngestProcessorsDateRounding
  field: Field
  index_name_format: string
  index_name_prefix: string
  locale: string
  timezone: string
}

export type AggregationsBucketDateHistogramDateInterval = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'

export type DateMath = string

export type DateMathTime = string

export interface MappingTypesCoreDateNanosDateNanosProperty extends MappingTypesDocValuesPropertyBase {
  boost?: double
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  type: 'date_nanos'
}

export interface IngestProcessorsDateProcessor extends IngestProcessorBase {
  field: Field
  formats: string[]
  locale?: string
  target_field?: Field
  timezone?: string
}

export interface MappingTypesCoreDateDateProperty extends MappingTypesDocValuesPropertyBase {
  boost?: double
  fielddata?: IndicesNumericFielddata
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  type: 'date'
}

export interface AggregationsBucketDateRangeDateRangeAggregation extends AggregationsBucketBucketAggregationBase {
  field?: Field
  format?: string
  missing?: AggregationsMissing
  ranges?: AggregationsBucketDateRangeDateRangeExpression[]
  time_zone?: string
}

export interface AggregationsBucketDateRangeDateRangeExpression {
  from?: DateMath | float
  from_as_string?: string
  to_as_string?: string
  key?: string
  to?: DateMath | float
  doc_count?: long
}

export interface MappingTypesCoreRangeDateRangeDateRangeProperty extends MappingTypesCoreRangeRangePropertyBase {
  format?: string
  type: 'date_range'
}

export type IngestProcessorsDateRounding = 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'

export type DateString = string

export type WatcherDay = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'

export interface WatcherDeactivateWatchDeactivateWatchRequest extends RequestBase {
  watch_id: Name
}

export interface WatcherDeactivateWatchDeactivateWatchResponse extends ResponseBase {
  status: WatcherActivateWatchActivationStatus
}

export type QueryDslCompoundFunctionScoreFunctionsDecayFunction = QueryDslCompoundFunctionScoreFunctionsDateDecayFunction | QueryDslCompoundFunctionScoreFunctionsNumericDecayFunction | QueryDslCompoundFunctionScoreFunctionsGeoDecayFunction

export interface QueryDslCompoundFunctionScoreFunctionsDecayFunctionBase extends QueryDslCompoundFunctionScoreFunctionsScoreFunctionBase {
  multi_value_mode?: QueryDslCompoundFunctionScoreFunctionsDecayMultiValueMode
}

export interface QueryDslCompoundFunctionScoreFunctionsDecayPlacement<TOrigin = unknown, TScale = unknown> {
  decay?: double
  offset?: TScale
  scale?: TScale
  origin?: TOrigin
}

export type ClusterClusterAllocationExplainDecision = 'yes' | 'no' | 'worse_balance' | 'throttled' | 'awaiting_info' | 'allocation_delayed' | 'no_valid_shard_copy' | 'no_attempt'

export type DefaultOperator = 'AND' | 'OR'

export interface MlInfoDefaults {
  anomaly_detectors: MlInfoAnomalyDetectors
  datafeeds: MlInfoDatafeeds
}

export interface MlDelayedDataCheckConfig {
  check_window?: Time
  enabled: boolean
}

export interface CcrDeleteAutoFollowPatternDeleteAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface CcrDeleteAutoFollowPatternDeleteAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface AutoscalingPolicyDeleteDeleteAutoscalingPolicyRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface AutoscalingPolicyDeleteDeleteAutoscalingPolicyResponse extends ResponseBase {
  stub: integer
}

export interface DeleteByQueryDeleteByQueryRequest extends RequestBase {
  index: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  conflicts?: Conflicts
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  from?: long
  ignore_unavailable?: boolean
  lenient?: boolean
  max_docs?: long
  preference?: string
  refresh?: boolean
  request_cache?: boolean
  requests_per_second?: long
  routing?: Routing
  q?: string
  scroll?: Time
  scroll_size?: long
  search_timeout?: Time
  search_type?: SearchType
  size?: long
  slices?: long
  sort?: string[]
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  stats?: string[]
  terminate_after?: long
  timeout?: Time
  version?: boolean
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  body: {
    max_docs?: long
    query?: QueryDslAbstractionsContainerQueryContainer
    slice?: SlicedScroll
  }
}

export interface DeleteByQueryDeleteByQueryResponse extends ResponseBase {
  batches?: long
  deleted?: long
  failures?: BulkIndexByScrollFailure[]
  noops?: long
  requests_per_second?: float
  retries?: Retries
  slice_id?: integer
  task?: TaskId
  throttled_millis?: long
  throttled_until_millis?: long
  timed_out?: boolean
  took?: long
  total?: long
  version_conflicts?: long
}

export interface DeleteByQueryRethrottleDeleteByQueryRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface DeleteByQueryRethrottleDeleteByQueryRethrottleResponse extends TaskListTasksListTasksResponse {
}

export interface DanglingIndicesIndexDeleteDeleteDanglingIndexRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DanglingIndicesIndexDeleteDeleteDanglingIndexResponse extends ResponseBase {
  stub: integer
}

export interface EnrichDeletePolicyDeleteEnrichPolicyRequest extends RequestBase {
  name: Name
}

export interface EnrichDeletePolicyDeleteEnrichPolicyResponse extends AcknowledgedResponseBase {
}

export interface LicenseDeleteLicenseDeleteLicenseRequest extends RequestBase {
}

export interface LicenseDeleteLicenseDeleteLicenseResponse extends AcknowledgedResponseBase {
}

export interface IlmDeleteLifecycleDeleteLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id: Id
}

export interface IlmDeleteLifecycleDeleteLifecycleResponse extends AcknowledgedResponseBase {
}

export interface IngestDeletePipelineDeletePipelineRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
}

export interface IngestDeletePipelineDeletePipelineResponse extends AcknowledgedResponseBase {
}

export interface DeleteDeleteRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
}

export interface DeleteDeleteResponse extends WriteResponseBase {
}

export interface RollupDeleteRollupJobDeleteRollupJobRequest extends RequestBase {
  id: Id
}

export interface RollupDeleteRollupJobDeleteRollupJobResponse extends AcknowledgedResponseBase {
  task_failures?: RollupGetRollupJobRollupJobTaskFailure[]
}

export interface DeleteScriptDeleteScriptRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
}

export interface DeleteScriptDeleteScriptResponse extends AcknowledgedResponseBase {
}

export interface SlmDeleteLifecycleDeleteSnapshotLifecycleRequest extends RequestBase {
  policy_id: Name
}

export interface SlmDeleteLifecycleDeleteSnapshotLifecycleResponse extends AcknowledgedResponseBase {
}

export interface TransformDeleteTransformDeleteTransformRequest extends RequestBase {
  transform_id: Name
  force?: boolean
}

export interface TransformDeleteTransformDeleteTransformResponse extends AcknowledgedResponseBase {
}

export interface WatcherDeleteWatchDeleteWatchRequest extends RequestBase {
  id: Name
}

export interface WatcherDeleteWatchDeleteWatchResponse extends ResponseBase {
  found: boolean
  _id: Id
  _version: VersionNumber
}

export type AnalysisTokenFiltersDelimitedPayloadDelimitedPayloadEncoding = 'int' | 'float' | 'identity'

export interface AnalysisTokenFiltersDelimitedPayloadDelimitedPayloadTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  delimiter: string
  encoding: AnalysisTokenFiltersDelimitedPayloadDelimitedPayloadEncoding
}

export interface MigrationDeprecationInfoDeprecationInfo {
  details: string
  level: MigrationDeprecationInfoDeprecationWarningLevel
  message: string
  url: string
}

export interface MigrationDeprecationInfoDeprecationInfoRequest extends RequestBase {
  index?: IndexName
}

export interface MigrationDeprecationInfoDeprecationInfoResponse extends ResponseBase {
  cluster_settings: MigrationDeprecationInfoDeprecationInfo[]
  index_settings: Record<string, MigrationDeprecationInfoDeprecationInfo[]>
  node_settings: MigrationDeprecationInfoDeprecationInfo[]
  ml_settings: MigrationDeprecationInfoDeprecationInfo[]
}

export type MigrationDeprecationInfoDeprecationWarningLevel = 'none' | 'info' | 'warning' | 'critical'

export interface AggregationsPipelineDerivativeDerivativeAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export interface MlDetectionRule {
  actions?: MlRuleAction[]
  conditions: MlRuleCondition[]
  scope?: Record<Field, MlFilterRef>
}

export interface MlDetector {
  by_field_name?: Field
  custom_rules?: MlDetectionRule[]
  detector_description?: string
  detector_index?: integer
  exclude_frequent?: MlPutJobExcludeFrequent
  field_name?: Field
  function?: string
  use_null?: boolean
  over_field_name?: Field
  partition_field_name?: Field
  description?: string
}

export interface DictionaryResponseBase<TKey = unknown, TValue = unknown> extends ResponseBase {
  [key: string]: TValue
}

export interface SearchSuggestersPhraseSuggesterDirectGenerator {
  field: Field
  max_edits?: integer
  max_inspections?: float
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  post_filter?: string
  pre_filter?: string
  prefix_length?: integer
  size?: integer
  suggest_mode?: SuggestMode
}

export interface QueryDslCompoundDismaxDisMaxQuery extends QueryDslAbstractionsQueryQueryBase {
  queries?: QueryDslAbstractionsContainerQueryContainer[]
  tie_breaker?: double
  boost?: float
}

export interface MlDiscoveryNode {
  attributes: Record<string, string>
  ephemeral_id: Id
  id: Id
  name: Name
  transport_address: TransportAddress
}

export interface ClusterClusterAllocationExplainDiskUsage {
  path: string
  total_bytes: long
  used_bytes: long
  free_bytes: long
  free_disk_percent: double
  used_disk_percent: double
}

export interface IngestProcessorsDissectProcessor extends IngestProcessorBase {
  append_separator: string
  field: Field
  ignore_missing: boolean
  pattern: string
}

export type Distance = string

export interface QueryDslSpecializedDistanceFeatureDistanceFeatureQuery extends QueryDslAbstractionsQueryQueryBase {
  origin?: number[] | QueryDslGeoGeoCoordinate | DateMath
  pivot?: Distance | Time
  field?: Field
}

export type DistanceUnit = 'in' | 'ft' | 'yd' | 'mi' | 'nmi' | 'km' | 'm' | 'cm' | 'mm'

export interface AggregationsBucketDiversifiedSamplerDiversifiedSamplerAggregation extends AggregationsBucketBucketAggregationBase {
  execution_hint?: AggregationsBucketDiversifiedSamplerSamplerAggregationExecutionHint
  max_docs_per_value?: integer
  script?: Script
  shard_size?: integer
  field?: Field
}

export interface DocStats {
  count: long
  deleted: long
}

export interface SearchSourceFilteringDocValueField {
  field: Field
  format?: string
}

export type MappingTypesDocValuesProperty = MappingTypesCoreBinaryBinaryProperty | MappingTypesCoreBooleanBooleanProperty | MappingTypesCoreDateDateProperty | MappingTypesCoreDateNanosDateNanosProperty | MappingTypesCoreKeywordKeywordProperty | MappingTypesCoreNumberNumberProperty | MappingTypesCoreRangeRangeProperty | MappingTypesGeoGeoPointGeoPointProperty | MappingTypesGeoGeoShapeGeoShapeProperty | MappingTypesSpecializedCompletionCompletionProperty | MappingTypesSpecializedGenericGenericProperty | MappingTypesSpecializedIpIpProperty | MappingTypesSpecializedMurmur3HashMurmur3HashProperty | MappingTypesSpecializedShapeShapeProperty | MappingTypesSpecializedTokenCountTokenCountProperty | MappingTypesCoreVersionVersionProperty | MappingTypesCoreWildcardWildcardProperty | MappingTypesGeoPointPointProperty

export interface MappingTypesDocValuesPropertyBase extends MappingTypesCorePropertyBase {
  doc_values?: boolean
}

export interface ExistsDocumentExistsRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  stored_fields?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

export type ExistsDocumentExistsResponse = boolean

export interface RankEvalDocumentRating {
  _id: Id
  _index: IndexName
  rating: integer
}

export interface IngestSimulatePipelineDocumentSimulation {
  _id: Id
  _index: IndexName
  _ingest: IngestSimulatePipelineIngest
  _parent?: string
  _routing?: string
  _source: Record<string, any>
  _type?: Type
}

export interface IngestProcessorsDotExpanderProcessor extends IngestProcessorBase {
  field: Field
  path?: string
}

export interface MappingTypesCoreRangeDoubleRangeDoubleRangeProperty extends MappingTypesCoreRangeRangePropertyBase {
  type: 'double_range'
}

export interface IngestProcessorsDropProcessor extends IngestProcessorBase {
}

export type MappingDynamicMapping = 'strict' | 'runtime' | 'true' | 'false'

export interface MappingDynamicTemplateDynamicTemplate {
  mapping?: MappingTypesPropertyBase
  match?: string
  match_mapping_type?: string
  match_pattern?: MappingDynamicTemplateMatchType
  path_match?: string
  path_unmatch?: string
  unmatch?: string
}

export type AnalysisTokenFiltersEdgeNGramEdgeNGramSide = 'front' | 'back'

export interface AnalysisTokenFiltersEdgeNGramEdgeNGramTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  max_gram: integer
  min_gram: integer
  side: AnalysisTokenFiltersEdgeNGramEdgeNGramSide
}

export interface AnalysisTokenizersNGramEdgeNGramTokenizer extends AnalysisTokenizersTokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: AnalysisTokenizersNGramTokenChar[]
}

export interface ElasticsearchVersionInfo {
  build_date: DateString
  build_flavor: string
  build_hash: string
  build_snapshot: boolean
  build_type: string
  lucene_version: VersionString
  minimum_index_compatibility_version: VersionString
  minimum_wire_compatibility_version: VersionString
  number: string
}

export interface AnalysisTokenFiltersElisionTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  articles: string[]
  articles_case: boolean
}

export interface WatcherEmailActionResult {
  account?: string
  message: WatcherEmailResult
  reason?: string
}

export interface WatcherEmailBody {
  html: string
  text: string
}

export type WatcherEmailPriority = 'lowest' | 'low' | 'normal' | 'high' | 'highest'

export interface WatcherEmailResult {
  bcc?: string[]
  body?: WatcherEmailBody
  cc?: string[]
  from?: string
  id: Id
  priority?: WatcherEmailPriority
  reply_to?: string[]
  sent_date: DateString
  subject: string
  to: string[]
}

export interface EmptyObject {
}

export interface EnrichEnrichPolicy {
  enrich_fields: Fields
  indices: Indices
  match_field: Field
  query?: string
}

export type EnrichExecutePolicyEnrichPolicyPhase = 'SCHEDULED' | 'RUNNING' | 'COMPLETE' | 'FAILED'

export interface IngestProcessorsEnrichProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  max_matches?: integer
  override?: boolean
  policy_name: string
  shape_relation?: GeoShapeRelation
  target_field: Field
}

export interface EnrichStatsEnrichStatsRequest extends RequestBase {
}

export interface EnrichStatsEnrichStatsResponse extends ResponseBase {
  coordinator_stats: EnrichStatsCoordinatorStats[]
  executing_policies: EnrichStatsExecutingPolicy[]
}

export type EpochMillis = string | long

export interface EqlDeleteEqlDeleteRequest extends RequestBase {
  id: Id
}

export interface EqlDeleteEqlDeleteResponse extends AcknowledgedResponseBase {
}

export interface XpackUsageEqlFeaturesJoinUsage {
  join_queries_two: uint
  join_queries_three: uint
  join_until: uint
  join_queries_five_or_more: uint
  join_queries_four: uint
}

export interface XpackUsageEqlFeaturesKeysUsage {
  join_keys_two: uint
  join_keys_one: uint
  join_keys_three: uint
  join_keys_five_or_more: uint
  join_keys_four: uint
}

export interface XpackUsageEqlFeaturesPipesUsage {
  pipe_tail: uint
  pipe_head: uint
}

export interface XpackUsageEqlFeaturesSequencesUsage {
  sequence_queries_three: uint
  sequence_queries_four: uint
  sequence_queries_two: uint
  sequence_until: uint
  sequence_queries_five_or_more: uint
  sequence_maxspan: uint
}

export interface XpackUsageEqlFeaturesUsage {
  join: uint
  joins: XpackUsageEqlFeaturesJoinUsage
  keys: XpackUsageEqlFeaturesKeysUsage
  event: uint
  pipes: XpackUsageEqlFeaturesPipesUsage
  sequence: uint
  sequences: XpackUsageEqlFeaturesSequencesUsage
}

export interface EqlGetEqlGetRequest extends RequestBase {
  id: Id
  keep_alive?: Time
  wait_for_completion_timeout?: Time
}

export interface EqlGetEqlGetResponse<TEvent = unknown> extends EqlEqlSearchResponseBase<TEvent> {
}

export interface EqlGetStatusEqlGetStatusRequest extends RequestBase {
  id: Id
}

export interface EqlGetStatusEqlGetStatusResponse extends ResponseBase {
  id: Id
  is_partial: boolean
  is_running: boolean
  start_time_in_millis?: EpochMillis
  expiration_time_in_millis?: EpochMillis
  completion_status?: integer
}

export interface EqlEqlHits<TEvent = unknown> {
  total?: SearchHitsTotalHits
  events?: EqlEqlHitsEvent<TEvent>[]
  sequences?: EqlEqlHitsSequence<TEvent>[]
}

export interface EqlEqlHitsEvent<TEvent = unknown> {
  _index: IndexName
  _id: Id
  _source: TEvent
  fields?: Record<Field, any[]>
}

export interface EqlEqlHitsSequence<TEvent = unknown> {
  events: EqlEqlHitsEvent<TEvent>[]
  join_keys: any[]
}

export type EqlSearchEqlResultPosition = 'tail' | 'head'

export interface EqlSearchEqlSearchFieldFormatted {
  field: Field
  format?: string
}

export interface EqlSearchEqlSearchRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  keep_alive?: Time
  keep_on_completion?: boolean
  wait_for_completion_timeout?: Time
  body: {
    query: string
    case_sensitive?: boolean
    event_category_field?: Field
    tiebreaker_field?: Field
    timestamp_field?: Field
    fetch_size?: uint
    filter?: QueryDslAbstractionsContainerQueryContainer | QueryDslAbstractionsContainerQueryContainer[]
    keep_alive?: Time
    keep_on_completion?: boolean
    wait_for_completion_timeout?: Time
    size?: uint | float
    fields?: Field | EqlSearchEqlSearchFieldFormatted[]
    result_position?: EqlSearchEqlResultPosition
  }
}

export interface EqlSearchEqlSearchResponse<TEvent = unknown> extends EqlEqlSearchResponseBase<TEvent> {
}

export interface EqlEqlSearchResponseBase<TEvent = unknown> extends ResponseBase {
  id?: Id
  is_partial?: boolean
  is_running?: boolean
  took?: integer
  timed_out?: boolean
  hits: EqlEqlHits<TEvent>
}

export interface XpackUsageEqlUsage extends XpackUsageXPackUsage {
  features: XpackUsageEqlFeaturesUsage
  queries: Record<string, XpackUsageQueryUsage>
}

export interface ErrorCause {
  type: string
  reason: string
  caused_by?: ErrorCause
  shard?: integer | string
  stack_trace?: string
  root_cause?: ErrorCause[]
  bytes_limit?: long
  bytes_wanted?: long
  column?: integer
  col?: integer
  failed_shards?: ShardFailure[]
  grouped?: boolean
  index?: IndexName
  index_uuid?: Uuid
  language?: string
  licensed_expired_feature?: string
  line?: integer
  max_buckets?: integer
  phase?: string
  property_name?: string
  processor_type?: string
  resource_id?: Ids
  'resource.id'?: Ids
  resource_type?: string
  'resource.type'?: string
  script?: string
  script_stack?: string[]
  header?: HttpHeaders
  lang?: string
  position?: ScriptsPainlessExecutePainlessExecutionPosition
}

export interface ErrorResponse {
  error: MainError | string
  status: integer
}

export interface AggregationsPipelineMovingAverageModelsEwmaModelSettings {
  alpha?: float
}

export type MlPutJobExcludeFrequent = 'all' | 'none' | 'by' | 'over'

export interface EnrichExecutePolicyExecuteEnrichPolicyRequest extends RequestBase {
  name: Name
  wait_for_completion?: boolean
}

export interface EnrichExecutePolicyExecuteEnrichPolicyResponse extends ResponseBase {
  status: EnrichExecutePolicyExecuteEnrichPolicyStatus
  task_id?: TaskId
}

export interface EnrichExecutePolicyExecuteEnrichPolicyStatus {
  phase: EnrichExecutePolicyEnrichPolicyPhase
}

export interface ScriptsPainlessExecuteExecutePainlessScriptRequest extends RequestBase {
  body?: {
    context?: string
    context_setup?: ScriptsPainlessExecutePainlessContextSetup
    script?: InlineScript
  }
}

export interface ScriptsPainlessExecuteExecutePainlessScriptResponse<TResult = unknown> extends ResponseBase {
  result: TResult
}

export interface SlmExecuteRetentionExecuteRetentionRequest extends RequestBase {
}

export interface SlmExecuteRetentionExecuteRetentionResponse extends AcknowledgedResponseBase {
}

export interface SlmExecuteLifecycleExecuteSnapshotLifecycleRequest extends RequestBase {
  policy_id: Name
}

export interface SlmExecuteLifecycleExecuteSnapshotLifecycleResponse extends ResponseBase {
  snapshot_name: string
}

export interface EnrichStatsExecutingPolicy {
  name: string
  task: TaskGetTaskTaskInfo
}

export type WatcherStatsExecutionPhase = 'awaits_execution' | 'started' | 'input' | 'condition' | 'actions' | 'watch_transform' | 'aborted' | 'finished'

export interface WatcherExecuteWatchExecutionResult {
  actions: WatcherExecuteWatchExecutionResultAction[]
  condition: WatcherExecuteWatchExecutionResultCondition
  execution_duration: integer
  execution_time: DateString
  input: WatcherExecuteWatchExecutionResultInput
}

export interface WatcherExecuteWatchExecutionResultAction {
  email?: WatcherEmailActionResult
  id: Id
  index?: WatcherIndexActionResult
  logging?: WatcherLoggingActionResult
  pagerduty?: WatcherPagerDutyActionResult
  reason?: string
  slack?: WatcherSlackActionResult
  status: WatcherStatus
  type: WatcherActionType
  webhook?: WatcherWebhookActionResult
}

export interface WatcherExecuteWatchExecutionResultCondition {
  met: boolean
  status: WatcherStatus
  type: WatcherConditionType
}

export interface WatcherExecuteWatchExecutionResultInput {
  payload: Record<string, any>
  status: WatcherStatus
  type: WatcherInputType
}

export interface WatcherAckWatchExecutionState {
  successful: boolean
  timestamp: DateString
}

export interface WatcherStatsExecutionThreadPool {
  max_size: long
  queue_size: long
}

export interface QueryDslTermLevelExistsExistsQuery extends QueryDslAbstractionsQueryQueryBase {
  field?: Field
}

export type ExpandWildcardOptions = 'all' | 'open' | 'closed' | 'hidden' | 'none'

export type ExpandWildcards = ExpandWildcardOptions | ExpandWildcardOptions[] | string

export interface IndicesAnalyzeExplainAnalyzeToken {
  bytes: string
  end_offset: long
  keyword?: boolean
  position: long
  positionLength: long
  start_offset: long
  termFrequency: long
  token: string
  type: string
}

export interface IlmExplainLifecycleExplainLifecycleRequest extends RequestBase {
  index: IndexName
  only_errors?: boolean
  only_managed?: boolean
}

export interface IlmExplainLifecycleExplainLifecycleResponse extends ResponseBase {
  indices: Record<IndexName, IlmExplainLifecycleLifecycleExplain> | IlmExplainLifecycleLifecycleExplainProject
}

export interface ExplainExplainRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  lenient?: boolean
  preference?: string
  query_on_query_string?: string
  routing?: Routing
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  q?: string
  body?: {
    query?: QueryDslAbstractionsContainerQueryContainer
  }
}

export interface ExplainExplainResponse<TDocument = unknown> extends ResponseBase {
  _index: IndexName
  _type?: Type
  _id: Id
  matched: boolean
  explanation?: ExplainExplanationDetail
  get?: ExplainInlineGet<TDocument>
}

export interface ExplainExplanation {
  description: string
  details: ExplainExplanationDetail[]
  value: float
}

export interface ExplainExplanationDetail {
  description: string
  details?: ExplainExplanationDetail[]
  value: float
}

export interface AggregationsBucketHistogramExtendedBounds<T = unknown> {
  max: T
  min: T
}

export interface NodesNodesStatsExtendedMemoryStats extends NodesNodesStatsMemoryStats {
  free_percent: integer
  used_percent: integer
}

export interface AggregationsExtendedStatsAggregate extends AggregationsStatsAggregate {
  std_deviation_bounds: AggregationsStandardDeviationBounds
  sum_of_squares?: double
  variance?: double
  variance_population?: double
  variance_sampling?: double
  std_deviation?: double
  std_deviation_population?: double
  std_deviation_sampling?: double
}

export interface AggregationsMetricExtendedStatsExtendedStatsAggregation extends AggregationsMetricFormatMetricAggregationBase {
  sigma?: double
}

export interface AggregationsPipelineExtendedStatsBucketExtendedStatsBucketAggregation extends AggregationsPipelinePipelineAggregationBase {
  sigma?: double
}

export interface IngestProcessorsFailProcessor extends IngestProcessorBase {
  message: string
}

export type Field = string

export interface MappingTypesSpecializedFieldAliasFieldAliasProperty extends MappingTypesPropertyBase {
  path?: Field
  type: 'alias'
}

export interface FieldCapsFieldCapabilities {
  aggregatable: boolean
  indices?: Indices
  meta?: Record<string, string[]>
  non_aggregatable_indices?: Indices
  non_searchable_indices?: Indices
  searchable: boolean
  type: string
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilter {
  range?: FieldCapsFieldCapabilitiesBodyIndexFilterRange
  match_none?: EmptyObject
  term?: FieldCapsFieldCapabilitiesBodyIndexFilterTerm
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterRange {
  timestamp: FieldCapsFieldCapabilitiesBodyIndexFilterRangeTimestamp
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterRangeTimestamp {
  gte?: integer
  gt?: integer
  lte?: integer
  lt?: integer
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterTerm {
  versionControl: FieldCapsFieldCapabilitiesBodyIndexFilterTermVersionControl
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterTermVersionControl {
  value: string
}

export interface FieldCapsFieldCapabilitiesRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  fields?: Fields
  ignore_unavailable?: boolean
  include_unmapped?: boolean
  body?: {
    index_filter?: FieldCapsFieldCapabilitiesBodyIndexFilter
  }
}

export interface FieldCapsFieldCapabilitiesResponse extends ResponseBase {
  indices: Indices
  fields: Record<Field, Record<string, FieldCapsFieldCapabilities>>
}

export interface SearchCollapsingFieldCollapse {
  field: Field
  inner_hits?: SearchInnerHitsInnerHits | SearchInnerHitsInnerHits[]
  max_concurrent_group_searches?: integer
}

export interface QueryDslAbstractionsFieldLookupFieldLookup {
  id?: Id
  index?: IndexName
  path?: Field
  routing?: Routing
}

export interface MappingMetaFieldsFieldMapping {
}

export interface FieldMemoryUsage {
  memory_size?: ByteSize
  memory_size_in_bytes: long
}

export interface MappingMetaFieldsFieldNamesFieldNamesField {
  enabled: boolean
}

export interface SecurityFieldSecurity {
  except?: Fields
  grant: Fields
}

export interface SecurityGetUserPrivilegesFieldSecuritySettings {
  except: string[]
  grant: string[]
}

export interface FieldSizeUsage {
  size?: ByteSize
  size_in_bytes: long
}

export interface SearchSortFieldSort {
  missing?: AggregationsMissing
  mode?: SearchSortSortMode
  nested?: SearchSortNestedSortValue
  order?: SearchSortSortOrder
  unmapped_type?: MappingTypesFieldType
}

export interface TextStructureFindStructureFieldStat {
  count: integer
  cardinality: integer
  top_hits: TextStructureFindStructureTopHit[]
  mean_value?: integer
  median_value?: integer
  max_value?: integer
  min_value?: integer
  earliest?: string
  latest?: string
}

export interface TermvectorsFieldStatistics {
  doc_count: integer
  sum_doc_freq: long
  sum_ttf: long
}

export type MappingTypesFieldType = 'none' | 'geo_point' | 'geo_shape' | 'ip' | 'binary' | 'keyword' | 'text' | 'search_as_you_type' | 'date' | 'date_nanos' | 'boolean' | 'completion' | 'nested' | 'object' | 'murmur3' | 'token_count' | 'percolator' | 'integer' | 'long' | 'short' | 'byte' | 'float' | 'half_float' | 'scaled_float' | 'double' | 'integer_range' | 'float_range' | 'long_range' | 'double_range' | 'date_range' | 'ip_range' | 'alias' | 'join' | 'rank_feature' | 'rank_features' | 'flattened' | 'shape' | 'histogram' | 'constant_keyword'

export interface ClusterClusterStatsFieldTypesMappings {
  field_types: ClusterClusterStatsFieldTypesStats[]
  runtime_field_types?: ClusterClusterStatsRuntimeFieldTypesStats[]
}

export interface ClusterClusterStatsFieldTypesStats {
  name: Name
  count: integer
  index_count: integer
  script_count?: integer
}

export type QueryDslCompoundFunctionScoreFunctionsFieldValueFieldValueFactorModifier = 'none' | 'log' | 'log1p' | 'log2p' | 'ln' | 'ln1p' | 'ln2p' | 'square' | 'sqrt' | 'reciprocal'

export interface QueryDslCompoundFunctionScoreFunctionsFieldValueFactorScoreFunction extends QueryDslCompoundFunctionScoreFunctionsScoreFunctionBase {
  field: Field
  factor?: double
  missing?: double
  modifier?: QueryDslCompoundFunctionScoreFunctionsFieldValueFieldValueFactorModifier
}

export interface IndicesFielddataFrequencyFilter {
  max: double
  min: double
  min_segment_size: integer
}

export interface FielddataStats {
  evictions?: long
  memory_size?: ByteSize
  memory_size_in_bytes: long
  fields?: Record<Field, FieldMemoryUsage>
}

export type Fields = Field | Field[]

export interface SnapshotFileCountSnapshotStats {
  file_count: integer
  size_in_bytes: long
}

export interface NodesNodesStatsFileSystemStats {
  data: NodesNodesStatsDataPathStats[]
  timestamp: long
  total: NodesNodesStatsTotalFileSystemStats
}

export interface MlGetFiltersFilter {
  description?: string
  filter_id: Id
  items: string[]
}

export interface MlFilterRef {
  filter_id: Id
  filter_type: MlRuleFilterType
}

export interface AggregationsFiltersAggregate extends AggregationsAggregateBase {
  buckets: AggregationsFiltersBucketItem[] | Record<string, AggregationsFiltersBucketItem>
}

export interface AggregationsBucketFiltersFiltersAggregation extends AggregationsBucketBucketAggregationBase {
  filters?: Record<string, QueryDslAbstractionsContainerQueryContainer> | QueryDslAbstractionsContainerQueryContainer[]
  other_bucket?: boolean
  other_bucket_key?: string
}

export interface AggregationsFiltersBucketItemKeys {
  doc_count: long
}
export type AggregationsFiltersBucketItem = AggregationsFiltersBucketItemKeys |
    { [property: string]: AggregationsAggregate }

export interface TextStructureFindStructureFindStructureRequest<TJsonDocument = unknown> {
  charset?: string
  column_names?: string
  delimiter?: string
  explain?: boolean
  format?: string
  grok_pattern?: string
  has_header_row?: boolean
  line_merge_size_limit?: uint
  lines_to_sample?: uint
  quote?: string
  should_trim_fields?: boolean
  timeout?: Time
  timestamp_field?: Field
  timestamp_format?: string
  body: TJsonDocument[]
}

export interface TextStructureFindStructureFindStructureResponse {
  charset: string
  has_header_row?: boolean
  has_byte_order_marker: boolean
  format: string
  field_stats: Record<Field, TextStructureFindStructureFieldStat>
  sample_start: string
  num_messages_analyzed: integer
  mappings: MappingTypeMapping
  quote?: string
  delimiter?: string
  need_client_timezone: boolean
  num_lines_analyzed: integer
  column_names?: string[]
  explanation?: string[]
  grok_pattern?: string
  multiline_start_pattern?: string
  exclude_lines_pattern?: string
  java_timestamp_formats?: string[]
  joda_timestamp_formats?: string[]
  timestamp_field?: Field
  should_trim_fields?: boolean
  ingest_pipeline: IngestPipelineConfig
}

export interface AnalysisTokenFiltersFingerprintTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  max_output_size: integer
  separator: string
}

export interface MappingTypesComplexFlattenedFlattenedProperty extends MappingTypesPropertyBase {
  boost?: double
  depth_limit?: integer
  doc_values?: boolean
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: MappingTypesCoreTextIndexOptions
  null_value?: string
  similarity?: string
  split_queries_on_whitespace?: boolean
  type: 'flattened'
}

export interface XpackUsageFlattenedUsage extends XpackUsageXPackUsage {
  field_count: integer
}

export interface MappingTypesCoreRangeFloatRangeFloatRangeProperty extends MappingTypesCoreRangeRangePropertyBase {
  type: 'float_range'
}

export interface FlushStats {
  periodic: long
  total: long
  total_time?: string
  total_time_in_millis: long
}

export interface CcrFollowInfoFollowConfig {
  max_outstanding_read_requests: integer
  max_outstanding_write_requests: integer
  max_read_request_operation_count: integer
  max_read_request_size: string
  max_retry_delay: Time
  max_write_buffer_count: integer
  max_write_buffer_size: string
  max_write_request_operation_count: integer
  max_write_request_size: string
  read_poll_timeout: Time
}

export interface CcrFollowIndexStatsFollowIndexReadException {
  exception: ErrorCause
  from_seq_no: SequenceNumber
  retries: integer
}

export interface CcrFollowIndexStatsFollowIndexShardStats {
  bytes_read: long
  failed_read_requests: long
  failed_write_requests: long
  fatal_exception?: ErrorCause
  follower_aliases_version: VersionNumber
  follower_global_checkpoint: long
  follower_index: string
  follower_mapping_version: VersionNumber
  follower_max_seq_no: SequenceNumber
  follower_settings_version: VersionNumber
  last_requested_seq_no: SequenceNumber
  leader_global_checkpoint: long
  leader_index: string
  leader_max_seq_no: SequenceNumber
  operations_read: long
  operations_written: long
  outstanding_read_requests: integer
  outstanding_write_requests: integer
  read_exceptions: CcrFollowIndexStatsFollowIndexReadException[]
  remote_cluster: string
  shard_id: integer
  successful_read_requests: long
  successful_write_requests: long
  time_since_last_read_millis: EpochMillis
  total_read_remote_exec_time_millis: EpochMillis
  total_read_time_millis: EpochMillis
  total_write_time_millis: EpochMillis
  write_buffer_operation_count: long
  write_buffer_size_in_bytes: ByteSize
}

export interface CcrFollowIndexStatsFollowIndexStats {
  index: IndexName
  shards: CcrFollowIndexStatsFollowIndexShardStats[]
}

export interface CcrFollowIndexStatsFollowIndexStatsRequest extends RequestBase {
  index: Indices
}

export interface CcrFollowIndexStatsFollowIndexStatsResponse extends ResponseBase {
  indices: CcrFollowIndexStatsFollowIndexStats[]
}

export interface CcrFollowInfoFollowInfoRequest extends RequestBase {
  index: Indices
}

export interface CcrFollowInfoFollowInfoResponse extends ResponseBase {
  follower_indices: CcrFollowInfoFollowerInfo[]
}

export type CcrFollowInfoFollowerIndexStatus = 'active' | 'paused'

export interface CcrFollowInfoFollowerInfo {
  follower_index: IndexName
  leader_index: IndexName
  parameters?: CcrFollowInfoFollowConfig
  remote_cluster: Name
  status: CcrFollowInfoFollowerIndexStatus
}

export interface IngestProcessorsForeachProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  processor: IngestProcessorContainer
}

export interface CcrForgetFollowerIndexForgetFollowerIndexRequest extends RequestBase {
  index: IndexName
  body: {
    follower_cluster?: string
    follower_index?: IndexName
    follower_index_uuid?: string
    leader_remote_cluster?: string
  }
}

export interface CcrForgetFollowerIndexForgetFollowerIndexResponse extends ResponseBase {
  _shards: ShardStatistics
}

export interface AggregationsMetricFormatMetricAggregationBase extends AggregationsMetricMetricAggregationBase {
  format?: string
}

export interface AggregationsMetricFormattableMetricAggregation extends AggregationsMetricMetricAggregationBase {
  format?: string
}

export interface SecurityDeletePrivilegesFoundUserPrivilege {
  found: boolean
}

export interface XpackUsageFrozenIndicesUsage extends XpackUsageXPackUsage {
  indices_count: long
}

export type QueryDslCompoundFunctionScoreFunctionsFunctionBoostMode = 'multiply' | 'replace' | 'sum' | 'avg' | 'max' | 'min'

export interface QueryDslCompoundFunctionScoreFunctionsFunctionScoreContainer {
  exp?: QueryDslCompoundFunctionScoreFunctionsDecayFunction
  gauss?: QueryDslCompoundFunctionScoreFunctionsDecayFunction
  linear?: QueryDslCompoundFunctionScoreFunctionsDecayFunction
  field_value_factor?: QueryDslCompoundFunctionScoreFunctionsFieldValueFactorScoreFunction
  random_score?: QueryDslCompoundFunctionScoreFunctionsRandomScoreFunction
  script_score?: QueryDslCompoundFunctionScoreFunctionsScriptScoreFunction
  filter?: QueryDslAbstractionsContainerQueryContainer
  weight?: double
}

export type QueryDslCompoundFunctionScoreFunctionsFunctionScoreMode = 'multiply' | 'sum' | 'avg' | 'first' | 'max' | 'min'

export interface QueryDslCompoundFunctionScoreFunctionScoreQuery extends QueryDslAbstractionsQueryQueryBase {
  boost_mode?: QueryDslCompoundFunctionScoreFunctionsFunctionBoostMode
  functions?: QueryDslCompoundFunctionScoreFunctionsFunctionScoreContainer[]
  max_boost?: double
  min_score?: double
  query?: QueryDslAbstractionsContainerQueryContainer
  score_mode?: QueryDslCompoundFunctionScoreFunctionsFunctionScoreMode
  boost?: float
}

export type Fuzziness = string | integer

export interface QueryDslTermLevelFuzzyFuzzyQuery extends QueryDslAbstractionsQueryQueryBase {
  max_expansions?: integer
  prefix_length?: integer
  rewrite?: MultiTermQueryRewrite
  transpositions?: boolean
  fuzziness?: Fuzziness
  value: any
}

export type AggregationsPipelineGapPolicy = 'skip' | 'insert_zeros'

export interface NodesNodesStatsGarbageCollectionGenerationStats {
  collection_count: long
  collection_time: string
  collection_time_in_millis: long
}

export interface NodesNodesStatsGarbageCollectionStats {
  collectors: Record<string, NodesNodesStatsGarbageCollectionGenerationStats>
}

export interface MappingTypesSpecializedGenericGenericProperty extends MappingTypesDocValuesPropertyBase {
  analyzer: string
  boost: double
  fielddata: IndicesStringFielddata
  ignore_malformed: boolean
  index: boolean
  index_options: MappingTypesCoreTextIndexOptions
  norms: boolean
  null_value: string
  position_increment_gap: integer
  search_analyzer: string
  term_vector: MappingTermVectorOption
  type: string
}

export interface QueryDslGeoBoundingBoxGeoBoundingBoxQuery extends QueryDslAbstractionsQueryQueryBase {
  bounding_box?: QueryDslGeoBoundingBoxBoundingBox
  type?: QueryDslGeoBoundingBoxGeoExecution
  validation_method?: QueryDslGeoGeoValidationMethod
  top_left?: LatLon
  bottom_right?: LatLon
}

export interface AggregationsGeoBounds {
  bottom_right: LatLon
  top_left: LatLon
}

export interface AggregationsGeoBoundsAggregate extends AggregationsAggregateBase {
  bounds: AggregationsGeoBounds
}

export interface AggregationsMetricGeoBoundsGeoBoundsAggregation extends AggregationsMetricMetricAggregationBase {
  wrap_longitude?: boolean
}

export interface AggregationsGeoCentroidAggregate extends AggregationsAggregateBase {
  count: long
  location: QueryDslGeoGeoLocation
}

export interface AggregationsMetricGeoCentroidGeoCentroidAggregation extends AggregationsMetricMetricAggregationBase {
  count?: long
  location?: QueryDslGeoGeoLocation
}

export type QueryDslGeoGeoCoordinate = string | double[] | QueryDslGeoThreeDimensionalPoint

export interface QueryDslCompoundFunctionScoreFunctionsGeoDecayFunctionKeys extends QueryDslCompoundFunctionScoreFunctionsDecayFunctionBase {
}
export type QueryDslCompoundFunctionScoreFunctionsGeoDecayFunction = QueryDslCompoundFunctionScoreFunctionsGeoDecayFunctionKeys |
    { [property: string]: QueryDslCompoundFunctionScoreFunctionsDecayPlacement<QueryDslGeoGeoLocation, Distance> }

export interface AggregationsBucketGeoDistanceGeoDistanceAggregation extends AggregationsBucketBucketAggregationBase {
  distance_type?: GeoDistanceType
  field?: Field
  origin?: QueryDslGeoGeoLocation | string
  ranges?: AggregationsBucketRangeAggregationRange[]
  unit?: DistanceUnit
}

export interface QueryDslGeoDistanceGeoDistanceQuery extends QueryDslAbstractionsQueryQueryBase {
  distance?: Distance
  distance_type?: GeoDistanceType
  location?: QueryDslGeoGeoLocation
  validation_method?: QueryDslGeoGeoValidationMethod
}

export interface SearchSortGeoDistanceSortKeys {
  mode?: SearchSortSortMode
  distance_type?: GeoDistanceType
  order?: SearchSortSortOrder
  unit?: DistanceUnit
}
export type SearchSortGeoDistanceSort = SearchSortGeoDistanceSortKeys |
    { [property: string]: QueryDslGeoGeoLocation | QueryDslGeoGeoLocation[] }

export type GeoDistanceType = 'arc' | 'plane'

export type QueryDslGeoBoundingBoxGeoExecution = 'memory' | 'indexed'

export interface AggregationsBucketGeoHashGridGeoHashGridAggregation extends AggregationsBucketBucketAggregationBase {
  bounds?: QueryDslGeoBoundingBoxBoundingBox
  field?: Field
  precision?: GeoHashPrecision
  shard_size?: integer
  size?: integer
}

export type GeoHashPrecision = number

export interface IngestProcessorsPluginsGeoIpProcessor extends IngestProcessorBase {
  database_file: string
  field: Field
  first_only: boolean
  ignore_missing: boolean
  properties: string[]
  target_field: Field
}

export interface AggregationsGeoLineAggregate extends AggregationsAggregateBase {
  type: string
  geometry: AggregationsLineStringGeoShape
  properties: AggregationsGeoLineProperties
}

export interface AggregationsMetricGeoLineGeoLineAggregation {
  point: AggregationsMetricGeoLineGeoLinePoint
  sort: AggregationsMetricGeoLineGeoLineSort
  include_sort?: boolean
  sort_order?: SearchSortSortOrder
  size?: integer
}

export interface AggregationsMetricGeoLineGeoLinePoint {
  field: Field
}

export interface AggregationsGeoLineProperties {
  complete: boolean
  sort_values: double[]
}

export interface AggregationsMetricGeoLineGeoLineSort {
  field: Field
}

export type QueryDslGeoGeoLocation = string | double[] | QueryDslGeoTwoDimensionalPoint

export type MappingTypesGeoGeoShapeGeoOrientation = 'right' | 'RIGHT' | 'counterclockwise' | 'COUNTERCLOCKWISE' | 'ccw' | 'CCW' | 'left' | 'LEFT' | 'clockwise' | 'CLOCKWISE' | 'cw' | 'CW'

export interface MappingTypesGeoGeoPointGeoPointProperty extends MappingTypesDocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: QueryDslGeoGeoLocation
  type: 'geo_point'
}

export interface QueryDslGeoPolygonGeoPolygonQuery extends QueryDslAbstractionsQueryQueryBase {
  points?: QueryDslGeoGeoLocation[]
  validation_method?: QueryDslGeoGeoValidationMethod
}

export interface QueryDslGeoShapeGeoShape {
  type?: string
}

export interface MappingTypesGeoGeoShapeGeoShapeProperty extends MappingTypesDocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  orientation?: MappingTypesGeoGeoShapeGeoOrientation
  strategy?: MappingTypesGeoGeoShapeGeoStrategy
  type: 'geo_shape'
}

export interface QueryDslGeoShapeGeoShapeQuery extends QueryDslAbstractionsQueryQueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: QueryDslAbstractionsFieldLookupFieldLookup
  relation?: GeoShapeRelation
  shape?: QueryDslGeoShapeGeoShape
}

export type GeoShapeRelation = 'intersects' | 'disjoint' | 'within' | 'contains'

export type MappingTypesGeoGeoShapeGeoStrategy = 'recursive' | 'term'

export interface AggregationsBucketGeoTileGridGeoTileGridAggregation extends AggregationsBucketBucketAggregationBase {
  field?: Field
  precision?: GeoTilePrecision
  shard_size?: integer
  size?: integer
}

export type GeoTilePrecision = number

export type QueryDslGeoGeoValidationMethod = 'coerce' | 'ignore_malformed' | 'strict'

export interface CcrGetAutoFollowPatternGetAutoFollowPatternRequest extends RequestBase {
  name?: Name
}

export interface CcrGetAutoFollowPatternGetAutoFollowPatternResponse extends ResponseBase {
  patterns: CcrGetAutoFollowPatternAutoFollowPatternItem[]
}

export interface AutoscalingCapacityGetGetAutoscalingCapacityRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface AutoscalingCapacityGetGetAutoscalingCapacityResponse extends ResponseBase {
  stub: integer
}

export interface AutoscalingPolicyGetGetAutoscalingPolicyRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface AutoscalingPolicyGetGetAutoscalingPolicyResponse extends ResponseBase {
  stub: integer
}

export interface LicenseGetBasicLicenseStatusGetBasicLicenseStatusRequest extends RequestBase {
}

export interface LicenseGetBasicLicenseStatusGetBasicLicenseStatusResponse extends ResponseBase {
  eligible_to_start_basic: boolean
}

export interface SslGetCertificatesGetCertificatesRequest extends RequestBase {
}

export type SslGetCertificatesGetCertificatesResponse = SslGetCertificatesClusterCertificateInformation[]

export interface EnrichGetPolicyGetEnrichPolicyRequest extends RequestBase {
  name?: Names
}

export interface EnrichGetPolicyGetEnrichPolicyResponse extends ResponseBase {
  policies: EnrichNamedPolicyMetadata[]
}

export interface FeaturesGetFeaturesGetFeaturesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface FeaturesGetFeaturesGetFeaturesResponse extends ResponseBase {
  stub: integer
}

export interface IlmGetStatusGetIlmStatusRequest extends RequestBase {
}

export interface IlmGetStatusGetIlmStatusResponse extends ResponseBase {
  operation_mode: IlmGetStatusLifecycleOperationMode
}

export interface LicenseGetLicenseGetLicenseRequest extends RequestBase {
  accept_enterprise?: boolean
  local?: boolean
}

export interface LicenseGetLicenseGetLicenseResponse extends ResponseBase {
  license: LicenseGetLicenseLicenseInformation
}

export interface IlmGetLifecycleGetLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id?: Id
}

export interface IlmGetLifecycleGetLifecycleResponse extends DictionaryResponseBase<string, IlmGetLifecycleLifecyclePolicy> {
}

export interface IngestGetPipelineGetPipelineRequest extends RequestBase {
  id?: Id
  master_timeout?: Time
  summary?: boolean
}

export interface IngestGetPipelineGetPipelineResponse extends DictionaryResponseBase<string, IngestPipeline> {
}

export interface GetGetRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  version?: VersionNumber
  version_type?: VersionType
  _source?: boolean | Fields
}

export interface GetGetResponse<TDocument = unknown> extends ResponseBase {
  _index: IndexName
  fields?: Record<string, any>
  found: boolean
  _id: Id
  _primary_term?: long
  _routing?: string
  _seq_no?: SequenceNumber
  _source?: TDocument
  _type?: Type
  _version?: VersionNumber
}

export interface RollupGetRollupCapabilitiesGetRollupCapabilitiesRequest extends RequestBase {
  id?: Id
}

export interface RollupGetRollupCapabilitiesGetRollupCapabilitiesResponse extends DictionaryResponseBase<IndexName, RollupGetRollupCapabilitiesRollupCapabilities> {
}

export interface RollupGetRollupIndexCapabilitiesGetRollupIndexCapabilitiesRequest extends RequestBase {
  index: Id
}

export interface RollupGetRollupIndexCapabilitiesGetRollupIndexCapabilitiesResponse extends DictionaryResponseBase<IndexName, RollupGetRollupIndexCapabilitiesRollupIndexCapabilities> {
}

export interface RollupGetRollupJobGetRollupJobRequest extends RequestBase {
  id?: Id
}

export interface RollupGetRollupJobGetRollupJobResponse extends ResponseBase {
  jobs: RollupGetRollupJobRollupJobInformation[]
}

export interface GetScriptContextGetScriptContextRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface GetScriptContextGetScriptContextResponse extends ResponseBase {
  stub: integer
}

export interface GetScriptLanguagesGetScriptLanguagesRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface GetScriptLanguagesGetScriptLanguagesResponse extends ResponseBase {
  stub: integer
}

export interface GetScriptGetScriptRequest extends RequestBase {
  id: Id
  master_timeout?: Time
}

export interface GetScriptGetScriptResponse extends ResponseBase {
  _id: Id
  found: boolean
  script?: StoredScript
}

export interface SlmGetStatusGetSnapshotLifecycleManagementStatusRequest extends RequestBase {
}

export interface SlmGetStatusGetSnapshotLifecycleManagementStatusResponse extends ResponseBase {
  operation_mode: IlmGetStatusLifecycleOperationMode
}

export interface SlmGetLifecycleGetSnapshotLifecycleRequest extends RequestBase {
  policy_id?: Names
}

export interface SlmGetLifecycleGetSnapshotLifecycleResponse extends DictionaryResponseBase<Id, SlmSnapshotLifecyclePolicyMetadata> {
}

export interface SlmGetStatsGetSnapshotLifecycleStatsRequest extends RequestBase {
}

export interface SlmGetStatsGetSnapshotLifecycleStatsResponse extends ResponseBase {
  retention_deletion_time: string
  retention_deletion_time_millis: EpochMillis
  retention_failed: long
  retention_runs: long
  retention_timed_out: long
  total_snapshots_deleted: long
  total_snapshot_deletion_failures: long
  total_snapshots_failed: long
  total_snapshots_taken: long
  policy_stats: string[]
}

export interface GetStats {
  current: long
  exists_time?: string
  exists_time_in_millis: long
  exists_total: long
  missing_time?: string
  missing_time_in_millis: long
  missing_total: long
  time?: string
  time_in_millis: long
  total: long
}

export interface TaskGetTaskGetTaskRequest extends RequestBase {
  task_id: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface TaskGetTaskGetTaskResponse extends ResponseBase {
  completed: boolean
  task: TaskGetTaskTaskInfo
  response?: TaskListTasksTaskStatus
  error?: ErrorCause
}

export interface TransformGetTransformGetTransformRequest extends RequestBase {
  transform_id?: Name
  allow_no_match?: boolean
  from?: integer
  size?: integer
  exclude_generated?: boolean
}

export interface TransformGetTransformGetTransformResponse extends ResponseBase {
  count: long
  transforms: WatcherTransform[]
}

export interface TransformGetTransformStatsGetTransformStatsRequest extends RequestBase {
  transform_id: Name
  allow_no_match?: boolean
  from?: long
  size?: long
}

export interface TransformGetTransformStatsGetTransformStatsResponse extends ResponseBase {
  count: long
  transforms: TransformGetTransformStatsTransformStats[]
}

export interface LicenseGetTrialLicenseStatusGetTrialLicenseStatusRequest extends RequestBase {
}

export interface LicenseGetTrialLicenseStatusGetTrialLicenseStatusResponse extends ResponseBase {
  eligible_to_start_trial: boolean
}

export interface WatcherGetWatchGetWatchRequest extends RequestBase {
  id: Name
}

export interface WatcherGetWatchGetWatchResponse extends ResponseBase {
  found: boolean
  _id: Id
  status?: WatcherAckWatchWatchStatus
  watch?: WatcherWatch
  _primary_term?: integer
  _seq_no?: SequenceNumber
  _version?: VersionNumber
}

export interface AggregationsBucketGlobalGlobalAggregation extends AggregationsBucketBucketAggregationBase {
}

export interface SecurityGetUserPrivilegesGlobalPrivileges {
  application: SecurityGetUserPrivilegesApplicationGlobalUserPrivileges
}

export interface AggregationsBucketSignificantTermsHeuristicsGoogleNormalizedDistanceHeuristic {
  background_is_superset: boolean
}

export interface GraphExploreGraphConnection {
  doc_count: long
  source: long
  target: long
  weight: double
}

export interface GraphExploreGraphExploreControls {
  sample_diversity?: GraphExploreSampleDiversity
  sample_size?: integer
  timeout?: Time
  use_significance: boolean
}

export interface GraphExploreGraphExploreRequest extends RequestBase {
  index: Indices
  type?: Types
  routing?: Routing
  timeout?: Time
  body?: {
    connections?: GraphExploreHop
    controls?: GraphExploreGraphExploreControls
    query?: QueryDslAbstractionsContainerQueryContainer
    vertices?: GraphExploreGraphVertexDefinition[]
  }
}

export interface GraphExploreGraphExploreResponse extends ResponseBase {
  connections: GraphExploreGraphConnection[]
  failures: ShardFailure[]
  timed_out: boolean
  took: long
  vertices: GraphExploreGraphVertex[]
}

export interface GraphExploreGraphVertex {
  depth: long
  field: string
  term: string
  weight: double
}

export interface GraphExploreGraphVertexDefinition {
  exclude?: string[]
  field: Field
  include?: GraphExploreGraphVertexInclude[]
  min_doc_count?: long
  shard_min_doc_count?: long
  size?: integer
}

export interface GraphExploreGraphVertexInclude {
  boost: double
  term: string
}

export interface IngestProcessorsGrokProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern_definitions: Record<string, string>
  patterns: string[]
  trace_match?: boolean
}

export interface IngestProcessorGrokProcessorPatternsRequest extends RequestBase {
}

export interface IngestProcessorGrokProcessorPatternsResponse extends ResponseBase {
  patterns: Record<string, string>
}

export type GroupBy = 'nodes' | 'parents' | 'none'

export interface IngestProcessorsGsubProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern: string
  replacement: string
  target_field?: Field
}

export interface QueryDslJoiningHasChildHasChildQuery extends QueryDslAbstractionsQueryQueryBase {
  ignore_unmapped?: boolean
  inner_hits?: SearchInnerHitsInnerHits
  max_children?: integer
  min_children?: integer
  query?: QueryDslAbstractionsContainerQueryContainer
  score_mode?: QueryDslJoiningHasChildChildScoreMode
  type?: RelationName
}

export interface QueryDslJoiningHasParentHasParentQuery extends QueryDslAbstractionsQueryQueryBase {
  ignore_unmapped?: boolean
  inner_hits?: SearchInnerHitsInnerHits
  parent_type?: RelationName
  query?: QueryDslAbstractionsContainerQueryContainer
  score?: boolean
}

export interface AggregationsMetricPercentilesHdrMethod {
  number_of_significant_value_digits?: integer
}

export interface AggregationsHdrPercentileItem {
  key: double
  value: double
}

export interface AggregationsHdrPercentilesAggregate extends AggregationsAggregateBase {
  values: AggregationsHdrPercentileItem[]
}

export type Health = 'green' | 'yellow' | 'red'

export interface SearchHighlightingHighlight {
  fields: Record<Field, SearchHighlightingHighlightField>
  type?: SearchHighlightingHighlighterType
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: SearchHighlightingBoundaryScanner
  boundary_scanner_locale?: string
  encoder?: SearchHighlightingHighlighterEncoder
  fragmenter?: SearchHighlightingHighlighterFragmenter
  fragment_offset?: integer
  fragment_size?: integer
  max_fragment_length?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  order?: SearchHighlightingHighlighterOrder
  post_tags?: string[]
  pre_tags?: string[]
  require_field_match?: boolean
  tags_schema?: SearchHighlightingHighlighterTagsSchema
  highlight_query?: QueryDslAbstractionsContainerQueryContainer
  max_analyzed_offset?: string | integer
}

export interface SearchHighlightingHighlightField {
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: SearchHighlightingBoundaryScanner
  boundary_scanner_locale?: string
  field?: Field
  force_source?: boolean
  fragmenter?: SearchHighlightingHighlighterFragmenter
  fragment_offset?: integer
  fragment_size?: integer
  highlight_query?: QueryDslAbstractionsContainerQueryContainer
  matched_fields?: Fields
  max_fragment_length?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  order?: SearchHighlightingHighlighterOrder
  phrase_limit?: integer
  post_tags?: string[]
  pre_tags?: string[]
  require_field_match?: boolean
  tags_schema?: SearchHighlightingHighlighterTagsSchema
  type?: SearchHighlightingHighlighterType | string
}

export type SearchHighlightingHighlighterEncoder = 'default' | 'html'

export type SearchHighlightingHighlighterFragmenter = 'simple' | 'span'

export type SearchHighlightingHighlighterOrder = 'score'

export type SearchHighlightingHighlighterTagsSchema = 'styled'

export type SearchHighlightingHighlighterType = 'plain' | 'fvh' | 'unified'

export interface AggregationsBucketHistogramHistogramAggregation extends AggregationsBucketBucketAggregationBase {
  extended_bounds?: AggregationsBucketHistogramExtendedBounds<double>
  hard_bounds?: AggregationsBucketHistogramExtendedBounds<double>
  field?: Field
  interval?: double
  min_doc_count?: integer
  missing?: double
  offset?: double
  order?: AggregationsBucketHistogramHistogramOrder
  script?: Script
  format?: string
}

export interface AggregationsBucketHistogramHistogramOrder {
  _count?: SearchSortSortOrder
  _key?: SearchSortSortOrder
}

export interface MappingTypesSpecializedHistogramHistogramProperty extends MappingTypesPropertyBase {
  ignore_malformed?: boolean
  type: 'histogram'
}

export interface RollupRollupConfigurationHistogramRollupGrouping {
  fields: Fields
  interval: long
}

export interface SearchHitsHit<TDocument = unknown> {
  _index: IndexName
  _id: Id
  _score?: double
  _type?: Type
  _explanation?: ExplainExplanation
  fields?: Record<string, any>
  highlight?: Record<string, string[]>
  inner_hits?: Record<string, SearchHitsInnerHitsResult>
  matched_queries?: string[]
  _nested?: SearchHitsNestedIdentity
  _ignored?: string[]
  _shard?: string
  _node?: string
  _routing?: string
  _source?: TDocument
  _seq_no?: SequenceNumber
  _primary_term?: long
  _version?: VersionNumber
  sort?: SearchSortSortResults
}

export interface SearchHitsHitsMetadata<T = unknown> {
  total: SearchHitsTotalHits | long
  hits: SearchHitsHit<T>[]
  max_score?: double
}

export interface AggregationsPipelineMovingAverageModelsHoltLinearModelSettings {
  alpha?: float
  beta?: float
}

export interface AggregationsPipelineMovingAverageModelsHoltWintersModelSettings {
  alpha?: float
  beta?: float
  gamma?: float
  pad?: boolean
  period?: integer
  type?: AggregationsPipelineMovingAverageModelsHoltWintersType
}

export type AggregationsPipelineMovingAverageModelsHoltWintersType = 'add' | 'mult'

export interface GraphExploreHop {
  connections?: GraphExploreHop
  query: QueryDslAbstractionsContainerQueryContainer
  vertices: GraphExploreGraphVertexDefinition[]
}

export type Host = string

export interface NodesNodesHotThreadsHotThreadInformation {
  hosts: string[]
  node_id: string
  node_name: string
  threads: string[]
}

export interface WatcherHourlySchedule {
  minute: integer[]
}

export interface AnalysisCharFiltersHtmlStripCharFilter extends AnalysisCharFiltersCharFilterBase {
}

export type HttpHeaders = Record<string, string | string[]>

export interface WatcherHttpInput {
  http?: WatcherHttpInput
  extract?: string[]
  request?: WatcherHttpInputRequestDefinition
  response_content_type?: WatcherResponseContentType
}

export interface WatcherHttpInputAuthentication {
  basic: WatcherHttpInputBasicAuthentication
}

export interface WatcherHttpInputBasicAuthentication {
  password: Password
  username: Username
}

export type WatcherHttpInputMethod = 'head' | 'get' | 'post' | 'put' | 'delete'

export interface WatcherHttpInputProxy {
  host: Host
  port: uint
}

export interface WatcherHttpInputRequestDefinition {
  auth?: WatcherHttpInputAuthentication
  body?: string
  connection_timeout?: Time
  headers?: Record<string, string>
  host?: Host
  method?: WatcherHttpInputMethod
  params?: Record<string, string>
  path?: string
  port?: uint
  proxy?: WatcherHttpInputProxy
  read_timeout?: Time
  scheme?: WatcherConnectionScheme
  url?: string
}

export interface WatcherHttpInputRequestResult extends WatcherHttpInputRequestDefinition {
}

export interface WatcherHttpInputResponseResult {
  body: string
  headers: HttpHeaders
  status: integer
}

export interface NodesNodesStatsHttpStats {
  current_open: integer
  total_opened: long
}

export interface AnalysisTokenFiltersHunspellTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  dedup: boolean
  dictionary: string
  locale: string
  longest_only: boolean
}

export interface AnalysisTokenFiltersCompoundWordHyphenationDecompounderTokenFilter extends AnalysisTokenFiltersCompoundWordCompoundWordTokenFilterBase {
}

export type Id = string

export type Ids = Id | Id[]

export interface QueryDslTermLevelIdsIdsQuery extends QueryDslAbstractionsQueryQueryBase {
  values?: Id[] | long[]
}

export interface XpackUsageIlmPolicyStatistics {
  indices_managed: integer
  phases: IlmPhases
}

export interface XpackUsageIlmUsage {
  policy_count: integer
  policy_stats: XpackUsageIlmPolicyStatistics[]
}

export interface DanglingIndicesIndexImportImportDanglingIndexRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DanglingIndicesIndexImportImportDanglingIndexResponse extends ResponseBase {
  stub: integer
}

export interface WatcherIndexActionResult {
  response: WatcherIndexActionResultIndexResponse
}

export interface WatcherIndexActionResultIndexResponse {
  created: boolean
  id: Id
  index: IndexName
  result: Result
  version: VersionNumber
  type?: Type
}

export type IndexAlias = string

export interface IndicesGetAliasIndexAliases {
  aliases: Record<string, IndicesAliasDefinition>
}

export type IndexIndexCheckOnStartup = 'false' | 'checksum' | 'true'

export interface MappingMetaFieldsIndexIndexField {
  enabled: boolean
}

export interface ClusterClusterHealthIndexHealthStats {
  active_primary_shards: integer
  active_shards: integer
  initializing_shards: integer
  number_of_replicas: integer
  number_of_shards: integer
  relocating_shards: integer
  shards?: Record<string, ClusterClusterHealthShardHealthStats>
  status: Health
  unassigned_shards: integer
}

export interface IndicesGetMappingIndexMappingRecord {
  item?: MappingTypeMapping
  mappings: MappingTypeMapping
}

export type IndexMetaData = Record<string, any>

export type IndexName = string

export type MappingTypesCoreTextIndexOptions = 'docs' | 'freqs' | 'positions' | 'offsets'

export type IndexPattern = string

export type IndexPatterns = IndexPattern[]

export interface SecurityHasPrivilegesIndexPrivilegesCheck {
  names: string[]
  privileges: string[]
}

export interface IndexIndexRequest<TDocument = unknown> extends RequestBase {
  id?: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  op_type?: OpType
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
  require_alias?: boolean
  body: TDocument
}

export interface IndexIndexResponse extends WriteResponseBase {
}

export interface IndexIndexRouting {
  allocation?: IndexIndexRoutingAllocation
  rebalance?: IndexIndexRoutingRebalance
}

export interface IndexIndexRoutingAllocation {
  enable?: IndexIndexRoutingAllocationOptions
  include?: IndexIndexRoutingAllocationInclude
  initial_recovery?: IndexIndexRoutingAllocationInitialRecovery
}

export interface IndexIndexRoutingAllocationInclude {
  _tier_preference?: string
  _id?: Id
}

export interface IndexIndexRoutingAllocationInitialRecovery {
  _id?: Id
}

export type IndexIndexRoutingAllocationOptions = 'all' | 'primaries' | 'new_primaries' | 'none'

export interface IndexIndexRoutingRebalance {
  enable: IndexIndexRoutingRebalanceOptions
}

export type IndexIndexRoutingRebalanceOptions = 'all' | 'primaries' | 'replicas' | 'none'

export interface IndicesSegmentsIndexSegment {
  shards: Record<string, IndicesSegmentsShardsSegment | IndicesSegmentsShardsSegment[]>
}

export interface IndexIndexSettingBlocks {
  read_only?: boolean
  'index.blocks.read_only'?: boolean
  read_only_allow_delete?: boolean
  'index.blocks.read_only_allow_delete'?: boolean
  read?: boolean
  'index.blocks.read'?: boolean
  write?: boolean | string
  'index.blocks.write'?: boolean | string
  metadata?: boolean
  'index.blocks.metadata'?: boolean
}

export interface IndexIndexSettings {
  number_of_shards?: integer | string
  'index.number_of_shards'?: integer | string
  number_of_replicas?: integer | string
  'index.number_of_replicas'?: integer | string
  number_of_routing_shards?: integer
  'index.number_of_routing_shards'?: integer
  check_on_startup?: IndexIndexCheckOnStartup
  'index.check_on_startup'?: IndexIndexCheckOnStartup
  codec?: string
  'index.codec'?: string
  routing_partition_size?: integer | string
  'index.routing_partition_size'?: integer | string
  'soft_deletes.retention_lease.period'?: Time
  'index.soft_deletes.retention_lease.period'?: Time
  load_fixed_bitset_filters_eagerly?: boolean
  'index.load_fixed_bitset_filters_eagerly'?: boolean
  hidden?: boolean | string
  'index.hidden'?: boolean | string
  auto_expand_replicas?: string
  'index.auto_expand_replicas'?: string
  'search.idle.after'?: Time
  'index.search.idle.after'?: Time
  refresh_interval?: Time
  'index.refresh_interval'?: Time
  max_result_window?: integer
  'index.max_result_window'?: integer
  max_inner_result_window?: integer
  'index.max_inner_result_window'?: integer
  max_rescore_window?: integer
  'index.max_rescore_window'?: integer
  max_docvalue_fields_search?: integer
  'index.max_docvalue_fields_search'?: integer
  max_script_fields?: integer
  'index.max_script_fields'?: integer
  max_ngram_diff?: integer
  'index.max_ngram_diff'?: integer
  max_shingle_diff?: integer
  'index.max_shingle_diff'?: integer
  blocks?: IndexIndexSettingBlocks
  'index.blocks'?: IndexIndexSettingBlocks
  max_refresh_listeners?: integer
  'index.max_refresh_listeners'?: integer
  'analyze.max_token_count'?: integer
  'index.analyze.max_token_count'?: integer
  'highlight.max_analyzed_offset'?: integer
  'index.highlight.max_analyzed_offset'?: integer
  max_terms_count?: integer
  'index.max_terms_count'?: integer
  max_regex_length?: integer
  'index.max_regex_length'?: integer
  routing?: IndexIndexRouting
  'index.routing'?: IndexIndexRouting
  gc_deletes?: Time
  'index.gc_deletes'?: Time
  default_pipeline?: PipelineName
  'index.default_pipeline'?: PipelineName
  final_pipeline?: PipelineName
  'index.final_pipeline'?: PipelineName
  lifecycle?: IndexIndexSettingsLifecycle
  'index.lifecycle'?: IndexIndexSettingsLifecycle
  provided_name?: Name
  'index.provided_name'?: Name
  creation_date?: DateString
  'index.creation_date'?: DateString
  uuid?: Uuid
  'index.uuid'?: Uuid
  version?: IndexIndexVersioning
  'index.version'?: IndexIndexVersioning
  verified_before_close?: boolean | string
  'index.verified_before_close'?: boolean | string
  format?: string | integer
  'index.format'?: string | integer
  max_slices_per_scroll?: integer
  'index.max_slices_per_scroll'?: integer
  'translog.durability'?: string
  'index.translog.durability'?: string
  'query_string.lenient'?: boolean | string
  'index.query_string.lenient'?: boolean | string
  priority?: integer
  'index.priority'?: integer
  top_metrics_max_size?: integer
  analysis?: IndexIndexSettingsAnalysis
}

export interface IndexIndexSettingsAnalysis {
  char_filter?: Record<string, AnalysisCharFiltersCharFilter>
}

export interface IndexIndexSettingsLifecycle {
  name: Name
}

export interface IndicesPutSettingsIndexSettingsRequest extends IndexIndexSettings {
  settings?: IndexIndexSettings
}

export interface IndexIndexState {
  aliases?: Record<IndexName, IndicesAlias>
  mappings?: MappingTypeMapping
  settings: IndexIndexSettings | IndexIndexStatePrefixedSettings
}

export interface IndexIndexStatePrefixedSettings {
  index: IndexIndexSettings
}

export interface IndicesStatsIndexStats {
  completion?: CompletionStats
  docs?: DocStats
  fielddata?: FielddataStats
  flush?: FlushStats
  get?: GetStats
  indexing?: IndexingStats
  merges?: MergesStats
  query_cache?: QueryCacheStats
  recovery?: RecoveryStats
  refresh?: RefreshStats
  request_cache?: RequestCacheStats
  search?: SearchStats
  segments?: SegmentsStats
  store?: StoreStats
  translog?: TranslogStats
  warmer?: WarmerStats
  bulk?: BulkStats
}

export interface IndexIndexVersioning {
  created: VersionString
}

export interface IndexedScript extends ScriptBase {
  id: string
}

export type RollupGetRollupJobIndexingJobState = 'started' | 'indexing' | 'stopping' | 'stopped' | 'aborting'

export interface IndexingStats {
  index_current: long
  delete_current: long
  delete_time?: string
  delete_time_in_millis: long
  delete_total: long
  is_throttled: boolean
  noop_update_total: long
  throttle_time?: string
  throttle_time_in_millis: long
  index_time?: string
  index_time_in_millis: long
  index_total: long
  index_failed: long
  types?: Record<string, IndexingStats>
}

export type Indices = string | string[]

export interface IndicesAddBlockIndicesAddBlockRequest extends RequestBase {
  index: IndexName
  block: IndicesAddBlockIndicesBlockOptions
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesAddBlockIndicesAddBlockResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
  indices: IndicesAddBlockIndicesBlockStatus[]
}

export interface IndicesAnalyzeIndicesAnalyzeRequest extends RequestBase {
  index?: IndexName
  body?: {
    analyzer?: string
    attributes?: string[]
    char_filter?: string | AnalysisCharFiltersCharFilter[]
    explain?: boolean
    field?: Field
    filter?: string | AnalysisTokenFiltersTokenFilter[]
    normalizer?: string
    text?: IndicesAnalyzeTextToAnalyze
    tokenizer?: string | AnalysisTokenizersTokenizer
  }
}

export interface IndicesAnalyzeIndicesAnalyzeResponse extends ResponseBase {
  detail?: IndicesAnalyzeAnalyzeDetail
  tokens?: IndicesAnalyzeAnalyzeToken[]
}

export type IndicesAddBlockIndicesBlockOptions = 'metadata' | 'read' | 'read_only' | 'write'

export interface IndicesAddBlockIndicesBlockStatus {
  name: IndexName
  blocked: boolean
}

export interface IndicesClearCacheIndicesClearCacheRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  fielddata?: boolean
  fields?: Fields
  ignore_unavailable?: boolean
  query?: boolean
  request?: boolean
}

export interface IndicesClearCacheIndicesClearCacheResponse extends ShardsOperationResponseBase {
}

export interface IndicesCloneIndicesCloneRequest extends RequestBase {
  index: IndexName
  target: Name
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    settings?: Record<string, any>
  }
}

export interface IndicesCloneIndicesCloneResponse extends AcknowledgedResponseBase {
  index: IndexName
  shards_acknowledged: boolean
}

export interface IndicesCloseIndicesCloseRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesCloseIndicesCloseResponse extends AcknowledgedResponseBase {
  indices: Record<IndexName, IndicesCloseCloseIndexResult>
  shards_acknowledged: boolean
}

export interface IndicesCreateDataStreamIndicesCreateDataStreamRequest extends RequestBase {
  name: DataStreamName
}

export interface IndicesCreateDataStreamIndicesCreateDataStreamResponse extends AcknowledgedResponseBase {
}

export interface IndicesCreateIndicesCreateRequest extends RequestBase {
  index: IndexName
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    mappings?: Record<string, MappingTypeMapping> | MappingTypeMapping
    settings?: Record<string, any>
  }
}

export interface IndicesCreateIndicesCreateResponse extends AcknowledgedResponseBase {
  index: IndexName
  shards_acknowledged: boolean
}

export interface IndicesDataStreamsStatsIndicesDataStreamsStatsRequest extends RequestBase {
  name?: IndexName
  expand_wildcards?: ExpandWildcards
  human?: boolean
}

export interface IndicesDataStreamsStatsIndicesDataStreamsStatsResponse extends ResponseBase {
  _shards: ShardStatistics
  backing_indices: integer
  data_stream_count: integer
  total_store_sizes?: ByteSize
  total_store_size_bytes: integer
  data_streams: IndicesDataStreamsStatsDataStreamsStatsItem[]
}

export interface IndicesDeleteAliasIndicesDeleteAliasRequest extends RequestBase {
  index: Indices
  name: Names
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteAliasIndicesDeleteAliasResponse extends ResponseBase {
}

export interface IndicesDeleteDataStreamIndicesDeleteDataStreamRequest extends RequestBase {
  name: DataStreamName
}

export interface IndicesDeleteDataStreamIndicesDeleteDataStreamResponse extends AcknowledgedResponseBase {
}

export interface IndicesDeleteIndicesDeleteRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteIndicesDeleteResponse extends IndicesResponseBase {
}

export interface IndicesDeleteTemplateIndicesDeleteTemplateRequest extends RequestBase {
  name: Name
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteTemplateIndicesDeleteTemplateResponse extends AcknowledgedResponseBase {
}

export interface IndicesExistsAliasIndicesExistsAliasRequest extends RequestBase {
  name: Names
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export type IndicesExistsAliasIndicesExistsAliasResponse = boolean

export interface IndicesExistsIndicesExistsRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  local?: boolean
}

export type IndicesExistsIndicesExistsResponse = boolean

export interface IndicesExistsTemplateIndicesExistsTemplateRequest extends RequestBase {
  name: Names
  flat_settings?: boolean
  local?: boolean
  master_timeout?: Time
}

export type IndicesExistsTemplateIndicesExistsTemplateResponse = boolean

export interface IndicesExistsTypeIndicesExistsTypeRequest extends RequestBase {
  index: Indices
  type: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export type IndicesExistsTypeIndicesExistsTypeResponse = boolean

export interface IndicesFlushIndicesFlushRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  force?: boolean
  ignore_unavailable?: boolean
  wait_if_ongoing?: boolean
}

export interface IndicesFlushIndicesFlushResponse extends ShardsOperationResponseBase {
}

export interface IndicesFlushSyncedIndicesFlushSyncedRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesFlushSyncedIndicesFlushSyncedResponse extends DictionaryResponseBase<IndexName, ShardStatistics> {
  _shards: ShardStatistics
}

export interface IndicesForcemergeIndicesForceMergeRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flush?: boolean
  ignore_unavailable?: boolean
  max_num_segments?: long
  only_expunge_deletes?: boolean
}

export interface IndicesForcemergeIndicesForceMergeResponse extends ShardsOperationResponseBase {
}

export interface IndicesFreezeIndicesFreezeRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesFreezeIndicesFreezeResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
}

export interface IndicesGetAliasIndicesGetAliasRequest extends RequestBase {
  name?: Names
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export interface IndicesGetAliasIndicesGetAliasResponse extends DictionaryResponseBase<IndexName, IndicesGetAliasIndexAliases> {
}

export interface IndicesGetDataStreamIndicesGetDataStreamItem {
  name: DataStreamName
  timestamp_field: IndicesGetDataStreamIndicesGetDataStreamItemTimestampField
  indices: IndicesGetDataStreamIndicesGetDataStreamItemIndex[]
  generation: integer
  template: Name
  hidden: boolean
  system?: boolean
  status: IndicesDataStreamHealthStatus
  ilm_policy?: Name
  _meta?: IndexMetaData
}

export interface IndicesGetDataStreamIndicesGetDataStreamItemIndex {
  index_name: IndexName
  index_uuid: Uuid
}

export interface IndicesGetDataStreamIndicesGetDataStreamItemTimestampField {
  name: Field
}

export interface IndicesGetDataStreamIndicesGetDataStreamRequest extends RequestBase {
  name?: IndexName
  expand_wildcards?: ExpandWildcards
}

export interface IndicesGetDataStreamIndicesGetDataStreamResponse extends ResponseBase {
  data_streams: IndicesGetDataStreamIndicesGetDataStreamItem[]
}

export interface IndicesGetFieldMappingIndicesGetFieldMappingRequest extends RequestBase {
  fields: Fields
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_defaults?: boolean
  include_type_name?: boolean
  local?: boolean
}

export interface IndicesGetFieldMappingIndicesGetFieldMappingResponse extends DictionaryResponseBase<IndexName, IndicesGetFieldMappingTypeFieldMappings> {
}

export interface IndicesGetMappingIndicesGetMappingRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetMappingIndicesGetMappingResponse extends DictionaryResponseBase<IndexName, IndicesGetMappingIndexMappingRecord> {
}

export interface IndicesGetIndicesGetRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetIndicesGetResponse extends DictionaryResponseBase<IndexName, IndexIndexState> {
}

export interface IndicesGetSettingsIndicesGetSettingsRequest extends RequestBase {
  index?: Indices
  name?: Names
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetSettingsIndicesGetSettingsResponse extends DictionaryResponseBase<IndexName, IndexIndexState> {
}

export interface IndicesGetTemplateIndicesGetTemplateRequest extends RequestBase {
  name?: Names
  flat_settings?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetTemplateIndicesGetTemplateResponse extends DictionaryResponseBase<string, IndicesTemplateMapping> {
}

export interface IndicesMigrateToDataStreamIndicesMigrateToDataStreamRequest extends RequestBase {
  name: IndexName
}

export interface IndicesMigrateToDataStreamIndicesMigrateToDataStreamResponse extends AcknowledgedResponseBase {
}

export interface IndicesOpenIndicesOpenRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesOpenIndicesOpenResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
}

export interface WatcherIndicesOptions {
  allow_no_indices: boolean
  expand_wildcards: ExpandWildcards
  ignore_unavailable: boolean
  ignore_throttled?: boolean
}

export interface SecurityPutRoleIndicesPrivileges {
  field_security?: SecurityFieldSecurity
  names: Indices
  privileges: string[]
  query?: string | QueryDslAbstractionsContainerQueryContainer
  allow_restricted_indices?: boolean
}

export interface IndicesPromoteDataStreamIndicesPromoteDataStreamRequest extends RequestBase {
  name: IndexName
}

export interface IndicesPromoteDataStreamIndicesPromoteDataStreamResponse extends ResponseBase {
  stub: integer
}

export interface IndicesPutAliasIndicesPutAliasRequest extends RequestBase {
  index: Indices
  name: Name
  master_timeout?: Time
  timeout?: Time
  body?: {
    filter?: QueryDslAbstractionsContainerQueryContainer
    index_routing?: Routing
    is_write_index?: boolean
    routing?: Routing
    search_routing?: Routing
  }
}

export interface IndicesPutAliasIndicesPutAliasResponse extends ResponseBase {
}

export interface IndicesPutMappingIndicesPutMappingRequest extends RequestBase {
  index?: Indices
  type?: Type
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  write_index_only?: boolean
  body: {
    all_field?: MappingMetaFieldsAllAllField
    date_detection?: boolean
    dynamic?: boolean | MappingDynamicMapping
    dynamic_date_formats?: string[]
    dynamic_templates?: Record<string, MappingDynamicTemplateDynamicTemplate> | Record<string, MappingDynamicTemplateDynamicTemplate>[]
    field_names_field?: MappingMetaFieldsFieldNamesFieldNamesField
    index_field?: MappingMetaFieldsIndexIndexField
    meta?: Record<string, any>
    numeric_detection?: boolean
    properties?: Record<PropertyName, MappingTypesProperty>
    routing_field?: MappingMetaFieldsRoutingRoutingField
    size_field?: MappingMetaFieldsSizeSizeField
    source_field?: MappingMetaFieldsSourceSourceField
    runtime?: MappingRuntimeFieldsRuntimeFields
  }
}

export interface IndicesPutMappingIndicesPutMappingResponse extends IndicesResponseBase {
}

export interface IndicesPutSettingsIndicesPutSettingsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  master_timeout?: Time
  preserve_existing?: boolean
  timeout?: Time
  body: IndicesPutSettingsIndexSettingsRequest
}

export interface IndicesPutSettingsIndicesPutSettingsResponse extends AcknowledgedResponseBase {
}

export interface IndicesPutTemplateIndicesPutTemplateRequest extends RequestBase {
  name: Name
  create?: boolean
  flat_settings?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  body: {
    aliases?: Record<IndexName, IndicesAlias>
    index_patterns?: string | string[]
    mappings?: MappingTypeMapping
    order?: integer
    settings?: Record<string, any>
    version?: VersionNumber
  }
}

export interface IndicesPutTemplateIndicesPutTemplateResponse extends AcknowledgedResponseBase {
}

export interface IndicesRecoveryIndicesRecoveryRequest extends RequestBase {
  index?: Indices
  active_only?: boolean
  detailed?: boolean
}

export interface IndicesRecoveryIndicesRecoveryResponse extends DictionaryResponseBase<IndexName, IndicesRecoveryRecoveryStatus> {
}

export interface IndicesRefreshIndicesRefreshRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesRefreshIndicesRefreshResponse extends ShardsOperationResponseBase {
}

export interface IndicesResponseBase extends AcknowledgedResponseBase {
  _shards?: ShardStatistics
}

export interface IndicesRolloverIndicesRolloverConditions {
  max_age?: Time
  max_docs?: long
  max_size?: string
  max_primary_shard_size?: ByteSize
}

export interface IndicesRolloverIndicesRolloverRequest extends RequestBase {
  alias: IndexAlias
  new_index?: IndexName
  dry_run?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    conditions?: IndicesRolloverIndicesRolloverConditions
    mappings?: Record<string, MappingTypeMapping> | MappingTypeMapping
    settings?: Record<string, any>
  }
}

export interface IndicesRolloverIndicesRolloverResponse extends AcknowledgedResponseBase {
  conditions: Record<string, boolean>
  dry_run: boolean
  new_index: string
  old_index: string
  rolled_over: boolean
  shards_acknowledged: boolean
}

export interface IndicesSegmentsIndicesSegmentsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  verbose?: boolean
}

export interface IndicesSegmentsIndicesSegmentsResponse extends ResponseBase {
  indices: Record<string, IndicesSegmentsIndexSegment>
  _shards: ShardStatistics
}

export interface IndicesShardStoresIndicesShardStores {
  shards: Record<string, IndicesShardStoresShardStoreWrapper>
}

export interface IndicesShardStoresIndicesShardStoresRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  status?: string | string[]
}

export interface IndicesShardStoresIndicesShardStoresResponse extends ResponseBase {
  indices: Record<IndexName, IndicesShardStoresIndicesShardStores>
}

export interface IndicesShrinkIndicesShrinkRequest extends RequestBase {
  index: IndexName
  target: IndexName
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    settings?: Record<string, any>
  }
}

export interface IndicesShrinkIndicesShrinkResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
  index: IndexName
}

export interface IndicesSplitIndicesSplitRequest extends RequestBase {
  index: IndexName
  target: IndexName
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    settings?: Record<string, any>
  }
}

export interface IndicesSplitIndicesSplitResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
  index: IndexName
}

export interface IndicesStatsIndicesStats {
  primaries: IndicesStatsIndexStats
  shards?: Record<string, IndicesStatsShardStats[]>
  total: IndicesStatsIndexStats
  uuid?: Uuid
}

export interface IndicesStatsIndicesStatsRequest extends RequestBase {
  metric?: Metrics
  index?: Indices
  completion_fields?: Fields
  expand_wildcards?: ExpandWildcards
  fielddata_fields?: Fields
  fields?: Fields
  forbid_closed_indices?: boolean
  groups?: string | string[]
  include_segment_file_sizes?: boolean
  include_unloaded_segments?: boolean
  level?: Level
  types?: Types
}

export interface IndicesStatsIndicesStatsResponse extends ResponseBase {
  indices?: Record<string, IndicesStatsIndicesStats>
  _shards: ShardStatistics
  _all: IndicesStatsIndicesStats
}

export interface IndicesUnfreezeIndicesUnfreezeRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: string
}

export interface IndicesUnfreezeIndicesUnfreezeResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
}

export interface IndicesUpdateAliasesIndicesUpdateAliasBulk {
}

export interface IndicesUpdateAliasesIndicesUpdateAliasBulkRequest extends RequestBase {
  master_timeout?: Time
  timeout?: Time
  body: {
    actions?: IndicesUpdateAliasesIndicesUpdateAliasBulk[]
  }
}

export interface IndicesUpdateAliasesIndicesUpdateAliasBulkResponse extends AcknowledgedResponseBase {
}

export interface IndicesUpgradeIndicesUpgradeRequest extends RequestBase {
  stub_b: integer
  stub_a: integer
  body?: {
    stub_c: integer
  }
}

export interface IndicesUpgradeIndicesUpgradeResponse extends ResponseBase {
  stub: integer
}

export interface IndicesValidateQueryIndicesValidateQueryRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  all_shards?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  query_on_query_string?: string
  rewrite?: boolean
  q?: string
  body?: {
    query?: QueryDslAbstractionsContainerQueryContainer
  }
}

export interface IndicesValidateQueryIndicesValidateQueryResponse extends ResponseBase {
  explanations?: IndicesValidateQueryIndicesValidationExplanation[]
  _shards?: ShardStatistics
  valid: boolean
  error?: string
}

export interface IndicesValidateQueryIndicesValidationExplanation {
  error?: string
  explanation?: string
  index: IndexName
  valid: boolean
}

export interface ClusterClusterStatsIndicesVersionsStats {
  index_count: integer
  primary_shard_count: integer
  total_primary_bytes: long
  version: VersionString
}

export interface AggregationsPipelineInferenceBucketInferenceAggregation extends AggregationsPipelinePipelineAggregationBase {
  model_id: Name
  inference_config?: AggregationsPipelineInferenceBucketInferenceConfigContainer
}

export interface AggregationsPipelineInferenceBucketInferenceConfigContainer {
  regression?: AggregationsPipelineInferenceBucketRegressionInferenceOptions
  classification?: AggregationsPipelineInferenceBucketClassificationInferenceOptions
}

export interface IngestProcessorsInferenceProcessor extends IngestProcessorBase {
  model_id: Id
  target_field: Field
  field_map?: Record<Field, any>
  inference_config?: IngestProcessorsInferenceProcessorConfig
}

export interface IngestProcessorsInferenceProcessorConfig {
  regression?: IngestProcessorsInferenceProcessorConfigRegression
}

export interface IngestProcessorsInferenceProcessorConfigRegression {
  results_field: string
}

export interface MlInfluence {
  influencer_field_name: string
  influencer_field_values: string[]
}

export interface IngestSimulatePipelineIngest {
  timestamp: DateString
  pipeline?: string
}

export interface IngestGeoIpStatsIngestGeoIpStatsRequest extends RequestBase {
  stub_b: integer
  stub_a: integer
  body?: {
    stub_c: integer
  }
}

export interface IngestGeoIpStatsIngestGeoIpStatsResponse extends ResponseBase {
  stub: integer
}

export interface NodesNodesStatsStatisticsIngestStats {
  count: long
  current: long
  failed: long
  processors: NodesNodesStatsStatisticsKeyedProcessorStats[]
  time_in_millis: long
}

export interface ExplainInlineGet<TDocument = unknown> {
  fields?: Record<string, any>
  found: boolean
  _seq_no: SequenceNumber
  _primary_term: long
  _routing?: Routing
  _source: TDocument
}

export interface SecurityInlineRoleTemplate {
  template: SecurityInlineRoleTemplateSource
  format?: SecurityRoleTemplateFormat
}

export interface SecurityInlineRoleTemplateSource {
  source: string
}

export interface InlineScript extends ScriptBase {
  source: string
}

export interface SearchInnerHitsInnerHits {
  name?: Name
  size?: integer
  from?: integer
  collapse?: SearchCollapsingFieldCollapse
  docvalue_fields?: Fields
  explain?: boolean
  highlight?: SearchHighlightingHighlight
  ignore_unmapped?: boolean
  script_fields?: Record<string, ScriptField>
  seq_no_primary_term?: boolean
  fields?: Fields
  sort?: SearchSortSort
  _source?: boolean | SearchSourceFilteringSourceFilter
  version?: boolean
}

export interface SearchHitsInnerHitsMetadata {
  total: SearchHitsTotalHits | long
  hits: SearchHitsHit<Record<string, any>>[]
  max_score?: double
}

export interface SearchHitsInnerHitsResult {
  hits: SearchHitsInnerHitsMetadata
}

export interface WatcherInputContainer {
  chain?: WatcherChainInput
  http?: WatcherHttpInput
  search?: WatcherSearchInput
  simple?: Record<string, any>
}

export type WatcherInputType = 'http' | 'search' | 'simple'

export interface MappingTypesCoreRangeIntegerRangeIntegerRangeProperty extends MappingTypesCoreRangeRangePropertyBase {
  type: 'integer_range'
}

export interface QueryDslFullTextIntervalsIntervalsAllOf {
  intervals?: QueryDslFullTextIntervalsIntervalsContainer[]
  max_gaps?: integer
  ordered?: boolean
  filter?: QueryDslFullTextIntervalsIntervalsFilter
}

export interface QueryDslFullTextIntervalsIntervalsAnyOf {
  intervals?: QueryDslFullTextIntervalsIntervalsContainer[]
  filter?: QueryDslFullTextIntervalsIntervalsFilter
}

export interface QueryDslFullTextIntervalsIntervalsContainer {
  all_of?: QueryDslFullTextIntervalsIntervalsAllOf
  any_of?: QueryDslFullTextIntervalsIntervalsAnyOf
  fuzzy?: QueryDslFullTextIntervalsIntervalsFuzzy
  match?: QueryDslFullTextIntervalsIntervalsMatch
  prefix?: QueryDslFullTextIntervalsIntervalsPrefix
  wildcard?: QueryDslFullTextIntervalsIntervalsWildcard
}

export interface QueryDslFullTextIntervalsIntervalsFilter {
  after?: QueryDslFullTextIntervalsIntervalsContainer
  before?: QueryDslFullTextIntervalsIntervalsContainer
  contained_by?: QueryDslFullTextIntervalsIntervalsContainer
  containing?: QueryDslFullTextIntervalsIntervalsContainer
  not_contained_by?: QueryDslFullTextIntervalsIntervalsContainer
  not_containing?: QueryDslFullTextIntervalsIntervalsContainer
  not_overlapping?: QueryDslFullTextIntervalsIntervalsContainer
  overlapping?: QueryDslFullTextIntervalsIntervalsContainer
  script?: Script
}

export interface QueryDslFullTextIntervalsIntervalsFuzzy {
  analyzer?: string
  fuzziness?: Fuzziness
  prefix_length?: integer
  term?: string
  transpositions?: boolean
  use_field?: Field
}

export interface QueryDslFullTextIntervalsIntervalsMatch {
  analyzer?: string
  max_gaps?: integer
  ordered?: boolean
  query?: string
  use_field?: Field
  filter?: QueryDslFullTextIntervalsIntervalsFilter
}

export interface QueryDslFullTextIntervalsIntervalsPrefix {
  analyzer?: string
  prefix?: string
  use_field?: Field
}

export interface QueryDslFullTextIntervalsIntervalsQuery extends QueryDslAbstractionsQueryQueryBase {
  all_of?: QueryDslFullTextIntervalsIntervalsAllOf
  any_of?: QueryDslFullTextIntervalsIntervalsAnyOf
  fuzzy?: QueryDslFullTextIntervalsIntervalsFuzzy
  match?: QueryDslFullTextIntervalsIntervalsMatch
  prefix?: QueryDslFullTextIntervalsIntervalsPrefix
  wildcard?: QueryDslFullTextIntervalsIntervalsWildcard
}

export interface QueryDslFullTextIntervalsIntervalsWildcard {
  analyzer?: string
  pattern?: string
  use_field?: Field
}

export interface SecurityInvalidRoleTemplate {
  template: string
  format?: SecurityRoleTemplateFormat
}

export type Ip = string

export interface XpackUsageIpFilterUsage {
  http: boolean
  transport: boolean
}

export interface MappingTypesSpecializedIpIpProperty extends MappingTypesDocValuesPropertyBase {
  boost?: double
  index?: boolean
  null_value?: string
  type: 'ip'
}

export interface AggregationsBucketIpRangeIpRangeAggregation extends AggregationsBucketBucketAggregationBase {
  field?: Field
  ranges?: AggregationsBucketIpRangeIpRangeAggregationRange[]
}

export interface AggregationsBucketIpRangeIpRangeAggregationRange {
  from?: string
  mask?: string
  to?: string
}

export interface AggregationsIpRangeBucketKeys {
}
export type AggregationsIpRangeBucket = AggregationsIpRangeBucketKeys |
    { [property: string]: AggregationsAggregate }

export interface MappingTypesCoreRangeIpRangeIpRangeProperty extends MappingTypesCoreRangeRangePropertyBase {
  type: 'ip_range'
}

export interface XpackUsageJob {
  allow_lazy_open?: boolean
  analysis_config?: MlAnalysisConfig
  analysis_limits?: MlAnalysisLimits
  background_persist_interval?: Time
  count?: integer
  created_by?: EmptyObject
  create_time?: integer
  detectors?: XpackUsageJobStatistics
  data_description?: MlDataDescription
  description?: string
  finished_time?: integer
  forecasts?: XpackUsageMlJobForecasts
  job_id?: Id
  job_type?: string
  model_plot?: MlModelPlotConfig
  model_size?: XpackUsageJobStatistics
  model_snapshot_id?: Id
  model_snapshot_retention_days?: long
  renormalization_window_days?: long
  results_index_name?: IndexName
  results_retention_days?: long
  groups?: string[]
  model_plot_config?: MlModelPlotConfig
  custom_settings?: XpackUsageCustomSettings
  job_version?: VersionString
  deleting?: boolean
  daily_model_snapshot_retention_after_days?: long
}

export interface MlJobForecastStatistics {
  memory_bytes?: XpackUsageJobStatistics
  processing_time_ms?: XpackUsageJobStatistics
  records?: XpackUsageJobStatistics
  status?: Record<string, long>
  total: long
  forecasted_jobs: integer
}

export type MlJobState = 'closing' | 'closed' | 'opened' | 'failed' | 'opening'

export interface XpackUsageJobStatistics {
  avg: double
  max: double
  min: double
  total: double
}

export interface MlJobStats {
  assignment_explanation?: string
  data_counts: MlDataCounts
  forecasts_stats: MlJobForecastStatistics
  job_id: string
  model_size_stats: MlModelSizeStats
  node?: MlDiscoveryNode
  open_time?: DateString
  state: MlJobState
  timing_stats: MlTimingStats
  deleting?: boolean
}

export interface IngestProcessorsJoinProcessor extends IngestProcessorBase {
  field: Field
  separator: string
  target_field?: Field
}

export interface MappingTypesCoreJoinJoinProperty extends MappingTypesPropertyBase {
  relations?: Record<RelationName, RelationName | RelationName[]>
  type: 'join'
}

export interface IngestProcessorsJsonProcessor extends IngestProcessorBase {
  add_to_root: boolean
  field: Field
  target_field: Field
}

export interface NodesNodesStatsJvmClassesStats {
  current_loaded_count: long
  total_loaded_count: long
  total_unloaded_count: long
}

export interface AnalysisTokenFiltersKStemTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
}

export type AnalysisTokenFiltersKeepTypesMode = 'include' | 'exclude'

export interface AnalysisTokenFiltersKeepTypesTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  mode: AnalysisTokenFiltersKeepTypesMode
  types: string[]
}

export interface AnalysisTokenFiltersKeepWordsTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  keep_words: string[]
  keep_words_case: boolean
  keep_words_path: string
}

export interface IngestProcessorsKeyValueProcessor extends IngestProcessorBase {
  exclude_keys?: string[]
  field: Field
  field_split: string
  ignore_missing?: boolean
  include_keys?: string[]
  prefix?: string
  strip_brackets?: boolean
  target_field?: Field
  trim_key?: string
  trim_value?: string
  value_split: string
}

export interface AggregationsKeyedBucketKeys<TKey = unknown> {
  doc_count: long
  key: TKey
  key_as_string: string
}
export type AggregationsKeyedBucket<TKey = unknown> = AggregationsKeyedBucketKeys<TKey> |
    { [property: string]: AggregationsAggregate }

export interface NodesNodesStatsStatisticsKeyedProcessorStats {
  statistics: NodesNodesStatsProcessStats
  type: string
}

export interface AggregationsKeyedValueAggregate extends AggregationsValueAggregate {
  keys: string[]
}

export interface AnalysisTokenFiltersKeywordMarkerTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  ignore_case: boolean
  keywords: string[]
  keywords_path: string
  keywords_pattern: string
}

export interface MappingTypesCoreKeywordKeywordProperty extends MappingTypesDocValuesPropertyBase {
  boost?: double
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: MappingTypesCoreTextIndexOptions
  normalizer?: string
  norms?: boolean
  null_value?: string
  split_queries_on_whitespace?: boolean
  type: 'keyword'
}

export interface AnalysisTokenizersKeywordTokenizer extends AnalysisTokenizersTokenizerBase {
  buffer_size: integer
}

export interface XpackUsageKibanaUrlConfig extends XpackUsageBaseUrlConfig {
  time_range?: string
}

export interface SearchSuggestersPhraseSuggesterSmoothingModelLaplaceSmoothingModel {
  alpha: double
}

export interface LatLon {
  lat: double
  lon: double
}

export interface AnalysisTokenFiltersLengthTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  max: integer
  min: integer
}

export interface AnalysisTokenizersLetterTokenizer extends AnalysisTokenizersTokenizerBase {
}

export type Level = 'cluster' | 'indices' | 'shards'

export interface LicenseGetLicenseLicense {
  expiry_date_in_millis: EpochMillis
  issue_date_in_millis: EpochMillis
  issued_to: string
  issuer: string
  max_nodes?: long
  max_resource_units?: long
  signature: string
  start_date_in_millis: EpochMillis
  type: LicenseGetLicenseLicenseType
  uid: string
}

export interface LicensePostLicenseLicenseAcknowledgement {
  license: string[]
  message: string
}

export interface LicenseGetLicenseLicenseInformation {
  expiry_date: DateString
  expiry_date_in_millis: EpochMillis
  issue_date: DateString
  issue_date_in_millis: EpochMillis
  issued_to: string
  issuer: string
  max_nodes: long
  max_resource_units?: integer
  status: LicenseGetLicenseLicenseStatus
  type: LicenseGetLicenseLicenseType
  uid: Uuid
  start_date_in_millis: EpochMillis
}

export type LicenseGetLicenseLicenseStatus = 'active' | 'valid' | 'invalid' | 'expired'

export type LicenseGetLicenseLicenseType = 'missing' | 'trial' | 'basic' | 'standard' | 'dev' | 'silver' | 'gold' | 'platinum' | 'enterprise'

export interface IlmLifecycleAction {
}

export interface IlmExplainLifecycleLifecycleExplain {
  action: Name
  action_time_millis: EpochMillis
  age: Time
  failed_step?: Name
  failed_step_retry_count?: integer
  index: IndexName
  is_auto_retryable_error?: boolean
  lifecycle_date_millis: EpochMillis
  managed: boolean
  phase: Name
  phase_time_millis: EpochMillis
  policy: Name
  step: Name
  step_info?: Record<string, any>
  step_time_millis: EpochMillis
  phase_execution: IlmExplainLifecycleLifecycleExplainPhaseExecution
}

export interface IlmExplainLifecycleLifecycleExplainPhaseExecution {
  policy: Name
  version: VersionNumber
  modified_date_in_millis: EpochMillis
}

export interface IlmExplainLifecycleLifecycleExplainProject {
  project: IlmExplainLifecycleLifecycleExplainProjectSummary
}

export interface IlmExplainLifecycleLifecycleExplainProjectSummary {
  index: IndexName
  managed: boolean
}

export type IlmGetStatusLifecycleOperationMode = 'RUNNING' | 'STOPPING' | 'STOPPED'

export interface IlmGetLifecycleLifecyclePolicy {
  modified_date: DateString
  policy: IlmPolicy
  version: VersionNumber
}

export type QueryDslSpecializedMoreLikeThisLikeLike = string | QueryDslSpecializedMoreLikeThisLikeLikeDocument

export interface QueryDslSpecializedMoreLikeThisLikeLikeDocument {
  doc?: any
  fields?: Fields
  _id?: Id | number
  _type?: Type
  _index?: IndexName
  per_field_analyzer?: Record<Field, string>
  routing?: Routing
}

export interface AnalysisTokenFiltersLimitTokenCountTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  consume_all_tokens: boolean
  max_token_count: integer
}

export interface MlInfoLimits {
  max_model_memory_limit?: ByteSize
  effective_max_model_memory_limit: ByteSize
  total_ml_memory: ByteSize
}

export interface AggregationsLineStringGeoShape {
  coordinates: QueryDslGeoGeoCoordinate[]
}

export interface SearchSuggestersPhraseSuggesterSmoothingModelLinearInterpolationSmoothingModel {
  bigram_lambda: double
  trigram_lambda: double
  unigram_lambda: double
}

export interface DanglingIndicesIndicesListListDanglingIndicesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DanglingIndicesIndicesListListDanglingIndicesResponse extends ResponseBase {
  stub: integer
}

export interface TaskListTasksListTasksRequest extends RequestBase {
  actions?: string | string[]
  detailed?: boolean
  group_by?: GroupBy
  nodes?: string[]
  parent_task_id?: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface TaskListTasksListTasksResponse extends ResponseBase {
  node_failures?: ErrorCause[]
  nodes?: Record<string, TaskListTasksTaskExecutingNode>
  tasks?: Record<string, TaskGetTaskTaskInfo> | TaskGetTaskTaskInfo[]
}

export interface WatcherLoggingAction {
  level: string
  text: string
}

export interface WatcherLoggingActionResult {
  logged_text: string
}

export interface LogstashPipelineDeleteLogstashDeletePipelineRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface LogstashPipelineDeleteLogstashDeletePipelineResponse extends ResponseBase {
  stub: integer
}

export interface LogstashPipelineGetLogstashGetPipelineRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface LogstashPipelineGetLogstashGetPipelineResponse extends ResponseBase {
  stub: integer
}

export interface LogstashPipelinePutLogstashPutPipelineRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body: {
    stub_c: string
  }
}

export interface LogstashPipelinePutLogstashPutPipelineResponse extends ResponseBase {
  stub: integer
}

export interface MappingTypesCoreRangeLongRangeLongRangeProperty extends MappingTypesCoreRangeRangePropertyBase {
  type: 'long_range'
}

export interface IngestProcessorsLowercaseProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface AnalysisTokenFiltersLowercaseTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  language: string
}

export interface AnalysisTokenizersLowercaseTokenizer extends AnalysisTokenizersTokenizerBase {
}

export interface XpackUsageMachineLearningUsage extends XpackUsageXPackUsage {
  datafeeds: Record<string, XpackUsageDatafeedCount>
  jobs: Record<string, XpackUsageJob>
  node_count: integer
  data_frame_analytics_jobs: XpackUsageMlDataFrameAnalyticsJobsUsage
  inference: XpackUsageMlInferenceUsage
}

export interface MainError extends ErrorCause {
  headers?: Record<string, string>
  root_cause: ErrorCause[]
}

export interface SecurityGetUserPrivilegesManageUserPrivileges {
  applications: string[]
}

export interface AnalysisCharFiltersMappingCharFilter extends AnalysisCharFiltersCharFilterBase {
  mappings: string[]
  mappings_path: string
}

export interface QueryDslMatchAllQuery extends QueryDslAbstractionsQueryQueryBase {
  norm_field?: string
}

export interface QueryDslFullTextMatchBoolPrefixMatchBoolPrefixQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: QueryDslOperator
  prefix_length?: integer
  query?: string
}

export interface QueryDslMatchNoneQuery extends QueryDslAbstractionsQueryQueryBase {
}

export interface QueryDslFullTextMatchPhrasePrefixMatchPhrasePrefixQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  max_expansions?: integer
  query?: string
  slop?: integer
  zero_terms_query?: QueryDslFullTextMultiMatchZeroTermsQuery
}

export interface QueryDslFullTextMatchPhraseMatchPhraseQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  query?: string
  slop?: integer
}

export interface QueryDslFullTextMatchMatchQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: QueryDslOperator
  prefix_length?: integer
  query?: string | float | boolean
  zero_terms_query?: QueryDslFullTextMultiMatchZeroTermsQuery
}

export type MappingDynamicTemplateMatchType = 'simple' | 'regex'

export interface AggregationsMatrixMatrixAggregation extends AggregationsAggregation {
  fields?: Fields
  missing?: Record<Field, double>
}

export interface AggregationsMatrixStatsAggregate extends AggregationsAggregateBase {
  correlation: Record<string, double>
  covariance: Record<string, double>
  count: integer
  kurtosis: double
  mean: double
  skewness: double
  variance: double
  name: string
}

export interface AggregationsMatrixMatrixStatsMatrixStatsAggregation extends AggregationsMatrixMatrixAggregation {
  mode?: AggregationsMatrixMatrixStatsMatrixStatsMode
}

export type AggregationsMatrixMatrixStatsMatrixStatsMode = 'avg' | 'min' | 'max' | 'sum' | 'median'

export interface AggregationsMetricMaxMaxAggregation extends AggregationsMetricFormatMetricAggregationBase {
}

export interface AggregationsPipelineMaxBucketMaxBucketAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export interface AggregationsMetricMedianAbsoluteDeviationMedianAbsoluteDeviationAggregation extends AggregationsMetricFormatMetricAggregationBase {
  compression?: double
}

export interface NodesNodesStatsMemoryStats {
  resident: string
  resident_in_bytes: long
  share: string
  share_in_bytes: long
  total_virtual: string
  total_virtual_in_bytes: long
}

export type MlMemoryStatus = 'ok' | 'soft_limit' | 'hard_limit'

export interface MergesStats {
  current: long
  current_docs: long
  current_size?: string
  current_size_in_bytes: long
  total: long
  total_auto_throttle?: string
  total_auto_throttle_in_bytes: long
  total_docs: long
  total_size?: string
  total_size_in_bytes: long
  total_stopped_time?: string
  total_stopped_time_in_millis: long
  total_throttled_time?: string
  total_throttled_time_in_millis: long
  total_time?: string
  total_time_in_millis: long
}

export type AggregationsMetricAggregate = AggregationsValueAggregate | AggregationsBoxPlotAggregate | AggregationsGeoBoundsAggregate | AggregationsGeoCentroidAggregate | AggregationsGeoLineAggregate | AggregationsPercentilesAggregate | AggregationsScriptedMetricAggregate | AggregationsStatsAggregate | AggregationsStringStatsAggregate | AggregationsTopHitsAggregate | AggregationsTopMetricsAggregate | AggregationsExtendedStatsAggregate | AggregationsTDigestPercentilesAggregate | AggregationsHdrPercentilesAggregate

export interface AggregationsMetricMetricAggregationBase {
  field?: Field
  missing?: AggregationsMissing
  script?: Script
}

export type Metrics = string | string[]

export interface AggregationsMetricMinMinAggregation extends AggregationsMetricFormatMetricAggregationBase {
}

export interface AggregationsPipelineMinBucketMinBucketAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export interface XpackInfoMinimalLicenseInformation {
  expiry_date_in_millis: EpochMillis
  mode: LicenseGetLicenseLicenseType
  status: LicenseGetLicenseLicenseStatus
  type: LicenseGetLicenseLicenseType
  uid: string
}

export type AggregationsBucketAutoDateHistogramMinimumInterval = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'

export type MinimumShouldMatch = integer | string

export type AggregationsMissing = string | integer | double | boolean

export interface AggregationsBucketMissingMissingAggregation extends AggregationsBucketBucketAggregationBase {
  field?: Field
  missing?: AggregationsMissing
}

export interface MlCloseJobMlCloseJobRequest extends RequestBase {
  job_id: Id
  allow_no_jobs?: boolean
  force?: boolean
  timeout?: Time
}

export interface MlCloseJobMlCloseJobResponse extends ResponseBase {
  closed: boolean
}

export interface XpackUsageMlDataFrameAnalyticsJobsCountUsage {
  count: long
}

export interface XpackUsageMlDataFrameAnalyticsJobsMemoryUsage {
  peak_usage_bytes: XpackUsageJobStatistics
}

export interface XpackUsageMlDataFrameAnalyticsJobsUsage {
  memory_usage?: XpackUsageMlDataFrameAnalyticsJobsMemoryUsage
  _all: XpackUsageMlDataFrameAnalyticsJobsCountUsage
  analysis_counts?: EmptyObject
}

export interface MlDeleteCalendarEventMlDeleteCalendarEventRequest extends RequestBase {
  calendar_id: Id
  event_id: Id
}

export interface MlDeleteCalendarEventMlDeleteCalendarEventResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteCalendarJobMlDeleteCalendarJobRequest extends RequestBase {
  calendar_id: Id
  job_id: Id
}

export interface MlDeleteCalendarJobMlDeleteCalendarJobResponse extends ResponseBase {
  calendar_id: Id
  description?: string
  job_ids: Ids
}

export interface MlDeleteCalendarMlDeleteCalendarRequest extends RequestBase {
  calendar_id: Id
}

export interface MlDeleteCalendarMlDeleteCalendarResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteDataFrameAnalyticsMlDeleteDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  force?: boolean
  timeout?: Time
}

export interface MlDeleteDataFrameAnalyticsMlDeleteDataFrameAnalyticsResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteDatafeedMlDeleteDatafeedRequest extends RequestBase {
  datafeed_id: Id
  force?: boolean
}

export interface MlDeleteDatafeedMlDeleteDatafeedResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteExpiredDataMlDeleteExpiredDataRequest extends RequestBase {
  name?: Name
  requests_per_second?: float
  timeout?: Time
  body?: {
    requests_per_second?: float
    timeout?: Time
  }
}

export interface MlDeleteExpiredDataMlDeleteExpiredDataResponse extends ResponseBase {
  deleted: boolean
}

export interface MlDeleteFilterMlDeleteFilterRequest extends RequestBase {
  filter_id: Id
}

export interface MlDeleteFilterMlDeleteFilterResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteForecastMlDeleteForecastRequest extends RequestBase {
  job_id: Id
  forecast_id?: Id
  allow_no_forecasts?: boolean
  timeout?: Time
}

export interface MlDeleteForecastMlDeleteForecastResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteJobMlDeleteJobRequest extends RequestBase {
  job_id: Id
  force?: boolean
  wait_for_completion?: boolean
}

export interface MlDeleteJobMlDeleteJobResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteModelSnapshotMlDeleteModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
}

export interface MlDeleteModelSnapshotMlDeleteModelSnapshotResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteTrainedModelAliasMlDeleteTrainedModelAliasRequest extends RequestBase {
  model_alias: Name
  model_id: Id
}

export interface MlDeleteTrainedModelAliasMlDeleteTrainedModelAliasResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteTrainedModelMlDeleteTrainedModelRequest extends RequestBase {
  model_id: Id
}

export interface MlDeleteTrainedModelMlDeleteTrainedModelResponse extends AcknowledgedResponseBase {
}

export interface MlEstimateModelMemoryMlEstimateModelMemoryRequest extends RequestBase {
  body: {
    analysis_config?: MlAnalysisConfig
    max_bucket_cardinality?: Record<Field, long>
    overall_cardinality?: Record<Field, long>
  }
}

export interface MlEstimateModelMemoryMlEstimateModelMemoryResponse extends ResponseBase {
  model_memory_estimate: string
}

export interface MlEvaluateDataFrameMlEvaluateDataFrameRequest extends RequestBase {
  stub: string
  body: {
    stub?: string
  }
}

export interface MlEvaluateDataFrameMlEvaluateDataFrameResponse extends ResponseBase {
  stub: boolean
}

export interface MlExplainDataFrameAnalyticsMlExplainDataFrameAnalyticsRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlExplainDataFrameAnalyticsMlExplainDataFrameAnalyticsResponse extends ResponseBase {
  stub: boolean
}

export interface MlFlushJobMlFlushJobRequest extends RequestBase {
  job_id: Id
  skip_time?: string
  body?: {
    advance_time?: DateString
    calc_interim?: boolean
    end?: DateString
    start?: DateString
  }
}

export interface MlFlushJobMlFlushJobResponse extends ResponseBase {
  flushed: boolean
  last_finalized_bucket_end?: integer
}

export interface MlForecastJobMlForecastJobRequest extends RequestBase {
  job_id: Id
  body?: {
    duration?: Time
    expires_in?: Time
  }
}

export interface MlForecastJobMlForecastJobResponse extends AcknowledgedResponseBase {
  forecast_id: Id
}

export interface MlGetAnomalyRecordsMlGetAnomalyRecordsRequest extends RequestBase {
  job_id: Id
  exclude_interim?: boolean
  from?: integer
  size?: integer
  start?: DateString
  end?: DateString
  body?: {
    desc?: boolean
    exclude_interim?: boolean
    page?: MlPage
    record_score?: double
    sort?: Field
    start?: DateString
    end?: DateString
  }
}

export interface MlGetAnomalyRecordsMlGetAnomalyRecordsResponse extends ResponseBase {
  count: long
  records: MlAnomalyRecord[]
}

export interface MlGetBucketsMlGetBucketsRequest extends RequestBase {
  job_id: Id
  timestamp?: Timestamp
  from?: integer
  size?: integer
  exclude_interim?: boolean
  sort?: Field
  desc?: boolean
  start?: DateString
  end?: DateString
  body?: {
    anomaly_score?: double
    desc?: boolean
    exclude_interim?: boolean
    expand?: boolean
    page?: MlPage
    sort?: Field
    start?: DateString
    end?: DateString
  }
}

export interface MlGetBucketsMlGetBucketsResponse extends ResponseBase {
  buckets: MlResultBucket[]
  count: long
}

export interface MlGetCalendarEventsMlGetCalendarEventsRequest extends RequestBase {
  calendar_id: Id
  job_id?: Id
  end?: DateString
  from?: integer
  start?: string
  size?: integer
  body?: {
    end?: DateString
    from?: integer
    start?: string
    size?: integer
  }
}

export interface MlGetCalendarEventsMlGetCalendarEventsResponse extends ResponseBase {
  count: integer
  events: MlPostCalendarEventsScheduledEvent[]
}

export interface MlGetCalendarsMlGetCalendarsRequest extends RequestBase {
  calendar_id?: Id
  body?: {
    page?: MlPage
  }
}

export interface MlGetCalendarsMlGetCalendarsResponse extends ResponseBase {
  calendars: MlGetCalendarsCalendar[]
  count: long
}

export interface MlGetCategoriesMlGetCategoriesRequest extends RequestBase {
  job_id: Id
  category_id?: CategoryId
  body?: {
    page?: MlPage
  }
}

export interface MlGetCategoriesMlGetCategoriesResponse extends ResponseBase {
  categories: MlCategoryDefinition[]
  count: long
}

export interface MlGetDataFrameAnalyticsMlGetDataFrameAnalyticsRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlGetDataFrameAnalyticsMlGetDataFrameAnalyticsResponse extends ResponseBase {
  stub: boolean
}

export interface MlGetDataFrameAnalyticsStatsMlGetDataFrameAnalyticsStatsRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlGetDataFrameAnalyticsStatsMlGetDataFrameAnalyticsStatsResponse extends ResponseBase {
  stub: boolean
}

export interface MlGetDatafeedStatsMlGetDatafeedStatsRequest extends RequestBase {
  datafeed_id?: Ids
  allow_no_datafeeds?: boolean
}

export interface MlGetDatafeedStatsMlGetDatafeedStatsResponse extends ResponseBase {
  count: long
  datafeeds: MlDatafeedStats[]
}

export interface MlGetDatafeedsMlGetDatafeedsRequest extends RequestBase {
  datafeed_id?: Id
  allow_no_datafeeds?: boolean
  exclude_generated?: boolean
}

export interface MlGetDatafeedsMlGetDatafeedsResponse extends ResponseBase {
  count: long
  datafeeds: MlDatafeed[]
}

export interface MlGetFiltersMlGetFiltersRequest extends RequestBase {
  filter_id?: Id
  from?: integer
  size?: integer
}

export interface MlGetFiltersMlGetFiltersResponse extends ResponseBase {
  count: long
  filters: MlGetFiltersFilter[]
}

export interface MlGetInfluencersMlGetInfluencersRequest extends RequestBase {
  job_id: Id
  body?: {
    descending?: boolean
    end?: DateString
    exclude_interim?: boolean
    influencer_score?: double
    page?: MlPage
    sort?: Field
    start?: DateString
  }
}

export interface MlGetInfluencersMlGetInfluencersResponse extends ResponseBase {
  count: long
  influencers: MlBucketInfluencer[]
}

export interface MlGetJobStatsMlGetJobStatsRequest extends RequestBase {
  job_id?: Id
  allow_no_jobs?: boolean
}

export interface MlGetJobStatsMlGetJobStatsResponse extends ResponseBase {
  count: long
  jobs: MlJobStats[]
}

export interface MlGetJobsMlGetJobsRequest extends RequestBase {
  job_id?: Ids
  allow_no_match?: boolean
  allow_no_jobs?: boolean
  exclude_generated?: boolean
}

export interface MlGetJobsMlGetJobsResponse extends ResponseBase {
  count: long
  jobs: XpackUsageJob[]
}

export interface MlGetModelSnapshotsMlGetModelSnapshotsRequest extends RequestBase {
  job_id: Id
  snapshot_id?: Id
  body?: {
    desc?: boolean
    end?: DateString
    page?: MlPage
    sort?: Field
    start?: DateString
  }
}

export interface MlGetModelSnapshotsMlGetModelSnapshotsResponse extends ResponseBase {
  count: long
  model_snapshots: MlModelSnapshot[]
}

export interface MlGetOverallBucketsMlGetOverallBucketsRequest extends RequestBase {
  job_id: Id
  body?: {
    allow_no_jobs?: boolean
    bucket_span?: Time
    end?: DateString
    exclude_interim?: boolean
    overall_score?: double
    start?: DateString
    top_n?: integer
  }
}

export interface MlGetOverallBucketsMlGetOverallBucketsResponse extends ResponseBase {
  count: long
  overall_buckets: MlOverallBucket[]
}

export interface MlGetTrainedModelsMlGetTrainedModelRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlGetTrainedModelsMlGetTrainedModelResponse extends ResponseBase {
  stub: boolean
}

export interface MlGetTrainedModelsStatsMlGetTrainedModelStatsRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlGetTrainedModelsStatsMlGetTrainedModelStatsResponse extends ResponseBase {
  stub: boolean
}

export interface XpackUsageMlInferenceIngestProcessorCountUsage {
  max: long
  sum: long
  min: long
}

export interface XpackUsageMlInferenceIngestProcessorUsage {
  num_docs_processed: XpackUsageMlInferenceIngestProcessorCountUsage
  pipelines: XpackUsageMlUsageCounter
  num_failures: XpackUsageMlInferenceIngestProcessorCountUsage
  time_ms: XpackUsageMlInferenceIngestProcessorCountUsage
}

export interface XpackUsageMlInferenceTrainedModelsCountUsage {
  total: long
  prepackaged: long
  other: long
  regression: long
  classification: long
}

export interface XpackUsageMlInferenceTrainedModelsUsage {
  estimated_operations?: XpackUsageJobStatistics
  estimated_heap_memory_usage_bytes?: XpackUsageJobStatistics
  count?: XpackUsageMlInferenceTrainedModelsCountUsage
  _all: XpackUsageMlUsageCounter
}

export interface XpackUsageMlInferenceUsage {
  ingest_processors: Record<string, XpackUsageMlInferenceIngestProcessorUsage>
  trained_models: XpackUsageMlInferenceTrainedModelsUsage
}

export interface MlInfoMlInfoRequest extends RequestBase {
}

export interface MlInfoMlInfoResponse extends ResponseBase {
  defaults: MlInfoDefaults
  limits: MlInfoLimits
  upgrade_mode: boolean
  native_code: MlInfoNativeCode
}

export interface XpackUsageMlJobForecasts {
  total: long
  forecasted_jobs: long
}

export interface MlOpenJobMlOpenJobRequest extends RequestBase {
  job_id: Id
  body?: {
    timeout?: Time
  }
}

export interface MlOpenJobMlOpenJobResponse extends ResponseBase {
  opened: boolean
}

export interface MlPostCalendarEventsMlPostCalendarEventsRequest extends RequestBase {
  calendar_id: Id
  body: {
    events?: MlPostCalendarEventsScheduledEvent[]
  }
}

export interface MlPostCalendarEventsMlPostCalendarEventsResponse extends ResponseBase {
  events: MlPostCalendarEventsScheduledEvent[]
}

export interface MlPostJobDataMlPostJobDataRequest extends RequestBase {
  job_id: Id
  reset_end?: DateString
  reset_start?: DateString
  body: {
    data?: any[]
  }
}

export interface MlPostJobDataMlPostJobDataResponse extends ResponseBase {
  bucket_count: long
  earliest_record_timestamp: integer
  empty_bucket_count: long
  input_bytes: long
  input_field_count: long
  input_record_count: long
  invalid_date_count: long
  job_id: Id
  last_data_time: integer
  latest_record_timestamp: integer
  missing_field_count: long
  out_of_order_timestamp_count: long
  processed_field_count: long
  processed_record_count: long
  sparse_bucket_count: long
}

export interface MlPreviewDataFrameAnalyticsMlPreviewDataFrameAnalyticsRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlPreviewDataFrameAnalyticsMlPreviewDataFrameAnalyticsResponse extends ResponseBase {
  stub: boolean
}

export interface MlPreviewDatafeedMlPreviewDatafeedRequest extends RequestBase {
  datafeed_id: Id
}

export interface MlPreviewDatafeedMlPreviewDatafeedResponse<TDocument = unknown> extends ResponseBase {
  data: TDocument[]
}

export interface MlPutCalendarJobMlPutCalendarJobRequest extends RequestBase {
  calendar_id: Id
  job_id: Id
}

export interface MlPutCalendarJobMlPutCalendarJobResponse extends ResponseBase {
  calendar_id: Id
  description: string
  job_ids: Id[]
}

export interface MlPutCalendarMlPutCalendarRequest extends RequestBase {
  calendar_id: Id
  body?: {
    description?: string
  }
}

export interface MlPutCalendarMlPutCalendarResponse extends ResponseBase {
  calendar_id: Id
  description: string
  job_ids: Id[]
}

export interface MlPutDataFrameAnalyticsMlPutDataFrameAnalyticsRequest extends RequestBase {
  stub: string
  body: {
    stub?: string
  }
}

export interface MlPutDataFrameAnalyticsMlPutDataFrameAnalyticsResponse extends ResponseBase {
  stub: boolean
}

export interface MlPutDatafeedMlPutDatafeedRequest extends RequestBase {
  datafeed_id: Id
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  body: {
    aggregations?: Record<string, AggregationsAggregationContainer>
    chunking_config?: MlChunkingConfig
    frequency?: Time
    indices?: Indices
    indexes?: string[]
    job_id?: Id
    max_empty_searches?: integer
    query?: QueryDslAbstractionsContainerQueryContainer
    query_delay?: Time
    script_fields?: Record<string, ScriptField>
    scroll_size?: integer
  }
}

export interface MlPutDatafeedMlPutDatafeedResponse extends ResponseBase {
  aggregations: Record<string, AggregationsAggregationContainer>
  chunking_config: MlChunkingConfig
  datafeed_id: Id
  frequency: Time
  indices: Indices
  job_id: Id
  max_empty_searches: integer
  query: QueryDslAbstractionsContainerQueryContainer
  query_delay: Time
  script_fields: Record<string, ScriptField>
  scroll_size: integer
}

export interface MlPutFilterMlPutFilterRequest extends RequestBase {
  filter_id: Id
  body: {
    description?: string
    items?: string[]
  }
}

export interface MlPutFilterMlPutFilterResponse extends ResponseBase {
  description: string
  filter_id: Id
  items: string[]
}

export interface MlPutJobMlPutJobRequest extends RequestBase {
  job_id: Id
  body: {
    allow_lazy_open?: boolean
    analysis_config?: MlAnalysisConfig
    analysis_limits?: MlAnalysisLimits
    data_description?: MlDataDescription
    description?: string
    model_plot?: MlModelPlotConfig
    model_snapshot_retention_days?: long
    results_index_name?: IndexName
  }
}

export interface MlPutJobMlPutJobResponse extends ResponseBase {
  allow_lazy_open: boolean
  analysis_config: MlAnalysisConfig
  analysis_limits: MlAnalysisLimits
  background_persist_interval: Time
  create_time: DateString
  data_description: MlDataDescription
  description: string
  job_id: Id
  job_type: string
  model_plot: MlModelPlotConfig
  model_snapshot_id: string
  model_snapshot_retention_days: long
  renormalization_window_days: long
  results_index_name: string
  results_retention_days: long
}

export interface MlPutTrainedModelAliasMlPutTrainedModelAliasRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlPutTrainedModelAliasMlPutTrainedModelAliasResponse extends ResponseBase {
  stub: boolean
}

export interface MlPutTrainedModelMlPutTrainedModelRequest extends RequestBase {
  stub: string
  body: {
    stub?: string
  }
}

export interface MlPutTrainedModelMlPutTrainedModelResponse extends ResponseBase {
  stub: boolean
}

export interface MlRevertModelSnapshotMlRevertModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
  body?: {
    delete_intervening_results?: boolean
  }
}

export interface MlRevertModelSnapshotMlRevertModelSnapshotResponse extends ResponseBase {
  model: MlModelSnapshot
}

export interface MlSetUpgradeModeMlSetUpgradeModeRequest extends RequestBase {
  enabled?: boolean
  timeout?: Time
}

export interface MlSetUpgradeModeMlSetUpgradeModeResponse extends AcknowledgedResponseBase {
}

export interface MlStartDatafeedMlStartDatafeedRequest extends RequestBase {
  datafeed_id: Id
  start?: Time
  body?: {
    end?: Time
    start?: Time
    timeout?: Time
  }
}

export interface MlStartDatafeedMlStartDatafeedResponse extends ResponseBase {
  node: NodeIds
  started: boolean
}

export interface MlStopDataFrameAnalyticsMlStopDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  allow_no_match?: boolean
  force?: boolean
  timeout?: Time
}

export interface MlStopDataFrameAnalyticsMlStopDataFrameAnalyticsResponse extends ResponseBase {
  stopped: boolean
}

export interface MlStopDatafeedMlStopDatafeedRequest extends RequestBase {
  datafeed_id: Ids
  allow_no_match?: boolean
  force?: boolean
  body?: {
    force?: boolean
    timeout?: Time
  }
}

export interface MlStopDatafeedMlStopDatafeedResponse extends ResponseBase {
  stopped: boolean
}

export interface MlUpdateDataFeedMlUpdateDatafeedRequest extends RequestBase {
  datafeed_id: Id
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  body: {
    aggregations?: Record<string, AggregationsAggregationContainer>
    chunking_config?: MlChunkingConfig
    delayed_data_check_config?: MlDelayedDataCheckConfig
    frequency?: Time
    indexes?: Indices
    indices?: Indices
    indices_options?: MlUpdateDataFeedDatafeedIndicesOptions
    job_id?: Id
    max_empty_searches?: integer
    query?: QueryDslAbstractionsContainerQueryContainer
    query_delay?: Time
    script_fields?: Record<string, ScriptField>
    scroll_size?: integer
  }
}

export interface MlUpdateDataFeedMlUpdateDatafeedResponse extends ResponseBase {
  aggregations?: Record<string, AggregationsAggregationContainer>
  chunking_config?: MlChunkingConfig
  datafeed_id: Id
  frequency?: Time
  indices: Indices
  job_id: Id
  max_empty_searches?: integer
  query: QueryDslAbstractionsContainerQueryContainer
  query_delay: Time
  script_fields?: Record<string, ScriptField>
  scroll_size: integer
  indices_options: MlUpdateDataFeedDatafeedIndicesOptions
  delayed_data_check_config: MlDelayedDataCheckConfig
}

export interface MlUpdateFilterMlUpdateFilterRequest extends RequestBase {
  filter_id: Id
  body: {
    add_items?: string[]
    description?: string
    remove_items?: string[]
  }
}

export interface MlUpdateFilterMlUpdateFilterResponse extends ResponseBase {
  description: string
  filter_id: Id
  items: string[]
}

export interface MlUpdateJobMlUpdateJobRequest extends RequestBase {
  job_id: Id
  body: {
    allow_lazy_open?: boolean
    analysis_limits?: MlAnalysisMemoryLimit
    background_persist_interval?: Time
    custom_settings?: Record<string, any>
    categorization_filters?: string[]
    description?: string
    model_plot_config?: MlModelPlotConfigEnabled
    daily_model_snapshot_retention_after_days?: long
    model_snapshot_retention_days?: long
    renormalization_window_days?: long
    results_retention_days?: long
    groups?: string[]
    detectors?: MlDetector[]
    per_partition_categorization?: MlPerPartitionCategorization
  }
}

export interface MlUpdateJobMlUpdateJobResponse extends ResponseBase {
  stub: boolean
}

export interface MlUpdateModelSnapshotMlUpdateModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
  body: {
    description?: string
    retain?: boolean
  }
}

export interface MlUpdateModelSnapshotMlUpdateModelSnapshotResponse extends AcknowledgedResponseBase {
  model: MlModelSnapshot
}

export interface XpackUsageMlUsageCounter {
  count: long
}

export interface MlValidateDetectorMlValidateDetectorRequest extends RequestBase {
  body: MlDetector
}

export interface MlValidateDetectorMlValidateDetectorResponse extends AcknowledgedResponseBase {
}

export interface MlValidateJobMlValidateJobRequest extends RequestBase {
  body: {
    job_id?: Id
    analysis_config?: MlAnalysisConfig
    analysis_limits?: MlAnalysisLimits
    data_description?: MlDataDescription
    description?: string
    model_plot?: MlModelPlotConfig
    model_snapshot_retention_days?: long
    results_index_name?: IndexName
  }
}

export interface MlValidateJobMlValidateJobResponse extends AcknowledgedResponseBase {
}

export type CatCatJobsModelCategorizationStatus = 'ok' | 'warn'

export type CatCatJobsModelMemoryStatus = 'ok' | 'soft_limit' | 'hard_limit'

export interface MlModelPlotConfig {
  terms?: Field
  enabled: boolean
  annotations_enabled?: boolean
}

export interface MlModelPlotConfigEnabled {
  enabled: boolean
  annotations_enabled?: boolean
  terms?: string
}

export interface MlModelSizeStats {
  bucket_allocation_failures_count: long
  job_id: Id
  log_time: Time
  memory_status: MlMemoryStatus
  model_bytes: long
  model_bytes_exceeded?: long
  model_bytes_memory_limit?: long
  peak_model_bytes?: long
  assignment_memory_basis?: string
  result_type: string
  total_by_field_count: long
  total_over_field_count: long
  total_partition_field_count: long
  categorization_status: string
  categorized_doc_count: integer
  dead_category_count: integer
  failed_category_count: integer
  frequent_category_count: integer
  rare_category_count: integer
  total_category_count: integer
  timestamp?: long
}

export interface MlModelSnapshot {
  description: string
  job_id: Id
  latest_record_time_stamp: Time
  latest_result_time_stamp: Time
  model_size_stats: MlModelSizeStats
  retain: boolean
  snapshot_doc_count: long
  snapshot_id: Id
  timestamp: Time
  min_version: VersionString
}

export interface XpackUsageMonitoringUsage extends XpackUsageXPackUsage {
  collection_enabled: boolean
  enabled_exporters: Record<string, long>
}

export type WatcherMonth = 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'

export interface QueryDslSpecializedMoreLikeThisMoreLikeThisQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  boost_terms?: double
  fields?: Fields
  include?: boolean
  like?: QueryDslSpecializedMoreLikeThisLikeLike | QueryDslSpecializedMoreLikeThisLikeLike[]
  max_doc_freq?: integer
  max_query_terms?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  minimum_should_match?: MinimumShouldMatch
  min_term_freq?: integer
  min_word_length?: integer
  per_field_analyzer?: Record<Field, string>
  routing?: Routing
  stop_words?: AnalysisStopWords
  unlike?: QueryDslSpecializedMoreLikeThisLikeLike | QueryDslSpecializedMoreLikeThisLikeLike[]
  version?: VersionNumber
  version_type?: VersionType
}

export interface IlmMoveToStepMoveToStepRequest extends RequestBase {
  index: IndexName
  body?: {
    current_step?: IlmMoveToStepStepKey
    next_step?: IlmMoveToStepStepKey
  }
}

export interface IlmMoveToStepMoveToStepResponse extends AcknowledgedResponseBase {
}

export interface AggregationsPipelineMovingAverageMovingAverageAggregation extends AggregationsPipelinePipelineAggregationBase {
  minimize?: boolean
  model?: AggregationsPipelineMovingAverageModelsMovingAverageModel
  settings: AggregationsPipelineMovingAverageModelsMovingAverageSettings
  predict?: integer
  window?: integer
}

export type AggregationsPipelineMovingAverageModelsMovingAverageModel = 'linear' | 'simple' | 'ewma' | 'holt' | 'holt_winters'

export type AggregationsPipelineMovingAverageModelsMovingAverageSettings = AggregationsPipelineMovingAverageModelsEwmaModelSettings | AggregationsPipelineMovingAverageModelsHoltLinearModelSettings | AggregationsPipelineMovingAverageModelsHoltWintersModelSettings

export interface AggregationsPipelineMovingFunctionMovingFunctionAggregation extends AggregationsPipelinePipelineAggregationBase {
  script?: string
  shift?: integer
  window?: integer
}

export interface AggregationsPipelineMovingPercentilesMovingPercentilesAggregation extends AggregationsPipelinePipelineAggregationBase {
  window?: integer
  shift?: integer
}

export interface AggregationsMultiBucketAggregate<TBucket = unknown> extends AggregationsAggregateBase {
  buckets: TBucket[]
}

export interface MgetMultiGetHit<TDocument = unknown> {
  error?: MainError
  fields?: Record<string, any>
  found?: boolean
  _id: Id
  _index: IndexName
  _primary_term?: long
  _routing?: Routing
  _seq_no?: SequenceNumber
  _source?: TDocument
  _type?: Type
  _version?: VersionNumber
}

export type MgetMultiGetId = string | integer

export interface MgetMultiGetOperation {
  _id: MgetMultiGetId
  _index?: IndexName
  routing?: Routing
  _source?: boolean | Fields | SearchSourceFilteringSourceFilter
  stored_fields?: Fields
  _type?: Type
  version?: VersionNumber
  version_type?: VersionType
}

export interface MgetMultiGetRequest extends RequestBase {
  index?: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  body: {
    docs?: MgetMultiGetOperation[]
    ids?: MgetMultiGetId[]
  }
}

export interface MgetMultiGetResponse<TDocument = unknown> extends ResponseBase {
  docs: MgetMultiGetHit<TDocument>[]
}

export interface QueryDslFullTextMultiMatchMultiMatchQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: QueryDslOperator
  prefix_length?: integer
  query?: string
  slop?: integer
  tie_breaker?: double
  type?: QueryDslFullTextMultiMatchTextQueryType
  use_dis_max?: boolean
  zero_terms_query?: QueryDslFullTextMultiMatchZeroTermsQuery
}

export interface MsearchMultiSearchBody {
  aggregations?: Record<string, AggregationsAggregationContainer>
  aggs?: Record<string, AggregationsAggregationContainer>
  query?: QueryDslAbstractionsContainerQueryContainer
  from?: integer
  size?: integer
  pit?: SearchPointInTimePointInTimeReference
  track_total_hits?: boolean | integer
  suggest?: SearchSuggestersSuggestContainer | Record<string, SearchSuggestersSuggestContainer>
}

export interface MsearchMultiSearchHeader {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  index?: Indices
  preference?: string
  request_cache?: boolean
  routing?: string
  search_type?: SearchType
}

export interface MsearchMultiSearchRequest extends RequestBase {
  index?: Indices
  type?: Types
  ccs_minimize_roundtrips?: boolean
  max_concurrent_searches?: long
  max_concurrent_shard_requests?: long
  pre_filter_shard_size?: long
  search_type?: SearchType
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body: MsearchMultiSearchHeader | MsearchMultiSearchBody[]
}

export interface MsearchMultiSearchResponse<TDocument = unknown> extends ResponseBase {
  took: long
  responses: MsearchMultiSearchResult<TDocument> | ErrorResponse[]
}

export interface MsearchMultiSearchResult<TDocument = unknown> extends SearchSearchResponse<TDocument> {
  status: integer
}

export interface MsearchTemplateMultiSearchTemplateRequest extends RequestBase {
  index?: Indices
  type?: Types
  ccs_minimize_roundtrips?: boolean
  max_concurrent_searches?: long
  search_type?: SearchType
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body: {
    operations?: Record<string, SearchTemplateSearchTemplateRequest>
  }
}

export interface MsearchTemplateMultiSearchTemplateResponse extends ResponseBase {
  responses: SearchSearchResponse<any>[]
  took: long
}

export interface AggregationsBucketMultiTermsMultiTermLookup {
  field: Field
}

export type MultiTermQueryRewrite = string

export interface MtermvectorsMultiTermVectorOperation {
  doc: object
  fields: Fields
  field_statistics: boolean
  filter: TermvectorsTermVectorFilter
  _id: Id
  _index: IndexName
  offsets: boolean
  payloads: boolean
  positions: boolean
  routing: Routing
  term_statistics: boolean
  version: VersionNumber
  version_type: VersionType
}

export interface MtermvectorsMultiTermVectorsRequest extends RequestBase {
  index?: IndexName
  type?: Type
  fields?: Fields
  field_statistics?: boolean
  offsets?: boolean
  payloads?: boolean
  positions?: boolean
  preference?: string
  realtime?: boolean
  routing?: Routing
  term_statistics?: boolean
  version?: VersionNumber
  version_type?: VersionType
  body?: {
    docs?: MtermvectorsMultiTermVectorOperation[]
    ids?: Id[]
  }
}

export interface MtermvectorsMultiTermVectorsResponse extends ResponseBase {
  docs: TermvectorsTermVectorsResult[]
}

export interface AggregationsBucketMultiTermsMultiTermsAggregation extends AggregationsBucketBucketAggregationBase {
  terms: AggregationsBucketMultiTermsMultiTermLookup[]
}

export type QueryDslCompoundFunctionScoreFunctionsDecayMultiValueMode = 'min' | 'max' | 'avg' | 'sum'

export interface AnalysisTokenFiltersMultiplexerTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  filters: string[]
  preserve_original: boolean
}

export interface MappingTypesSpecializedMurmur3HashMurmur3HashProperty extends MappingTypesDocValuesPropertyBase {
  type: 'murmur3'
}

export interface AggregationsBucketSignificantTermsHeuristicsMutualInformationHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export interface AnalysisTokenFiltersNGramTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  max_gram: integer
  min_gram: integer
}

export interface AnalysisTokenizersNGramNGramTokenizer extends AnalysisTokenizersTokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: AnalysisTokenizersNGramTokenChar[]
}

export type Name = string

export interface EnrichNamedPolicy extends EnrichEnrichPolicy {
  name: string
}

export interface EnrichNamedPolicyConfig {
  geo_match?: EnrichNamedPolicy
  match: EnrichNamedPolicy
}

export interface EnrichNamedPolicyMetadata {
  config: EnrichNamedPolicyConfig
}

export interface QueryDslAbstractionsQueryNamedQueryKeys<TQuery = unknown> {
  boost?: float
  _name?: string
  ignore_unmapped?: boolean
}
export type QueryDslAbstractionsQueryNamedQuery<TQuery = unknown> = QueryDslAbstractionsQueryNamedQueryKeys<TQuery> |
    { [property: string]: TQuery }

export type Names = string | string[]

export interface MlInfoNativeCode {
  build_hash: string
  version: VersionString
}

export interface XpackInfoNativeCodeInformation {
  build_hash: string
  version: VersionString
}

export interface AggregationsBucketNestedNestedAggregation extends AggregationsBucketBucketAggregationBase {
  path?: Field
}

export interface SearchHitsNestedIdentity {
  field: Field
  offset: integer
  _nested?: SearchHitsNestedIdentity
}

export interface MappingTypesComplexNestedNestedProperty extends MappingTypesCorePropertyBase {
  dynamic?: boolean | MappingDynamicMapping
  enabled?: boolean
  properties?: Record<PropertyName, MappingTypesProperty>
  include_in_parent?: boolean
  include_in_root?: boolean
  type: 'nested'
}

export interface QueryDslJoiningNestedNestedQuery extends QueryDslAbstractionsQueryQueryBase {
  ignore_unmapped?: boolean
  inner_hits?: SearchInnerHitsInnerHits
  path?: Field
  query?: QueryDslAbstractionsContainerQueryContainer
  score_mode?: QueryDslJoiningNestedNestedScoreMode
}

export type QueryDslJoiningNestedNestedScoreMode = 'avg' | 'sum' | 'min' | 'max' | 'none'

export interface SearchSortNestedSortValue {
  filter: QueryDslAbstractionsContainerQueryContainer
  max_children?: integer
  path: Field
}

export interface WatcherNeverCondition {
}

export interface ClusterClusterAllocationExplainNodeAllocationExplanation {
  deciders: ClusterClusterAllocationExplainAllocationDecision[]
  node_attributes: Record<string, string>
  node_decision: ClusterClusterAllocationExplainDecision
  node_id: Id
  node_name: Name
  store?: ClusterClusterAllocationExplainAllocationStore
  transport_address: TransportAddress
  weight_ranking: integer
}

export interface NodesNodeAttributes {
  attributes: Record<string, string>
  ephemeral_id: Id
  id?: Id
  name: Name
  transport_address: TransportAddress
  roles?: NodesNodesInfoNodeRoles
}

export interface NodesNodesStatsNodeBufferPool {
  count: long
  total_capacity: string
  total_capacity_in_bytes: long
  used: string
  used_in_bytes: long
}

export interface ClusterClusterAllocationExplainNodeDiskUsage {
  node_name: Name
  least_available: ClusterClusterAllocationExplainDiskUsage
  most_available: ClusterClusterAllocationExplainDiskUsage
}

export type NodeId = string

export type NodeIds = string

export interface NodesNodesInfoNodeInfo {
  attributes: Record<string, string>
  build_flavor: string
  build_hash: string
  build_type: string
  host: Host
  http: NodesNodesInfoNodeInfoHttp
  ip: Ip
  jvm: NodesNodesInfoNodeJvmInfo
  name: Name
  network: NodesNodesInfoNodeInfoNetwork
  os: NodesNodesInfoNodeOperatingSystemInfo
  plugins: PluginStats[]
  process: NodesNodesInfoNodeProcessInfo
  roles: NodesNodesInfoNodeRole[]
  settings: string[]
  thread_pool: Record<string, NodesNodesInfoNodeThreadPoolInfo>
  total_indexing_buffer: long
  transport: NodesNodesInfoNodeInfoTransport
  transport_address: TransportAddress
  version: VersionString
}

export interface NodesNodesInfoNodeInfoHttp {
  bound_address: string[]
  max_content_length: string
  max_content_length_in_bytes: long
  publish_address: string
}

export interface NodesNodesInfoNodeInfoJvmMemory {
  direct_max: string
  direct_max_in_bytes: long
  heap_init: string
  heap_init_in_bytes: long
  heap_max: string
  heap_max_in_bytes: long
  non_heap_init: string
  non_heap_init_in_bytes: long
  non_heap_max: string
  non_heap_max_in_bytes: long
}

export interface NodesNodesInfoNodeInfoMemory {
  total: string
  total_in_bytes: long
}

export interface NodesNodesInfoNodeInfoNetwork {
  primary_interface: NodesNodesInfoNodeInfoNetworkInterface
  refresh_interval: integer
}

export interface NodesNodesInfoNodeInfoNetworkInterface {
  address: string
  mac_address: string
  name: string
}

export interface NodesNodesInfoNodeInfoOSCPU {
  cache_size: string
  cache_size_in_bytes: integer
  cores_per_socket: integer
  mhz: integer
  model: string
  total_cores: integer
  total_sockets: integer
  vendor: string
}

export interface NodesNodesInfoNodeInfoTransport {
  bound_address: string[]
  publish_address: string
}

export interface NodesNodesStatsStatisticsNodeIngestStats {
  pipelines: Record<string, NodesNodesStatsStatisticsIngestStats>
  total: NodesNodesStatsStatisticsIngestStats
}

export interface NodesNodesInfoNodeJvmInfo {
  gc_collectors: string[]
  mem: NodesNodesInfoNodeInfoJvmMemory
  memory_pools: string[]
  pid: integer
  start_time_in_millis: long
  version: VersionString
  vm_name: Name
  vm_vendor: string
  vm_version: VersionString
}

export interface NodesNodesStatsNodeJvmStats {
  buffer_pools: Record<string, NodesNodesStatsNodeBufferPool>
  classes: NodesNodesStatsJvmClassesStats
  gc: NodesNodesStatsGarbageCollectionStats
  mem: NodesNodesStatsMemoryStats
  threads: NodesNodesStatsThreadStats
  timestamp: long
  uptime: string
  uptime_in_millis: long
}

export type NodeName = string

export interface NodesNodesInfoNodeOperatingSystemInfo {
  arch: string
  available_processors: integer
  cpu: NodesNodesInfoNodeInfoOSCPU
  mem: NodesNodesInfoNodeInfoMemory
  name: string
  pretty_name: Name
  refresh_interval_in_millis: integer
  swap: NodesNodesInfoNodeInfoMemory
  version: VersionString
}

export interface ClusterClusterStatsNodePackagingType {
  count: integer
  flavor: string
  type: string
}

export interface NodesNodesInfoNodeProcessInfo {
  id: long
  mlockall: boolean
  refresh_interval_in_millis: long
}

export interface NodesReloadSecureSettingsNodeReloadException {
  name: Name
  reload_exception?: NodesReloadSecureSettingsNodeReloadExceptionCausedBy
}

export interface NodesReloadSecureSettingsNodeReloadExceptionCausedBy {
  type: string
  reason: string
  caused_by?: NodesReloadSecureSettingsNodeReloadExceptionCausedBy
}

export type NodesNodesInfoNodeRole = 'master' | 'data' | 'data_cold' | 'data_content' | 'data_frozen' | 'data_hot' | 'data_warm' | 'client' | 'ingest' | 'ml' | 'voting_only' | 'transform' | 'remote_cluster_client' | 'coordinating_only'

export type NodesNodesInfoNodeRoles = NodesNodesInfoNodeRole[]

export interface NodesNodeShard {
  state: IndicesStatsShardRoutingState
  primary: boolean
  node?: NodeName
  shard: integer
  index: IndexName
  allocation_id?: Record<string, string>
  recovery_source?: Record<string, Id>
  unassigned_info?: ClusterClusterAllocationExplainUnassignedInformation
}

export interface NodesNodeStatistics {
  failures?: ErrorCause[]
  total: integer
  successful: integer
  failed: integer
}

export interface NodesNodesStatsNodeStats {
  adaptive_selection: Record<string, NodesNodesStatsAdaptiveSelectionStats>
  breakers: Record<string, NodesNodesStatsBreakerStats>
  fs: NodesNodesStatsFileSystemStats
  host: Host
  http: NodesNodesStatsHttpStats
  indices: IndicesStatsIndexStats
  ingest: NodesNodesStatsStatisticsNodeIngestStats
  ip: Ip[]
  jvm: NodesNodesStatsNodeJvmStats
  name: Name
  os: NodesNodesStatsOperatingSystemStats
  process: NodesNodesStatsProcessStats
  roles: NodesNodesInfoNodeRole[]
  script: NodesNodesStatsScriptStats
  thread_pool: Record<string, NodesNodesStatsThreadCountStats>
  timestamp: long
  transport: NodesNodesStatsTransportStats
  transport_address: TransportAddress
}

export interface NodesNodesInfoNodeThreadPoolInfo {
  core: integer
  keep_alive: string
  max: integer
  queue_size: integer
  size: integer
  type: string
}

export interface NodesNodesUsageNodeUsageInformation {
  rest_actions: Record<string, integer>
  since: EpochMillis
  timestamp: EpochMillis
  aggregations: Record<string, any>
}

export interface NodesNodesHotThreadsNodesHotThreadsRequest extends RequestBase {
  node_id?: NodeIds
  ignore_idle_threads?: boolean
  interval?: Time
  snapshots?: long
  threads?: long
  thread_type?: ThreadType
  timeout?: Time
}

export interface NodesNodesHotThreadsNodesHotThreadsResponse extends ResponseBase {
  hot_threads: NodesNodesHotThreadsHotThreadInformation[]
}

export interface NodesNodesInfoNodesInfoRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  flat_settings?: boolean
  timeout?: Time
}

export interface NodesNodesInfoNodesInfoResponse extends NodesNodesResponseBase {
  cluster_name: string
  nodes: Record<string, NodesNodesInfoNodeInfo>
}

export interface NodesNodesResponseBase extends ResponseBase {
  _nodes: NodesNodeStatistics
}

export interface NodesNodesStatsNodesStatsRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  index_metric?: Metrics
  completion_fields?: Fields
  fielddata_fields?: Fields
  fields?: Fields
  groups?: boolean
  include_segment_file_sizes?: boolean
  level?: Level
  master_timeout?: Time
  timeout?: Time
  types?: string[]
  include_unloaded_segments?: boolean
}

export interface NodesNodesStatsNodesStatsResponse extends NodesNodesResponseBase {
  cluster_name: string
  nodes: Record<string, NodesNodesStatsNodeStats>
}

export interface NodesNodesUsageNodesUsageRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  timeout?: Time
}

export interface NodesNodesUsageNodesUsageResponse extends NodesNodesResponseBase {
  cluster_name: string
  nodes: Record<string, NodesNodesUsageNodeUsageInformation>
}

export type AnalysisTokenizersNoriDecompoundMode = 'discard' | 'none' | 'mixed'

export interface AnalysisTokenFiltersNoriPartOfSpeechTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  stoptags: string[]
}

export interface AnalysisTokenizersNoriTokenizer extends AnalysisTokenizersTokenizerBase {
  decompound_mode: AnalysisTokenizersNoriDecompoundMode
  discard_punctuation: boolean
  user_dictionary: string
  user_dictionary_rules: string[]
}

export interface AggregationsPipelineNormalizeNormalizeAggregation extends AggregationsPipelinePipelineAggregationBase {
  method?: AggregationsPipelineNormalizeNormalizeMethod
}

export type AggregationsPipelineNormalizeNormalizeMethod = 'rescale_0_1' | 'rescale_0_100' | 'percent_of_sum' | 'mean' | 'zscore' | 'softmax'

export interface MappingTypesCoreNumberNumberProperty extends MappingTypesDocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  fielddata?: IndicesNumericFielddata
  ignore_malformed?: boolean
  index?: boolean
  null_value?: double
  scaling_factor?: double
  type: MappingTypesCoreNumberNumberType
}

export type MappingTypesCoreNumberNumberType = 'float' | 'half_float' | 'scaled_float' | 'double' | 'integer' | 'long' | 'short' | 'byte' | 'unsigned_long'

export interface QueryDslCompoundFunctionScoreFunctionsNumericDecayFunctionKeys extends QueryDslCompoundFunctionScoreFunctionsDecayFunctionBase {
}
export type QueryDslCompoundFunctionScoreFunctionsNumericDecayFunction = QueryDslCompoundFunctionScoreFunctionsNumericDecayFunctionKeys |
    { [property: string]: QueryDslCompoundFunctionScoreFunctionsDecayPlacement<double, double> }

export interface IndicesNumericFielddata {
  format: IndicesNumericFielddataFormat
}

export type IndicesNumericFielddataFormat = 'array' | 'disabled'

export interface MappingTypesComplexObjectObjectProperty extends MappingTypesCorePropertyBase {
  dynamic?: boolean | MappingDynamicMapping
  enabled?: boolean
  properties?: Record<PropertyName, MappingTypesProperty>
  type: 'object'
}

export type OpType = 'index' | 'create'

export interface OpenPointInTimeOpenPointInTimeRequest extends RequestBase {
  index: Indices
  keep_alive?: Time
}

export interface OpenPointInTimeOpenPointInTimeResponse extends ResponseBase {
  id: Id
}

export interface ClusterClusterStatsOperatingSystemMemoryInfo {
  free_in_bytes: long
  free_percent: integer
  total_in_bytes: long
  used_in_bytes: long
  used_percent: integer
}

export interface NodesNodesStatsOperatingSystemStats {
  cpu: NodesNodesStatsCPUStats
  mem: NodesNodesStatsExtendedMemoryStats
  swap: NodesNodesStatsMemoryStats
  timestamp: long
}

export type QueryDslOperator = 'and' | 'or' | 'AND' | 'OR'

export interface MlOverallBucket {
  bucket_span: long
  is_interim: boolean
  jobs: MlOverallBucketJobInfo[]
  overall_score: double
  result_type: string
  timestamp: DateString
}

export interface MlOverallBucketJobInfo {
  job_id: Id
  max_anomaly_score: double
}

export interface MlPage {
  from: integer
  size: integer
}

export interface WatcherPagerDutyActionEventResult {
  event: WatcherPagerDutyEvent
  reason: string
  request: WatcherHttpInputRequestResult
  response: WatcherHttpInputResponseResult
}

export interface WatcherPagerDutyActionResult {
  sent_event: WatcherPagerDutyActionEventResult
}

export interface WatcherPagerDutyContext {
  href: string
  src: string
  type: WatcherPagerDutyContextType
}

export type WatcherPagerDutyContextType = 'link' | 'image'

export interface WatcherPagerDutyEvent {
  account: string
  attach_payload: boolean
  client: string
  client_url: string
  context: WatcherPagerDutyContext[]
  description: string
  event_type: WatcherPagerDutyEventType
  incident_key: string
}

export type WatcherPagerDutyEventType = 'trigger' | 'resolve' | 'acknowledge'

export interface ScriptsPainlessExecutePainlessContextSetup {
  document: any
  index: IndexName
  query: QueryDslAbstractionsContainerQueryContainer
}

export interface ScriptsPainlessExecutePainlessExecutionPosition {
  offset: integer
  start: integer
  end: integer
}

export interface AggregationsBucketParentParentAggregation extends AggregationsBucketBucketAggregationBase {
  type?: RelationName
}

export interface QueryDslJoiningParentIdParentIdQuery extends QueryDslAbstractionsQueryQueryBase {
  id?: Id
  ignore_unmapped?: boolean
  type?: RelationName
}

export interface MlPartitionScore {
  initial_record_score: double
  partition_field_name: Name
  partition_field_value: string
  probability: double
  record_score: double
}

export type Password = string

export interface AnalysisTokenizersPathHierarchyTokenizer extends AnalysisTokenizersTokenizerBase {
  buffer_size: integer
  delimiter: string
  replacement: string
  reverse: boolean
  skip: integer
}

export interface AnalysisTokenFiltersPatternCaptureTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  patterns: string[]
  preserve_original: boolean
}

export interface AnalysisTokenFiltersPatternReplaceTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  flags: string
  pattern: string
  replacement: string
}

export interface CcrPauseAutoFollowPatternPauseAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface CcrPauseAutoFollowPatternPauseAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface CcrPauseFollowIndexPauseFollowIndexRequest extends RequestBase {
  index: IndexName
}

export interface CcrPauseFollowIndexPauseFollowIndexResponse extends AcknowledgedResponseBase {
}

export interface ClusterClusterPendingTasksPendingTask {
  insert_order: integer
  priority: string
  source: string
  time_in_queue: string
  time_in_queue_millis: integer
}

export interface MlPerPartitionCategorization {
  enabled?: boolean
  stop_on_warn?: boolean
}

export type Percentage = string | float

export interface AggregationsBucketSignificantTermsHeuristicsPercentageScoreHeuristic {
}

export interface AggregationsPercentileItem {
  percentile: double
  value: double
}

export interface AggregationsMetricPercentileRanksPercentileRanksAggregation extends AggregationsMetricFormatMetricAggregationBase {
  keyed?: boolean
  values?: double[]
  hdr?: AggregationsMetricPercentilesHdrMethod
  tdigest?: AggregationsMetricPercentilesTDigest
}

export interface AggregationsPercentilesAggregate extends AggregationsAggregateBase {
  items: AggregationsPercentileItem[]
}

export interface AggregationsMetricPercentilesPercentilesAggregation extends AggregationsMetricFormatMetricAggregationBase {
  keyed?: boolean
  percents?: double[]
  hdr?: AggregationsMetricPercentilesHdrMethod
  tdigest?: AggregationsMetricPercentilesTDigest
}

export interface AggregationsPipelinePercentilesBucketPercentilesBucketAggregation extends AggregationsPipelinePipelineAggregationBase {
  percents?: double[]
}

export interface QueryDslSpecializedPercolatePercolateQuery extends QueryDslAbstractionsQueryQueryBase {
  document?: any
  documents?: any[]
  field?: Field
  id?: Id
  index?: IndexName
  preference?: string
  routing?: Routing
  version?: VersionNumber
}

export interface MappingTypesCorePercolatorPercolatorProperty extends MappingTypesPropertyBase {
  type: 'percolator'
}

export interface IlmPhase {
  actions: Record<string, IlmLifecycleAction> | string[]
  min_age?: Time
}

export interface IlmPhases {
  cold?: IlmPhase
  delete?: IlmPhase
  hot?: IlmPhase
  warm?: IlmPhase
}

export interface SearchSuggestersPhraseSuggesterPhraseSuggestCollate {
  params?: Record<string, any>
  prune?: boolean
  query: SearchSuggestersPhraseSuggesterPhraseSuggestCollateQuery
}

export interface SearchSuggestersPhraseSuggesterPhraseSuggestCollateQuery {
  id?: Id
  source?: string
}

export interface SearchSuggestersPhraseSuggesterPhraseSuggestHighlight {
  post_tag: string
  pre_tag: string
}

export interface SearchSuggestersPhraseSuggestOption {
  text: string
  highlighted: string
  score: double
}

export interface SearchSuggestersPhraseSuggesterPhraseSuggester extends SearchSuggestersSuggesterBase {
  collate?: SearchSuggestersPhraseSuggesterPhraseSuggestCollate
  confidence?: double
  direct_generator?: SearchSuggestersPhraseSuggesterDirectGenerator[]
  force_unigrams?: boolean
  gram_size?: integer
  highlight?: SearchSuggestersPhraseSuggesterPhraseSuggestHighlight
  max_errors?: double
  real_word_error_likelihood?: double
  separator?: string
  shard_size?: integer
  smoothing?: SearchSuggestersPhraseSuggesterSmoothingModelSmoothingModelContainer
  text?: string
  token_limit?: integer
}

export interface PingPingRequest extends RequestBase {
}

export type PingPingResponse = boolean

export interface QueryDslSpecializedPinnedPinnedQuery extends QueryDslAbstractionsQueryQueryBase {
  ids?: Id[] | long[]
  organic?: QueryDslAbstractionsContainerQueryContainer
}

export interface IngestPipeline {
  description?: string
  on_failure?: IngestProcessorContainer[]
  processors?: IngestProcessorContainer[]
  version?: VersionNumber
}

export interface AggregationsPipelinePipelineAggregationBase extends AggregationsAggregation {
  buckets_path?: AggregationsPipelineBucketsPath
  format?: string
  gap_policy?: AggregationsPipelineGapPolicy
}

export interface IngestPipelineConfig {
  description?: string
  version?: VersionNumber
  processors: IngestProcessorContainer[]
}

export type PipelineName = string

export interface IngestProcessorsPipelineProcessor extends IngestProcessorBase {
  name: string
}

export interface IngestSimulatePipelinePipelineSimulation {
  doc?: IngestSimulatePipelineDocumentSimulation
  processor_results?: IngestSimulatePipelinePipelineSimulation[]
  tag?: string
  processor_type?: string
  status?: WatcherStatus
}

export interface PluginStats {
  classname: string
  description: string
  elasticsearch_version: VersionString
  extended_plugins: string[]
  has_native_controller: boolean
  java_version: VersionString
  name: string
  version: VersionString
  licensed: boolean
  type: string
}

export interface SearchPointInTimePointInTimeReference {
  id: Id
  keep_alive?: Time
}

export interface MappingTypesGeoPointPointProperty extends MappingTypesDocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: string
  type: 'point'
}

export interface IlmPolicy {
  phases: IlmPhases
  name?: string
}

export interface AnalysisTokenFiltersPorterStemTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
}

export interface LicensePostLicensePostLicenseRequest extends RequestBase {
  acknowledge?: boolean
  body?: {
    license?: LicenseGetLicenseLicense
    licenses?: LicenseGetLicenseLicense[]
  }
}

export interface LicensePostLicensePostLicenseResponse extends ResponseBase {
  acknowledge?: LicensePostLicenseLicenseAcknowledgement
  acknowledged: boolean
  license_status: LicenseGetLicenseLicenseStatus
}

export interface AnalysisTokenFiltersPredicateTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  script: Script
}

export interface QueryDslTermLevelPrefixPrefixQuery extends QueryDslAbstractionsQueryQueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}

export interface TransformPreviewTransformPreviewTransformRequest extends RequestBase {
  body: {
    description?: string
    dest?: TransformTransformDestination
    frequency?: Time
    pivot?: TransformPivotTransformPivot
    source?: TransformTransformSource
    sync?: TransformTransformSyncContainer
  }
}

export interface TransformPreviewTransformPreviewTransformResponse<TTransform = unknown> extends ResponseBase {
  generated_dest_index: IndexIndexState
  preview: TTransform[]
}

export type SecurityHasPrivilegesPrivileges = Record<string, boolean>

export interface SecurityPutPrivilegesPrivilegesActions {
  actions: string[]
  application?: string
  name?: string
  metadata?: Record<string, any>
}

export interface NodesNodesStatsProcessStats {
  cpu: NodesNodesStatsCPUStats
  mem: NodesNodesStatsMemoryStats
  open_file_descriptors: integer
  timestamp: long
}

export interface IngestProcessorBase {
  if?: string
  ignore_failure?: boolean
  on_failure?: IngestProcessorContainer[]
  tag?: string
}

export interface IngestProcessorContainer {
  attachment?: IngestProcessorsPluginsAttachmentProcessor
  append?: IngestProcessorsAppendProcessor
  csv?: IngestProcessorsCsvProcessor
  convert?: IngestProcessorsConvertProcessor
  date?: IngestProcessorsDateProcessor
  date_index_name?: IngestProcessorsDateIndexNameProcessor
  dot_expander?: IngestProcessorsDotExpanderProcessor
  enrich?: IngestProcessorsEnrichProcessor
  fail?: IngestProcessorsFailProcessor
  foreach?: IngestProcessorsForeachProcessor
  json?: IngestProcessorsJsonProcessor
  user_agent?: IngestProcessorsPluginsUserAgentProcessor
  kv?: IngestProcessorsKeyValueProcessor
  geoip?: IngestProcessorsPluginsGeoIpProcessor
  grok?: IngestProcessorsGrokProcessor
  gsub?: IngestProcessorsGsubProcessor
  join?: IngestProcessorsJoinProcessor
  lowercase?: IngestProcessorsLowercaseProcessor
  remove?: IngestProcessorsRemoveProcessor
  rename?: IngestProcessorsRenameProcessor
  script?: IngestProcessorsScriptProcessor
  set?: IngestProcessorsSetProcessor
  sort?: IngestProcessorsSortProcessor
  split?: IngestProcessorsSplitProcessor
  trim?: IngestProcessorsTrimProcessor
  uppercase?: IngestProcessorsUppercaseProcessor
  urldecode?: IngestProcessorsUrlDecodeProcessor
  bytes?: IngestProcessorsBytesProcessor
  dissect?: IngestProcessorsDissectProcessor
  set_security_user?: IngestProcessorsSetSecurityUserProcessor
  pipeline?: IngestProcessorsPipelineProcessor
  drop?: IngestProcessorsDropProcessor
  circle?: IngestProcessorsCircleProcessor
  inference?: IngestProcessorsInferenceProcessor
}

export interface SearchProfileProfile {
  shards: SearchProfileShardProfile[]
}

export type MappingTypesProperty = MappingTypesComplexFlattenedFlattenedProperty | MappingTypesCoreJoinJoinProperty | MappingTypesCorePercolatorPercolatorProperty | MappingTypesCoreRankFeatureRankFeatureProperty | MappingTypesCoreRankFeaturesRankFeaturesProperty | MappingTypesSpecializedConstantKeywordConstantKeywordProperty | MappingTypesSpecializedFieldAliasFieldAliasProperty | MappingTypesSpecializedHistogramHistogramProperty | MappingTypesCoreProperty

export interface MappingTypesPropertyBase {
  local_metadata?: Record<string, any>
  meta?: Record<string, string>
  name?: PropertyName
  properties?: Record<PropertyName, MappingTypesProperty>
  ignore_above?: integer
  dynamic?: boolean | MappingDynamicMapping
  fields?: Record<PropertyName, MappingTypesProperty>
}

export type PropertyName = string

export interface CcrPutAutoFollowPatternPutAutoFollowPatternRequest extends RequestBase {
  name: Name
  body: {
    remote_cluster: string
    follow_index_pattern?: IndexPattern
    leader_index_patterns?: IndexPatterns
    max_outstanding_read_requests?: integer
    settings?: Record<string, any>
    max_outstanding_write_requests?: integer
    read_poll_timeout?: Time
    max_read_request_operation_count?: integer
    max_read_request_size?: ByteSize
    max_retry_delay?: Time
    max_write_buffer_count?: integer
    max_write_buffer_size?: ByteSize
    max_write_request_operation_count?: integer
    max_write_request_size?: ByteSize
  }
}

export interface CcrPutAutoFollowPatternPutAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface AutoscalingPolicyPutPutAutoscalingPolicyRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body: {
    stub_c: string
  }
}

export interface AutoscalingPolicyPutPutAutoscalingPolicyResponse extends ResponseBase {
  stub: integer
}

export interface EnrichPutPolicyPutEnrichPolicyRequest extends RequestBase {
  name: Name
  body: {
    geo_match?: EnrichEnrichPolicy
    match?: EnrichEnrichPolicy
  }
}

export interface EnrichPutPolicyPutEnrichPolicyResponse extends AcknowledgedResponseBase {
}

export interface IlmPutLifecyclePutLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id?: Id
  body?: {
    policy?: IlmPolicy
  }
}

export interface IlmPutLifecyclePutLifecycleResponse extends AcknowledgedResponseBase {
}

export interface IngestPutPipelinePutPipelineRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
  body: {
    description?: string
    on_failure?: IngestProcessorContainer[]
    processors?: IngestProcessorContainer[]
    version?: VersionNumber
  }
}

export interface IngestPutPipelinePutPipelineResponse extends AcknowledgedResponseBase {
}

export interface SecurityPutPrivilegesPutPrivilegesStatus {
  created: boolean
}

export interface SecurityPutRoleMappingStatus {
  created: boolean
}

export interface SecurityPutRolePutRoleStatus {
  created: boolean
}

export interface PutScriptPutScriptRequest extends RequestBase {
  id: Id
  context?: Name
  master_timeout?: Time
  timeout?: Time
  body: {
    script?: StoredScript
  }
}

export interface PutScriptPutScriptResponse extends AcknowledgedResponseBase {
}

export interface SlmPutLifecyclePutSnapshotLifecycleRequest extends RequestBase {
  policy_id: Name
  body?: {
    config?: SlmSnapshotLifecycleConfig
    name?: string
    repository?: string
    retention?: SlmSnapshotRetentionConfiguration
    schedule?: WatcherCronExpression
  }
}

export interface SlmPutLifecyclePutSnapshotLifecycleResponse extends AcknowledgedResponseBase {
}

export interface TransformPutTransformPutTransformRequest extends RequestBase {
  transform_id: Name
  defer_validation?: boolean
  body: {
    description?: string
    dest?: TransformTransformDestination
    frequency?: Time
    pivot?: TransformPivotTransformPivot
    source?: TransformTransformSource
    sync?: TransformTransformSyncContainer
  }
}

export interface TransformPutTransformPutTransformResponse extends AcknowledgedResponseBase {
}

export type WatcherQuantifier = 'some' | 'all'

export interface QueryDslAbstractionsQueryQueryBase {
  boost?: float
  _name?: string
}

export interface SearchProfileQueryBreakdown {
  advance: long
  advance_count: long
  build_scorer: long
  build_scorer_count: long
  create_weight: long
  create_weight_count: long
  match: long
  match_count: long
  shallow_advance: long
  shallow_advance_count: long
  next_doc: long
  next_doc_count: long
  score: long
  score_count: long
  compute_max_score: long
  compute_max_score_count: long
  set_min_competitive_score: long
  set_min_competitive_score_count: long
}

export interface QueryCacheStats {
  cache_count: integer
  cache_size: integer
  evictions: integer
  hit_count: integer
  memory_size?: ByteSize
  memory_size_in_bytes: integer
  miss_count: integer
  total_count: integer
}

export interface QueryDslAbstractionsContainerQueryContainer {
  bool?: QueryDslCompoundBoolBoolQuery
  boosting?: QueryDslCompoundBoostingBoostingQuery
  common?: Record<Field, QueryDslFullTextCommonTermsCommonTermsQuery | string>
  constant_score?: QueryDslCompoundConstantScoreConstantScoreQuery
  dis_max?: QueryDslCompoundDismaxDisMaxQuery
  distance_feature?: Record<Field, QueryDslSpecializedDistanceFeatureDistanceFeatureQuery | string> | QueryDslSpecializedDistanceFeatureDistanceFeatureQuery
  exists?: QueryDslTermLevelExistsExistsQuery
  function_score?: QueryDslCompoundFunctionScoreFunctionScoreQuery
  fuzzy?: Record<Field, QueryDslTermLevelFuzzyFuzzyQuery | string>
  geo_bounding_box?: QueryDslAbstractionsQueryNamedQuery<QueryDslGeoBoundingBoxGeoBoundingBoxQuery | string>
  geo_distance?: QueryDslAbstractionsQueryNamedQuery<QueryDslGeoDistanceGeoDistanceQuery | string>
  geo_polygon?: QueryDslAbstractionsQueryNamedQuery<QueryDslGeoPolygonGeoPolygonQuery | string>
  geo_shape?: QueryDslAbstractionsQueryNamedQuery<QueryDslGeoShapeGeoShapeQuery | string>
  has_child?: QueryDslJoiningHasChildHasChildQuery
  has_parent?: QueryDslJoiningHasParentHasParentQuery
  ids?: QueryDslTermLevelIdsIdsQuery
  intervals?: QueryDslAbstractionsQueryNamedQuery<QueryDslFullTextIntervalsIntervalsQuery | string>
  match?: QueryDslAbstractionsQueryNamedQuery<QueryDslFullTextMatchMatchQuery | string | float | boolean>
  match_all?: QueryDslMatchAllQuery
  match_bool_prefix?: QueryDslAbstractionsQueryNamedQuery<QueryDslFullTextMatchBoolPrefixMatchBoolPrefixQuery | string>
  match_none?: QueryDslMatchNoneQuery
  match_phrase?: QueryDslAbstractionsQueryNamedQuery<QueryDslFullTextMatchPhraseMatchPhraseQuery | string>
  match_phrase_prefix?: QueryDslAbstractionsQueryNamedQuery<QueryDslFullTextMatchPhrasePrefixMatchPhrasePrefixQuery | string>
  more_like_this?: QueryDslSpecializedMoreLikeThisMoreLikeThisQuery
  multi_match?: QueryDslFullTextMultiMatchMultiMatchQuery
  nested?: QueryDslJoiningNestedNestedQuery
  parent_id?: QueryDslJoiningParentIdParentIdQuery
  percolate?: QueryDslSpecializedPercolatePercolateQuery
  pinned?: QueryDslSpecializedPinnedPinnedQuery
  prefix?: QueryDslAbstractionsQueryNamedQuery<QueryDslTermLevelPrefixPrefixQuery | string>
  query_string?: QueryDslFullTextQueryStringQueryStringQuery
  range?: QueryDslAbstractionsQueryNamedQuery<QueryDslTermLevelRangeRangeQuery>
  rank_feature?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpecializedRankFeatureRankFeatureQuery | string>
  regexp?: QueryDslAbstractionsQueryNamedQuery<QueryDslTermLevelRegexpRegexpQuery | string>
  script?: QueryDslSpecializedScriptScriptQuery
  script_score?: QueryDslSpecializedScriptScoreScriptScoreQuery
  shape?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpecializedShapeShapeQuery | string>
  simple_query_string?: QueryDslFullTextSimpleQueryStringSimpleQueryStringQuery
  span_containing?: QueryDslSpanContainingSpanContainingQuery
  field_masking_span?: QueryDslSpanFieldMaskingSpanFieldMaskingQuery
  span_first?: QueryDslSpanFirstSpanFirstQuery
  span_multi?: QueryDslSpanMultiTermSpanMultiTermQuery
  span_near?: QueryDslSpanNearSpanNearQuery
  span_not?: QueryDslSpanNotSpanNotQuery
  span_or?: QueryDslSpanOrSpanOrQuery
  span_term?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanTermSpanTermQuery | string>
  span_within?: QueryDslSpanWithinSpanWithinQuery
  template?: QueryDslAbstractionsContainerQueryTemplate
  term?: QueryDslAbstractionsQueryNamedQuery<QueryDslTermLevelTermTermQuery | string | float | boolean>
  terms?: QueryDslAbstractionsQueryNamedQuery<QueryDslTermLevelTermsTermsQuery | string[] | long[]>
  terms_set?: QueryDslAbstractionsQueryNamedQuery<QueryDslTermLevelTermsSetTermsSetQuery | string>
  wildcard?: QueryDslAbstractionsQueryNamedQuery<QueryDslTermLevelWildcardWildcardQuery | string>
  type?: QueryDslTermLevelTypeTypeQuery
}

export interface SearchProfileQueryProfile {
  breakdown: SearchProfileQueryBreakdown
  description: string
  time_in_nanos: long
  type: string
  children?: SearchProfileQueryProfile[]
}

export interface SqlQuerySqlQuerySqlRequest extends RequestBase {
  format?: string
  body: {
    columnar?: boolean
    cursor?: string
    fetch_size?: integer
    filter?: QueryDslAbstractionsContainerQueryContainer
    query?: string
    request_timeout?: Time
    page_timeout?: Time
    time_zone?: string
    field_multi_value_leniency?: boolean
  }
}

export interface SqlQuerySqlQuerySqlResponse extends ResponseBase {
  columns?: SqlQuerySqlSqlColumn[]
  cursor?: string
  rows: SqlRow[]
}

export interface QueryDslFullTextQueryStringQueryStringQuery extends QueryDslAbstractionsQueryQueryBase {
  allow_leading_wildcard?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_field?: Field
  default_operator?: QueryDslOperator
  enable_position_increments?: boolean
  escape?: boolean
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_determinized_states?: integer
  minimum_should_match?: MinimumShouldMatch
  phrase_slop?: double
  query?: string
  quote_analyzer?: string
  quote_field_suffix?: string
  rewrite?: MultiTermQueryRewrite
  tie_breaker?: double
  time_zone?: string
  type?: QueryDslFullTextMultiMatchTextQueryType
}

export interface QueryDslAbstractionsContainerQueryTemplate {
  source: string
}

export interface XpackUsageQueryUsage {
  count?: integer
  failed?: integer
  paging?: integer
  total?: integer
}

export interface SecurityGetUserPrivilegesQueryUserPrivileges {
  term: SecurityGetUserPrivilegesTermUserPrivileges
}

export interface QueryDslCompoundFunctionScoreFunctionsRandomScoreFunction extends QueryDslCompoundFunctionScoreFunctionsScoreFunctionBase {
  field?: Field
  seed?: long | string
}

export interface AggregationsBucketRangeRangeAggregation extends AggregationsBucketBucketAggregationBase {
  field?: Field
  ranges?: AggregationsBucketRangeAggregationRange[]
  script?: Script
}

export interface AggregationsRangeBucketKeys {
}
export type AggregationsRangeBucket = AggregationsRangeBucketKeys |
    { [property: string]: AggregationsAggregate }

export type MappingTypesCoreRangeRangeProperty = MappingTypesCoreRangeLongRangeLongRangeProperty | MappingTypesCoreRangeIpRangeIpRangeProperty | MappingTypesCoreRangeIntegerRangeIntegerRangeProperty | MappingTypesCoreRangeFloatRangeFloatRangeProperty | MappingTypesCoreRangeDoubleRangeDoubleRangeProperty | MappingTypesCoreRangeDateRangeDateRangeProperty

export interface MappingTypesCoreRangeRangePropertyBase extends MappingTypesDocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  index?: boolean
}

export interface QueryDslTermLevelRangeRangeQuery extends QueryDslAbstractionsQueryQueryBase {
  gt?: double | DateMath
  gte?: double | DateMath
  lt?: double | DateMath
  lte?: double | DateMath
  relation?: QueryDslTermLevelRangeRangeRelation
  time_zone?: string
  from?: double | DateMath
  to?: double | DateMath
}

export type QueryDslTermLevelRangeRangeRelation = 'within' | 'contains' | 'intersects'

export interface RankEvalRankEvalHit {
  _id: Id
  _index: IndexName
  _type?: Type
  _score: double
}

export interface RankEvalRankEvalHitItem {
  hit: RankEvalRankEvalHit
  rating?: double
}

export interface RankEvalRankEvalMetric {
  precision?: RankEvalRankEvalMetricPrecision
  recall?: RankEvalRankEvalMetricRecall
  mean_reciprocal_rank?: RankEvalRankEvalMetricMeanReciprocalRank
  dcg?: RankEvalRankEvalMetricDiscountedCumulativeGain
  expected_reciprocal_rank?: RankEvalRankEvalMetricExpectedReciprocalRank
}

export interface RankEvalRankEvalMetricBase {
  k?: integer
}

export interface RankEvalRankEvalMetricDetail {
  metric_score: double
  unrated_docs: RankEvalUnratedDocument[]
  hits: RankEvalRankEvalHitItem[]
  metric_details: Record<string, Record<string, any>>
}

export interface RankEvalRankEvalMetricDiscountedCumulativeGain extends RankEvalRankEvalMetricBase {
  normalize?: boolean
}

export interface RankEvalRankEvalMetricExpectedReciprocalRank extends RankEvalRankEvalMetricBase {
  maximum_relevance: integer
}

export interface RankEvalRankEvalMetricMeanReciprocalRank extends RankEvalRankEvalMetricRatingTreshold {
}

export interface RankEvalRankEvalMetricPrecision extends RankEvalRankEvalMetricRatingTreshold {
  ignore_unlabeled?: boolean
}

export interface RankEvalRankEvalMetricRatingTreshold extends RankEvalRankEvalMetricBase {
  relevant_rating_threshold?: integer
}

export interface RankEvalRankEvalMetricRecall extends RankEvalRankEvalMetricRatingTreshold {
}

export interface RankEvalRankEvalQuery {
  query: QueryDslAbstractionsContainerQueryContainer
  size?: integer
}

export interface RankEvalRankEvalRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  search_type?: string
  body: {
    requests: RankEvalRankEvalRequestItem[]
    metric?: RankEvalRankEvalMetric
  }
}

export interface RankEvalRankEvalRequestItem {
  id: Id
  request?: RankEvalRankEvalQuery
  ratings: RankEvalDocumentRating[]
  template_id?: Id
  params?: Record<string, any>
}

export interface RankEvalRankEvalResponse extends ResponseBase {
  metric_score: double
  details: Record<Id, RankEvalRankEvalMetricDetail>
  failures: Record<string, any>
}

export interface QueryDslSpecializedRankFeatureRankFeatureFunction {
}

export interface MappingTypesCoreRankFeatureRankFeatureProperty extends MappingTypesPropertyBase {
  positive_score_impact?: boolean
  type: 'rank_feature'
}

export interface QueryDslSpecializedRankFeatureRankFeatureQuery extends QueryDslAbstractionsQueryQueryBase {
  function?: QueryDslSpecializedRankFeatureRankFeatureFunction
}

export interface MappingTypesCoreRankFeaturesRankFeaturesProperty extends MappingTypesPropertyBase {
  type: 'rank_features'
}

export interface AggregationsBucketRareTermsRareTermsAggregation extends AggregationsBucketBucketAggregationBase {
  exclude?: string | string[]
  field?: Field
  include?: string | string[] | AggregationsBucketTermsTermsInclude
  max_doc_count?: long
  missing?: AggregationsMissing
  precision?: double
  value_type?: string
}

export interface AggregationsRareTermsBucketKeys<TKey = unknown> {
}
export type AggregationsRareTermsBucket<TKey = unknown> = AggregationsRareTermsBucketKeys<TKey> |
    { [property: string]: AggregationsAggregate }

export interface AggregationsMetricRateRateAggregation extends AggregationsMetricFormatMetricAggregationBase {
  unit?: AggregationsBucketDateHistogramDateInterval
  mode?: AggregationsMetricRateRateMode
}

export type AggregationsMetricRateRateMode = 'sum' | 'value_count'

export interface XpackUsageRealmCacheUsage {
  size: long
}

export interface SecurityRealmInfo {
  name: Name
  type: string
}

export interface XpackUsageRealmUsage extends XpackUsageXPackUsage {
  name?: string[]
  order?: long[]
  size?: long[]
  cache?: XpackUsageRealmCacheUsage[]
  has_authorization_realms?: boolean[]
  has_default_username_pattern?: boolean[]
  has_truststore?: boolean[]
  is_authentication_delegated?: boolean[]
}

export interface IndicesRecoveryRecoveryBytes {
  percent: Percentage
  recovered?: ByteSize
  recovered_in_bytes: ByteSize
  reused?: ByteSize
  reused_in_bytes: ByteSize
  total?: ByteSize
  total_in_bytes: ByteSize
}

export interface IndicesRecoveryRecoveryFileDetails {
  length: long
  name: string
  recovered: long
}

export interface IndicesRecoveryRecoveryFiles {
  details?: IndicesRecoveryRecoveryFileDetails[]
  percent: Percentage
  recovered: long
  reused: long
  total: long
}

export interface IndicesRecoveryRecoveryIndexStatus {
  bytes?: IndicesRecoveryRecoveryBytes
  files: IndicesRecoveryRecoveryFiles
  size: IndicesRecoveryRecoveryBytes
  source_throttle_time?: Time
  source_throttle_time_in_millis: EpochMillis
  target_throttle_time?: Time
  target_throttle_time_in_millis: EpochMillis
  total_time_in_millis: EpochMillis
  total_time?: Time
}

export interface IndicesRecoveryRecoveryOrigin {
  hostname?: string
  host?: Host
  transport_address?: TransportAddress
  id?: Id
  ip?: Ip
  name?: Name
  bootstrap_new_history_uuid?: boolean
  repository?: Name
  snapshot?: Name
  version?: VersionString
  restoreUUID?: Uuid
  index?: IndexName
}

export interface IndicesRecoveryRecoveryStartStatus {
  check_index_time: long
  total_time_in_millis: string
}

export interface RecoveryStats {
  current_as_source: long
  current_as_target: long
  throttle_time?: string
  throttle_time_in_millis: long
}

export interface IndicesRecoveryRecoveryStatus {
  shards: IndicesRecoveryShardRecovery[]
}

export interface IndicesRecoveryRecoveryTranslogStatus {
  percent: Percentage
  recovered: long
  total: long
  total_on_start: long
  total_time?: string
  total_time_in_millis: EpochMillis
}

export interface IndicesRecoveryRecoveryVerifyIndex {
  check_index_time?: Time
  check_index_time_in_millis: EpochMillis
  total_time?: Time
  total_time_in_millis: EpochMillis
}

export type Refresh = boolean | RefreshOptions

export type RefreshOptions = 'wait_for'

export interface RefreshStats {
  external_total: long
  external_total_time_in_millis: long
  listeners: long
  total: long
  total_time?: string
  total_time_in_millis: long
}

export interface QueryDslTermLevelRegexpRegexpQuery extends QueryDslAbstractionsQueryQueryBase {
  flags?: string
  max_determinized_states?: integer
  value?: string
}

export interface AggregationsPipelineInferenceBucketRegressionInferenceOptions {
  results_field: Field
  num_top_feature_importance_values?: integer
}

export interface ReindexReindexDestination {
  index: IndexName
  op_type?: OpType
  pipeline?: string
  routing?: ReindexReindexRouting
  version_type?: VersionType
}

export interface ReindexRethrottleReindexNode extends SpecUtilsBaseNode {
  tasks: Record<TaskId, ReindexRethrottleReindexTask>
}

export interface ReindexReindexRequest extends RequestBase {
  refresh?: boolean
  requests_per_second?: long
  scroll?: Time
  slices?: long
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  require_alias?: boolean
  body: {
    conflicts?: Conflicts
    dest?: ReindexReindexDestination
    max_docs?: long
    script?: Script
    size?: long
    source?: ReindexReindexSource
  }
}

export interface ReindexReindexResponse extends ResponseBase {
  batches?: long
  created?: long
  deleted?: long
  failures?: BulkIndexByScrollFailure[]
  noops?: long
  retries?: Retries
  requests_per_second?: long
  slice_id?: integer
  task?: TaskId
  throttled_millis?: EpochMillis
  throttled_until_millis?: EpochMillis
  timed_out?: boolean
  took?: Time
  total?: long
  updated?: long
  version_conflicts?: long
}

export interface ReindexRethrottleReindexRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface ReindexRethrottleReindexRethrottleResponse extends ResponseBase {
  nodes: Record<string, ReindexRethrottleReindexNode>
}

export interface ReindexReindexRouting {
}

export interface ReindexReindexSource {
  index: Indices
  query?: QueryDslAbstractionsContainerQueryContainer
  remote?: ReindexRemoteSource
  size?: integer
  slice?: SlicedScroll
  sort?: SearchSortSort
  _source?: Fields
}

export interface ReindexRethrottleReindexStatus {
  batches: long
  created: long
  deleted: long
  noops: long
  requests_per_second: float
  retries: Retries
  throttled_millis: long
  throttled_until_millis: long
  total: long
  updated: long
  version_conflicts: long
}

export interface ReindexRethrottleReindexTask {
  action: string
  cancellable: boolean
  description: string
  id: long
  node: Name
  running_time_in_nanos: long
  start_time_in_millis: long
  status: ReindexRethrottleReindexStatus
  type: string
  headers: HttpHeaders
}

export type RelationName = string

export interface IndicesReloadSearchAnalyzersReloadDetails {
  index: string
  reloaded_analyzers: string[]
  reloaded_node_ids: string[]
}

export interface IndicesReloadSearchAnalyzersReloadSearchAnalyzersRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesReloadSearchAnalyzersReloadSearchAnalyzersResponse extends ResponseBase {
  reload_details: IndicesReloadSearchAnalyzersReloadDetails[]
  _shards: ShardStatistics
}

export interface NodesReloadSecureSettingsReloadSecureSettingsRequest extends RequestBase {
  node_id?: NodeIds
  timeout?: Time
  body?: {
    secure_settings_password?: Password
  }
}

export interface NodesReloadSecureSettingsReloadSecureSettingsResponse extends NodesNodesResponseBase {
  cluster_name: Name
  nodes: Record<string, NodesNodesStatsNodeStats | NodesReloadSecureSettingsNodeReloadException>
}

export interface ReindexRemoteSource {
  connect_timeout: Time
  host: Host
  username: Username
  password: Password
  socket_timeout: Time
}

export interface AnalysisTokenFiltersRemoveDuplicatesTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
}

export interface IlmRemovePolicyRemovePolicyRequest extends RequestBase {
  index: IndexName
}

export interface IlmRemovePolicyRemovePolicyResponse extends ResponseBase {
  failed_indexes: string[]
  has_failures: boolean
}

export interface IngestProcessorsRemoveProcessor extends IngestProcessorBase {
  field: Fields
  ignore_missing?: boolean
}

export interface IngestProcessorsRenameProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
}

export interface RenderSearchTemplateRenderSearchTemplateRequest extends RequestBase {
  body?: {
    file?: string
    params?: Record<string, any>
    source?: string
  }
}

export interface RenderSearchTemplateRenderSearchTemplateResponse extends ResponseBase {
  template_output: Record<string, any>
}

export interface RequestBase extends SpecUtilsCommonQueryParameters {
}

export interface RequestCacheStats {
  evictions: long
  hit_count: long
  memory_size?: string
  memory_size_in_bytes: long
  miss_count: long
}

export interface SearchRescoringRescore {
  query: SearchRescoringRescoreQuery
  window_size?: integer
}

export interface SearchRescoringRescoreQuery {
  rescore_query: QueryDslAbstractionsContainerQueryContainer
  query_weight?: double
  rescore_query_weight?: double
  score_mode?: SearchRescoringScoreMode
}

export interface ClusterClusterAllocationExplainReservedSize {
  node_id: Id
  path: string
  total: long
  shards: string[]
}

export interface IndicesResolveIndexResolveIndexAliasItem {
  name: Name
  indices: Indices
}

export interface IndicesResolveIndexResolveIndexDataStreamsItem {
  name: DataStreamName
  timestamp_field: Field
  backing_indices: Indices
}

export interface IndicesResolveIndexResolveIndexItem {
  name: Name
  aliases?: string[]
  attributes: string[]
  data_stream?: DataStreamName
}

export interface IndicesResolveIndexResolveIndexRequest extends RequestBase {
  name: Names
  expand_wildcards?: ExpandWildcards
}

export interface IndicesResolveIndexResolveIndexResponse extends ResponseBase {
  indices: IndicesResolveIndexResolveIndexItem[]
  aliases: IndicesResolveIndexResolveIndexAliasItem[]
  data_streams: IndicesResolveIndexResolveIndexDataStreamsItem[]
}

export type SecurityHasPrivilegesResourcePrivileges = Record<Name, SecurityHasPrivilegesPrivileges>

export interface ResponseBase {
}

export type WatcherResponseContentType = 'json' | 'yaml' | 'text'

export type Result = 'Error' | 'created' | 'updated' | 'deleted' | 'not_found' | 'noop'

export interface MlResultBucket {
  anomaly_score: double
  bucket_influencers: MlBucketInfluencer[]
  bucket_span: Time
  event_count: long
  initial_anomaly_score: double
  is_interim: boolean
  job_id: Id
  partition_scores?: MlPartitionScore[]
  processing_time_ms: double
  result_type: string
  timestamp: Time
}

export interface CcrResumeAutoFollowPatternResumeAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface CcrResumeAutoFollowPatternResumeAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface CcrResumeFollowIndexResumeFollowIndexRequest extends RequestBase {
  index: IndexName
  body?: {
    max_outstanding_read_requests?: long
    max_outstanding_write_requests?: long
    max_read_request_operation_count?: long
    max_read_request_size?: string
    max_retry_delay?: Time
    max_write_buffer_count?: long
    max_write_buffer_size?: string
    max_write_request_operation_count?: long
    max_write_request_size?: string
    read_poll_timeout?: Time
  }
}

export interface CcrResumeFollowIndexResumeFollowIndexResponse extends AcknowledgedResponseBase {
}

export interface Retries {
  bulk: long
  search: long
}

export interface IlmRetryRetryIlmRequest extends RequestBase {
  index: IndexName
}

export interface IlmRetryRetryIlmResponse extends AcknowledgedResponseBase {
}

export interface AggregationsBucketReverseNestedReverseNestedAggregation extends AggregationsBucketBucketAggregationBase {
  path?: Field
}

export interface AnalysisTokenFiltersReverseTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
}

export interface SecurityPutRoleMappingRoleMappingRuleBase {
}

export interface XpackUsageRoleMappingUsage {
  enabled: integer
  size: integer
}

export type SecurityRoleTemplate = SecurityInlineRoleTemplate | SecurityStoredRoleTemplate | SecurityInvalidRoleTemplate

export type SecurityRoleTemplateFormat = 'string' | 'json'

export interface RollupGetRollupCapabilitiesRollupCapabilities {
  rollup_jobs: RollupGetRollupCapabilitiesRollupCapabilitiesJob[]
}

export interface RollupGetRollupCapabilitiesRollupCapabilitiesJob {
  fields: Record<Field, Record<string, any>>
  index_pattern: string
  job_id: string
  rollup_index: string
}

export interface RollupRollupConfigurationRollupFieldMetric {
  field: Field
  metrics: RollupRollupConfigurationRollupMetric[]
}

export interface RollupRollupConfigurationRollupGroupings {
  date_histogram?: RollupRollupConfigurationDateHistogramRollupGrouping
  histogram?: RollupRollupConfigurationHistogramRollupGrouping
  terms?: RollupRollupConfigurationTermsRollupGrouping
}

export interface RollupGetRollupIndexCapabilitiesRollupIndexCapabilities {
  rollup_jobs: RollupGetRollupIndexCapabilitiesRollupIndexCapabilitiesJob[]
}

export interface RollupGetRollupIndexCapabilitiesRollupIndexCapabilitiesJob {
  fields: Record<Field, RollupGetRollupIndexCapabilitiesRollupIndexCapabilitiesJobField[]>
  index_pattern: string
  job_id: Id
  rollup_index: IndexName
}

export interface RollupGetRollupIndexCapabilitiesRollupIndexCapabilitiesJobField {
  agg: string
  time_zone?: string
  calendar_interval?: Time
}

export interface RollupGetRollupJobRollupJobConfiguration {
  cron: string
  groups: RollupRollupConfigurationRollupGroupings
  id: Id
  index_pattern: string
  metrics: RollupRollupConfigurationRollupFieldMetric[]
  page_size: long
  rollup_index: IndexName
  timeout: Time
}

export interface RollupGetRollupJobRollupJobInformation {
  config: RollupGetRollupJobRollupJobConfiguration
  stats: RollupGetRollupJobRollupJobStats
  status: RollupGetRollupJobRollupJobStatus
}

export interface RollupGetRollupJobRollupJobStats {
  documents_processed: long
  index_failures: long
  index_time_in_ms: long
  index_total: long
  pages_processed: long
  rollups_indexed: long
  search_failures: long
  search_time_in_ms: long
  search_total: long
  trigger_count: long
  processing_time_in_ms: long
  processing_total: long
}

export interface RollupGetRollupJobRollupJobStatus {
  current_position?: Record<string, any>
  job_state: RollupGetRollupJobIndexingJobState
  upgraded_doc_id?: boolean
}

export interface RollupGetRollupJobRollupJobTaskFailure {
  task_id: TaskId
  node_id: Id
  status: string
  reason: RollupGetRollupJobRollupJobTaskFailureReason
}

export interface RollupGetRollupJobRollupJobTaskFailureReason {
  type: string
  reason: string
}

export type RollupRollupConfigurationRollupMetric = 'min' | 'max' | 'sum' | 'avg' | 'value_count'

export interface RollupRollupRollupRequest extends RequestBase {
  stubb: integer
  stuba: integer
  body: {
    stub: integer
  }
}

export interface RollupRollupRollupResponse extends ResponseBase {
  stub: integer
}

export interface RollupRollupSearchRollupSearchRequest extends RequestBase {
  index: Indices
  type?: Type
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body: {
    aggs?: Record<string, AggregationsAggregationContainer>
    query?: QueryDslAbstractionsContainerQueryContainer
    size?: integer
  }
}

export interface RollupRollupSearchRollupSearchResponse<TDocument = unknown> extends ResponseBase {
}

export interface InfoRootNodeInfoRequest extends RequestBase {
}

export interface InfoRootNodeInfoResponse extends ResponseBase {
  cluster_name: string
  cluster_uuid: string
  name: string
  tagline: string
  version: ElasticsearchVersionInfo
}

export type Routing = string | number

export interface MappingMetaFieldsRoutingRoutingField {
  required: boolean
}

export type MlRuleAction = 'skip_result' | 'skip_model_update'

export interface MlRuleCondition {
  applies_to: MlAppliesTo
  operator: MlConditionOperator
  value: double
}

export type MlRuleFilterType = 'include' | 'exclude'

export interface MappingRuntimeFieldsRuntimeField {
  format?: string
  script?: Script
  type: MappingRuntimeFieldsRuntimeFieldType
}

export type MappingRuntimeFieldsRuntimeFieldType = 'boolean' | 'date' | 'double' | 'geo_point' | 'ip' | 'keyword' | 'long'

export interface ClusterClusterStatsRuntimeFieldTypesStats {
  name: Name
  count: integer
  index_count: integer
  scriptless_count: integer
  shadowed_count: integer
  lang: string[]
  lines_max: integer
  lines_total: integer
  chars_max: integer
  chars_total: integer
  source_max: integer
  source_total: integer
  doc_max: integer
  doc_total: integer
}

export type MappingRuntimeFieldsRuntimeFields = Record<Field, MappingRuntimeFieldsRuntimeField>

export interface XpackUsageRuntimeFieldsTypeUsage {
  chars_max: long
  chars_total: long
  count: long
  doc_max: long
  doc_total: long
  index_count: long
  lang: string[]
  lines_max: long
  lines_total: long
  name: Field
  scriptless_count: long
  shadowed_count: long
  source_max: long
  source_total: long
}

export interface XpackUsageRuntimeFieldsUsage extends XpackUsageXPackUsage {
  field_types: XpackUsageRuntimeFieldsTypeUsage[]
}

export interface GraphExploreSampleDiversity {
  field: Field
  max_docs_per_value: integer
}

export interface AggregationsBucketSamplerSamplerAggregation extends AggregationsBucketBucketAggregationBase {
  shard_size?: integer
}

export type AggregationsBucketDiversifiedSamplerSamplerAggregationExecutionHint = 'map' | 'global_ordinals' | 'bytes_hash'

export interface WatcherScheduleBase {
}

export interface WatcherScheduleContainer {
  cron?: WatcherCronExpression
  daily?: WatcherDailySchedule
  hourly?: WatcherHourlySchedule
  interval?: Time
  monthly?: WatcherTimeOfMonth[]
  weekly?: WatcherTimeOfWeek[]
  yearly?: WatcherTimeOfYear[]
}

export interface WatcherScheduleTriggerEvent {
  scheduled_time: DateString | string
  triggered_time?: DateString | string
}

export interface MlPostCalendarEventsScheduledEvent {
  calendar_id: Id
  description: string
  end_time: EpochMillis
  event_id: Id
  start_time: EpochMillis
}

export interface QueryDslCompoundFunctionScoreFunctionsScoreFunctionBase {
  filter?: QueryDslAbstractionsContainerQueryContainer
  weight?: double
}

export type SearchRescoringScoreMode = 'avg' | 'max' | 'min' | 'multiply' | 'total'

export interface SearchSortScoreSort {
  mode?: SearchSortSortMode
  order?: SearchSortSortOrder
}

export type Script = InlineScript | IndexedScript | string

export interface ScriptBase {
  lang?: string
  params?: Record<string, any>
}

export interface WatcherScriptCondition {
  lang: string
  params?: Record<string, any>
  source: string
}

export interface ScriptField {
  script: Script
}

export interface IngestProcessorsScriptProcessor extends IngestProcessorBase {
  id?: Id
  lang?: string
  params?: Record<string, any>
  source: string
}

export interface QueryDslSpecializedScriptScriptQuery extends QueryDslAbstractionsQueryQueryBase {
  script?: Script
}

export interface QueryDslCompoundFunctionScoreFunctionsScriptScoreFunction extends QueryDslCompoundFunctionScoreFunctionsScoreFunctionBase {
  script: Script
}

export interface QueryDslSpecializedScriptScoreScriptScoreQuery extends QueryDslAbstractionsQueryQueryBase {
  query?: QueryDslAbstractionsContainerQueryContainer
  script?: Script
}

export interface SearchSortScriptSort {
  order?: SearchSortSortOrder
  script: Script
  type?: string
}

export interface NodesNodesStatsScriptStats {
  cache_evictions: long
  compilations: long
}

export interface WatcherScriptTransform {
  lang: string
  params: Record<string, any>
}

export interface AggregationsBucketSignificantTermsHeuristicsScriptedHeuristic {
  script: Script
}

export interface AggregationsScriptedMetricAggregate extends AggregationsAggregateBase {
  value: any
}

export interface AggregationsMetricScriptedMetricScriptedMetricAggregation extends AggregationsMetricMetricAggregationBase {
  combine_script?: Script
  init_script?: Script
  map_script?: Script
  params?: Record<string, any>
  reduce_script?: Script
}

export type ScrollId = string

export interface ScrollScrollRequest extends RequestBase {
  scroll_id?: Id
  scroll?: Time
  rest_total_hits_as_int?: boolean
  total_hits_as_integer?: boolean
  body?: {
    scroll?: Time
    scroll_id: ScrollId
    rest_total_hits_as_int?: boolean
  }
}

export interface ScrollScrollResponse<TDocument = unknown> extends SearchSearchResponse<TDocument> {
}

export interface MappingTypesCoreSearchAsYouTypeSearchAsYouTypeProperty extends MappingTypesCorePropertyBase {
  analyzer?: string
  index?: boolean
  index_options?: MappingTypesCoreTextIndexOptions
  max_shingle_size?: integer
  norms?: boolean
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: MappingTermVectorOption
  type: 'search_as_you_type'
}

export interface WatcherSearchInput {
  extract?: string[]
  request: WatcherSearchInputRequestDefinition
  timeout?: Time
}

export interface WatcherSearchInputRequestBody {
  query: QueryDslAbstractionsContainerQueryContainer
}

export interface WatcherSearchInputRequestDefinition {
  body?: WatcherSearchInputRequestBody
  indices?: IndexName[]
  indices_options?: WatcherIndicesOptions
  search_type?: SearchType
  template?: SearchTemplateSearchTemplateRequest
  rest_total_hits_as_int?: boolean
}

export interface SearchProfileSearchProfile {
  collector: SearchProfileCollector[]
  query: SearchProfileQueryProfile[]
  rewrite_time: long
}

export interface SearchSearchRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  allow_partial_search_results?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  batched_reduce_size?: long
  ccs_minimize_roundtrips?: boolean
  default_operator?: DefaultOperator
  df?: string
  docvalue_fields?: Fields
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  max_concurrent_shard_requests?: long
  min_compatible_shard_node?: VersionString
  preference?: string
  pre_filter_shard_size?: long
  request_cache?: boolean
  routing?: Routing
  scroll?: Time
  search_type?: SearchType
  stats?: string[]
  stored_fields?: Fields
  suggest_field?: Field
  suggest_mode?: SuggestMode
  suggest_size?: long
  suggest_text?: string
  terminate_after?: long
  timeout?: Time
  track_total_hits?: boolean | integer
  track_scores?: boolean
  typed_keys?: boolean
  rest_total_hits_as_int?: boolean
  version?: boolean
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  seq_no_primary_term?: boolean
  q?: string
  size?: integer
  from?: integer
  sort?: string | string[]
  body?: {
    aggs?: Record<string, AggregationsAggregationContainer>
    aggregations?: Record<string, AggregationsAggregationContainer>
    collapse?: SearchCollapsingFieldCollapse
    explain?: boolean
    from?: integer
    highlight?: SearchHighlightingHighlight
    track_total_hits?: boolean | integer
    indices_boost?: Record<IndexName, double>[]
    docvalue_fields?: SearchSourceFilteringDocValueField | Field | SearchSourceFilteringDocValueField[]
    min_score?: double
    post_filter?: QueryDslAbstractionsContainerQueryContainer
    profile?: boolean
    query?: QueryDslAbstractionsContainerQueryContainer
    rescore?: SearchRescoringRescore | SearchRescoringRescore[]
    script_fields?: Record<string, ScriptField>
    search_after?: integer | string[]
    size?: integer
    slice?: SlicedScroll
    sort?: SearchSortSort
    _source?: boolean | Fields | SearchSourceFilteringSourceFilter
    fields?: Field | DateField[]
    suggest?: SearchSuggestersSuggestContainer | Record<string, SearchSuggestersSuggestContainer>
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    version?: boolean
    seq_no_primary_term?: boolean
    stored_fields?: Fields
    pit?: SearchPointInTimePointInTimeReference
    runtime_mappings?: MappingRuntimeFieldsRuntimeFields
    stats?: string[]
  }
}

export interface SearchSearchResponse<TDocument = unknown> extends ResponseBase {
  took: long
  timed_out: boolean
  _shards: ShardStatistics
  hits: SearchHitsHitsMetadata<TDocument>
  aggregations?: Record<AggregateName, AggregationsAggregate>
  _clusters?: ClusterStatistics
  documents?: TDocument[]
  fields?: Record<string, any>
  max_score?: double
  num_reduce_phases?: long
  profile?: SearchProfileProfile
  pit_id?: Id
  _scroll_id?: ScrollId
  suggest?: Record<SuggestionName, SearchSuggestersSuggest<TDocument>[]>
  terminated_early?: boolean
}

export interface SearchShardsSearchShardsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
  preference?: string
  routing?: Routing
}

export interface SearchShardsSearchShardsResponse extends ResponseBase {
  nodes: Record<string, NodesNodeAttributes>
  shards: NodesNodeShard[][]
  indices: Record<IndexName, SearchShardsShardStoreIndex>
}

export interface SearchStats {
  fetch_current: long
  fetch_time_in_millis: long
  fetch_total: long
  open_contexts?: long
  query_current: long
  query_time_in_millis: long
  query_total: long
  scroll_current: long
  scroll_time_in_millis: long
  scroll_total: long
  suggest_current: long
  suggest_time_in_millis: long
  suggest_total: long
  groups?: Record<string, SearchStats>
}

export interface SearchTemplateSearchTemplateRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  ccs_minimize_roundtrips?: boolean
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  preference?: string
  profile?: boolean
  routing?: Routing
  scroll?: Time
  search_type?: SearchType
  total_hits_as_integer?: boolean
  typed_keys?: boolean
  body: {
    id?: string
    params?: Record<string, any>
    source?: string
  }
}

export interface SearchTemplateSearchTemplateResponse<TDocument = unknown> extends ResponseBase {
  _shards: ShardStatistics
  timed_out: boolean
  took: integer
  hits: SearchHitsHitsMetadata<TDocument>
}

export interface WatcherSearchTransform {
  request: WatcherSearchInputRequestDefinition
  timeout: Time
}

export type SearchType = 'query_then_fetch' | 'dfs_query_then_fetch'

export interface SearchableSnapshotsClearCacheSearchableSnapshotsClearCacheRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SearchableSnapshotsClearCacheSearchableSnapshotsClearCacheResponse extends ResponseBase {
  stub: integer
}

export interface SearchableSnapshotsMountSearchableSnapshotsMountRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  storage?: string
  body: {
    index: IndexName
    renamed_index?: IndexName
    index_settings?: Record<string, any>
    ignore_index_settings?: string[]
  }
}

export interface SearchableSnapshotsMountSearchableSnapshotsMountResponse extends ResponseBase {
  snapshot: SearchableSnapshotsMountSearchableSnapshotsMountSnapshot
}

export interface SearchableSnapshotsMountSearchableSnapshotsMountSnapshot {
  snapshot: Name
  indices: Indices
  shards: ShardStatistics
}

export interface SearchableSnapshotsRepositoryStatsSearchableSnapshotsRepositoryStatsRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SearchableSnapshotsRepositoryStatsSearchableSnapshotsRepositoryStatsResponse extends ResponseBase {
  stub: integer
}

export interface SearchableSnapshotsStatsSearchableSnapshotsStatsRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SearchableSnapshotsStatsSearchableSnapshotsStatsResponse extends ResponseBase {
  stub: integer
}

export interface XpackUsageSearchableSnapshotsUsage extends XpackUsageXPackUsage {
  indices_count: integer
  full_copy_indices_count?: integer
  shared_cache_indices_count?: integer
}

export interface SecurityAuthenticateSecurityAuthenticateRequest extends RequestBase {
  body?: {
    stub: integer
  }
}

export interface SecurityAuthenticateSecurityAuthenticateResponse extends ResponseBase {
  authentication_realm: SecurityRealmInfo
  email?: string
  full_name?: Name
  lookup_realm: SecurityRealmInfo
  metadata: Record<string, any>
  roles: string[]
  username: Username
  enabled: boolean
  authentication_type: string
}

export interface SecurityChangePasswordSecurityChangePasswordRequest extends RequestBase {
  username?: Username
  refresh?: Refresh
  body: {
    password?: Password
  }
}

export interface SecurityChangePasswordSecurityChangePasswordResponse extends ResponseBase {
}

export interface SecurityClearApiKeyCacheSecurityClearApiKeyCacheRequest extends RequestBase {
  ids?: Ids
}

export interface SecurityClearApiKeyCacheSecurityClearApiKeyCacheResponse extends ResponseBase {
  _nodes: NodesNodeStatistics
  cluster_name: Name
  nodes: Record<string, SecurityClearApiKeyCacheClearApiKeyCacheNode>
}

export interface SecurityClearCachedPrivilegesSecurityClearCachedPrivilegesRequest extends RequestBase {
  application: Name
}

export interface SecurityClearCachedPrivilegesSecurityClearCachedPrivilegesResponse extends ResponseBase {
  _nodes: NodesNodeStatistics
  cluster_name: Name
  nodes: Record<string, SecurityClearCachedPrivilegesClearCachedPrivilegeNode>
}

export interface SecurityClearCachedRealmsSecurityClearCachedRealmsRequest extends RequestBase {
  realms: Names
  usernames?: string[]
}

export interface SecurityClearCachedRealmsSecurityClearCachedRealmsResponse extends ResponseBase {
  cluster_name: Name
  nodes: Record<string, SecuritySecurityNode>
  _nodes: NodesNodeStatistics
}

export interface SecurityClearCachedRolesSecurityClearCachedRolesRequest extends RequestBase {
  name: Names
}

export interface SecurityClearCachedRolesSecurityClearCachedRolesResponse extends ResponseBase {
  cluster_name: string
  nodes: Record<string, SecuritySecurityNode>
  _nodes: NodesNodeStatistics
}

export interface SecurityCreateApiKeySecurityCreateApiKeyRequest extends RequestBase {
  refresh?: Refresh
  body: {
    expiration?: Time
    name?: Name
    role_descriptors?: Record<string, SecurityCreateApiKeyApiKeyRole>
  }
}

export interface SecurityCreateApiKeySecurityCreateApiKeyResponse extends ResponseBase {
  api_key: string
  expiration?: long
  id: Id
  name: Name
}

export interface SecurityDeletePrivilegesSecurityDeletePrivilegesRequest extends RequestBase {
  application: Name
  name: Name
  refresh?: Refresh
}

export interface SecurityDeletePrivilegesSecurityDeletePrivilegesResponse extends DictionaryResponseBase<string, Record<string, SecurityDeletePrivilegesFoundUserPrivilege>> {
}

export interface SecurityDeleteRoleMappingSecurityDeleteRoleMappingRequest extends RequestBase {
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteRoleMappingSecurityDeleteRoleMappingResponse extends ResponseBase {
  found: boolean
}

export interface SecurityDeleteRoleSecurityDeleteRoleRequest extends RequestBase {
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteRoleSecurityDeleteRoleResponse extends ResponseBase {
  found: boolean
}

export interface SecurityDeleteUserSecurityDeleteUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
}

export interface SecurityDeleteUserSecurityDeleteUserResponse extends ResponseBase {
  found: boolean
}

export interface SecurityDisableUserSecurityDisableUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
}

export interface SecurityDisableUserSecurityDisableUserResponse extends ResponseBase {
  stub: integer
}

export interface SecurityEnableUserSecurityEnableUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
}

export interface SecurityEnableUserSecurityEnableUserResponse extends ResponseBase {
  stub: integer
}

export interface XpackUsageSecurityFeatureToggle {
  enabled: boolean
}

export interface SecurityGetApiKeySecurityGetApiKeyRequest extends RequestBase {
  id?: Id
  name?: Name
  owner?: boolean
  realm_name?: Name
  username?: Username
}

export interface SecurityGetApiKeySecurityGetApiKeyResponse extends ResponseBase {
  api_keys: SecurityGetApiKeyApiKeys[]
}

export interface SecurityGetBuiltinPrivilegesSecurityGetBuiltinPrivilegesRequest extends RequestBase {
}

export interface SecurityGetBuiltinPrivilegesSecurityGetBuiltinPrivilegesResponse extends ResponseBase {
  cluster: string[]
  index: Indices
}

export interface SecurityGetPrivilegesSecurityGetPrivilegesRequest extends RequestBase {
  application?: Name
  name?: Name
}

export interface SecurityGetPrivilegesSecurityGetPrivilegesResponse extends DictionaryResponseBase<string, Record<string, SecurityPutPrivilegesPrivilegesActions>> {
}

export interface SecurityGetRoleMappingSecurityGetRoleMappingRequest extends RequestBase {
  name?: Name
}

export interface SecurityGetRoleMappingSecurityGetRoleMappingResponse extends DictionaryResponseBase<string, SecurityXPackRoleMapping> {
}

export interface SecurityGetRoleSecurityGetRoleRequest extends RequestBase {
  name?: Name
}

export interface SecurityGetRoleSecurityGetRoleResponse extends DictionaryResponseBase<string, SecurityXPackRole> {
}

export interface SecurityGetTokenSecurityGetTokenRequest extends RequestBase {
  body: {
    grant_type?: SecurityAccessTokenGrantType
    scope?: string
    password?: Password
    kerberos_ticket?: string
    refresh_token?: string
    username?: Username
  }
}

export interface SecurityGetTokenSecurityGetTokenResponse extends ResponseBase {
  access_token: string
  expires_in: long
  scope?: string
  type: string
  refresh_token: string
  kerberos_authentication_response_token?: string
  authentication: SecurityGetTokenAuthenticatedUser
}

export interface SecurityGetUserPrivilegesSecurityGetUserPrivilegesRequest extends RequestBase {
  application?: Name
  priviledge?: Name
}

export interface SecurityGetUserPrivilegesSecurityGetUserPrivilegesResponse extends ResponseBase {
  applications: SecurityGetUserPrivilegesApplicationResourcePrivileges[]
  cluster: string[]
  global: SecurityGetUserPrivilegesGlobalPrivileges[]
  indices: SecurityGetUserPrivilegesUserIndicesPrivileges[]
  run_as: string[]
}

export interface SecurityGetUserSecurityGetUserRequest extends RequestBase {
  username?: Username | Username[]
}

export interface SecurityGetUserSecurityGetUserResponse extends DictionaryResponseBase<string, SecurityXPackUser> {
}

export interface SecurityGrantApiKeySecurityGrantApiKeyRequest extends RequestBase {
  body: {
    api_key: SecurityGrantApiKeyApiKey
    grant_type: SecurityGrantApiKeyApiKeyGrantType
    access_token?: string
    username?: Username
    password?: Password
  }
}

export interface SecurityGrantApiKeySecurityGrantApiKeyResponse extends ResponseBase {
  api_key: string
  id: Id
  name: Name
  expiration?: EpochMillis
}

export interface SecurityHasPrivilegesSecurityHasPrivilegesRequest extends RequestBase {
  user?: Name
  body: {
    application?: SecurityHasPrivilegesApplicationPrivilegesCheck[]
    cluster?: string[]
    index?: SecurityHasPrivilegesIndexPrivilegesCheck[]
  }
}

export interface SecurityHasPrivilegesSecurityHasPrivilegesResponse extends ResponseBase {
  application: SecurityHasPrivilegesApplicationsPrivileges
  cluster: Record<string, boolean>
  has_all_requested: boolean
  index: Record<IndexName, SecurityHasPrivilegesPrivileges>
  username: Username
}

export interface SecurityInvalidateApiKeySecurityInvalidateApiKeyRequest extends RequestBase {
  body: {
    id?: Id
    ids?: Id[]
    name?: Name
    owner?: boolean
    realm_name?: string
    username?: Username
  }
}

export interface SecurityInvalidateApiKeySecurityInvalidateApiKeyResponse extends ResponseBase {
  error_count: integer
  error_details?: ErrorCause[]
  invalidated_api_keys: string[]
  previously_invalidated_api_keys: string[]
}

export interface SecurityInvalidateTokenSecurityInvalidateTokenRequest extends RequestBase {
  body: {
    token?: string
    refresh_token?: string
    realm_name?: Name
    username?: Username
  }
}

export interface SecurityInvalidateTokenSecurityInvalidateTokenResponse extends ResponseBase {
  error_count: long
  error_details?: ErrorCause[]
  invalidated_tokens: long
  previously_invalidated_tokens: long
}

export interface SecuritySecurityNode {
  name: Name
}

export interface SecurityPutPrivilegesSecurityPutPrivilegesRequest extends RequestBase {
  refresh?: Refresh
  body: Record<string, Record<string, SecurityPutPrivilegesPrivilegesActions>>
}

export interface SecurityPutPrivilegesSecurityPutPrivilegesResponse extends DictionaryResponseBase<string, Record<string, SecurityPutPrivilegesPutPrivilegesStatus>> {
}

export interface SecurityPutRoleMappingSecurityPutRoleMappingRequest extends RequestBase {
  name: Name
  refresh?: Refresh
  body: {
    enabled?: boolean
    metadata?: Record<string, any>
    roles?: string[]
    rules?: SecurityPutRoleMappingRoleMappingRuleBase
    run_as?: string[]
  }
}

export interface SecurityPutRoleMappingSecurityPutRoleMappingResponse extends ResponseBase {
  created?: boolean
  role_mapping: SecurityPutRoleMappingStatus
}

export interface SecurityPutRoleSecurityPutRoleRequest extends RequestBase {
  name: Name
  refresh?: Refresh
  body: {
    applications?: SecurityPutRoleApplicationPrivileges[]
    cluster?: string[]
    global?: Record<string, any>
    indices?: SecurityPutRoleIndicesPrivileges[]
    metadata?: Record<string, any>
    run_as?: string[]
    transient_metadata?: SecurityTransientMetadata
  }
}

export interface SecurityPutRoleSecurityPutRoleResponse extends ResponseBase {
  role: SecurityPutRolePutRoleStatus
}

export interface SecurityPutUserSecurityPutUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
  body: {
    username?: Username
    email?: string | null
    full_name?: string | null
    metadata?: Record<string, any>
    password?: Password
    password_hash?: string
    roles?: string[]
    enabled?: boolean
  }
}

export interface SecurityPutUserSecurityPutUserResponse extends ResponseBase {
  created: boolean
}

export interface XpackUsageSecurityRolesDlsBitSetCacheUsage {
  count: integer
  memory: ByteSize
  memory_in_bytes: ulong
}

export interface XpackUsageSecurityRolesDlsUsage {
  bit_set_cache: XpackUsageSecurityRolesDlsBitSetCacheUsage
}

export interface XpackUsageSecurityRolesFileUsage {
  dls: boolean
  fls: boolean
  size: long
}

export interface XpackUsageSecurityRolesNativeUsage {
  dls: boolean
  fls: boolean
  size: long
}

export interface XpackUsageSecurityRolesUsage {
  native: XpackUsageSecurityRolesNativeUsage
  dls: XpackUsageSecurityRolesDlsUsage
  file: XpackUsageSecurityRolesFileUsage
}

export interface XpackUsageSecurityUsage extends XpackUsageXPackUsage {
  api_key_service: XpackUsageSecurityFeatureToggle
  anonymous: XpackUsageSecurityFeatureToggle
  audit: XpackUsageAuditUsage
  fips_140: XpackUsageSecurityFeatureToggle
  ipfilter: XpackUsageIpFilterUsage
  realms: Record<string, XpackUsageRealmUsage>
  role_mapping: Record<string, XpackUsageRoleMappingUsage>
  roles: XpackUsageSecurityRolesUsage
  ssl: XpackUsageSslUsage
  system_key?: XpackUsageSecurityFeatureToggle
  token_service: XpackUsageSecurityFeatureToggle
  operator_privileges: XpackUsageXPackUsage
}

export interface IndicesSegmentsSegment {
  attributes: Record<string, string>
  committed: boolean
  compound: boolean
  deleted_docs: long
  generation: integer
  memory_in_bytes: double
  search: boolean
  size_in_bytes: double
  num_docs: long
  version: VersionString
}

export interface SegmentsStats {
  count: integer
  doc_values_memory?: ByteSize
  doc_values_memory_in_bytes: integer
  file_sizes: Record<string, IndicesStatsShardFileSizeInfo>
  fixed_bit_set?: ByteSize
  fixed_bit_set_memory_in_bytes: integer
  index_writer_memory?: ByteSize
  index_writer_max_memory_in_bytes?: integer
  index_writer_memory_in_bytes: integer
  max_unsafe_auto_id_timestamp: integer
  memory?: ByteSize
  memory_in_bytes: integer
  norms_memory?: ByteSize
  norms_memory_in_bytes: integer
  points_memory?: ByteSize
  points_memory_in_bytes: integer
  stored_memory?: ByteSize
  stored_fields_memory_in_bytes: integer
  terms_memory_in_bytes: integer
  terms_memory?: ByteSize
  term_vectory_memory?: ByteSize
  term_vectors_memory_in_bytes: integer
  version_map_memory?: ByteSize
  version_map_memory_in_bytes: integer
}

export type SequenceNumber = integer

export interface AggregationsPipelineSerialDifferencingSerialDifferencingAggregation extends AggregationsPipelinePipelineAggregationBase {
  lag?: integer
}

export interface IngestProcessorsSetProcessor extends IngestProcessorBase {
  field: Field
  override?: boolean
  value: any
}

export interface IngestProcessorsSetSecurityUserProcessor extends IngestProcessorBase {
  field: Field
  properties?: string[]
}

export type MappingTypesSpecializedShapeShapeOrientation = 'right' | 'counterclockwise' | 'ccw' | 'left' | 'clockwise' | 'cw'

export interface MappingTypesSpecializedShapeShapeProperty extends MappingTypesDocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  orientation?: MappingTypesSpecializedShapeShapeOrientation
  type: 'shape'
}

export interface QueryDslSpecializedShapeShapeQuery extends QueryDslAbstractionsQueryQueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: QueryDslAbstractionsFieldLookupFieldLookup
  relation?: ShapeRelation
  shape?: QueryDslGeoShapeGeoShape
}

export type ShapeRelation = 'intersects' | 'disjoint' | 'within'

export type IngestProcessorsShapeType = 'geo_shape' | 'shape'

export interface IndicesStatsShardCommit {
  generation: integer
  id: Id
  num_docs: long
  user_data: Record<string, string>
}

export interface ShardFailure {
  index: IndexName
  node: string
  reason: ErrorCause
  shard: integer
  status?: string
}

export interface IndicesStatsShardFileSizeInfo {
  description: string
  size_in_bytes: long
}

export interface ClusterClusterHealthShardHealthStats {
  active_shards: integer
  initializing_shards: integer
  primary_active: boolean
  relocating_shards: integer
  status: Health
  unassigned_shards: integer
}

export interface IndicesStatsShardLease {
  id: Id
  retaining_seq_no: SequenceNumber
  timestamp: long
  source: string
}

export interface IndicesStatsShardPath {
  data_path: string
  is_custom_data_path: boolean
  state_path: string
}

export interface SearchProfileShardProfile {
  aggregations: SearchProfileAggregationProfile[]
  id: string
  searches: SearchProfileSearchProfile[]
}

export interface IndicesStatsShardQueryCache {
  cache_count: long
  cache_size: long
  evictions: long
  hit_count: long
  memory_size_in_bytes: long
  miss_count: long
  total_count: long
}

export interface IndicesRecoveryShardRecovery {
  id: long
  index: IndicesRecoveryRecoveryIndexStatus
  primary: boolean
  source: IndicesRecoveryRecoveryOrigin
  stage: string
  start?: IndicesRecoveryRecoveryStartStatus
  start_time?: DateString
  start_time_in_millis: EpochMillis
  stop_time?: DateString
  stop_time_in_millis: EpochMillis
  target: IndicesRecoveryRecoveryOrigin
  total_time?: DateString
  total_time_in_millis: EpochMillis
  translog: IndicesRecoveryRecoveryTranslogStatus
  type: Type
  verify_index: IndicesRecoveryRecoveryVerifyIndex
}

export interface IndicesStatsShardRetentionLeases {
  primary_term: long
  version: VersionNumber
  leases: IndicesStatsShardLease[]
}

export interface IndicesStatsShardRouting {
  node: string
  primary: boolean
  relocating_node?: string
  state: IndicesStatsShardRoutingState
}

export type IndicesStatsShardRoutingState = 'UNASSIGNED' | 'INITIALIZING' | 'STARTED' | 'RELOCATING'

export interface IndicesSegmentsShardSegmentRouting {
  node: string
  primary: boolean
  state: string
}

export interface IndicesStatsShardSequenceNumber {
  global_checkpoint: long
  local_checkpoint: long
  max_seq_no: SequenceNumber
}

export interface ShardStatistics {
  failed: uint
  successful: uint
  total: uint
  failures?: ShardFailure[]
  skipped?: uint
}

export interface IndicesStatsShardStats {
  commit: IndicesStatsShardCommit
  completion: CompletionStats
  docs: DocStats
  fielddata: FielddataStats
  flush: FlushStats
  get: GetStats
  indexing: IndexingStats
  merges: MergesStats
  shard_path: IndicesStatsShardPath
  query_cache: IndicesStatsShardQueryCache
  recovery: RecoveryStats
  refresh: RefreshStats
  request_cache: RequestCacheStats
  retention_leases: IndicesStatsShardRetentionLeases
  routing: IndicesStatsShardRouting
  search: SearchStats
  segments: SegmentsStats
  seq_no: IndicesStatsShardSequenceNumber
  store: StoreStats
  translog: TranslogStats
  warmer: WarmerStats
  bulk?: BulkStats
}

export interface IndicesShardStoresShardStore {
  allocation: IndicesShardStoresShardStoreAllocation
  allocation_id: Id
  attributes: Record<string, any>
  id: Id
  legacy_version: VersionNumber
  name: Name
  store_exception: IndicesShardStoresShardStoreException
  transport_address: TransportAddress
}

export type IndicesShardStoresShardStoreAllocation = 'primary' | 'replica' | 'unused'

export interface IndicesShardStoresShardStoreException {
  reason: string
  type: string
}

export interface SearchShardsShardStoreIndex {
  aliases?: Name[]
  filter?: QueryDslAbstractionsContainerQueryContainer
}

export interface IndicesShardStoresShardStoreWrapper {
  stores: IndicesShardStoresShardStore[]
}

export interface ShardsOperationResponseBase extends ResponseBase {
  _shards: ShardStatistics
}

export interface IndicesSegmentsShardsSegment {
  num_committed_segments: integer
  routing: IndicesSegmentsShardSegmentRouting
  num_search_segments: integer
  segments: Record<string, IndicesSegmentsSegment>
}

export interface AnalysisTokenFiltersShingleShingleTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  filler_token: string
  max_shingle_size: integer
  min_shingle_size: integer
  output_unigrams: boolean
  output_unigrams_if_no_shingles: boolean
  token_separator: string
}

export interface ShutdownDeleteNodeShutdownDeleteNodeRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ShutdownDeleteNodeShutdownDeleteNodeResponse extends ResponseBase {
  stub: boolean
}

export interface ShutdownGetNodeShutdownGetNodeRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ShutdownGetNodeShutdownGetNodeResponse extends ResponseBase {
  stub: boolean
}

export interface ShutdownPutNodeShutdownPutNodeRequest extends RequestBase {
  body: {
    stub: string
  }
}

export interface ShutdownPutNodeShutdownPutNodeResponse extends ResponseBase {
  stub: boolean
}

export interface AggregationsSignificantTermsAggregate<TKey = unknown> extends AggregationsMultiBucketAggregate<TKey> {
  bg_count: long
  doc_count: long
}

export interface AggregationsBucketSignificantTermsSignificantTermsAggregation extends AggregationsBucketBucketAggregationBase {
  background_filter?: QueryDslAbstractionsContainerQueryContainer
  chi_square?: AggregationsBucketSignificantTermsHeuristicsChiSquareHeuristic
  exclude?: string | string[]
  execution_hint?: AggregationsBucketTermsTermsAggregationExecutionHint
  field?: Field
  gnd?: AggregationsBucketSignificantTermsHeuristicsGoogleNormalizedDistanceHeuristic
  include?: string | string[]
  min_doc_count?: long
  mutual_information?: AggregationsBucketSignificantTermsHeuristicsMutualInformationHeuristic
  percentage?: AggregationsBucketSignificantTermsHeuristicsPercentageScoreHeuristic
  script_heuristic?: AggregationsBucketSignificantTermsHeuristicsScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
}

export interface AggregationsSignificantTermsBucketKeys<TKey = unknown> {
}
export type AggregationsSignificantTermsBucket<TKey = unknown> = AggregationsSignificantTermsBucketKeys<TKey> |
    { [property: string]: AggregationsAggregate }

export interface AggregationsBucketSignificantTextSignificantTextAggregation extends AggregationsBucketBucketAggregationBase {
  background_filter?: QueryDslAbstractionsContainerQueryContainer
  chi_square?: AggregationsBucketSignificantTermsHeuristicsChiSquareHeuristic
  exclude?: string | string[]
  execution_hint?: AggregationsBucketTermsTermsAggregationExecutionHint
  field?: Field
  filter_duplicate_text?: boolean
  gnd?: AggregationsBucketSignificantTermsHeuristicsGoogleNormalizedDistanceHeuristic
  include?: string | string[]
  min_doc_count?: long
  mutual_information?: AggregationsBucketSignificantTermsHeuristicsMutualInformationHeuristic
  percentage?: AggregationsBucketSignificantTermsHeuristicsPercentageScoreHeuristic
  script_heuristic?: AggregationsBucketSignificantTermsHeuristicsScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
  source_fields?: Fields
}

export type QueryDslFullTextSimpleQueryStringSimpleQueryStringFlags = 'NONE' | 'AND' | 'OR' | 'NOT' | 'PREFIX' | 'PHRASE' | 'PRECEDENCE' | 'ESCAPE' | 'WHITESPACE' | 'FUZZY' | 'NEAR' | 'SLOP' | 'ALL'

export interface QueryDslFullTextSimpleQueryStringSimpleQueryStringQuery extends QueryDslAbstractionsQueryQueryBase {
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_operator?: QueryDslOperator
  fields?: Fields
  flags?: QueryDslFullTextSimpleQueryStringSimpleQueryStringFlags | string
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_transpositions?: boolean
  lenient?: boolean
  minimum_should_match?: MinimumShouldMatch
  query?: string
  quote_field_suffix?: string
}

export interface IngestSimulatePipelineSimulatePipelineDocument {
  _id?: Id
  _index?: IndexName
  _source: any
}

export interface IngestSimulatePipelineSimulatePipelineRequest extends RequestBase {
  id?: Id
  verbose?: boolean
  body: {
    docs?: IngestSimulatePipelineSimulatePipelineDocument[]
    pipeline?: IngestPipeline
  }
}

export interface IngestSimulatePipelineSimulatePipelineResponse extends ResponseBase {
  docs: IngestSimulatePipelinePipelineSimulation[]
}

export interface WatcherSimulatedActions {
  actions: string[]
  all: WatcherSimulatedActions
  use_all: boolean
}

export interface AggregationsSingleBucketAggregateKeys extends AggregationsAggregateBase {
  doc_count: double
}
export type AggregationsSingleBucketAggregate = AggregationsSingleBucketAggregateKeys |
    { [property: string]: AggregationsAggregate }

export interface TransformPivotSingleGroupSource {
  field: Field
  script: Script
}

export type Size = 'Raw' | 'k' | 'm' | 'g' | 't' | 'p'

export interface MappingMetaFieldsSizeSizeField {
  enabled: boolean
}

export interface WatcherSlackActionResult {
  account?: string
  message: WatcherSlackMessage
}

export interface WatcherSlackAttachment {
  author_icon?: string
  author_link?: string
  author_name: string
  color?: string
  fallback?: string
  fields?: WatcherSlackAttachmentField[]
  footer?: string
  footer_icon?: string
  image_url?: string
  pretext?: string
  text?: string
  thumb_url?: string
  title: string
  title_link?: string
  ts?: DateString
}

export interface WatcherSlackAttachmentField {
  short: boolean
  title: string
  value: string
}

export interface WatcherSlackDynamicAttachment {
  attachment_template: WatcherSlackAttachment
  list_path: string
}

export interface WatcherSlackMessage {
  attachments: WatcherSlackAttachment[]
  dynamic_attachments?: WatcherSlackDynamicAttachment
  from: string
  icon?: string
  text: string
  to: string[]
}

export interface SlicedScroll {
  field?: Field
  id: integer
  max: integer
}

export interface XpackUsageSlmUsage extends XpackUsageXPackUsage {
  policy_count?: integer
  policy_stats?: XpackUsageSnapshotLifecycleStats
}

export interface SearchSuggestersPhraseSuggesterSmoothingModelSmoothingModelContainer {
  laplace?: SearchSuggestersPhraseSuggesterSmoothingModelLaplaceSmoothingModel
  linear_interpolation?: SearchSuggestersPhraseSuggesterSmoothingModelLinearInterpolationSmoothingModel
  stupid_backoff?: SearchSuggestersPhraseSuggesterSmoothingModelStupidBackoffSmoothingModel
}

export interface SnapshotCloneSnapshotCloneRequest extends RequestBase {
  repository: Name
  snapshot: Name
  target_snapshot: Name
  master_timeout?: Time
  timeout?: Time
  body: {
    indices: string
  }
}

export interface SnapshotCloneSnapshotCloneResponse extends AcknowledgedResponseBase {
}

export interface SnapshotCreateRepositorySnapshotCreateRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
  verify?: boolean
  body: {
    repository?: SnapshotSnapshotRepository
    type: string
    settings: SnapshotSnapshotRepositorySettings
  }
}

export interface SnapshotCreateRepositorySnapshotCreateRepositoryResponse extends AcknowledgedResponseBase {
}

export interface SnapshotCreateSnapshotCreateRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  body?: {
    ignore_unavailable?: boolean
    include_global_state?: boolean
    indices?: Indices
    metadata?: Record<string, any>
    partial?: boolean
  }
}

export interface SnapshotCreateSnapshotCreateResponse extends ResponseBase {
  accepted?: boolean
  snapshot?: SnapshotSnapshotInfo
}

export interface SnapshotDeleteRepositorySnapshotDeleteRepositoryRequest extends RequestBase {
  repository: Names
  master_timeout?: Time
  timeout?: Time
}

export interface SnapshotDeleteRepositorySnapshotDeleteRepositoryResponse extends AcknowledgedResponseBase {
}

export interface SnapshotDeleteSnapshotDeleteRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
}

export interface SnapshotDeleteSnapshotDeleteResponse extends AcknowledgedResponseBase {
}

export interface SnapshotGetRepositorySnapshotGetRepositoryRequest extends RequestBase {
  repository?: Names
  local?: boolean
  master_timeout?: Time
}

export interface SnapshotGetRepositorySnapshotGetRepositoryResponse extends DictionaryResponseBase<string, SnapshotSnapshotRepository> {
}

export interface SnapshotGetSnapshotGetRequest extends RequestBase {
  repository: Name
  snapshot: Names
  ignore_unavailable?: boolean
  master_timeout?: Time
  verbose?: boolean
  index_details?: boolean
  human?: boolean
}

export interface SnapshotGetSnapshotGetResponse extends ResponseBase {
  responses?: SnapshotGetSnapshotResponseItem[]
  snapshots?: SnapshotSnapshotInfo[]
}

export interface SnapshotSnapshotIndexDetails {
  shard_count: integer
  size?: ByteSize
  size_in_bytes: long
  max_segments_per_shard: long
}

export interface SnapshotSnapshotIndexStats {
  shards: Record<string, SnapshotSnapshotShardsStatus>
  shards_stats: SnapshotSnapshotShardsStats
  stats: SnapshotSnapshotStats
}

export interface SnapshotSnapshotInfo {
  data_streams: string[]
  duration?: Time
  duration_in_millis?: EpochMillis
  end_time?: Time
  end_time_in_millis?: EpochMillis
  failures?: SnapshotSnapshotShardFailure[]
  include_global_state?: boolean
  indices: IndexName[]
  index_details?: Record<IndexName, SnapshotSnapshotIndexDetails>
  metadata?: Record<string, any>
  reason?: string
  snapshot: Name
  shards?: ShardStatistics
  start_time?: Time
  start_time_in_millis?: EpochMillis
  state?: string
  uuid: Uuid
  version?: VersionString
  version_id?: VersionNumber
  feature_states?: SnapshotSnapshotInfoFeatureState[]
}

export interface SnapshotSnapshotInfoFeatureState {
  feature_name: string
  indices: Indices
}

export interface SlmSnapshotLifecycleConfig {
  ignore_unavailable?: boolean
  include_global_state?: boolean
  indices: Indices
}

export interface SlmSnapshotLifecycleInProgress {
  name: string
  start_time_millis: DateString
  state: string
  uuid: string
}

export interface SlmSnapshotLifecycleInvocationRecord {
  snapshot_name: string
  time: DateString
}

export interface SlmSnapshotLifecyclePolicy {
  config: SlmSnapshotLifecycleConfig
  name: string
  repository: string
  retention: SlmSnapshotRetentionConfiguration
  schedule: WatcherCronExpression
}

export interface SlmSnapshotLifecyclePolicyMetadata {
  in_progress?: SlmSnapshotLifecycleInProgress
  last_failure?: SlmSnapshotLifecycleInvocationRecord
  last_success?: SlmSnapshotLifecycleInvocationRecord
  modified_date?: DateString
  modified_date_millis: EpochMillis
  next_execution?: DateString
  next_execution_millis: EpochMillis
  policy: SlmSnapshotLifecyclePolicy
  version: VersionNumber
  stats: XpackUsageSnapshotLifecycleStats
}

export interface XpackUsageSnapshotLifecycleStats {
  retention_deletion_time?: DateString
  retention_deletion_time_millis?: EpochMillis
  retention_failed?: long
  retention_runs?: long
  retention_timed_out?: long
  policy?: Id
  total_snapshots_deleted?: long
  snapshots_deleted?: long
  total_snapshot_deletion_failures?: long
  snapshot_deletion_failures?: long
  total_snapshots_failed?: long
  snapshots_failed?: long
  total_snapshots_taken?: long
  snapshots_taken?: long
}

export interface SnapshotSnapshotRepository {
  type: string
  uuid?: Uuid
  settings: SnapshotSnapshotRepositorySettings
}

export interface SnapshotSnapshotRepositorySettings {
  chunk_size?: string
  compress?: string | boolean
  concurrent_streams?: string | integer
  location: string
  read_only?: string | boolean
  readonly?: string | boolean
}

export interface SnapshotGetSnapshotResponseItem {
  repository: Name
  snapshots?: SnapshotSnapshotInfo[]
  error?: ErrorCause
}

export interface SnapshotRestoreSnapshotRestore {
  indices: IndexName[]
  snapshot: string
  shards: ShardStatistics
}

export interface SnapshotRestoreSnapshotRestoreRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  body?: {
    ignore_index_settings?: string[]
    ignore_unavailable?: boolean
    include_aliases?: boolean
    include_global_state?: boolean
    index_settings?: IndicesPutSettingsIndicesPutSettingsRequest
    indices?: Indices
    partial?: boolean
    rename_pattern?: string
    rename_replacement?: string
  }
}

export interface SnapshotRestoreSnapshotRestoreResponse extends ResponseBase {
  snapshot: SnapshotRestoreSnapshotRestore
}

export interface SlmSnapshotRetentionConfiguration {
  expire_after: Time
  max_count: integer
  min_count: integer
}

export interface SnapshotSnapshotShardFailure {
  index: IndexName
  node_id: Id
  reason: string
  shard_id: Id
  status: string
}

export interface SnapshotSnapshotShardsStats {
  done: long
  failed: long
  finalizing: long
  initializing: long
  started: long
  total: long
}

export type SnapshotSnapshotShardsStatsStage = 'DONE' | 'FAILURE' | 'FINALIZE' | 'INIT' | 'STARTED'

export interface SnapshotSnapshotShardsStatsSummary {
  incremental: SnapshotSnapshotShardsStatsSummaryItem
  total: SnapshotSnapshotShardsStatsSummaryItem
  start_time_in_millis: long
  time_in_millis: long
}

export interface SnapshotSnapshotShardsStatsSummaryItem {
  file_count: long
  size_in_bytes: long
}

export interface SnapshotSnapshotShardsStatus {
  stage: SnapshotSnapshotShardsStatsStage
  stats: SnapshotSnapshotShardsStatsSummary
}

export interface SnapshotSnapshotStats {
  incremental: SnapshotFileCountSnapshotStats
  start_time_in_millis: long
  time_in_millis: long
  total: SnapshotFileCountSnapshotStats
}

export interface SnapshotSnapshotStatus {
  include_global_state: boolean
  indices: Record<string, SnapshotSnapshotIndexStats>
  repository: string
  shards_stats: SnapshotSnapshotShardsStats
  snapshot: string
  state: string
  stats: SnapshotSnapshotStats
  uuid: Uuid
}

export interface SnapshotStatusSnapshotStatusRequest extends RequestBase {
  repository?: Name
  snapshot?: Names
  ignore_unavailable?: boolean
  master_timeout?: Time
}

export interface SnapshotStatusSnapshotStatusResponse extends ResponseBase {
  snapshots: SnapshotSnapshotStatus[]
}

export interface SnapshotVerifyRepositorySnapshotVerifyRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
}

export interface SnapshotVerifyRepositorySnapshotVerifyRepositoryResponse extends ResponseBase {
  nodes: Record<string, SnapshotVerifyRepositoryCompactNodeInfo>
}

export type AnalysisLanguagesSnowballLanguage = 'Armenian' | 'Basque' | 'Catalan' | 'Danish' | 'Dutch' | 'English' | 'Finnish' | 'French' | 'German' | 'German2' | 'Hungarian' | 'Italian' | 'Kp' | 'Lovins' | 'Norwegian' | 'Porter' | 'Portuguese' | 'Romanian' | 'Russian' | 'Spanish' | 'Swedish' | 'Turkish'

export interface AnalysisTokenFiltersSnowballTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  language: AnalysisLanguagesSnowballLanguage
}

export type SearchSortSort = SearchSortSortCombinations | SearchSortSortCombinations[]

export type SearchSortSortCombinations = Field | SearchSortSortContainer | SearchSortSortOrder

export interface SearchSortSortContainerKeys {
  _score?: SearchSortScoreSort
  _doc?: SearchSortScoreSort
  _geo_distance?: SearchSortGeoDistanceSort
  _script?: SearchSortScriptSort
}
export type SearchSortSortContainer = SearchSortSortContainerKeys |
    { [property: string]: SearchSortFieldSort | SearchSortSortOrder }

export type SearchSortSortMode = 'min' | 'max' | 'sum' | 'avg' | 'median'

export type SearchSortSortOrder = 'asc' | 'desc' | '_doc'

export interface IngestProcessorsSortProcessor extends IngestProcessorBase {
  field: Field
  order: SearchSortSortOrder
  target_field: Field
}

export type SearchSortSortResults = long | double | string | null[]

export interface ExistsSourceSourceExistsRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

export type ExistsSourceSourceExistsResponse = boolean

export interface MappingMetaFieldsSourceSourceField {
  compress?: boolean
  compress_threshold?: string
  enabled: boolean
  excludes?: string[]
  includes?: string[]
}

export interface SearchSourceFilteringSourceFilter {
  excludes?: Fields
  includes?: Fields
  exclude?: Fields
  include?: Fields
}

export interface GetSourceSourceRequest extends GetGetRequest {
}

export interface GetSourceSourceResponse<TDocument = unknown> extends DictionaryResponseBase<Field, any> {
}

export interface QueryDslSpanContainingSpanContainingQuery extends QueryDslAbstractionsQueryQueryBase {
  big?: QueryDslSpanSpanQuery
  little?: QueryDslSpanSpanQuery
}

export interface QueryDslSpanFieldMaskingSpanFieldMaskingQuery extends QueryDslAbstractionsQueryQueryBase {
  field?: Field
  query?: QueryDslSpanSpanQuery
}

export interface QueryDslSpanFirstSpanFirstQuery extends QueryDslAbstractionsQueryQueryBase {
  end?: integer
  match?: QueryDslSpanSpanQuery
}

export interface QueryDslSpanGapSpanGapQuery extends QueryDslAbstractionsQueryQueryBase {
  field?: Field
  width?: integer
}

export interface QueryDslSpanMultiTermSpanMultiTermQuery extends QueryDslAbstractionsQueryQueryBase {
  match?: QueryDslAbstractionsContainerQueryContainer
}

export interface QueryDslSpanNearSpanNearQuery extends QueryDslAbstractionsQueryQueryBase {
  clauses?: QueryDslSpanSpanQuery[]
  in_order?: boolean
  slop?: integer
}

export interface QueryDslSpanNotSpanNotQuery extends QueryDslAbstractionsQueryQueryBase {
  dist?: integer
  exclude?: QueryDslSpanSpanQuery
  include?: QueryDslSpanSpanQuery
  post?: integer
  pre?: integer
}

export interface QueryDslSpanOrSpanOrQuery extends QueryDslAbstractionsQueryQueryBase {
  clauses?: QueryDslSpanSpanQuery[]
}

export interface QueryDslSpanSpanQuery extends QueryDslAbstractionsQueryQueryBase {
  span_containing?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanContainingSpanContainingQuery | string>
  field_masking_span?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanFieldMaskingSpanFieldMaskingQuery | string>
  span_first?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanFirstSpanFirstQuery | string>
  span_gap?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanGapSpanGapQuery | integer>
  span_multi?: QueryDslSpanMultiTermSpanMultiTermQuery
  span_near?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanNearSpanNearQuery | string>
  span_not?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanNotSpanNotQuery | string>
  span_or?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanOrSpanOrQuery | string>
  span_term?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanTermSpanTermQuery | string>
  span_within?: QueryDslAbstractionsQueryNamedQuery<QueryDslSpanWithinSpanWithinQuery | string>
}

export interface QueryDslSpanTermSpanTermQuery extends QueryDslAbstractionsQueryQueryBase {
  value: string
}

export interface QueryDslSpanWithinSpanWithinQuery extends QueryDslAbstractionsQueryQueryBase {
  big?: QueryDslSpanSpanQuery
  little?: QueryDslSpanSpanQuery
}

export interface IngestProcessorsSplitProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  preserve_trailing?: boolean
  separator: string
  target_field?: Field
}

export interface SqlQuerySqlSqlColumn {
  name: string
  type: string
}

export type SqlRow = any[]

export interface XpackUsageSqlUsage extends XpackUsageXPackUsage {
  features: Record<string, integer>
  queries: Record<string, XpackUsageQueryUsage>
}

export interface XpackUsageSslUsage {
  http: XpackUsageSecurityFeatureToggle
  transport: XpackUsageSecurityFeatureToggle
}

export interface AggregationsStandardDeviationBounds {
  lower?: double
  upper?: double
  lower_population?: double
  upper_population?: double
  lower_sampling?: double
  upper_sampling?: double
}

export interface AnalysisTokenizersStandardTokenizer extends AnalysisTokenizersTokenizerBase {
  max_token_length: integer
}

export interface LicenseStartBasicLicenseStartBasicLicenseRequest extends RequestBase {
  acknowledge?: boolean
}

export interface LicenseStartBasicLicenseStartBasicLicenseResponse extends AcknowledgedResponseBase {
  acknowledge: Record<string, string | string[]>
  basic_was_started: boolean
  error_message: string
}

export interface IlmStartStartIlmRequest extends RequestBase {
  body?: {
    stub: boolean
  }
}

export interface IlmStartStartIlmResponse extends AcknowledgedResponseBase {
}

export interface RollupStartRollupJobStartRollupJobRequest extends RequestBase {
  id: Id
}

export interface RollupStartRollupJobStartRollupJobResponse extends ResponseBase {
  started: boolean
}

export interface SlmStartStartSnapshotLifecycleManagementRequest extends RequestBase {
}

export interface SlmStartStartSnapshotLifecycleManagementResponse extends AcknowledgedResponseBase {
}

export interface TransformStartTransformStartTransformRequest extends RequestBase {
  transform_id: Name
  timeout?: Time
}

export interface TransformStartTransformStartTransformResponse extends AcknowledgedResponseBase {
}

export interface LicenseStartTrialLicenseStartTrialLicenseRequest extends RequestBase {
  acknowledge?: boolean
  type_query_string?: string
}

export interface LicenseStartTrialLicenseStartTrialLicenseResponse extends AcknowledgedResponseBase {
  error_message?: string
  acknowledged: boolean
  trial_was_started: boolean
  type: LicenseGetLicenseLicenseType
}

export interface AggregationsStatsAggregate extends AggregationsAggregateBase {
  count: double
  sum: double
  avg?: double
  max?: double
  min?: double
}

export interface AggregationsMetricStatsStatsAggregation extends AggregationsMetricFormatMetricAggregationBase {
}

export interface AggregationsPipelineStatsBucketStatsBucketAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export type WatcherStatus = 'success' | 'failure' | 'simulated' | 'throttled'

export interface AnalysisTokenFiltersStemmerOverrideTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  rules: string[]
  rules_path: string
}

export interface AnalysisTokenFiltersStemmerTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  language: string
}

export interface IlmMoveToStepStepKey {
  action: string
  name: string
  phase: string
}

export interface IlmStopStopIlmRequest extends RequestBase {
  body?: {
    stub: boolean
  }
}

export interface IlmStopStopIlmResponse extends AcknowledgedResponseBase {
}

export interface RollupStopRollupJobStopRollupJobRequest extends RequestBase {
  id: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface RollupStopRollupJobStopRollupJobResponse extends ResponseBase {
  stopped: boolean
}

export interface SlmStopStopSnapshotLifecycleManagementRequest extends RequestBase {
}

export interface SlmStopStopSnapshotLifecycleManagementResponse extends AcknowledgedResponseBase {
}

export interface AnalysisTokenFiltersStopStopTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  ignore_case?: boolean
  remove_trailing?: boolean
  stopwords: AnalysisStopWords
  stopwords_path?: string
}

export interface TransformStopTransformStopTransformRequest extends RequestBase {
  transform_id: Name
  allow_no_match?: boolean
  force?: boolean
  timeout?: Time
  wait_for_checkpoint?: boolean
  wait_for_completion?: boolean
}

export interface TransformStopTransformStopTransformResponse extends AcknowledgedResponseBase {
}

export type AnalysisStopWords = string | string[]

export interface StoreStats {
  size?: ByteSize
  size_in_bytes: integer
  reserved?: ByteSize
  reserved_in_bytes: integer
  total_data_set_size?: ByteSize
  total_data_set_size_in_bytes?: integer
}

export interface SecurityStoredRoleTemplate {
  template: SecurityStoredRoleTemplateId
  format?: SecurityRoleTemplateFormat
}

export interface SecurityStoredRoleTemplateId {
  id: string
}

export interface StoredScript {
  lang?: string
  source: string
}

export type SearchSuggestersTermSuggesterStringDistance = 'internal' | 'damerau_levenshtein' | 'levenshtein' | 'jaro_winkler' | 'ngram'

export interface IndicesStringFielddata {
  format: IndicesStringFielddataFormat
}

export type IndicesStringFielddataFormat = 'paged_bytes' | 'disabled'

export interface AggregationsStringStatsAggregate extends AggregationsAggregateBase {
  count: long
  min_length: integer
  max_length: integer
  avg_length: double
  entropy: double
  distribution?: Record<string, double>
}

export interface AggregationsMetricStringStatsStringStatsAggregation extends AggregationsMetricMetricAggregationBase {
  show_distribution?: boolean
}

export interface SearchSuggestersPhraseSuggesterSmoothingModelStupidBackoffSmoothingModel {
  discount: double
}

export interface SearchSuggestersSuggest<T = unknown> {
  length: integer
  offset: integer
  options: SearchSuggestersSuggestOption<T>[]
  text: string
}

export interface SearchSuggestersSuggestContainer {
  completion?: SearchSuggestersCompletionSuggesterCompletionSuggester
  phrase?: SearchSuggestersPhraseSuggesterPhraseSuggester
  prefix?: string
  regex?: string
  term?: SearchSuggestersTermSuggesterTermSuggester
  text?: string
}

export interface MappingTypesSpecializedCompletionSuggestContext {
  name: Name
  path?: Field
  type: string
  precision?: integer
}

export interface SearchSuggestersContextSuggesterSuggestContextQuery {
  boost?: double
  context: SearchSuggestersContextSuggesterContext
  neighbours?: Distance[] | integer[]
  precision?: Distance | integer
  prefix?: boolean
}

export interface SearchSuggestersCompletionSuggesterSuggestFuzziness {
  fuzziness: Fuzziness
  min_length: integer
  prefix_length: integer
  transpositions: boolean
  unicode_aware: boolean
}

export type SuggestMode = 'missing' | 'popular' | 'always'

export type SearchSuggestersSuggestOption<TDocument = unknown> = SearchSuggestersCompletionSuggestOption<TDocument> | SearchSuggestersPhraseSuggestOption | SearchSuggestersTermSuggestOption

export type SearchSuggestersTermSuggesterSuggestSort = 'score' | 'frequency'

export interface SearchSuggestersSuggesterBase {
  field: Field
  analyzer?: string
  size?: integer
}

export type SuggestionName = string

export interface AggregationsMetricSumSumAggregation extends AggregationsMetricFormatMetricAggregationBase {
}

export interface AggregationsPipelineSumBucketSumBucketAggregation extends AggregationsPipelinePipelineAggregationBase {
}

export type AnalysisTokenFiltersSynonymSynonymFormat = 'solr' | 'wordnet'

export interface AnalysisTokenFiltersSynonymSynonymGraphTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  expand: boolean
  format: AnalysisTokenFiltersSynonymSynonymFormat
  lenient: boolean
  synonyms: string[]
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export interface AnalysisTokenFiltersSynonymSynonymTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  expand: boolean
  format: AnalysisTokenFiltersSynonymSynonymFormat
  lenient: boolean
  synonyms: string[]
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export interface AggregationsMetricPercentilesTDigest {
  compression?: integer
}

export interface AggregationsTDigestPercentilesAggregate extends AggregationsAggregateBase {
  values: Record<string, double>
}

export interface AggregationsMetricTTestTTestAggregation extends AggregationsAggregation {
  a?: AggregationsMetricTTestTestPopulation
  b?: AggregationsMetricTTestTestPopulation
  type?: AggregationsMetricTTestTTestType
}

export type AggregationsMetricTTestTTestType = 'paired' | 'homoscedastic' | 'heteroscedastic'

export interface TaskListTasksTaskExecutingNode extends SpecUtilsBaseNode {
  tasks: Record<TaskId, TaskListTasksTaskState>
}

export type TaskId = string | integer

export interface TaskGetTaskTaskInfo {
  action: string
  cancellable: boolean
  children?: TaskGetTaskTaskInfo[]
  description?: string
  headers: HttpHeaders
  id: long
  node: string
  running_time_in_nanos: long
  start_time_in_millis: long
  status?: TaskListTasksTaskStatus
  type: string
  parent_task_id?: Id
}

export interface TaskListTasksTaskRetries {
  bulk: integer
  search: integer
}

export interface TaskListTasksTaskState {
  action: string
  cancellable: boolean
  description?: string
  headers: HttpHeaders
  id: long
  node: string
  parent_task_id?: TaskId
  running_time_in_nanos: long
  start_time_in_millis: long
  status?: TaskListTasksTaskStatus
  type: string
}

export interface TaskListTasksTaskStatus {
  batches: long
  canceled?: string
  created: long
  deleted: long
  noops: long
  failures?: string[]
  requests_per_second: float
  retries: TaskListTasksTaskRetries
  throttled?: Time
  throttled_millis: long
  throttled_until?: Time
  throttled_until_millis: long
  timed_out?: boolean
  took?: long
  total: long
  updated: long
  version_conflicts: long
}

export interface IndicesTemplateMapping {
  aliases: Record<IndexName, IndicesAlias>
  index_patterns: string[]
  mappings: MappingTypeMapping
  order: integer
  settings: Record<string, any>
  version?: VersionNumber
}

export interface QueryDslTermLevelTermTermQuery extends QueryDslAbstractionsQueryQueryBase {
  value?: string | float | boolean
}

export interface SearchSuggestersTermSuggestOption {
  text: string
  freq?: long
  score: double
}

export interface SearchSuggestersTermSuggesterTermSuggester extends SearchSuggestersSuggesterBase {
  lowercase_terms?: boolean
  max_edits?: integer
  max_inspections?: integer
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  prefix_length?: integer
  shard_size?: integer
  sort?: SearchSuggestersTermSuggesterSuggestSort
  string_distance?: SearchSuggestersTermSuggesterStringDistance
  suggest_mode?: SuggestMode
  text?: string
}

export interface SecurityGetUserPrivilegesTermUserPrivileges {
  apps: boolean
}

export interface TermvectorsTermVector {
  field_statistics: TermvectorsFieldStatistics
  terms: Record<string, TermvectorsTermVectorTerm>
}

export interface TermvectorsTermVectorFilter {
  max_doc_freq?: integer
  max_num_terms?: integer
  max_term_freq?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  min_term_freq?: integer
  min_word_length?: integer
}

export type MappingTermVectorOption = 'no' | 'yes' | 'with_offsets' | 'with_positions' | 'with_positions_offsets' | 'with_positions_offsets_payloads'

export interface TermvectorsTermVectorTerm {
  doc_freq?: integer
  score?: double
  term_freq: integer
  tokens: TermvectorsToken[]
  ttf?: integer
}

export interface TermvectorsTermVectorsRequest<TDocument = unknown> extends RequestBase {
  index: IndexName
  id?: Id
  type?: Type
  fields?: Fields
  field_statistics?: boolean
  offsets?: boolean
  payloads?: boolean
  positions?: boolean
  preference?: string
  realtime?: boolean
  routing?: Routing
  term_statistics?: boolean
  version?: VersionNumber
  version_type?: VersionType
  body?: {
    doc?: TDocument
    filter?: TermvectorsTermVectorFilter
    per_field_analyzer?: Record<Field, string>
  }
}

export interface TermvectorsTermVectorsResponse extends ResponseBase {
  found: boolean
  _id: Id
  _index: IndexName
  term_vectors?: Record<Field, TermvectorsTermVector>
  took: long
  _type?: Type
  _version: VersionNumber
}

export interface TermvectorsTermVectorsResult {
  found: boolean
  id: Id
  index: IndexName
  term_vectors: Record<Field, TermvectorsTermVector>
  took: long
  version: VersionNumber
}

export interface AggregationsTermsAggregate<TKey = unknown> extends AggregationsMultiBucketAggregate<TKey> {
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
}

export interface AggregationsBucketTermsTermsAggregation extends AggregationsBucketBucketAggregationBase {
  collect_mode?: AggregationsBucketTermsTermsAggregationCollectMode
  exclude?: string | string[]
  execution_hint?: AggregationsBucketTermsTermsAggregationExecutionHint
  field?: Field
  include?: string | string[] | AggregationsBucketTermsTermsInclude
  min_doc_count?: integer
  missing?: AggregationsMissing
  missing_bucket?: boolean
  value_type?: string
  order?: AggregationsBucketTermsTermsAggregationOrder
  script?: Script
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
}

export type AggregationsBucketTermsTermsAggregationCollectMode = 'depth_first' | 'breadth_first'

export type AggregationsBucketTermsTermsAggregationExecutionHint = 'map' | 'global_ordinals' | 'global_ordinals_hash' | 'global_ordinals_low_cardinality'

export type AggregationsBucketTermsTermsAggregationOrder = SearchSortSortOrder | Record<string, SearchSortSortOrder> | Record<string, SearchSortSortOrder>[]

export interface AggregationsBucketTermsTermsInclude {
  num_partitions: long
  partition: long
}

export interface QueryDslTermLevelTermsTermsQuery extends QueryDslAbstractionsQueryQueryBase {
  terms?: string[]
  index?: IndexName
  id?: Id
  path?: string
  routing?: Routing
}

export interface RollupRollupConfigurationTermsRollupGrouping {
  fields: Fields
}

export interface QueryDslTermLevelTermsSetTermsSetQuery extends QueryDslAbstractionsQueryQueryBase {
  minimum_should_match_field?: Field
  minimum_should_match_script?: Script
  terms?: string[]
}

export interface AggregationsMetricTTestTestPopulation {
  field: Field
  script?: Script
  filter?: QueryDslAbstractionsContainerQueryContainer
}

export interface MappingTypesCoreTextTextIndexPrefixes {
  max_chars: integer
  min_chars: integer
}

export interface MappingTypesCoreTextTextProperty extends MappingTypesCorePropertyBase {
  analyzer?: string
  boost?: double
  eager_global_ordinals?: boolean
  fielddata?: boolean
  fielddata_frequency_filter?: IndicesFielddataFrequencyFilter
  index?: boolean
  index_options?: MappingTypesCoreTextIndexOptions
  index_phrases?: boolean
  index_prefixes?: MappingTypesCoreTextTextIndexPrefixes
  norms?: boolean
  position_increment_gap?: integer
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: MappingTermVectorOption
  type: 'text'
}

export type QueryDslFullTextMultiMatchTextQueryType = 'best_fields' | 'most_fields' | 'cross_fields' | 'phrase' | 'phrase_prefix' | 'bool_prefix'

export type IndicesAnalyzeTextToAnalyze = string | string[]

export interface NodesNodesStatsThreadCountStats {
  active: long
  completed: long
  largest: long
  queue: long
  rejected: long
  threads: long
}

export interface NodesNodesStatsThreadStats {
  count: long
  peak_count: long
}

export type ThreadType = 'cpu' | 'wait' | 'block'

export interface QueryDslGeoThreeDimensionalPoint {
  lat: double
  lon: double
  z?: double
}

export interface WatcherAckWatchThrottleState {
  reason: string
  timestamp: DateString
}

export type Time = string | integer

export interface WatcherTimeOfDay {
  hour: integer[]
  minute: integer[]
}

export interface WatcherTimeOfMonth {
  at: string[]
  on: integer[]
}

export interface WatcherTimeOfWeek {
  at: string[]
  on: WatcherDay[]
}

export interface WatcherTimeOfYear {
  at: string[]
  int: WatcherMonth[]
  on: integer[]
}

export type TimeSpan = string

export type Timestamp = string

export interface MlTimingStats {
  average_bucket_processing_time_ms?: double
  bucket_count: long
  exponential_average_bucket_processing_time_ms?: double
  exponential_average_bucket_processing_time_per_hour_ms: double
  job_id: Id
  total_bucket_processing_time_ms: double
  maximum_bucket_processing_time_ms?: double
  minimum_bucket_processing_time_ms?: double
}

export interface TermvectorsToken {
  end_offset?: integer
  payload?: string
  position: integer
  start_offset?: integer
}

export type AnalysisTokenizersNGramTokenChar = 'letter' | 'digit' | 'whitespace' | 'punctuation' | 'symbol' | 'custom'

export interface MappingTypesSpecializedTokenCountTokenCountProperty extends MappingTypesDocValuesPropertyBase {
  analyzer?: string
  boost?: double
  index?: boolean
  null_value?: double
  enable_position_increments?: boolean
  type: 'token_count'
}

export interface IndicesAnalyzeTokenDetail {
  name: string
  tokens: IndicesAnalyzeExplainAnalyzeToken[]
}

export type AnalysisTokenFiltersTokenFilter = AnalysisTokenFiltersAsciiFoldingTokenFilter | AnalysisTokenFiltersCommonGramsTokenFilter | AnalysisTokenFiltersConditionTokenFilter | AnalysisTokenFiltersDelimitedPayloadDelimitedPayloadTokenFilter | AnalysisTokenFiltersEdgeNGramEdgeNGramTokenFilter | AnalysisTokenFiltersElisionTokenFilter | AnalysisTokenFiltersFingerprintTokenFilter | AnalysisTokenFiltersHunspellTokenFilter | AnalysisTokenFiltersCompoundWordHyphenationDecompounderTokenFilter | AnalysisTokenFiltersKeepTypesTokenFilter | AnalysisTokenFiltersKeepWordsTokenFilter | AnalysisTokenFiltersKeywordMarkerTokenFilter | AnalysisTokenFiltersKStemTokenFilter | AnalysisTokenFiltersLengthTokenFilter | AnalysisTokenFiltersLimitTokenCountTokenFilter | AnalysisTokenFiltersLowercaseTokenFilter | AnalysisTokenFiltersMultiplexerTokenFilter | AnalysisTokenFiltersNGramTokenFilter | AnalysisTokenFiltersNoriPartOfSpeechTokenFilter | AnalysisTokenFiltersPatternCaptureTokenFilter | AnalysisTokenFiltersPatternReplaceTokenFilter | AnalysisTokenFiltersPorterStemTokenFilter | AnalysisTokenFiltersPredicateTokenFilter | AnalysisTokenFiltersRemoveDuplicatesTokenFilter | AnalysisTokenFiltersReverseTokenFilter | AnalysisTokenFiltersShingleShingleTokenFilter | AnalysisTokenFiltersSnowballTokenFilter | AnalysisTokenFiltersStemmerOverrideTokenFilter | AnalysisTokenFiltersStemmerTokenFilter | AnalysisTokenFiltersStopStopTokenFilter | AnalysisTokenFiltersSynonymSynonymGraphTokenFilter | AnalysisTokenFiltersSynonymSynonymTokenFilter | AnalysisTokenFiltersTrimTokenFilter | AnalysisTokenFiltersTruncateTokenFilter | AnalysisTokenFiltersUniqueTokenFilter | AnalysisTokenFiltersUppercaseTokenFilter | AnalysisTokenFiltersWordDelimiterGraphWordDelimiterGraphTokenFilter | AnalysisTokenFiltersWordDelimiterWordDelimiterTokenFilter

export interface AnalysisTokenFiltersTokenFilterBase {
  type: string
  version?: VersionString
}

export type AnalysisTokenizersTokenizer = AnalysisTokenizersCharGroupTokenizer | AnalysisTokenizersNGramEdgeNGramTokenizer | AnalysisTokenizersKeywordTokenizer | AnalysisTokenizersLetterTokenizer | AnalysisTokenizersLowercaseTokenizer | AnalysisTokenizersNGramNGramTokenizer | AnalysisTokenizersNoriTokenizer | AnalysisTokenizersPathHierarchyTokenizer | AnalysisTokenizersStandardTokenizer | AnalysisTokenizersUaxEmailUrlTokenizer | AnalysisTokenizersWhitespaceTokenizer

export interface AnalysisTokenizersTokenizerBase {
  type: string
  version?: VersionString
}

export interface ClusterTombstone {
  index: ClusterTombstoneIndex
  delete_date?: DateString
  delete_date_in_millis: long
}

export interface ClusterTombstoneIndex {
  index_name: Name
  index_uuid: Uuid
}

export interface TextStructureFindStructureTopHit {
  count: long
  value: any
}

export interface AggregationsTopHitsAggregate extends AggregationsAggregateBase {
  hits: SearchHitsHitsMetadata<Record<string, any>>
}

export interface AggregationsMetricTopHitsTopHitsAggregation extends AggregationsMetricMetricAggregationBase {
  docvalue_fields?: Fields
  explain?: boolean
  from?: integer
  highlight?: SearchHighlightingHighlight
  script_fields?: Record<string, ScriptField>
  size?: integer
  sort?: SearchSortSort
  _source?: boolean | SearchSourceFilteringSourceFilter | Fields
  stored_fields?: Fields
  track_scores?: boolean
  version?: boolean
  seq_no_primary_term?: boolean
}

export interface AggregationsTopMetrics {
  sort: long | double | string[]
  metrics: Record<string, long | double | string>
}

export interface AggregationsTopMetricsAggregate extends AggregationsAggregateBase {
  top: AggregationsTopMetrics[]
}

export interface AggregationsMetricTopMetricsTopMetricsAggregation extends AggregationsMetricMetricAggregationBase {
  metrics?: AggregationsMetricTopMetricsTopMetricsValue | AggregationsMetricTopMetricsTopMetricsValue[]
  size?: integer
  sort?: SearchSortSort
}

export interface AggregationsMetricTopMetricsTopMetricsValue {
  field: Field
}

export interface NodesNodesStatsTotalFileSystemStats {
  available: string
  available_in_bytes: long
  free: string
  free_in_bytes: long
  total: string
  total_in_bytes: long
}

export interface SearchHitsTotalHits {
  relation: SearchHitsTotalHitsRelation
  value: long
}

export type SearchHitsTotalHitsRelation = 'eq' | 'gte'

export interface WatcherTransform {
}

export interface TransformGetTransformStatsTransformCheckpointStats {
  checkpoint: long
  checkpoint_progress?: TransformGetTransformStatsTransformProgress
  timestamp?: DateString
  timestamp_millis: EpochMillis
  time_upper_bound?: DateString
  time_upper_bound_millis?: EpochMillis
}

export interface TransformGetTransformStatsTransformCheckpointingInfo {
  changes_last_detected_at: long
  changes_last_detected_at_date_time?: DateString
  last: TransformGetTransformStatsTransformCheckpointStats
  next?: TransformGetTransformStatsTransformCheckpointStats
  operations_behind?: long
}

export interface WatcherTransformContainer {
  chain?: WatcherChainTransform
  script?: WatcherScriptTransform
  search?: WatcherSearchTransform
}

export interface TransformTransformDestination {
  index: IndexName
  pipeline?: string
}

export interface TransformGetTransformStatsTransformIndexerStats {
  documents_indexed: long
  documents_processed: long
  exponential_avg_checkpoint_duration_ms: double
  exponential_avg_documents_indexed: double
  exponential_avg_documents_processed: double
  index_failures: long
  index_time_in_ms: long
  index_total: long
  pages_processed: long
  processing_time_in_ms: long
  processing_total: long
  search_failures: long
  search_time_in_ms: long
  search_total: long
  trigger_count: long
}

export interface TransformPivotTransformPivot {
  aggregations: Record<string, AggregationsAggregationContainer>
  group_by: Record<string, TransformPivotSingleGroupSource>
  max_page_search_size?: integer
}

export interface TransformGetTransformStatsTransformProgress {
  docs_indexed: long
  docs_processed: long
  docs_remaining: long
  percent_complete: double
  total_docs: long
}

export interface TransformTransformSource {
  index: Indices
  query: QueryDslAbstractionsContainerQueryContainer
}

export interface TransformGetTransformStatsTransformStats {
  checkpointing: TransformGetTransformStatsTransformCheckpointingInfo
  id: Id
  node?: NodesNodeAttributes
  reason?: string
  state: string
  stats: TransformGetTransformStatsTransformIndexerStats
}

export interface TransformTransformSyncContainer {
  time: TransformTransformTimeSync
}

export interface TransformTransformTimeSync {
  delay: Time
  field: Field
}

export interface SecurityTransientMetadata {
  enabled: boolean
}

export interface SqlTranslateSqlTranslateSqlRequest extends RequestBase {
  body: {
    fetch_size?: integer
    filter?: QueryDslAbstractionsContainerQueryContainer
    query: string
    time_zone?: string
  }
}

export interface SqlTranslateSqlTranslateSqlResponse extends ResponseBase {
  size: long
  _source: boolean | Fields | SearchSourceFilteringSourceFilter
  fields: Record<Field, string>[]
  sort: SearchSortSort
}

export interface TranslogStats {
  earliest_last_modified_age: long
  operations: long
  size?: string
  size_in_bytes: long
  uncommitted_operations: integer
  uncommitted_size?: string
  uncommitted_size_in_bytes: long
}

export type TransportAddress = string

export interface NodesNodesStatsTransportStats {
  rx_count: long
  rx_size: string
  rx_size_in_bytes: long
  server_open: integer
  tx_count: long
  tx_size: string
  tx_size_in_bytes: long
}

export interface WatcherTriggerContainer {
  schedule: WatcherScheduleContainer
}

export interface WatcherTriggerEventContainer {
  schedule: WatcherScheduleTriggerEvent
}

export interface WatcherExecuteWatchTriggerEventResult {
  manual: WatcherTriggerEventContainer
  triggered_time: DateString
  type: string
}

export interface IngestProcessorsTrimProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface AnalysisTokenFiltersTrimTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
}

export interface AnalysisTokenFiltersTruncateTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  length: integer
}

export interface QueryDslGeoTwoDimensionalPoint {
  lat: double
  lon: double
}

export type Type = string

export interface IndicesGetFieldMappingTypeFieldMappings {
  mappings: Record<Field, MappingMetaFieldsFieldMapping>
}

export interface MappingTypeMapping {
  all_field?: MappingMetaFieldsAllAllField
  date_detection?: boolean
  dynamic?: boolean | MappingDynamicMapping
  dynamic_date_formats?: string[]
  dynamic_templates?: Record<string, MappingDynamicTemplateDynamicTemplate> | Record<string, MappingDynamicTemplateDynamicTemplate>[]
  _field_names?: MappingMetaFieldsFieldNamesFieldNamesField
  index_field?: MappingMetaFieldsIndexIndexField
  _meta?: IndexMetaData
  numeric_detection?: boolean
  properties?: Record<PropertyName, MappingTypesProperty>
  _routing?: MappingMetaFieldsRoutingRoutingField
  _size?: MappingMetaFieldsSizeSizeField
  _source?: MappingMetaFieldsSourceSourceField
  runtime?: Record<string, MappingRuntimeFieldsRuntimeField>
}

export interface QueryDslTermLevelTypeTypeQuery extends QueryDslAbstractionsQueryQueryBase {
  value: string
}

export type Types = Type | Type[]

export interface AnalysisTokenizersUaxEmailUrlTokenizer extends AnalysisTokenizersTokenizerBase {
  max_token_length: integer
}

export interface ClusterClusterAllocationExplainUnassignedInformation {
  at: DateString
  last_allocation_status?: string
  reason: ClusterClusterAllocationExplainUnassignedInformationReason
  details?: string
  failed_allocation_attempts?: integer
  delayed?: boolean
  allocation_status?: string
}

export type ClusterClusterAllocationExplainUnassignedInformationReason = 'INDEX_CREATED' | 'CLUSTER_RECOVERED' | 'INDEX_REOPENED' | 'DANGLING_INDEX_IMPORTED' | 'NEW_INDEX_RESTORED' | 'EXISTING_INDEX_RESTORED' | 'REPLICA_ADDED' | 'ALLOCATION_FAILED' | 'NODE_LEFT' | 'REROUTE_CANCELLED' | 'REINITIALIZED' | 'REALLOCATED_REPLICA' | 'PRIMARY_FAILED' | 'FORCED_EMPTY_PRIMARY' | 'MANUAL_ALLOCATION'

export interface CcrUnfollowIndexUnfollowIndexRequest extends RequestBase {
  index: IndexName
}

export interface CcrUnfollowIndexUnfollowIndexResponse extends AcknowledgedResponseBase {
}

export interface AnalysisTokenFiltersUniqueTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  only_on_same_position: boolean
}

export interface RankEvalUnratedDocument {
  _id: Id
  _index: IndexName
}

export interface UpdateByQueryUpdateByQueryRequest extends RequestBase {
  index: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  conflicts?: Conflicts
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  from?: long
  ignore_unavailable?: boolean
  lenient?: boolean
  pipeline?: string
  preference?: string
  query_on_query_string?: string
  refresh?: boolean
  request_cache?: boolean
  requests_per_second?: long
  routing?: Routing
  scroll?: Time
  scroll_size?: long
  search_timeout?: Time
  search_type?: SearchType
  size?: long
  slices?: long
  sort?: string[]
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  stats?: string[]
  terminate_after?: long
  timeout?: Time
  version?: boolean
  version_type?: boolean
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  body?: {
    max_docs?: long
    query?: QueryDslAbstractionsContainerQueryContainer
    script?: Script
    slice?: SlicedScroll
    conflicts?: Conflicts
  }
}

export interface UpdateByQueryUpdateByQueryResponse extends ResponseBase {
  batches?: long
  failures?: BulkIndexByScrollFailure[]
  noops?: long
  deleted?: long
  requests_per_second?: float
  retries?: Retries
  task?: TaskId
  timed_out?: boolean
  took?: long
  total?: long
  updated?: long
  version_conflicts?: long
  throttled_millis?: ulong
  throttled_until_millis?: ulong
}

export interface UpdateByQueryRethrottleUpdateByQueryRethrottleNode extends SpecUtilsBaseNode {
  tasks: Record<TaskId, TaskGetTaskTaskInfo>
}

export interface UpdateByQueryRethrottleUpdateByQueryRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface UpdateByQueryRethrottleUpdateByQueryRethrottleResponse extends ResponseBase {
  nodes: Record<string, UpdateByQueryRethrottleUpdateByQueryRethrottleNode>
}

export interface UpdateUpdateRequest<TDocument = unknown, TPartialDocument = unknown> extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  lang?: string
  refresh?: Refresh
  require_alias?: boolean
  retry_on_conflict?: long
  routing?: Routing
  source_enabled?: boolean
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  body: {
    detect_noop?: boolean
    doc?: TPartialDocument
    doc_as_upsert?: boolean
    script?: Script
    scripted_upsert?: boolean
    _source?: boolean | SearchSourceFilteringSourceFilter
    upsert?: TDocument
  }
}

export interface UpdateUpdateResponse<TDocument = unknown> extends WriteResponseBase {
  get?: ExplainInlineGet<TDocument>
}

export interface TransformUpdateTransformUpdateTransformRequest extends RequestBase {
  transform_id: Name
  defer_validation?: boolean
  body: {
    description?: string
    dest?: TransformTransformDestination
    frequency?: Time
    source?: TransformTransformSource
    sync?: TransformTransformSyncContainer
  }
}

export interface TransformUpdateTransformUpdateTransformResponse extends ResponseBase {
  create_time: long
  create_time_date_time: DateString
  description: string
  dest: TransformTransformDestination
  frequency: Time
  id: Id
  pivot: TransformPivotTransformPivot
  source: TransformTransformSource
  sync: TransformTransformSyncContainer
  version: VersionString
}

export interface IngestProcessorsUppercaseProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface AnalysisTokenFiltersUppercaseTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
}

export type XpackUsageUrlConfig = XpackUsageBaseUrlConfig | XpackUsageKibanaUrlConfig

export interface IngestProcessorsUrlDecodeProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface XpackUsageUsageCount {
  active: long
  total: long
}

export interface IngestProcessorsPluginsUserAgentProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing: boolean
  options: IngestProcessorsPluginsUserAgentUserAgentProperty[]
  regex_file: string
  target_field: Field
}

export type IngestProcessorsPluginsUserAgentUserAgentProperty = 'NAME' | 'MAJOR' | 'MINOR' | 'PATCH' | 'OS' | 'OS_NAME' | 'OS_MAJOR' | 'OS_MINOR' | 'DEVICE' | 'BUILD'

export interface SecurityGetUserPrivilegesUserIndicesPrivileges {
  field_security?: SecurityGetUserPrivilegesFieldSecuritySettings
  names: string[]
  privileges: string[]
  query?: SecurityGetUserPrivilegesQueryUserPrivileges
  allow_restricted_indices: boolean
}

export interface SecurityGetTokenUserRealm {
  name: Name
  type: string
}

export type Username = string

export type Uuid = string

export interface AggregationsValueAggregate extends AggregationsAggregateBase {
  value: double
  value_as_string?: string
}

export interface AggregationsMetricValueCountValueCountAggregation extends AggregationsMetricFormattableMetricAggregation {
}

export type AggregationsMetricWeightedAverageValueType = 'string' | 'long' | 'double' | 'number' | 'date' | 'date_nanos' | 'ip' | 'numeric' | 'geo_point' | 'boolean'

export interface AggregationsBucketVariableWidthHistogramVariableWidthHistogramAggregation {
  field?: Field
  buckets?: integer
  shard_size?: integer
  initial_buffer?: integer
}

export interface XpackUsageVectorUsage extends XpackUsageXPackUsage {
  dense_vector_dims_avg_count: integer
  dense_vector_fields_count: integer
  sparse_vector_fields_count?: integer
}

export type VersionNumber = long

export interface MappingTypesCoreVersionVersionProperty extends MappingTypesDocValuesPropertyBase {
  type: 'version'
}

export type VersionString = string

export type VersionType = 'internal' | 'external' | 'external_gte' | 'force'

export interface ClusterVotingConfigExclusionsItem {
  node_id: Id
  node_name: Name
}

export type WaitForActiveShardOptions = 'all'

export type WaitForActiveShards = integer | WaitForActiveShardOptions

export type WaitForEvents = 'immediate' | 'urgent' | 'high' | 'normal' | 'low' | 'languid'

export type WaitForStatus = 'green' | 'yellow' | 'red'

export interface WarmerStats {
  current: long
  total: long
  total_time?: string
  total_time_in_millis: long
}

export interface WatcherWatch {
  actions: Record<IndexName, WatcherAction>
  condition: WatcherConditionContainer
  input: WatcherInputContainer
  metadata?: Record<string, any>
  status?: WatcherAckWatchWatchStatus
  throttle_period?: string
  transform?: WatcherTransformContainer
  trigger: WatcherTriggerContainer
  throttle_period_in_millis?: long
}

export interface WatcherExecuteWatchWatchRecord {
  condition: WatcherConditionContainer
  input: WatcherInputContainer
  messages: string[]
  metadata: Record<string, any>
  node: string
  result: WatcherExecuteWatchExecutionResult
  state: WatcherExecuteWatchActionExecutionState
  trigger_event: WatcherExecuteWatchTriggerEventResult
  user: string
  watch_id: Id
}

export interface WatcherStatsWatchRecordQueuedStats {
  execution_time: DateString
}

export interface WatcherStatsWatchRecordStats extends WatcherStatsWatchRecordQueuedStats {
  execution_phase: WatcherStatsExecutionPhase
  triggered_time: DateString
  executed_actions?: string[]
  watch_id: Id
  watch_record_id: Id
}

export interface WatcherAckWatchWatchStatus {
  actions: Record<IndexName, WatcherAckWatchActionStatus>
  last_checked?: DateString
  last_met_condition?: DateString
  state: WatcherAckWatchActivationState
  version: VersionNumber
  execution_state?: string
}

export interface WatcherAckWatchWatcherAckWatchRequest extends RequestBase {
  watch_id: Name
  action_id?: Names
}

export interface WatcherAckWatchWatcherAckWatchResponse extends ResponseBase {
  status: WatcherAckWatchWatchStatus
}

export interface XpackUsageWatcherActionTotalsUsage {
  total: long
  total_time_in_ms: long
}

export interface XpackUsageWatcherActionsUsage {
  actions: Record<Name, XpackUsageWatcherActionTotalsUsage>
}

export interface WatcherActivateWatchWatcherActivateWatchRequest extends RequestBase {
  watch_id: Name
}

export interface WatcherActivateWatchWatcherActivateWatchResponse extends ResponseBase {
  status: WatcherActivateWatchActivationStatus
}

export interface WatcherExecuteWatchWatcherExecuteWatchRequest extends RequestBase {
  id?: Id
  debug?: boolean
  body?: {
    action_modes?: Record<string, WatcherActionExecutionMode>
    alternative_input?: Record<string, any>
    ignore_condition?: boolean
    record_execution?: boolean
    simulated_actions?: WatcherSimulatedActions
    trigger_data?: WatcherScheduleTriggerEvent
    watch?: WatcherWatch
  }
}

export interface WatcherExecuteWatchWatcherExecuteWatchResponse extends ResponseBase {
  _id: Id
  watch_record: WatcherExecuteWatchWatchRecord
}

export type WatcherStatsWatcherMetric = '_all' | 'queued_watches' | 'current_watches' | 'pending_watches'

export interface WatcherStatsWatcherNodeStats {
  current_watches?: WatcherStatsWatchRecordStats[]
  execution_thread_pool: WatcherStatsExecutionThreadPool
  queued_watches?: WatcherStatsWatchRecordQueuedStats[]
  watch_count: long
  watcher_state: WatcherStatsWatcherState
  node_id: Id
}

export interface WatcherPutWatchWatcherPutWatchRequest extends RequestBase {
  id: Id
  active?: boolean
  if_primary_term?: long
  if_sequence_number?: long
  version?: VersionNumber
  body?: {
    actions?: Record<string, WatcherAction>
    condition?: WatcherConditionContainer
    input?: WatcherInputContainer
    metadata?: Record<string, any>
    throttle_period?: string
    transform?: WatcherTransformContainer
    trigger?: WatcherTriggerContainer
  }
}

export interface WatcherPutWatchWatcherPutWatchResponse extends ResponseBase {
  created: boolean
  _id: Id
  _primary_term: long
  _seq_no: SequenceNumber
  _version: VersionNumber
}

export interface WatcherQueryWatchesWatcherQueryWatchesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface WatcherQueryWatchesWatcherQueryWatchesResponse extends ResponseBase {
  stub: integer
}

export interface WatcherStartWatcherStartRequest extends RequestBase {
  body?: {
    stub: integer
  }
}

export interface WatcherStartWatcherStartResponse extends AcknowledgedResponseBase {
}

export type WatcherStatsWatcherState = 'stopped' | 'starting' | 'started' | 'stopping'

export interface WatcherStatsWatcherStatsRequest extends RequestBase {
  metric?: WatcherStatsWatcherMetric | WatcherStatsWatcherMetric[]
  emit_stacktraces?: boolean
}

export interface WatcherStatsWatcherStatsResponse extends ResponseBase {
  cluster_name: string
  manually_stopped: boolean
  stats: WatcherStatsWatcherNodeStats[]
  _nodes: NodesNodeStatistics
}

export interface WatcherStopWatcherStopRequest extends RequestBase {
  body?: {
    stub: integer
  }
}

export interface WatcherStopWatcherStopResponse extends AcknowledgedResponseBase {
}

export interface XpackUsageWatcherUsage extends XpackUsageXPackUsage {
  execution: XpackUsageWatcherActionsUsage
  watch: XpackUsageWatcherWatchUsage
  count: XpackUsageUsageCount
}

export interface XpackUsageWatcherWatchTriggerScheduleUsage extends XpackUsageUsageCount {
  cron: XpackUsageUsageCount
  _all: XpackUsageUsageCount
}

export interface XpackUsageWatcherWatchTriggerUsage {
  schedule?: XpackUsageWatcherWatchTriggerScheduleUsage
  _all: XpackUsageUsageCount
}

export interface XpackUsageWatcherWatchUsage {
  input: Record<Name, XpackUsageUsageCount>
  condition?: Record<Name, XpackUsageUsageCount>
  action?: Record<Name, XpackUsageUsageCount>
  trigger: XpackUsageWatcherWatchTriggerUsage
}

export interface WatcherWebhookActionResult {
  request: WatcherHttpInputRequestResult
  response?: WatcherHttpInputResponseResult
}

export interface AggregationsMetricWeightedAverageWeightedAverageAggregation extends AggregationsAggregation {
  format?: string
  value?: AggregationsMetricWeightedAverageWeightedAverageValue
  value_type?: AggregationsMetricWeightedAverageValueType
  weight?: AggregationsMetricWeightedAverageWeightedAverageValue
}

export interface AggregationsMetricWeightedAverageWeightedAverageValue {
  field?: Field
  missing?: double
  script?: Script
}

export interface AnalysisTokenizersWhitespaceTokenizer extends AnalysisTokenizersTokenizerBase {
  max_token_length: integer
}

export interface MappingTypesCoreWildcardWildcardProperty extends MappingTypesDocValuesPropertyBase {
  type: 'wildcard'
}

export interface QueryDslTermLevelWildcardWildcardQuery extends QueryDslAbstractionsQueryQueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}

export interface AnalysisTokenFiltersWordDelimiterGraphWordDelimiterGraphTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  adjust_offsets: boolean
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: string[]
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: string[]
  type_table_path: string
}

export interface AnalysisTokenFiltersWordDelimiterWordDelimiterTokenFilter extends AnalysisTokenFiltersTokenFilterBase {
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: string[]
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: string[]
  type_table_path: string
}

export interface WriteResponseBase extends ResponseBase {
  _id: Id
  _index: IndexName
  _primary_term: long
  result: Result
  _seq_no: SequenceNumber
  _shards: ShardStatistics
  _type?: Type
  _version: VersionNumber
  forced_refresh?: boolean
  error?: ErrorCause
}

export interface XpackInfoXPackBuildInformation {
  date: DateString
  hash: string
}

export interface XpackInfoXPackFeature {
  available: boolean
  description?: string
  enabled: boolean
  native_code_info?: XpackInfoNativeCodeInformation
}

export interface XpackInfoXPackFeatures {
  aggregate_metric: XpackInfoXPackFeature
  analytics: XpackInfoXPackFeature
  ccr: XpackInfoXPackFeature
  data_frame?: XpackInfoXPackFeature
  data_science?: XpackInfoXPackFeature
  data_streams: XpackInfoXPackFeature
  data_tiers: XpackInfoXPackFeature
  enrich: XpackInfoXPackFeature
  eql: XpackInfoXPackFeature
  flattened?: XpackInfoXPackFeature
  frozen_indices: XpackInfoXPackFeature
  graph: XpackInfoXPackFeature
  ilm: XpackInfoXPackFeature
  logstash: XpackInfoXPackFeature
  ml: XpackInfoXPackFeature
  monitoring: XpackInfoXPackFeature
  rollup: XpackInfoXPackFeature
  runtime_fields?: XpackInfoXPackFeature
  searchable_snapshots: XpackInfoXPackFeature
  security: XpackInfoXPackFeature
  slm: XpackInfoXPackFeature
  spatial: XpackInfoXPackFeature
  sql: XpackInfoXPackFeature
  transform: XpackInfoXPackFeature
  vectors: XpackInfoXPackFeature
  voting_only: XpackInfoXPackFeature
  watcher: XpackInfoXPackFeature
}

export interface XpackInfoXPackInfoRequest extends RequestBase {
  categories?: string[]
}

export interface XpackInfoXPackInfoResponse extends ResponseBase {
  build: XpackInfoXPackBuildInformation
  features: XpackInfoXPackFeatures
  license: XpackInfoMinimalLicenseInformation
  tagline: string
}

export interface SecurityXPackRole {
  cluster: string[]
  indices: SecurityPutRoleIndicesPrivileges[]
  metadata: Record<string, any>
  run_as: string[]
  transient_metadata: SecurityTransientMetadata
  applications: SecurityPutRoleApplicationPrivileges[]
  role_templates?: SecurityRoleTemplate[]
}

export interface SecurityXPackRoleMapping {
  enabled: boolean
  metadata: Record<string, any>
  roles: string[]
  rules: SecurityPutRoleMappingRoleMappingRuleBase
}

export interface XpackUsageXPackUsage {
  available: boolean
  enabled: boolean
}

export interface XpackUsageXPackUsageRequest extends RequestBase {
  master_timeout?: Time
}

export interface XpackUsageXPackUsageResponse extends ResponseBase {
  aggregate_metric: XpackUsageXPackUsage
  analytics: XpackUsageAnalyticsUsage
  watcher: XpackUsageWatcherUsage
  ccr: XpackUsageCcrUsage
  data_frame?: XpackUsageXPackUsage
  data_science?: XpackUsageXPackUsage
  data_streams?: XpackUsageDataStreamsUsage
  data_tiers: XpackUsageDataTiersUsage
  enrich?: XpackUsageXPackUsage
  eql: XpackUsageEqlUsage
  flattened?: XpackUsageFlattenedUsage
  frozen_indices: XpackUsageFrozenIndicesUsage
  graph: XpackUsageXPackUsage
  ilm: XpackUsageIlmUsage
  logstash: XpackUsageXPackUsage
  ml: XpackUsageMachineLearningUsage
  monitoring: XpackUsageMonitoringUsage
  rollup: XpackUsageXPackUsage
  runtime_fields?: XpackUsageRuntimeFieldsUsage
  spatial: XpackUsageXPackUsage
  searchable_snapshots: XpackUsageSearchableSnapshotsUsage
  security: XpackUsageSecurityUsage
  slm: XpackUsageSlmUsage
  sql: XpackUsageSqlUsage
  transform: XpackUsageXPackUsage
  vectors: XpackUsageVectorUsage
  voting_only: XpackUsageXPackUsage
}

export interface SecurityXPackUser {
  email?: string
  full_name?: Name
  metadata: Record<string, any>
  roles: string[]
  username: Username
  enabled: boolean
}

export type QueryDslFullTextMultiMatchZeroTermsQuery = 'all' | 'none'

export type double = number

export type float = number

export type integer = number

export type long = number

export type uint = number

export type ulong = number

export interface SpecUtilsCommonCatQueryParameters {
  format?: string
  h?: Names
  help?: boolean
  local?: boolean
  master_timeout?: Time
  s?: string[]
  v?: boolean
}

export interface SpecUtilsArrayResponseBase<TRecord = unknown> {
}

export interface SpecUtilsAdditionalProperties<TKey = unknown, TValue = unknown> {
}

export interface SpecUtilsEmptyResponseBase {
}

export interface SpecUtilsCommonQueryParameters {
  error_trace?: boolean
  filter_path?: string | string[]
  human?: boolean
  pretty?: boolean
  source_query_string?: string
}

