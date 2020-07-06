using Nest.Internal;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.CommonAbstractions {

	public class ElasticsearchVersionInfo  {
		
		[DataMember(Name="build_date")]
		public DateTimeOffset BuildDate { get; set; }


		[DataMember(Name="build_flavor")]
		public string BuildFlavor { get; set; }


		[DataMember(Name="build_hash")]
		public string BuildHash { get; set; }


		[DataMember(Name="build_snapshot")]
		public bool BuildSnapshot { get; set; }


		[DataMember(Name="build_type")]
		public string BuildType { get; set; }


		[DataMember(Name="lucene_version")]
		public string LuceneVersion { get; set; }


		[DataMember(Name="minimum_index_compatibility_version")]
		public string MinimumIndexCompatibilityVersion { get; set; }


		[DataMember(Name="minimum_wire_compatibility_version")]
		public string MinimumWireCompatibilityVersion { get; set; }


		[DataMember(Name="number")]
		public string Number { get; set; }

	}
}
