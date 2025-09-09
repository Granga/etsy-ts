import {
  ICreateShopReadinessStateDefinitionPayload,
  IErrorSchema,
  IGetShopReadinessStateDefinitionsParams,
  IShopProcessingProfile,
  IShopProcessingProfiles,
  IUpdateShopReadinessStateDefinitionPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopProcessingProfiles {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a new ReadinessStateDefinition. If an existing definition matches the input values, this endpoint will throw a Conflict error, please refer to the Content-Location header to obtain the get endpoint url for the values of the existing definition. Does not affect the product offering-readiness states definition relationship.
   *
   * @tags Shop ProcessingProfiles
   * @name CreateShopReadinessStateDefinition
   * @request POST:/v3/application/shops/{shop_id}/readiness-state-definitions
   * @secure
   * @response `201` `IShopProcessingProfile` A single ReadinessStateDefinition
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  createShopReadinessStateDefinition = (
    shopId: number,
    data: ICreateShopReadinessStateDefinitionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopProcessingProfile, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/readiness-state-definitions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of ProcessingProfiles available in the specific Etsy shop identified by its shop ID.
   *
   * @tags Shop ProcessingProfiles
   * @name GetShopReadinessStateDefinitions
   * @request GET:/v3/application/shops/{shop_id}/readiness-state-definitions
   * @secure
   * @response `200` `IShopProcessingProfiles` A list of ProcessingProfiles
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReadinessStateDefinitions = (
    { shopId, ...query }: IGetShopReadinessStateDefinitionsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopProcessingProfiles, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/readiness-state-definitions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Deletes a ReadinessStateDefinition by given readiness state definition ID. If there any active offerings linked to the definition, this endpoint will throw a Bad Request error. If you want to delete a ReadinessStateDefinition that is linked to active offerings, you must link the offerings to a different readiness state definition.
   *
   * @tags Shop ProcessingProfiles
   * @name DeleteShopReadinessStateDefinition
   * @request DELETE:/v3/application/shops/{shop_id}/readiness-state-definitions/{readiness_state_definition_id}
   * @secure
   * @response `204` `void` The ReadinessStateDefinition was successfully deleted
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  deleteShopReadinessStateDefinition = (
    shopId: number,
    readinessStateDefinitionId: number,
    params: RequestParams = {},
  ) =>
    this.http.request<void, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/readiness-state-definitions/${readinessStateDefinitionId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a ProcessingProfile referenced by readiness state definition ID.
   *
   * @tags Shop ProcessingProfiles
   * @name GetShopReadinessStateDefinition
   * @request GET:/v3/application/shops/{shop_id}/readiness-state-definitions/{readiness_state_definition_id}
   * @secure
   * @response `200` `IShopProcessingProfile` A single ProcessingProfile
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReadinessStateDefinition = (shopId: number, readinessStateDefinitionId: number, params: RequestParams = {}) =>
    this.http.request<IShopProcessingProfile, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/readiness-state-definitions/${readinessStateDefinitionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates an existing ReadinessStateDefinition. If an existing definition matches the input values, this endpoint will throw a Conflict error, please refer to the Content-Location header to obtain the get endpoint url for the values of the existing definition. Does not affect the product offering-readiness states definition relationship.
   *
   * @tags Shop ProcessingProfiles
   * @name UpdateShopReadinessStateDefinition
   * @request PUT:/v3/application/shops/{shop_id}/readiness-state-definitions/{readiness_state_definition_id}
   * @secure
   * @response `200` `IShopProcessingProfile` The updated ReadinessStateDefinition
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateShopReadinessStateDefinition = (
    shopId: number,
    readinessStateDefinitionId: number,
    data: IUpdateShopReadinessStateDefinitionPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopProcessingProfile, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/readiness-state-definitions/${readinessStateDefinitionId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
