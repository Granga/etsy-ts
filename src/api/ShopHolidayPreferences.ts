import { IErrorSchema, IShopHolidayPreference, IUpdateHolidayPreferencesPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopHolidayPreferences {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a list of holidays that are available to a shop to set a preference for. Currently only supported in the US and CA
   *
   * @tags Shop HolidayPreferences
   * @name GetHolidayPreferences
   * @request GET:/v3/application/shops/{shop_id}/holiday-preferences
   * @secure
   * @response `200` `(IShopHolidayPreference)[]` A list of holiday preferences
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getHolidayPreferences = (shopId: number, params: RequestParams = {}) =>
    this.http.request<IShopHolidayPreference[], IErrorSchema>({
      path: `/v3/application/shops/${shopId}/holiday-preferences`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates the preference for whether the seller will process orders or not on the holiday. Currently only supported in the US and CA
   *
   * @tags Shop HolidayPreferences
   * @name UpdateHolidayPreferences
   * @request PUT:/v3/application/shops/{shop_id}/holiday-preferences/{holiday_id}
   * @secure
   * @response `200` `IShopHolidayPreference` The updated holiday preferences
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateHolidayPreferences = (
    shopId: number,
    holidayId:
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "13"
      | "14"
      | "15"
      | "16"
      | "17"
      | "18"
      | "19"
      | "20"
      | "21"
      | "22"
      | "23"
      | "24"
      | "25"
      | "26"
      | "27"
      | "28"
      | "29"
      | "30"
      | "31"
      | "32"
      | "33"
      | "34"
      | "35"
      | "36"
      | "37"
      | "38"
      | "39"
      | "40"
      | "41"
      | "42"
      | "43"
      | "44"
      | "45"
      | "46"
      | "47"
      | "48"
      | "49"
      | "50"
      | "51"
      | "52"
      | "53"
      | "54"
      | "55"
      | "56"
      | "57"
      | "58"
      | "59"
      | "60"
      | "61"
      | "62"
      | "63"
      | "64"
      | "65"
      | "66"
      | "67"
      | "68"
      | "69"
      | "70"
      | "71"
      | "72"
      | "73"
      | "74"
      | "75"
      | "76"
      | "77"
      | "78"
      | "79"
      | "80"
      | "81"
      | "82"
      | "83"
      | "84"
      | "85"
      | "86"
      | "87"
      | "88"
      | "89"
      | "90"
      | "91"
      | "92"
      | "93"
      | "94"
      | "95"
      | "96"
      | "97"
      | "98"
      | "99"
      | "100"
      | "101"
      | "102"
      | "103"
      | "104"
      | "105",
    data: IUpdateHolidayPreferencesPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopHolidayPreference, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/holiday-preferences/${holidayId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
