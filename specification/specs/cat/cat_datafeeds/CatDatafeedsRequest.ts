@rest_spec_name("cat.ml_datafeeds")
class CatDatafeedsRequest extends CatRequestBase {
  path_parts?: {
    datafeed_id?: Id;
  }
  query_parameters?: {
    allow_no_datafeeds?: boolean;
  }
  body?: {
  }
}
