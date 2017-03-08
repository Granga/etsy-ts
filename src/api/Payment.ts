import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function findPayment <TResult>(parameters: IFindPaymentParameters): Promise<IStandardResponse<IFindPaymentParameters, TResult>> {
    return request<IFindPaymentParameters, TResult>("/payments/:payment_id", parameters, "GET");
}
/**
 * Get a Payment from a Ledger Entry ID, if applicable
 */
export function findPaymentForLedgerEntry <TResult>(parameters: IFindPaymentForLedgerEntryParameters): Promise<IStandardResponse<IFindPaymentForLedgerEntryParameters, TResult>> {
    return request<IFindPaymentForLedgerEntryParameters, TResult>("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment", parameters, "GET");
}
/**
 * Get a Payment by Shop Receipt ID
 */
export function findShopPaymentByReceipt <TResult>(parameters: IFindShopPaymentByReceiptParameters): Promise<IStandardResponse<IFindShopPaymentByReceiptParameters, TResult>> {
    return request<IFindShopPaymentByReceiptParameters, TResult>("/shops/:shop_id/receipts/:receipt_id/payments", parameters, "GET");
}

export const Payment = {findPayment, findPaymentForLedgerEntry, findShopPaymentByReceipt};
