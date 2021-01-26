@rest_spec_name('indices.delete')
class DeleteIndexRequest extends RequestBase {
  path_parts?: {
    index: Indices
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_unavailable?: boolean
    master_timeout?: Time
    timeout?: Time
  }
  body?: {}
}
