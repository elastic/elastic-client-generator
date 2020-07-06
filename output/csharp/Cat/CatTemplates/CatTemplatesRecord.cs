using Nest.Internal;
using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatTemplatesRecord : ICatRecord {
		
		[DataMember(Name="index_patterns")]
		public string IndexPatterns { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="order")]
		public long Order { get; set; }


		[DataMember(Name="version")]
		public long Version { get; set; }

	}
}
