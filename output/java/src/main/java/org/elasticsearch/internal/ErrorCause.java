
package org.elasticsearch.internal;

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
import org.elasticsearch.common.*;

public class ErrorCause  implements XContentable<ErrorCause> {
  
  static final ParseField ADDITIONAL_PROPERTIES = new ParseField("additional_properties");
  private NamedContainer<String, Object> _additionalProperties;
  public NamedContainer<String, Object> getAdditionalProperties() { return this._additionalProperties; }
  public ErrorCause setAdditionalProperties(NamedContainer<String, Object> val) { this._additionalProperties = val; return this; }


  static final ParseField BYTES_LIMIT = new ParseField("bytes_limit");
  private Long _bytesLimit;
  public Long getBytesLimit() { return this._bytesLimit; }
  public ErrorCause setBytesLimit(Long val) { this._bytesLimit = val; return this; }


  static final ParseField BYTES_WANTED = new ParseField("bytes_wanted");
  private Long _bytesWanted;
  public Long getBytesWanted() { return this._bytesWanted; }
  public ErrorCause setBytesWanted(Long val) { this._bytesWanted = val; return this; }


  static final ParseField CAUSED_BY = new ParseField("caused_by");
  private ErrorCause _causedBy;
  public ErrorCause getCausedBy() { return this._causedBy; }
  public ErrorCause setCausedBy(ErrorCause val) { this._causedBy = val; return this; }


  static final ParseField COLUMN = new ParseField("column");
  private Integer _column;
  public Integer getColumn() { return this._column; }
  public ErrorCause setColumn(Integer val) { this._column = val; return this; }


  static final ParseField FAILED_SHARDS = new ParseField("failed_shards");
  private List<ShardFailure> _failedShards;
  public List<ShardFailure> getFailedShards() { return this._failedShards; }
  public ErrorCause setFailedShards(List<ShardFailure> val) { this._failedShards = val; return this; }


