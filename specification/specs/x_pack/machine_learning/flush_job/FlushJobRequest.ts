@rest_spec_name("ml.flush_job")
class FlushJobRequest extends RequestBase {
  path_parts?: {
    job_id: Id;
  }
  query_parameters?: {
    skip_time?: string;
  }
  body?: {
    advance_time?: Date;
    calc_interim?: boolean;
    end?: Date;
    start?: Date;
  }
}
