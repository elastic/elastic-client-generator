
package org.elasticsearch.x_pack.enrich.put_policy;

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
import org.elasticsearch.x_pack.enrich.*;

public class PutEnrichPolicyRequest  implements XContentable<PutEnrichPolicyRequest> {
  
  static final ParseField MATCH = new ParseField("match");
  private EnrichPolicy _match;
  public EnrichPolicy getMatch() { return this._match; }
  public PutEnrichPolicyRequest setMatch(EnrichPolicy val) { this._match = val; return this; }


  static final ParseField GEO_MATCH = new ParseField("geo_match");
  private EnrichPolicy _geoMatch;
  public EnrichPolicy getGeoMatch() { return this._geoMatch; }
  public PutEnrichPolicyRequest setGeoMatch(EnrichPolicy val) { this._geoMatch = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_match != null) {
      builder.field(MATCH.getPreferredName());
      _match.toXContent(builder, params);
    }
    if (_geoMatch != null) {
      builder.field(GEO_MATCH.getPreferredName());
      _geoMatch.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutEnrichPolicyRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutEnrichPolicyRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutEnrichPolicyRequest, Void> PARSER =
    new ObjectParser<>(PutEnrichPolicyRequest.class.getName(), false, PutEnrichPolicyRequest::new);

  static {
    PARSER.declareObject(PutEnrichPolicyRequest::setMatch, (p, t) -> EnrichPolicy.PARSER.apply(p, t), MATCH);
    PARSER.declareObject(PutEnrichPolicyRequest::setGeoMatch, (p, t) -> EnrichPolicy.PARSER.apply(p, t), GEO_MATCH);
  }

}
