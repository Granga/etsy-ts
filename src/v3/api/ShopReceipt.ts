import {
  ICreateReceiptShipmentPayload,
  IErrorSchema,
  IGetShopReceiptsParams,
  IShopReceipt,
  IShopReceipts,
  IUpdateShopReceiptPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ShopReceipt<SecurityDataType = unknown> {
  protected http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a receipt, identified by a receipt id, from an Etsy shop
   *
   * @tags Shop Receipt
   * @name GetShopReceipt
   * @request GET:/v3/application/shops/{shop_id}/receipts/{receipt_id}
   * @secure
   * @response `200` `IShopReceipt` A single Shop Receipt
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReceipt = (shopId: number, receiptId: number, params: RequestParams = {}) =>
    this.http.request<IShopReceipt, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/receipts/${receiptId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Updates the status of a receipt, identified by a receipt id, from an Etsy shop
   *
   * @tags Shop Receipt
   * @name UpdateShopReceipt
   * @request PUT:/v3/application/shops/{shop_id}/receipts/{receipt_id}
   * @secure
   * @response `200` `IShopReceipt` Update A Shop Receipt
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  updateShopReceipt = (
    shopId: number,
    receiptId: number,
    data: IUpdateShopReceiptPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopReceipt, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/receipts/${receiptId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Requests the Shop Receipts from a specific Shop, unfiltered or filtered by receipt id range or offset, date, paid, and/or shipped purchases.
   *
   * @tags Shop Receipt
   * @name GetShopReceipts
   * @request GET:/v3/application/shops/{shop_id}/receipts
   * @secure
   * @response `200` `IShopReceipts` A list of Shop Receipts
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReceipts = ({ shopId, ...query }: IGetShopReceiptsParams, params: RequestParams = {}) =>
    this.http.request<IShopReceipts, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/receipts`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notification-03 wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/issues/new/choose" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Submits tracking information for a Shop Receipt, which creates a Shop Receipt Shipment entry for the given receipt_id. Each time you successfully submit tracking info, Etsy sends a notification email to the buyer User. When send_bcc is true, Etsy sends shipping notifications to the seller as well. When tracking_code and carrier_name aren't sent, the receipt is marked as shipped only. If the carrier is not supported, you may use `other` as the carrier name so you can provide the tracking code. **NOTE** When shipping within the United States AND the order is over $10 _or_ when shipping to India, tracking code and carrier name ARE required.
   *
   * @tags Shop Receipt
   * @name CreateReceiptShipment
   * @request POST:/v3/application/shops/{shop_id}/receipts/{receipt_id}/tracking
   * @secure
   * @response `200` `IShopReceipt` A single ShopReceipt
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `409` `IErrorSchema` There was a request conflict with the current state of the target resource. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  createReceiptShipment = (
    shopId: number,
    receiptId: number,
    data: ICreateReceiptShipmentPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopReceipt, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/receipts/${receiptId}/tracking`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
