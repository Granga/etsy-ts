import {
  IErrorSchema,
  IGetShopReceiptTransactionsByListingParams,
  IGetShopReceiptTransactionsByShopParams,
  IShopReceiptTransaction,
  IShopReceiptTransactions,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ShopReceiptTransactions {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the list of transactions associated with a listing.
   *
   * @tags Shop Receipt Transactions
   * @name GetShopReceiptTransactionsByListing
   * @request GET:/v3/application/shops/{shop_id}/listings/{listing_id}/transactions
   * @secure
   * @response `200` `IShopReceiptTransactions` A list of transactions
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReceiptTransactionsByListing = (
    { shopId, listingId, ...query }: IGetShopReceiptTransactionsByListingParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopReceiptTransactions, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/listings/${listingId}/transactions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the list of transactions associated with a specific receipt.
   *
   * @tags Shop Receipt Transactions
   * @name GetShopReceiptTransactionsByReceipt
   * @request GET:/v3/application/shops/{shop_id}/receipts/{receipt_id}/transactions
   * @secure
   * @response `200` `IShopReceiptTransactions` A list of transactions
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReceiptTransactionsByReceipt = (shopId: number, receiptId: number, params: RequestParams = {}) =>
    this.http.request<IShopReceiptTransactions, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/receipts/${receiptId}/transactions`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves a transaction by transaction ID.
   *
   * @tags Shop Receipt Transactions
   * @name GetShopReceiptTransaction
   * @request GET:/v3/application/shops/{shop_id}/transactions/{transaction_id}
   * @secure
   * @response `200` `IShopReceiptTransaction` A single transaction
   * @response `400` `IErrorSchema` There was a problem with the request data. See the error message for details.
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReceiptTransaction = (shopId: number, transactionId: number, params: RequestParams = {}) =>
    this.http.request<IShopReceiptTransaction, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/transactions/${transactionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description <div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><span class="wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2">General Release</span><a class="wt-text-link" href="https://github.com/etsy/open-api/discussions" target="_blank" rel="noopener noreferrer">Report bug</a></div><div class="wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3"><p class="wt-text-body-01 banner-text">This endpoint is ready for production use.</p></div> Retrieves the list of transactions associated with a shop.
   *
   * @tags Shop Receipt Transactions
   * @name GetShopReceiptTransactionsByShop
   * @request GET:/v3/application/shops/{shop_id}/transactions
   * @secure
   * @response `200` `IShopReceiptTransactions` A list of transactions
   * @response `401` `IErrorSchema` The request lacks valid authentication credentials. See the error message for details.
   * @response `403` `IErrorSchema` The request attempted to perform an operation it is not allowed to. See the error message for details.
   * @response `404` `IErrorSchema` A resource could not be found. See the error message for details.
   * @response `500` `IErrorSchema` The server encountered an internal error. See the error message for details.
   */
  getShopReceiptTransactionsByShop = (
    { shopId, ...query }: IGetShopReceiptTransactionsByShopParams,
    params: RequestParams = {},
  ) =>
    this.http.request<IShopReceiptTransactions, IErrorSchema>({
      path: `/v3/application/shops/${shopId}/transactions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
