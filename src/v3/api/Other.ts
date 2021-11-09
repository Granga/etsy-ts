import { IErrorSchema, IPong } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Other<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Check to confirm connectivity to the Etsy API with an application
   *
   * @tags Other
   * @name Ping
   * @request GET:/v3/application/openapi-ping
   * @secure
   * @response `200` `IPong` A confirmation that the current application has access to the Open API
   * @response `401` `IErrorSchema` Missing or invalid API key.
   * @response `404` `IErrorSchema` App does not have the proper permissions to access this resource.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  ping = (params: RequestParams = {}) =>
    this.http.request<IPong, IErrorSchema>({
      path: `/v3/application/openapi-ping`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
