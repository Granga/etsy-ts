import { IErrorSchema, IListingInventoryProduct } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ShopListingProduct<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 endpoint to retrieve a ListingProduct by ID.
   *
   * @tags ShopListing Product
   * @name GetListingProduct
   * @request GET:/v3/application/listings/{listing_id}/inventory/products/{product_id}
   * @secure
   * @response `200` `IListingInventoryProduct` A single ListingInventoryProduct
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingProduct = (listingId: number, productId: number, params: RequestParams = {}) =>
    this.http.request<IListingInventoryProduct, IErrorSchema>({
      path: `/v3/application/listings/${listingId}/inventory/products/${productId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
