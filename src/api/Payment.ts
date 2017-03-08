import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IPayment {
    payment_id: number,
    buyer_user_id: number,
    shop_id: number,
    receipt_id: number,
    amount_gross: number,
    amount_fees: number,
    amount_net: number,
    posted_gross: number,
    posted_fees: number,
    posted_net: number,
    adjusted_gross: number,
    adjusted_fees: number,
    adjusted_net: number,
    currency: string,
    shop_currency: string,
    buyer_currency: string,
    shipping_user_id: number,
    shipping_address_id: number,
    billing_address_id: number,
    status: string,
    shipped_date: number,
    create_date: number,
    update_date: number
}

//parameters types
export interface IFindPaymentParameters extends IStandardParameters {
    payment_id: number[]
}
export interface IFindPaymentForLedgerEntryParameters extends IStandardParameters {
    shop_id: string | number,
    ledger_entry_id: number[]
}
export interface IFindShopPaymentByReceiptParameters extends IStandardParameters {
    receipt_id: number,
    shop_id: string | number
}

//methods
/**
 * Get a Direct Checkout Payment
 */
function findPayment <TResult>(parameters: IFindPaymentParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentParameters, TResult>> {
    return request<IFindPaymentParameters, TResult>("/payments/:payment_id", parameters, "GET", options);
}
/**
 * Get a Payment from a Ledger Entry ID, if applicable
 */
function findPaymentForLedgerEntry <TResult>(parameters: IFindPaymentForLedgerEntryParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentForLedgerEntryParameters, TResult>> {
    return request<IFindPaymentForLedgerEntryParameters, TResult>("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET", options);
}
/**
 * Get a Payment by Shop Receipt ID
 */
function findShopPaymentByReceipt <TResult>(parameters: IFindShopPaymentByReceiptParameters, options?: IOptions): Promise<IStandardResponse<IFindShopPaymentByReceiptParameters, TResult>> {
    return request<IFindShopPaymentByReceiptParameters, TResult>("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET", options);
}

export const Payment = {findPayment, findPaymentForLedgerEntry, findShopPaymentByReceipt};
