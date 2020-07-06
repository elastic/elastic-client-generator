using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatPluginsRecord : ICatRecord {
		
		[DataMember(Name="component")]
		public string Component { get; set; }


		[DataMember(Name="description")]
		public string Description { get; set; }


		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="isolation")]
		public string Isolation { get; set; }


		[DataMember(Name="name")]
		public string Name { get; set; }


		[DataMember(Name="type")]
		public string Type { get; set; }


		[DataMember(Name="url")]
		public string Url { get; set; }


		[DataMember(Name="version")]
		public string Version { get; set; }

	}
}
