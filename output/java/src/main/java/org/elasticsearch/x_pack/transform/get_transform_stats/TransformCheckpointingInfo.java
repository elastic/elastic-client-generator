
package org.elasticsearch.x_pack.transform.get_transform_stats;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.transform.get_transform_stats.*;

public class TransformCheckpointingInfo  implements XContentable<TransformCheckpointingInfo> {
  
  static final ParseField CHANGES_LAST_DETECTED_AT = new ParseField("changes_last_detected_at");
  private Long _changesLastDetectedAt;
  public Long getChangesLastDetectedAt() { return this._changesLastDetectedAt; }
  public TransformCheckpointingInfo setChangesLastDetectedAt(Long val) { this._changesLastDetectedAt = val; return this; }


  static final ParseField CHANGES_LAST_DETECTED_AT_DATE_TIME = new ParseField("changes_last_detected_at_date_time");
  private Date _changesLastDetectedAtDateTime;
  public Date getChangesLastDetectedAtDateTime() { return this._changesLastDetectedAtDateTime; }
  public TransformCheckpointingInfo setChangesLastDetectedAtDateTime(Date val) { this._changesLastDetectedAtDateTime = val; return this; }


  static final ParseField LAST = new ParseField("last");
  private TransformCheckpointStats _last;
  public TransformCheckpointStats getLast() { return this._last; }
  public TransformCheckpointingInfo setLast(TransformCheckpointStats val) { this._last = val; return this; }


  static final ParseField NEXT = new ParseField("next");
  private TransformCheckpointStats _next;
  public TransformCheckpointStats getNext() { return this._next; }
  public TransformCheckpointingInfo setNext(TransformCheckpointStats val) { this._next = val; return this; }


  static final ParseField OPERATIONS_BEHIND = new ParseField("operations_behind");
  private Long _operationsBehind;
  public Long getOperationsBehind() { return this._operationsBehind; }
  public TransformCheckpointingInfo setOperationsBehind(Long val) { this._operationsBehind = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_changesLastDetectedAt != null) {
      builder.field(CHANGES_LAST_DETECTED_AT.getPreferredName(), _changesLastDetectedAt);
    }
    if (_changesLastDetectedAtDateTime != null) {
      builder.field(CHANGES_LAST_DETECTED_AT_DATE_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_changesLastDetectedAtDateTime.toInstant()));
    }
    if (_last != null) {
      builder.field(LAST.getPreferredName());
      _last.toXContent(builder, params);
    }
    if (_next != null) {
      builder.field(NEXT.getPreferredName());
      _next.toXContent(builder, params);
    }
    if (_operationsBehind != null) {
      builder.field(OPERATIONS_BEHIND.getPreferredName(), _operationsBehind);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformCheckpointingInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformCheckpointingInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformCheckpointingInfo, Void> PARSER =
    new ObjectParser<>(TransformCheckpointingInfo.class.getName(), false, TransformCheckpointingInfo::new);

  static {
    PARSER.declareLong(TransformCheckpointingInfo::setChangesLastDetectedAt, CHANGES_LAST_DETECTED_AT);
    PARSER.declareObject(TransformCheckpointingInfo::setChangesLastDetectedAtDateTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), CHANGES_LAST_DETECTED_AT_DATE_TIME);
    PARSER.declareObject(TransformCheckpointingInfo::setLast, (p, t) -> TransformCheckpointStats.PARSER.apply(p, t), LAST);
    PARSER.declareObject(TransformCheckpointingInfo::setNext, (p, t) -> TransformCheckpointStats.PARSER.apply(p, t), NEXT);
    PARSER.declareLong(TransformCheckpointingInfo::setOperationsBehind, OPERATIONS_BEHIND);
  }

}
