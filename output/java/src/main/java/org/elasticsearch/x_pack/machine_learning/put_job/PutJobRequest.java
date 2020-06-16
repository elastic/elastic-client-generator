
package org.elasticsearch.x_pack.machine_learning.put_job;

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
import org.elasticsearch.x_pack.machine_learning.job.config.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;

public class PutJobRequest  implements XContentable<PutJobRequest> {
  
  static final ParseField ANALYSIS_CONFIG = new ParseField("analysis_config");
  private AnalysisConfig _analysisConfig;
  public AnalysisConfig getAnalysisConfig() { return this._analysisConfig; }
  public PutJobRequest setAnalysisConfig(AnalysisConfig val) { this._analysisConfig = val; return this; }


  static final ParseField ANALYSIS_LIMITS = new ParseField("analysis_limits");
  private AnalysisLimits _analysisLimits;
  public AnalysisLimits getAnalysisLimits() { return this._analysisLimits; }
  public PutJobRequest setAnalysisLimits(AnalysisLimits val) { this._analysisLimits = val; return this; }


  static final ParseField DATA_DESCRIPTION = new ParseField("data_description");
  private DataDescription _dataDescription;
  public DataDescription getDataDescription() { return this._dataDescription; }
  public PutJobRequest setDataDescription(DataDescription val) { this._dataDescription = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutJobRequest setDescription(String val) { this._description = val; return this; }


  static final ParseField MODEL_PLOT = new ParseField("model_plot");
  private ModelPlotConfig _modelPlot;
  public ModelPlotConfig getModelPlot() { return this._modelPlot; }
  public PutJobRequest setModelPlot(ModelPlotConfig val) { this._modelPlot = val; return this; }


  static final ParseField MODEL_SNAPSHOT_RETENTION_DAYS = new ParseField("model_snapshot_retention_days");
  private Long _modelSnapshotRetentionDays;
  public Long getModelSnapshotRetentionDays() { return this._modelSnapshotRetentionDays; }
  public PutJobRequest setModelSnapshotRetentionDays(Long val) { this._modelSnapshotRetentionDays = val; return this; }


  static final ParseField RESULTS_INDEX_NAME = new ParseField("results_index_name");
  private IndexName _resultsIndexName;
  public IndexName getResultsIndexName() { return this._resultsIndexName; }
  public PutJobRequest setResultsIndexName(IndexName val) { this._resultsIndexName = val; return this; }


  static final ParseField ALLOW_LAZY_OPEN = new ParseField("allow_lazy_open");
  private Boolean _allowLazyOpen;
  public Boolean getAllowLazyOpen() { return this._allowLazyOpen; }
  public PutJobRequest setAllowLazyOpen(Boolean val) { this._allowLazyOpen = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analysisConfig != null) {
      builder.field(ANALYSIS_CONFIG.getPreferredName());
      _analysisConfig.toXContent(builder, params);
    }
    if (_analysisLimits != null) {
      builder.field(ANALYSIS_LIMITS.getPreferredName());
      _analysisLimits.toXContent(builder, params);
    }
    if (_dataDescription != null) {
      builder.field(DATA_DESCRIPTION.getPreferredName());
      _dataDescription.toXContent(builder, params);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_modelPlot != null) {
      builder.field(MODEL_PLOT.getPreferredName());
      _modelPlot.toXContent(builder, params);
    }
    if (_modelSnapshotRetentionDays != null) {
      builder.field(MODEL_SNAPSHOT_RETENTION_DAYS.getPreferredName(), _modelSnapshotRetentionDays);
    }
    if (_resultsIndexName != null) {
      builder.field(RESULTS_INDEX_NAME.getPreferredName());
      _resultsIndexName.toXContent(builder, params);
    }
    if (_allowLazyOpen != null) {
      builder.field(ALLOW_LAZY_OPEN.getPreferredName(), _allowLazyOpen);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutJobRequest, Void> PARSER =
    new ObjectParser<>(PutJobRequest.class.getName(), false, PutJobRequest::new);

  static {
    PARSER.declareObject(PutJobRequest::setAnalysisConfig, (p, t) -> AnalysisConfig.PARSER.apply(p, t), ANALYSIS_CONFIG);
    PARSER.declareObject(PutJobRequest::setAnalysisLimits, (p, t) -> AnalysisLimits.PARSER.apply(p, t), ANALYSIS_LIMITS);
    PARSER.declareObject(PutJobRequest::setDataDescription, (p, t) -> DataDescription.PARSER.apply(p, t), DATA_DESCRIPTION);
    PARSER.declareString(PutJobRequest::setDescription, DESCRIPTION);
    PARSER.declareObject(PutJobRequest::setModelPlot, (p, t) -> ModelPlotConfig.PARSER.apply(p, t), MODEL_PLOT);
    PARSER.declareLong(PutJobRequest::setModelSnapshotRetentionDays, MODEL_SNAPSHOT_RETENTION_DAYS);
    PARSER.declareObject(PutJobRequest::setResultsIndexName, (p, t) -> IndexName.createFrom(p), RESULTS_INDEX_NAME);
    PARSER.declareBoolean(PutJobRequest::setAllowLazyOpen, ALLOW_LAZY_OPEN);
  }

}