  static final ParseField GROUPED = new ParseField("grouped");
  private Boolean _grouped;
  public Boolean getGrouped() { return this._grouped; }
  public ErrorCause setGrouped(Boolean val) { this._grouped = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public ErrorCause setIndex(String val) { this._index = val; return this; }


  static final ParseField INDEX_U_U_I_D = new ParseField("index_u_u_i_d");
  private String _indexUUID;
  public String getIndexUUID() { return this._indexUUID; }
  public ErrorCause setIndexUUID(String val) { this._indexUUID = val; return this; }


  static final ParseField LANGUAGE = new ParseField("language");
  private String _language;
  public String getLanguage() { return this._language; }
  public ErrorCause setLanguage(String val) { this._language = val; return this; }


  static final ParseField LICENSED_EXPIRED_FEATURE = new ParseField("licensed_expired_feature");
  private String _licensedExpiredFeature;
  public String getLicensedExpiredFeature() { return this._licensedExpiredFeature; }
  public ErrorCause setLicensedExpiredFeature(String val) { this._licensedExpiredFeature = val; return this; }


  static final ParseField LINE = new ParseField("line");
  private Integer _line;
  public Integer getLine() { return this._line; }
  public ErrorCause setLine(Integer val) { this._line = val; return this; }


  static final ParseField PHASE = new ParseField("phase");
  private String _phase;
  public String getPhase() { return this._phase; }
  public ErrorCause setPhase(String val) { this._phase = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public ErrorCause setReason(String val) { this._reason = val; return this; }


  static final ParseField RESOURCE_ID = new ParseField("resource_id");
  private List<String> _resourceId;
  public List<String> getResourceId() { return this._resourceId; }
  public ErrorCause setResourceId(List<String> val) { this._resourceId = val; return this; }


  static final ParseField RESOURCE_TYPE = new ParseField("resource_type");
  private String _resourceType;
  public String getResourceType() { return this._resourceType; }
  public ErrorCause setResourceType(String val) { this._resourceType = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private String _script;
  public String getScript() { return this._script; }
  public ErrorCause setScript(String val) { this._script = val; return this; }


  static final ParseField SCRIPT_STACK = new ParseField("script_stack");
  private List<String> _scriptStack;
  public List<String> getScriptStack() { return this._scriptStack; }
  public ErrorCause setScriptStack(List<String> val) { this._scriptStack = val; return this; }


  static final ParseField SHARD = new ParseField("shard");
  private Integer _shard;
  public Integer getShard() { return this._shard; }
  public ErrorCause setShard(Integer val) { this._shard = val; return this; }


  static final ParseField STACK_TRACE = new ParseField("stack_trace");
  private String _stackTrace;
  public String getStackTrace() { return this._stackTrace; }
  public ErrorCause setStackTrace(String val) { this._stackTrace = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public ErrorCause setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_additionalProperties != null) {
      builder.field(ADDITIONAL_PROPERTIES.getPreferredName());
      _additionalProperties.toXContent(builder, params);
    }
    if (_bytesLimit != null) {
      builder.field(BYTES_LIMIT.getPreferredName(), _bytesLimit);
    }
    if (_bytesWanted != null) {
      builder.field(BYTES_WANTED.getPreferredName(), _bytesWanted);
    }
    if (_causedBy != null) {
      builder.field(CAUSED_BY.getPreferredName());
      _causedBy.toXContent(builder, params);
    }
    if (_column != null) {
      builder.field(COLUMN.getPreferredName(), _column);
    }
    if (_failedShards != null) {
      builder.array(FAILED_SHARDS.getPreferredName(), _failedShards);
    }
    if (_grouped != null) {
      builder.field(GROUPED.getPreferredName(), _grouped);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_indexUUID != null) {
      builder.field(INDEX_U_U_I_D.getPreferredName(), _indexUUID);
    }
    if (_language != null) {
      builder.field(LANGUAGE.getPreferredName(), _language);
    }
    if (_licensedExpiredFeature != null) {
      builder.field(LICENSED_EXPIRED_FEATURE.getPreferredName(), _licensedExpiredFeature);
    }
    if (_line != null) {
      builder.field(LINE.getPreferredName(), _line);
    }
    if (_phase != null) {
      builder.field(PHASE.getPreferredName(), _phase);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    if (_resourceId != null) {
      builder.array(RESOURCE_ID.getPreferredName(), _resourceId);
    }
    if (_resourceType != null) {
      builder.field(RESOURCE_TYPE.getPreferredName(), _resourceType);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName(), _script);
    }
    if (_scriptStack != null) {
      builder.array(SCRIPT_STACK.getPreferredName(), _scriptStack);
    }
    if (_shard != null) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_stackTrace != null) {
      builder.field(STACK_TRACE.getPreferredName(), _stackTrace);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ErrorCause fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ErrorCause.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ErrorCause, Void> PARSER =
    new ObjectParser<>(ErrorCause.class.getName(), false, ErrorCause::new);

  static {
    PARSER.declareObject(ErrorCause::setAdditionalProperties, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), ADDITIONAL_PROPERTIES);
    PARSER.declareLong(ErrorCause::setBytesLimit, BYTES_LIMIT);
    PARSER.declareLong(ErrorCause::setBytesWanted, BYTES_WANTED);
    PARSER.declareObject(ErrorCause::setCausedBy, (p, t) -> ErrorCause.PARSER.apply(p, t), CAUSED_BY);
    PARSER.declareInt(ErrorCause::setColumn, COLUMN);
    PARSER.declareObjectArray(ErrorCause::setFailedShards, (p, t) -> ShardFailure.PARSER.apply(p, t), FAILED_SHARDS);
    PARSER.declareBoolean(ErrorCause::setGrouped, GROUPED);
    PARSER.declareString(ErrorCause::setIndex, INDEX);
    PARSER.declareString(ErrorCause::setIndexUUID, INDEX_U_U_I_D);
    PARSER.declareString(ErrorCause::setLanguage, LANGUAGE);
    PARSER.declareString(ErrorCause::setLicensedExpiredFeature, LICENSED_EXPIRED_FEATURE);
    PARSER.declareInt(ErrorCause::setLine, LINE);
    PARSER.declareString(ErrorCause::setPhase, PHASE);
    PARSER.declareString(ErrorCause::setReason, REASON);
    PARSER.declareStringArray(ErrorCause::setResourceId, RESOURCE_ID);
    PARSER.declareString(ErrorCause::setResourceType, RESOURCE_TYPE);
    PARSER.declareString(ErrorCause::setScript, SCRIPT);
    PARSER.declareStringArray(ErrorCause::setScriptStack, SCRIPT_STACK);
    PARSER.declareInt(ErrorCause::setShard, SHARD);
    PARSER.declareString(ErrorCause::setStackTrace, STACK_TRACE);
    PARSER.declareString(ErrorCause::setType, TYPE);
  }

}
