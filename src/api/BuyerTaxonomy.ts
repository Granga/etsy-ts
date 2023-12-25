import { IBuyerTaxonomyNodeProperties, IBuyerTaxonomyNodes, IErrorSchema } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class BuyerTaxonomy {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the full hierarchy tree of buyer taxonomy nodes.
   *
   * @tags BuyerTaxonomy
   * @name GetBuyerTaxonomyNodes
   * @request GET:/v3/application/buyer-taxonomy/nodes
   * @secure
   * @response `200` `IBuyerTaxonomyNodes` List the full hierarchy tree of buyer taxonomy nodes.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getBuyerTaxonomyNodes = (params: RequestParams = {}) =>
    this.http.request<IBuyerTaxonomyNodes, IErrorSchema>({
      path: `/v3/application/buyer-taxonomy/nodes`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of product properties, with applicable scales and values, supported for a specific buyer taxonomy ID.
   *
   * @tags BuyerTaxonomy
   * @name GetPropertiesByBuyerTaxonomyId
   * @request GET:/v3/application/buyer-taxonomy/nodes/{taxonomy_id}/properties
   * @secure
   * @response `200` `IBuyerTaxonomyNodeProperties` A list of product properties, with applicable scales and values.
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getPropertiesByBuyerTaxonomyId = (taxonomyId: number, params: RequestParams = {}) =>
    this.http.request<IBuyerTaxonomyNodeProperties, IErrorSchema>({
      path: `/v3/application/buyer-taxonomy/nodes/${taxonomyId}/properties`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
