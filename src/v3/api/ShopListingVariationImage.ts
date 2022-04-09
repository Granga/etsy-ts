import { IErrorSchema, IListingVariationImages, IUpdateVariationImagesPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopListingVariationImage<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Gets all variation images on a listing.
   *
   * @tags ShopListing VariationImage
   * @name GetListingVariationImages
   * @request GET:/v3/application/shops/{shop_id}/listings/{listing_id}/variation-images
   * @secure
   * @response `200` `IListingVariationImages` A list of ListingVariationImages
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingVariationImages = (shopId: number, listingId: number, params: RequestParams = {}) =>
    this.http.request<IListingVariationImages, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/variation-images`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates variation images on a listing.\n\nvariation_images is an array with inputs for the property_id, value_id, and image_id fields. image_ids are associated with a ListingImage on the Listing associated with the provided listing_id. property_id and value_id pairs are associated with a ListingProduct on the Listing associated with the provided listing_id. variation_images does not contain any duplicates. variation_images does not contain more than one property_id as variation images can only be associated on one property. The update overwrites all existing variation images on a listing, so if your request is successful, the variation images on the listing will be exactly those you specify.
   *
   * @tags ShopListing VariationImage
   * @name UpdateVariationImages
   * @request POST:/v3/application/shops/{shop_id}/listings/{listing_id}/variation-images
   * @secure
   * @response `200` `IListingVariationImages` A single ListingVariationImage
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateVariationImages = (
    shopId: number,
    listingId: number,
    data: IUpdateVariationImagesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IListingVariationImages, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/variation-images`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
