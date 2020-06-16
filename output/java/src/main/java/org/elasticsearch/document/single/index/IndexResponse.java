
package org.elasticsearch.document.single.index;

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


public class IndexResponse  implements XContentable<IndexResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public IndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexResponse, Void> PARSER =
    new ObjectParser<>(IndexResponse.class.getName(), false, IndexResponse::new);

  static {
    
  }

}
