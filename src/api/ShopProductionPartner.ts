import { IErrorSchema, IShopProductionPartners } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ShopProductionPartner<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of production partners available in the specific Etsy shop identified by its shop ID.
   *
   * @tags Shop ProductionPartner
   * @name GetShopProductionPartners
   * @request GET:/v3/application/shops/{shop_id}/production-partners
   * @secure
   * @response `200` `IShopProductionPartners` A list of shop production partners
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopProductionPartners = (shopId: number, params: RequestParams = {}) =>
    this.http.request<IShopProductionPartners, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/production-partners`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
