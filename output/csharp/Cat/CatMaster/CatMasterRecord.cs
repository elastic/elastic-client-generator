using Nest.Cat;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.Cat {

	public class CatMasterRecord : ICatRecord {
		
		[DataMember(Name="id")]
		public string Id { get; set; }


		[DataMember(Name="ip")]
		public string Ip { get; set; }


		[DataMember(Name="node")]
		public string Node { get; set; }

	}
}
