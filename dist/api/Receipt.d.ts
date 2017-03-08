import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IReceipt {
    receipt_id: number;
    receipt_type: number;
    order_id: number;
    seller_user_id: number;
    buyer_user_id: number;
    creation_tsz: number;
    last_modified_tsz: number;
    name: string;
    first_line: string;
    second_line: string;
    city: string;
    state: string;
    zip: string;
    country_id: number;
    payment_method: string;
    payment_email: string;
    message_from_seller: string;
    message_from_buyer: string;
    was_paid: boolean;
    total_tax_cost: number;
    total_vat_cost: number;
    total_price: number;
    total_shipping_cost: number;
    currency_code: string;
    message_from_payment: string;
    was_shipped: boolean;
    buyer_email: string;
    seller_email: string;
    discount_amt: number;
    subtotal: number;
    grandtotal: number;
    adjusted_grandtotal: number;
    shipping_tracking_code: string;
    shipping_tracking_url: string;
    shipping_carrier: string;
    shipping_note: string;
    shipping_notification_date: number;
    shipments: any[];
}
export interface IGetShopReceipt2Parameters extends IStandardParameters {
    receipt_id: number[];
}
export interface IUpdateReceiptParameters extends IStandardParameters {
    receipt_id: number;
    was_paid?: boolean;
    was_shipped?: boolean;
}
export interface IFindAllShopReceiptsParameters extends IStandardParameters {
    shop_id: string | number;
    min_created?: number;
    max_created?: number;
    min_last_modified?: number;
    max_last_modified?: number;
    limit?: number;
    offset?: number;
    page?: number;
    was_paid?: boolean;
    was_shipped?: boolean;
}
export interface ISubmitTrackingParameters extends IStandardParameters {
    tracking_code: string;
    carrier_name: string;
    send_bcc?: boolean;
}
export interface IFindAllShopReceiptsByStatusParameters extends IStandardParameters {
    shop_id: string | number;
    status: "open" | "unshipped" | "unpaid" | "completed" | "processing" | "all";
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllOpenLocalDeliveryReceiptsParameters extends IStandardParameters {
    shop_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface ISearchAllShopReceiptsParameters extends IStandardParameters {
    shop_id: string | number;
    search_query: string;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserBuyerReceiptsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
/**
 * Retrieves a Shop_Receipt2 by id.
 */
export declare function getShop_Receipt2<TResult>(parameters: IGetShopReceipt2Parameters): Promise<IStandardResponse<IGetShopReceipt2Parameters, TResult>>;
/**
 * Updates a Shop_Receipt2
 */
export declare function updateReceipt<TResult>(parameters: IUpdateReceiptParameters): Promise<IStandardResponse<IUpdateReceiptParameters, TResult>>;
/**
 * Retrieves a set of Receipt objects associated to a Shop.
 */
export declare function findAllShopReceipts<TResult>(parameters: IFindAllShopReceiptsParameters): Promise<IStandardResponse<IFindAllShopReceiptsParameters, TResult>>;
/**
 * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
 */
export declare function submitTracking<TResult>(parameters: ISubmitTrackingParameters): Promise<IStandardResponse<ISubmitTrackingParameters, TResult>>;
/**
 * Retrieves a set of Receipt objects associated to a Shop based on the status.
 */
export declare function findAllShopReceiptsByStatus<TResult>(parameters: IFindAllShopReceiptsByStatusParameters): Promise<IStandardResponse<IFindAllShopReceiptsByStatusParameters, TResult>>;
/**
 * Retrieves a set of open Local Delivery Receipt objects associated to a Shop.
 */
export declare function findAllOpenLocalDeliveryReceipts<TResult>(parameters: IFindAllOpenLocalDeliveryReceiptsParameters): Promise<IStandardResponse<IFindAllOpenLocalDeliveryReceiptsParameters, TResult>>;
/**
 * Searches the set of Receipt objects associated to a Shop by a query
 */
export declare function searchAllShopReceipts<TResult>(parameters: ISearchAllShopReceiptsParameters): Promise<IStandardResponse<ISearchAllShopReceiptsParameters, TResult>>;
/**
 * Retrieves a set of Receipt objects associated to a User.
 */
export declare function findAllUserBuyerReceipts<TResult>(parameters: IFindAllUserBuyerReceiptsParameters): Promise<IStandardResponse<IFindAllUserBuyerReceiptsParameters, TResult>>;
export declare const Receipt: {
    getShop_Receipt2: <TResult>(parameters: IGetShopReceipt2Parameters) => Promise<IStandardResponse<IGetShopReceipt2Parameters, TResult>>;
    updateReceipt: <TResult>(parameters: IUpdateReceiptParameters) => Promise<IStandardResponse<IUpdateReceiptParameters, TResult>>;
    findAllShopReceipts: <TResult>(parameters: IFindAllShopReceiptsParameters) => Promise<IStandardResponse<IFindAllShopReceiptsParameters, TResult>>;
    submitTracking: <TResult>(parameters: ISubmitTrackingParameters) => Promise<IStandardResponse<ISubmitTrackingParameters, TResult>>;
    findAllShopReceiptsByStatus: <TResult>(parameters: IFindAllShopReceiptsByStatusParameters) => Promise<IStandardResponse<IFindAllShopReceiptsByStatusParameters, TResult>>;
    findAllOpenLocalDeliveryReceipts: <TResult>(parameters: IFindAllOpenLocalDeliveryReceiptsParameters) => Promise<IStandardResponse<IFindAllOpenLocalDeliveryReceiptsParameters, TResult>>;
    searchAllShopReceipts: <TResult>(parameters: ISearchAllShopReceiptsParameters) => Promise<IStandardResponse<ISearchAllShopReceiptsParameters, TResult>>;
    findAllUserBuyerReceipts: <TResult>(parameters: IFindAllUserBuyerReceiptsParameters) => Promise<IStandardResponse<IFindAllUserBuyerReceiptsParameters, TResult>>;
};
