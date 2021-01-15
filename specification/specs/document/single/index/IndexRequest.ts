/**
 * @type_stability stable
 */
@rest_spec_name("index")
@class_serializer("IndexRequestFormatter`1")
class IndexRequest<TDocument> extends RequestBase {
  path_parts?: {
    id?: Id;
    index: IndexName;
    type?: TypeName;
  }
  query_parameters?: {
    if_primary_term?: long;
    if_seq_no?: long;
    op_type?: OpType;
    pipeline?: string;
    refresh?: Refresh;
    routing?: Routing;
    timeout?: Time;
    version?: long;
    version_type?: VersionType;
    wait_for_active_shards?: string;
    require_alias?: boolean;
  }
  body?: TDocument;
}
