
package org.elasticsearch.query_dsl.full_text.match_bool_prefix;

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
import org.elasticsearch.common_options.fuzziness.*;
import org.elasticsearch.query_dsl.multi_term_query_rewrite.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.minimum_should_match.*;
import org.elasticsearch.query_dsl.*;

public class MatchBoolPrefixQuery  implements XContentable<MatchBoolPrefixQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public MatchBoolPrefixQuery setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField FUZZINESS = new ParseField("fuzziness");
  private Fuzziness _fuzziness;
  public Fuzziness getFuzziness() { return this._fuzziness; }
  public MatchBoolPrefixQuery setFuzziness(Fuzziness val) { this._fuzziness = val; return this; }


  static final ParseField FUZZY_REWRITE = new ParseField("fuzzy_rewrite");
  private MultiTermQueryRewrite _fuzzyRewrite;
  public MultiTermQueryRewrite getFuzzyRewrite() { return this._fuzzyRewrite; }
  public MatchBoolPrefixQuery setFuzzyRewrite(MultiTermQueryRewrite val) { this._fuzzyRewrite = val; return this; }


  static final ParseField FUZZY_TRANSPOSITIONS = new ParseField("fuzzy_transpositions");
  private Boolean _fuzzyTranspositions;
  public Boolean getFuzzyTranspositions() { return this._fuzzyTranspositions; }
  public MatchBoolPrefixQuery setFuzzyTranspositions(Boolean val) { this._fuzzyTranspositions = val; return this; }


  static final ParseField MAX_EXPANSIONS = new ParseField("max_expansions");
  private Integer _maxExpansions;
  public Integer getMaxExpansions() { return this._maxExpansions; }
  public MatchBoolPrefixQuery setMaxExpansions(Integer val) { this._maxExpansions = val; return this; }


  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public MatchBoolPrefixQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }


  static final ParseField OPERATOR = new ParseField("operator");
  private Operator _operator;
  public Operator getOperator() { return this._operator; }
  public MatchBoolPrefixQuery setOperator(Operator val) { this._operator = val; return this; }


  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private Integer _prefixLength;
  public Integer getPrefixLength() { return this._prefixLength; }
  public MatchBoolPrefixQuery setPrefixLength(Integer val) { this._prefixLength = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public MatchBoolPrefixQuery setQuery(String val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_fuzziness != null) {
      builder.field(FUZZINESS.getPreferredName());
      _fuzziness.toXContent(builder, params);
    }
    if (_fuzzyRewrite != null) {
      builder.field(FUZZY_REWRITE.getPreferredName());
      _fuzzyRewrite.toXContent(builder, params);
    }
    if (_fuzzyTranspositions != null) {
      builder.field(FUZZY_TRANSPOSITIONS.getPreferredName(), _fuzzyTranspositions);
    }
    if (_maxExpansions != null) {
      builder.field(MAX_EXPANSIONS.getPreferredName(), _maxExpansions);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_operator != null) {
      builder.field(OPERATOR.getPreferredName());
      _operator.toXContent(builder, params);
    }
    if (_prefixLength != null) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MatchBoolPrefixQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatchBoolPrefixQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatchBoolPrefixQuery, Void> PARSER =
    new ObjectParser<>(MatchBoolPrefixQuery.class.getName(), false, MatchBoolPrefixQuery::new);

  static {
    PARSER.declareString(MatchBoolPrefixQuery::setAnalyzer, ANALYZER);
    PARSER.declareObject(MatchBoolPrefixQuery::setFuzziness, (p, t) -> Fuzziness.PARSER.apply(p, t), FUZZINESS);
    PARSER.declareObject(MatchBoolPrefixQuery::setFuzzyRewrite, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), FUZZY_REWRITE);
    PARSER.declareBoolean(MatchBoolPrefixQuery::setFuzzyTranspositions, FUZZY_TRANSPOSITIONS);
    PARSER.declareInt(MatchBoolPrefixQuery::setMaxExpansions, MAX_EXPANSIONS);
    PARSER.declareObject(MatchBoolPrefixQuery::setMinimumShouldMatch, (p, t) -> new MinimumShouldMatch().fromXContent(p), MINIMUM_SHOULD_MATCH);
    PARSER.declareField(MatchBoolPrefixQuery::setOperator, (p, t) -> Operator.PARSER.apply(p), OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(MatchBoolPrefixQuery::setPrefixLength, PREFIX_LENGTH);
    PARSER.declareString(MatchBoolPrefixQuery::setQuery, QUERY);
  }

}
