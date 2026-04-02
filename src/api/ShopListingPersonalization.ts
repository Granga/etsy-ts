import {
  IErrorSchema,
  IEtsyModulesListingPersonalizationApiResourcesOpenApiListingPersonalization,
  IUpdateListingPersonalizationParams,
  IUpdateListingPersonalizationPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopListingPersonalization {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes personalization for a listing.
   *
   * @tags ShopListing Personalization
   * @name DeleteListingPersonalization
   * @request DELETE:/v3/application/shops/{shop_id}/listings/{listing_id}/personalization
   * @secure
   * @response `204` `void` The ListingPersonalization resource was correctly deleted
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  deleteListingPersonalization = (shopId: number, listingId: number, params: RequestParams = {}) =>
    this.http.request<void, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/personalization`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates or updates personalization settings for a listing, allowing the seller to collect personalization from the buyer. This endpoint will fully replace any existing personalization on the listing.
   *
   * @tags ShopListing Personalization
   * @name UpdateListingPersonalization
   * @request POST:/v3/application/shops/{shop_id}/listings/{listing_id}/personalization
   * @secure
   * @response `201` `IEtsyModulesListingPersonalizationApiResourcesOpenApiListingPersonalization` A single Listing Personalization record
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateListingPersonalization = (
    { shopId, listingId, ...query }: IUpdateListingPersonalizationParams,
    data: IUpdateListingPersonalizationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IEtsyModulesListingPersonalizationApiResourcesOpenApiListingPersonalization, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/personalization`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a listing's personalization questions by listing ID.
   *
   * @tags ShopListing Personalization
   * @name GetListingPersonalization
   * @request GET:/v3/application/listings/{listing_id}/personalization
   * @secure
   * @response `200` `IEtsyModulesListingPersonalizationApiResourcesOpenApiListingPersonalization` A listing personalization questions
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingPersonalization = (listingId: number, params: RequestParams = {}) =>
    this.http.request<IEtsyModulesListingPersonalizationApiResourcesOpenApiListingPersonalization, IErrorSchema>({
      path: `/v3/application/listings/${listingId}/personalization`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
