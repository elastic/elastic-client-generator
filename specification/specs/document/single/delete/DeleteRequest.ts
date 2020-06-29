@rest_spec_name("delete")
class DeleteRequest extends RequestBase {
	query_parameters: {
		if_primary_term: long;
		if_sequence_number: long;
		refresh: Refresh;
		routing: Routing;
		timeout: Time;
		version: long;
		version_type: VersionType;
		wait_for_active_shards: string;
	}
	body: {
	}
}
