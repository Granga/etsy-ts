import {
  ICreateListingTranslationPayload,
  IErrorSchema,
  IListingTranslation,
  IUpdateListingTranslationPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopListingTranslation {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a ListingTranslation by listing_id and language
   *
   * @tags ShopListing Translation
   * @name CreateListingTranslation
   * @request POST:/v3/application/shops/{shop_id}/listings/{listing_id}/translations/{language}
   * @secure
   * @response `200` `IListingTranslation` A single ListingTranslation
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  createListingTranslation = (
    shopId: number,
    listingId: number,
    language: string,
    data: ICreateListingTranslationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IListingTranslation, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/translations/${language}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Get a Translation for a Listing in the given language
   *
   * @tags ShopListing Translation
   * @name GetListingTranslation
   * @request GET:/v3/application/shops/{shop_id}/listings/{listing_id}/translations/{language}
   * @secure
   * @response `200` `IListingTranslation` A single ListingTranslation
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingTranslation = (shopId: number, listingId: number, language: string, params: RequestParams = {}) =>
    this.http.request<IListingTranslation, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/translations/${language}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates a ListingTranslation by listing_id and language
   *
   * @tags ShopListing Translation
   * @name UpdateListingTranslation
   * @request PUT:/v3/application/shops/{shop_id}/listings/{listing_id}/translations/{language}
   * @secure
   * @response `200` `IListingTranslation` A single ListingTranslation
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateListingTranslation = (
    shopId: number,
    listingId: number,
    language: string,
    data: IUpdateListingTranslationPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IListingTranslation, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/translations/${language}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
