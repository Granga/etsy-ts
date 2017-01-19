import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IReceipt {
    receipt_id: number,
    receipt_type: number,
    order_id: number,
    seller_user_id: number,
    buyer_user_id: number,
    creation_tsz: number,
    last_modified_tsz: number,
    name: string,
    first_line: string,
    second_line: string,
    city: string,
    state: string,
    zip: string,
    country_id: number,
    payment_method: string,
    payment_email: string,
    message_from_seller: string,
    message_from_buyer: string,
    was_paid: boolean,
    total_tax_cost: number,
    total_vat_cost: number,
    total_price: number,
    total_shipping_cost: number,
    currency_code: string,
    message_from_payment: string,
    was_shipped: boolean,
    buyer_email: string,
    seller_email: string,
    discount_amt: number,
    subtotal: number,
    grandtotal: number,
    adjusted_grandtotal: number,
    shipping_tracking_code: string,
    shipping_tracking_url: string,
    shipping_carrier: string,
    shipping_note: string,
    shipping_notification_date: number,
    shipments: any[]
}

export interface IGetShop_Receipt2Parameters extends IStandardParameters {
    receipt_id: number[]
}
export interface IUpdateReceiptParameters extends IStandardParameters {
    receipt_id: number,
    was_paid?: boolean,
    was_shipped?: boolean
}
export interface IFindAllShopReceiptsParameters extends IStandardParameters {
    shop_id: string | number,
    min_created?: number,
    max_created?: number,
    min_last_modified?: number,
    max_last_modified?: number,
    limit?: number,
    offset?: number,
    page?: number,
    was_paid?: boolean,
    was_shipped?: boolean
}
export interface ISubmitTrackingParameters extends IStandardParameters {
    tracking_code: string,
    carrier_name: string,
    send_bcc?: boolean
}
export interface IFindAllShopReceiptsByStatusParameters extends IStandardParameters {
    shop_id: string | number,
    status: "open"|"unshipped"|"unpaid"|"completed"|"processing"|"all",
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllOpenLocalDeliveryReceiptsParameters extends IStandardParameters {
    shop_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface ISearchAllShopReceiptsParameters extends IStandardParameters {
    shop_id: string | number,
    search_query: string,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserBuyerReceiptsParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

/**
 * Retrieves a Shop_Receipt2 by id.
 */
export function getShop_Receipt2<TResult>(parameters: IGetShop_Receipt2Parameters): Bluebird<IStandardResponse<TResult, IGetShop_Receipt2Parameters>> {
    return request<IStandardResponse<TResult, IGetShop_Receipt2Parameters>>(parameters, '/receipts/:receipt_id', 'GET');
}
/**
 * Updates a Shop_Receipt2
 */
export function updateReceipt<TResult>(parameters: IUpdateReceiptParameters): Bluebird<IStandardResponse<TResult, IUpdateReceiptParameters>> {
    return request<IStandardResponse<TResult, IUpdateReceiptParameters>>(parameters, '/receipts/:receipt_id', 'PUT');
}
/**
 * Retrieves a set of Receipt objects associated to a Shop.
 */
export function findAllShopReceipts<TResult>(parameters: IFindAllShopReceiptsParameters): Bluebird<IStandardResponse<TResult, IFindAllShopReceiptsParameters>> {
    return request<IStandardResponse<TResult, IFindAllShopReceiptsParameters>>(parameters, '/shops/:shop_id/receipts', 'GET');
}
/**
 * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
 */
export function submitTracking<TResult>(parameters: ISubmitTrackingParameters): Bluebird<IStandardResponse<TResult, ISubmitTrackingParameters>> {
    return request<IStandardResponse<TResult, ISubmitTrackingParameters>>(parameters, '/shops/:shop_id/receipts/:receipt_id/tracking', 'POST');
}
/**
 * Retrieves a set of Receipt objects associated to a Shop based on the status.
 */
export function findAllShopReceiptsByStatus<TResult>(parameters: IFindAllShopReceiptsByStatusParameters): Bluebird<IStandardResponse<TResult, IFindAllShopReceiptsByStatusParameters>> {
    return request<IStandardResponse<TResult, IFindAllShopReceiptsByStatusParameters>>(parameters, '/shops/:shop_id/receipts/:status', 'GET');
}
/**
 * Retrieves a set of open Local Delivery Receipt objects associated to a Shop.
 */
export function findAllOpenLocalDeliveryReceipts<TResult>(parameters: IFindAllOpenLocalDeliveryReceiptsParameters): Bluebird<IStandardResponse<TResult, IFindAllOpenLocalDeliveryReceiptsParameters>> {
    return request<IStandardResponse<TResult, IFindAllOpenLocalDeliveryReceiptsParameters>>(parameters, '/shops/:shop_id/receipts/local-delivery', 'GET');
}
/**
 * Searches the set of Receipt objects associated to a Shop by a query
 */
export function searchAllShopReceipts<TResult>(parameters: ISearchAllShopReceiptsParameters): Bluebird<IStandardResponse<TResult, ISearchAllShopReceiptsParameters>> {
    return request<IStandardResponse<TResult, ISearchAllShopReceiptsParameters>>(parameters, '/shops/:shop_id/receipts/search', 'GET');
}
/**
 * Retrieves a set of Receipt objects associated to a User.
 */
export function findAllUserBuyerReceipts<TResult>(parameters: IFindAllUserBuyerReceiptsParameters): Bluebird<IStandardResponse<TResult, IFindAllUserBuyerReceiptsParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserBuyerReceiptsParameters>>(parameters, '/users/:user_id/receipts', 'GET');
}
