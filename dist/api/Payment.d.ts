import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const Payment: {
    findPayment: <TResult>(parameters: IFindPaymentParameters, options?: IOptions) => Promise<IStandardResponse<IFindPaymentParameters, TResult>>;
    findPaymentForLedgerEntry: <TResult>(parameters: IFindPaymentForLedgerEntryParameters, options?: IOptions) => Promise<IStandardResponse<IFindPaymentForLedgerEntryParameters, TResult>>;
    findShopPaymentByReceipt: <TResult>(parameters: IFindShopPaymentByReceiptParameters, options?: IOptions) => Promise<IStandardResponse<IFindShopPaymentByReceiptParameters, TResult>>;
};
