import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function getShop_Receipt2<TResult>(parameters: IGetShopReceipt2Parameters, options?: IOptions): Promise<IStandardResponse<IGetShopReceipt2Parameters, TResult>>;
/**
 * Updates a Shop_Receipt2
 */
declare function updateReceipt<TResult>(parameters: IUpdateReceiptParameters, options?: IOptions): Promise<IStandardResponse<IUpdateReceiptParameters, TResult>>;
/**
 * Retrieves a set of Receipt objects associated to a Shop.
 */
declare function findAllShopReceipts<TResult>(parameters: IFindAllShopReceiptsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopReceiptsParameters, TResult>>;
/**
 * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
 */
declare function submitTracking<TResult>(parameters: ISubmitTrackingParameters, options?: IOptions): Promise<IStandardResponse<ISubmitTrackingParameters, TResult>>;
/**
 * Retrieves a set of Receipt objects associated to a Shop based on the status.
 */
declare function findAllShopReceiptsByStatus<TResult>(parameters: IFindAllShopReceiptsByStatusParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopReceiptsByStatusParameters, TResult>>;
/**
 * Retrieves a set of open Local Delivery Receipt objects associated to a Shop.
 */
declare function findAllOpenLocalDeliveryReceipts<TResult>(parameters: IFindAllOpenLocalDeliveryReceiptsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllOpenLocalDeliveryReceiptsParameters, TResult>>;
/**
 * Searches the set of Receipt objects associated to a Shop by a query
 */
declare function searchAllShopReceipts<TResult>(parameters: ISearchAllShopReceiptsParameters, options?: IOptions): Promise<IStandardResponse<ISearchAllShopReceiptsParameters, TResult>>;
/**
 * Retrieves a set of Receipt objects associated to a User.
 */
declare function findAllUserBuyerReceipts<TResult>(parameters: IFindAllUserBuyerReceiptsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserBuyerReceiptsParameters, TResult>>;
export declare const Receipt: {
    getShop_Receipt2: typeof getShop_Receipt2;
    updateReceipt: typeof updateReceipt;
    findAllShopReceipts: typeof findAllShopReceipts;
    submitTracking: typeof submitTracking;
    findAllShopReceiptsByStatus: typeof findAllShopReceiptsByStatus;
    findAllOpenLocalDeliveryReceipts: typeof findAllOpenLocalDeliveryReceipts;
    searchAllShopReceipts: typeof searchAllShopReceipts;
    findAllUserBuyerReceipts: typeof findAllUserBuyerReceipts;
};
export {};
