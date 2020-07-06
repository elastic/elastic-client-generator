using Nest.Common;
using Nest.CommonOptions;
using Nest.CommonAbstractions;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatIndicesRequest : RequestBase {
		
		[DataMember(Name="bytes")]
		public Bytes Bytes { get; set; }


		[DataMember(Name="expand_wildcards")]
		public ExpandWildcards ExpandWildcards { get; set; }


		[DataMember(Name="format")]
		public string Format { get; set; }


		[DataMember(Name="headers")]
		public List<string> Headers { get; set; }


		[DataMember(Name="health")]
		public Health Health { get; set; }


		[DataMember(Name="help")]
		public bool Help { get; set; }


		[DataMember(Name="include_unloaded_segments")]
		public bool IncludeUnloadedSegments { get; set; }


		[DataMember(Name="local")]
		public bool Local { get; set; }


		[DataMember(Name="master_timeout")]
		public Time MasterTimeout { get; set; }


		[DataMember(Name="pri")]
		public bool Pri { get; set; }


		[DataMember(Name="sort_by_columns")]
		public List<string> SortByColumns { get; set; }


		[DataMember(Name="verbose")]
		public bool Verbose { get; set; }

	}
}
