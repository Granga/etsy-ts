import {
  IConsolidateShopReturnPoliciesPayload,
  ICreateShopReturnPolicyPayload,
  IErrorSchema,
  IShopReturnPolicies,
  IShopReturnPolicy,
  IUpdateShopReturnPolicyPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopReturnPolicy<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-denim-tint wt-mr-xs-2">Beta</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready to use as defined below. Changes may occur before launch, but we received satisfactory feedback on the interface and don’t expect any breaking changes.</p></div> Consolidates Return Policies by moving all listings from a source return policy to a destination return policy, and deleting the source return policy. This is commonly used in the event that a user attempts to update a Return Policy such that its data is a duplicate of some other Return Policy, which is prevented.
   *
   * @tags Shop Return Policy
   * @name ConsolidateShopReturnPolicies
   * @request POST:/v3/application/shops/{shop_id}/policies/return/consolidate
   * @secure
   * @response `200` `IShopReturnPolicy` The updated target Return Policy
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  consolidateShopReturnPolicies = (
    shopId: number,
    data: IConsolidateShopReturnPoliciesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopReturnPolicy, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/policies/return/consolidate`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-denim-tint wt-mr-xs-2">Beta</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready to use as defined below. Changes may occur before launch, but we received satisfactory feedback on the interface and don’t expect any breaking changes.</p></div> Creates a new Return Policy.
   *
   * @tags Shop Return Policy
   * @name CreateShopReturnPolicy
   * @request POST:/v3/application/shops/{shop_id}/policies/return
   * @secure
   * @response `200` `IShopReturnPolicy` A single Return Policy
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  createShopReturnPolicy = (shopId: number, data: ICreateShopReturnPolicyPayload, params: RequestParams = {}) =>
    this.http.request<IShopReturnPolicy, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/policies/return`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-denim-tint wt-mr-xs-2">Beta</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready to use as defined below. Changes may occur before launch, but we received satisfactory feedback on the interface and don’t expect any breaking changes.</p></div> Returns a shop's list of existing Return Policies
   *
   * @tags Shop Return Policy
   * @name GetShopReturnPolicies
   * @request GET:/v3/application/shops/{shop_id}/policies/return
   * @secure
   * @response `200` `IShopReturnPolicies` List of shop's Return Policies
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReturnPolicies = (shopId: number, params: RequestParams = {}) =>
    this.http.request<IShopReturnPolicies, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/policies/return`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-denim-tint wt-mr-xs-2">Beta</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready to use as defined below. Changes may occur before launch, but we received satisfactory feedback on the interface and don’t expect any breaking changes.</p></div> Deletes an existing Return Policy. Deletion is only allowed for policies which have no associated listings – move them to another policy before attempting deletion.
   *
   * @tags Shop Return Policy
   * @name DeleteShopReturnPolicy
   * @request DELETE:/v3/application/shops/{shop_id}/policies/return/{return_policy_id}
   * @secure
   * @response `204` `void` The Return Policy was successfully deleted.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  deleteShopReturnPolicy = (shopId: number, returnPolicyId: number, params: RequestParams = {}) =>
    this.http.request<void, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/policies/return/${returnPolicyId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-denim-tint wt-mr-xs-2">Beta</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready to use as defined below. Changes may occur before launch, but we received satisfactory feedback on the interface and don’t expect any breaking changes.</p></div> Retrieves an existing Return Policy.
   *
   * @tags Shop Return Policy
   * @name GetShopReturnPolicy
   * @request GET:/v3/application/shops/{shop_id}/policies/return/{return_policy_id}
   * @secure
   * @response `200` `IShopReturnPolicy` A single Return Policy
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReturnPolicy = (shopId: number, returnPolicyId: number, params: RequestParams = {}) =>
    this.http.request<IShopReturnPolicy, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/policies/return/${returnPolicyId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-denim-tint wt-mr-xs-2">Beta</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Give feedback</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready to use as defined below. Changes may occur before launch, but we received satisfactory feedback on the interface and don’t expect any breaking changes.</p></div> Updates an existing Return Policy.
   *
   * @tags Shop Return Policy
   * @name UpdateShopReturnPolicy
   * @request PUT:/v3/application/shops/{shop_id}/policies/return/{return_policy_id}
   * @secure
   * @response `200` `IShopReturnPolicy` An updated Return Policy
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateShopReturnPolicy = (
    shopId: number,
    returnPolicyId: number,
    data: IUpdateShopReturnPolicyPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopReturnPolicy, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/policies/return/${returnPolicyId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
