import { IErrorSchema, IFindShopsParams, IShop, IShops, IUpdateShopPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Shop<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the shop identified by a specific shop ID.
   *
   * @tags Shop
   * @name GetShop
   * @request GET:/v3/application/shops/{shop_id}
   * @secure
   * @response `200` `IShop` A single Shop
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShop = (shopId: number, params: RequestParams = {}) =>
    this.http.request<IShop, IErrorSchema>({
      path: `/v3/application/shops/${shopId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates a shop. Assumes that all string parameters are provided in the shop's primary language. Please note that the policy_additional field should only be set for shops located in the EU. Passing a value for this field for shops outside of the EU, will result in an error.
   *
   * @tags Shop
   * @name UpdateShop
   * @request PUT:/v3/application/shops/{shop_id}
   * @secure
   * @response `200` `IShop` A single Shop.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateShop = (shopId: number, data: IUpdateShopPayload, params: RequestParams = {}) =>
    this.http.request<IShop, IErrorSchema>({
      path: `/v3/application/shops/${shopId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the shop identified by the shop owner's user ID.
   *
   * @tags Shop
   * @name GetShopByOwnerUserId
   * @request GET:/v3/application/users/{user_id}/shops
   * @secure
   * @response `200` `IShop` A single Shop
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopByOwnerUserId = (userId: number, params: RequestParams = {}) =>
    this.http.request<IShop, IErrorSchema>({
      path: `/v3/application/users/${userId}/shops`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 endpoint for searching shops by name. Note: We make every effort to ensure that frozen or removed shops are not included in the search results. However, rarely, due to timing issues, they may appear.
   *
   * @tags Shop
   * @name FindShops
   * @request GET:/v3/application/shops
   * @secure
   * @response `200` `IShops` A list of Shops
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  findShops = (query: IFindShopsParams, params: RequestParams = {}) =>
    this.http.request<IShops, IErrorSchema>({
      path: `/v3/application/shops`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
