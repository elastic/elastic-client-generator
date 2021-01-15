@rest_spec_name("ml.get_job_stats")
class GetJobStatsRequest extends RequestBase {
  path_parts?: {
    job_id?: Id;
  }
  query_parameters?: {
    allow_no_jobs?: boolean;
  }
  body?: {
  }
}
