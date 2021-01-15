@rest_spec_name("explain")
class ExplainRequest extends RequestBase {
  path_parts?: {
    id: Id;
    index: IndexName;
    type?: TypeName;
  }
  query_parameters?: {
    analyzer?: string;
    analyze_wildcard?: boolean;
    default_operator?: DefaultOperator;
    df?: string;
    lenient?: boolean;
    preference?: string;
    query_on_query_string?: string;
    routing?: Routing;
    source_enabled?: boolean;
    source_excludes?: Field[];
    source_includes?: Field[];
    stored_fields?: Field[];
  }
  body?: {
    query?: QueryContainer;
  }
}
