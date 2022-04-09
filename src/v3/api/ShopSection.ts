import { ICreateShopSectionPayload, IErrorSchema, IShopSection, IShopSections } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopSection<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Creates a new section in a specific shop.
   *
   * @tags Shop Section
   * @name CreateShopSection
   * @request POST:/v3/application/shops/{shop_id}/sections
   * @secure
   * @response `200` `IShopSection` A Shop Section resource
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   * @response `503` `IErrorSchema` This function is temporarily unavailable. Please try again later.
   */
  createShopSection = (shopId: number, data: ICreateShopSectionPayload, params: RequestParams = {}) =>
    this.http.request<IShopSection, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/sections`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the list of shop sections in a specific shop identified by shop ID.
   *
   * @tags Shop Section
   * @name GetShopSections
   * @request GET:/v3/application/shops/{shop_id}/sections
   * @secure
   * @response `200` `IShopSections` A list of shop sections.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopSections = (shopId: number, params: RequestParams = {}) =>
    this.http.request<IShopSections, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/sections`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a shop section, referenced by section ID and shop ID.
   *
   * @tags Shop Section
   * @name GetShopSection
   * @request GET:/v3/application/shops/{shop_id}/sections/{shop_section_id}
   * @secure
   * @response `200` `IShopSection` A shop section resource
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopSection = (shopId: number, shopSectionId: number, params: RequestParams = {}) =>
    this.http.request<IShopSection, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/sections/${shopSectionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
