import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IPaymentAdjustment {
    payment_adjustment_id: number;
    payment_id: number;
    status: string;
    is_success: boolean;
    user_id: number;
    reason_code: string;
    total_adjustment_amount: number;
    shop_total_adjustment_amount: number;
    buyer_total_adjustment_amount: number;
    total_fee_adjustment_amount: number;
    create_date: number;
    update_date: number;
}
export interface IFindPaymentAdjustmentsParameters extends IStandardParameters {
    payment_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindPaymentAdjustmentParameters extends IStandardParameters {
    payment_id: number;
    payment_adjustment_id: number;
}
export interface IFindPaymentAdjustmentForLedgerEntryParameters extends IStandardParameters {
    shop_id: string | number;
    ledger_entry_id: number[];
}
/**
 * Get a Payment Adjustments from a Payment Id
 */
declare function findPaymentAdjustments<TResult>(parameters: IFindPaymentAdjustmentsParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentsParameters, TResult>>;
/**
 * Get a Direct Checkout Payment Adjustment
 */
declare function findPaymentAdjustment<TResult>(parameters: IFindPaymentAdjustmentParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentParameters, TResult>>;
/**
 * Get a Payment Adjustment from a Ledger Entry ID, if applicable
 */
declare function findPaymentAdjustmentForLedgerEntry<TResult>(parameters: IFindPaymentAdjustmentForLedgerEntryParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>>;
export declare const PaymentAdjustment: {
    findPaymentAdjustments: typeof findPaymentAdjustments;
    findPaymentAdjustment: typeof findPaymentAdjustment;
    findPaymentAdjustmentForLedgerEntry: typeof findPaymentAdjustmentForLedgerEntry;
};
export {};
