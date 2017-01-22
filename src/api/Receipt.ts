import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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


export interface IGetShopReceipt2Parameters extends IStandardParameters {
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

export class Receipt {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a Shop_Receipt2 by id.
     */
    getShop_Receipt2<TResult>(parameters: IGetShopReceipt2Parameters): Promise<IStandardResponse<IGetShopReceipt2Parameters, TResult>> {
        return this.client.http<IGetShopReceipt2Parameters, TResult>("/receipts/:receipt_id", parameters, "GET");
    }

    /**
     * Updates a Shop_Receipt2
     */
    updateReceipt<TResult>(parameters: IUpdateReceiptParameters): Promise<IStandardResponse<IUpdateReceiptParameters, TResult>> {
        return this.client.http<IUpdateReceiptParameters, TResult>("/receipts/:receipt_id", parameters, "PUT");
    }

    /**
     * Retrieves a set of Receipt objects associated to a Shop.
     */
    findAllShopReceipts<TResult>(parameters: IFindAllShopReceiptsParameters): Promise<IStandardResponse<IFindAllShopReceiptsParameters, TResult>> {
        return this.client.http<IFindAllShopReceiptsParameters, TResult>("/shops/:shop_id/receipts", parameters, "GET");
    }

    /**
     * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
     */
    submitTracking<TResult>(parameters: ISubmitTrackingParameters): Promise<IStandardResponse<ISubmitTrackingParameters, TResult>> {
        return this.client.http<ISubmitTrackingParameters, TResult>("/shops/:shop_id/receipts/:receipt_id/tracking", parameters, "POST");
    }

    /**
     * Retrieves a set of Receipt objects associated to a Shop based on the status.
     */
    findAllShopReceiptsByStatus<TResult>(parameters: IFindAllShopReceiptsByStatusParameters): Promise<IStandardResponse<IFindAllShopReceiptsByStatusParameters, TResult>> {
        return this.client.http<IFindAllShopReceiptsByStatusParameters, TResult>("/shops/:shop_id/receipts/:status", parameters, "GET");
    }

    /**
     * Retrieves a set of open Local Delivery Receipt objects associated to a Shop.
     */
    findAllOpenLocalDeliveryReceipts<TResult>(parameters: IFindAllOpenLocalDeliveryReceiptsParameters): Promise<IStandardResponse<IFindAllOpenLocalDeliveryReceiptsParameters, TResult>> {
        return this.client.http<IFindAllOpenLocalDeliveryReceiptsParameters, TResult>("/shops/:shop_id/receipts/local-delivery", parameters, "GET");
    }

    /**
     * Searches the set of Receipt objects associated to a Shop by a query
     */
    searchAllShopReceipts<TResult>(parameters: ISearchAllShopReceiptsParameters): Promise<IStandardResponse<ISearchAllShopReceiptsParameters, TResult>> {
        return this.client.http<ISearchAllShopReceiptsParameters, TResult>("/shops/:shop_id/receipts/search", parameters, "GET");
    }

    /**
     * Retrieves a set of Receipt objects associated to a User.
     */
    findAllUserBuyerReceipts<TResult>(parameters: IFindAllUserBuyerReceiptsParameters): Promise<IStandardResponse<IFindAllUserBuyerReceiptsParameters, TResult>> {
        return this.client.http<IFindAllUserBuyerReceiptsParameters, TResult>("/users/:user_id/receipts", parameters, "GET");
    }
}
