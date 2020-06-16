
package org.elasticsearch.x_pack.machine_learning.estimate_model_memory;

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


public class EstimateModelMemoryResponse  implements XContentable<EstimateModelMemoryResponse> {
  
  static final ParseField MODEL_MEMORY_ESTIMATE = new ParseField("model_memory_estimate");
  private String _modelMemoryEstimate;
  public String getModelMemoryEstimate() { return this._modelMemoryEstimate; }
  public EstimateModelMemoryResponse setModelMemoryEstimate(String val) { this._modelMemoryEstimate = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_modelMemoryEstimate != null) {
      builder.field(MODEL_MEMORY_ESTIMATE.getPreferredName(), _modelMemoryEstimate);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EstimateModelMemoryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EstimateModelMemoryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EstimateModelMemoryResponse, Void> PARSER =
    new ObjectParser<>(EstimateModelMemoryResponse.class.getName(), false, EstimateModelMemoryResponse::new);

  static {
    PARSER.declareString(EstimateModelMemoryResponse::setModelMemoryEstimate, MODEL_MEMORY_ESTIMATE);
  }

}
