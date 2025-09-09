import {
  IErrorSchema,
  IGetListingInventoryParams,
  IListingInventory,
  IListingInventoryWithAssociations,
  IUpdateListingInventoryParams,
  IUpdateListingInventoryPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopListingInventory {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the inventory record for a listing. Listings you did not edit using the Etsy.com inventory tools have no inventory records. This endpoint returns SKU data if you are the owner of the inventory records being fetched.
   *
   * @tags ShopListing Inventory
   * @name GetListingInventory
   * @request GET:/v3/application/listings/{listing_id}/inventory
   * @secure
   * @response `200` `IListingInventoryWithAssociations` A single listing inventory record.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `422` `IErrorSchema` There was a problem processing your request. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getListingInventory = ({ listingId, ...query }: IGetListingInventoryParams, params: RequestParams = {}) =>
    this.http.request<IListingInventoryWithAssociations, IErrorSchema>({
      path: `/v3/application/listings/${listingId}/inventory`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates the inventory for a listing identified by a listing ID. The update fails if the supplied values for product sku, offering quantity, and/or price are incompatible with values in `*_on_property_*` fields. When setting a price, assign a float equal to amount divided by divisor as specified in the Money resource.
   *
   * @tags ShopListing Inventory
   * @name UpdateListingInventory
   * @request PUT:/v3/application/listings/{listing_id}/inventory
   * @secure
   * @response `200` `IListingInventory` A single listing's inventory record.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateListingInventory = (
    { listingId, ...query }: IUpdateListingInventoryParams,
    data: IUpdateListingInventoryPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IListingInventory, IErrorSchema>({
      path: `/v3/application/listings/${listingId}/inventory`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
