@rest_spec_name("ml.get_influencers")
class GetInfluencersRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    descending?: boolean;
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    end?: Date;
    exclude_interim?: boolean;
    influencer_score?: double;
    page?: Page;
    sort?: Field;
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    start?: Date;
  }
}
