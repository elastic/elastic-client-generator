
package org.elasticsearch.x_pack.enrich.get_policy;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class GetEnrichPolicyRequest  implements XContentable<GetEnrichPolicyRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public GetEnrichPolicyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetEnrichPolicyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetEnrichPolicyRequest, Void> PARSER =
    new ObjectParser<>(GetEnrichPolicyRequest.class.getName(), false, GetEnrichPolicyRequest::new);

  static {
    
  }

}
