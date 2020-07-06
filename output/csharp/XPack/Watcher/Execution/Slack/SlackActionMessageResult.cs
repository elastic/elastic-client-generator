using Nest.XPack;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
namespace Nest.XPack {

	public class SlackActionMessageResult  {
		
		[DataMember(Name="message")]
		public SlackMessage Message { get; set; }


		[DataMember(Name="reason")]
		public string Reason { get; set; }


		[DataMember(Name="request")]
		public HttpInputRequestResult Request { get; set; }


		[DataMember(Name="response")]
		public HttpInputResponseResult Response { get; set; }


		[DataMember(Name="status")]
		public Status Status { get; set; }


		[DataMember(Name="to")]
		public string To { get; set; }

	}
}
