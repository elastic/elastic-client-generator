@rest_spec_name("ml.get_datafeeds")
class GetDatafeedsRequest extends RequestBase {
  path_parts?: {
    datafeed_id?: Id;
  }
  query_parameters?: {
    allow_no_datafeeds?: boolean;
  }
  body?: {
  }
}
