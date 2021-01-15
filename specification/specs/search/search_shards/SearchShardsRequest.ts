@rest_spec_name("search_shards")
class SearchShardsRequest extends RequestBase {
  path_parts?: {
    index?: Indices;
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    ignore_unavailable?: boolean;
    local?: boolean;
    preference?: string;
    routing?: Routing;
  }
  body?: {
  }
}
