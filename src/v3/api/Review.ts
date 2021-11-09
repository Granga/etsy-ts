import { IErrorSchema, IGetReviewsByShopParams, ITransactionReviews } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Review<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 to retrieve the reviews from a shop given its ID.
   *
   * @tags Review
   * @name GetReviewsByShop
   * @request GET:/v3/application/shops/{shop_id}/reviews
   * @secure
   * @response `200` `ITransactionReviews` A set of TransactionReviews
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getReviewsByShop = ({ shopId, ...query }: IGetReviewsByShopParams, params: RequestParams = {}) =>
    this.http.request<ITransactionReviews, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/reviews`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
