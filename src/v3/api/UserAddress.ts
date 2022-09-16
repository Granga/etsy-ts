import { IErrorSchema, IGetUserAddressesParams, IUserAddress, IUserAddresses } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class UserAddress<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 endpoint to delete a UserAddress for a User.
   *
   * @tags UserAddress
   * @name ApiApplicationOpenApiUsersAddressesDelete
   * @request DELETE:/v3/application/user/addresses/{user_address_id}
   * @secure
   * @response `204` `void` The User Address resource was correctly deleted
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  apiApplicationOpenApiUsersAddressesDelete = (userAddressId: number, params: RequestParams = {}) =>
    this.http.request<void, IErrorSchema>({
      path: `/v3/application/user/addresses/${userAddressId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-01 wt-mr-xs-2"> Feedback only </span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">Development for this endpoint is in progress. It will only return a 501 response.</p></div> Open API V3 endpoint to retrieve a UserAddress for a User.
   *
   * @tags UserAddress
   * @name GetUserAddress
   * @request GET:/v3/application/user/addresses/{user_address_id}
   * @secure
   * @response `200` `IUserAddress` A single UserAddress
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   * @response `501` `IErrorSchema` This endpoint is not functional at this time.
   */
  getUserAddress = (userAddressId: number, params: RequestParams = {}) =>
    this.http.request<IUserAddress, IErrorSchema>({
      path: `/v3/application/user/addresses/${userAddressId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Open API V3 endpoint to retrieve UserAddresses for a User.
   *
   * @tags UserAddress
   * @name GetUserAddresses
   * @request GET:/v3/application/user/addresses
   * @secure
   * @response `200` `IUserAddresses` A list of UserAddress records
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getUserAddresses = (query: IGetUserAddressesParams, params: RequestParams = {}) =>
    this.http.request<IUserAddresses, IErrorSchema>({
      path: `/v3/application/user/addresses`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
