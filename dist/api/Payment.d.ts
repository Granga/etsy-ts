/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IPayment {
    payment_id: number;
    buyer_user_id: number;
    shop_id: number;
    receipt_id: number;
    amount_gross: number;
    amount_fees: number;
    amount_net: number;
    posted_gross: number;
    posted_fees: number;
    posted_net: number;
    adjusted_gross: number;
    adjusted_fees: number;
    adjusted_net: number;
    currency: string;
    shop_currency: string;
    buyer_currency: string;
    shipping_user_id: number;
    shipping_address_id: number;
    billing_address_id: number;
    status: string;
    shipped_date: number;
    create_date: number;
    update_date: number;
}
export interface IFindPaymentParameters extends IStandardParameters {
    payment_id: number[];
}
export interface IFindPaymentForLedgerEntryParameters extends IStandardParameters {
    shop_id: string | number;
    ledger_entry_id: number[];
}
export interface IFindShopPaymentByReceiptParameters extends IStandardParameters {
    receipt_id: number;
    shop_id: string | number;
}
/**
 * Get a Direct Checkout Payment
 */
export declare function findPayment<TResult>(parameters: IFindPaymentParameters): Bluebird<IStandardResponse<TResult, IFindPaymentParameters>>;
/**
 * Get a Payment from a Ledger Entry ID, if applicable
 */
export declare function findPaymentForLedgerEntry<TResult>(parameters: IFindPaymentForLedgerEntryParameters): Bluebird<IStandardResponse<TResult, IFindPaymentForLedgerEntryParameters>>;
/**
 * Get a Payment by Shop Receipt ID
 */
export declare function findShopPaymentByReceipt<TResult>(parameters: IFindShopPaymentByReceiptParameters): Bluebird<IStandardResponse<TResult, IFindShopPaymentByReceiptParameters>>;
