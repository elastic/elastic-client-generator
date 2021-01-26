/**
 * @type_stability stable
 */
@rest_spec_name('update')
class UpdateRequest<TDocument, TPartialDocument> extends RequestBase {
  path_parts?: {
    id: Id
    index: IndexName
    type?: TypeName
  }
  query_parameters?: {
    if_primary_term?: long
    if_seq_no?: long
    lang?: string
    refresh?: Refresh
    require_alias?: boolean
    retry_on_conflict?: long
    routing?: Routing
    source_enabled?: boolean
    timeout?: Time
    wait_for_active_shards?: string
    _source?: Union<boolean, Union<string, string[]>>
    _source_excludes?: Field[]
    _source_includes?: Field[]
  }
  body?: {
    detect_noop?: boolean
    /** @prop_serializer SourceFormatter`1 */
    doc?: TPartialDocument
    doc_as_upsert?: boolean
    script?: Script
    scripted_upsert?: boolean
    _source?: Union<boolean, SourceFilter>
    /** @prop_serializer SourceFormatter`1 */
    upsert?: TDocument
  }
}
