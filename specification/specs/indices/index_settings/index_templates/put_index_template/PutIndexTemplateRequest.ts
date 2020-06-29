@rest_spec_name("indices.put_template")
class PutIndexTemplateRequest extends RequestBase {
	query_parameters: {
		create: boolean;
		flat_settings: boolean;
		include_type_name: boolean;
		master_timeout: Time;
		timeout: Time;
	}
	body: {
		aliases: Dictionary<IndexName, Alias>;
		index_patterns: string[];
		mappings: TypeMapping;
		order: integer;
		settings: Dictionary<string, any>;
		version: integer;
	}
}
