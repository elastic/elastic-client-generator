@rest_spec_name('ml.open_job')
class OpenJobRequest extends RequestBase {
  path_parts?: {
    job_id: Id
  }
  query_parameters?: {}
  body?: {
    timeout?: Time
  }
}
