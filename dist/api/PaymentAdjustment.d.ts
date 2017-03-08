import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findPaymentAdjustments<TResult>(parameters: IFindPaymentAdjustmentsParameters): Promise<IStandardResponse<IFindPaymentAdjustmentsParameters, TResult>>;
/**
 * Get a Direct Checkout Payment Adjustment
 */
export declare function findPaymentAdjustment<TResult>(parameters: IFindPaymentAdjustmentParameters): Promise<IStandardResponse<IFindPaymentAdjustmentParameters, TResult>>;
/**
 * Get a Payment Adjustment from a Ledger Entry ID, if applicable
 */
export declare function findPaymentAdjustmentForLedgerEntry<TResult>(parameters: IFindPaymentAdjustmentForLedgerEntryParameters): Promise<IStandardResponse<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>>;
export declare const PaymentAdjustment: {
    findPaymentAdjustments: <TResult>(parameters: IFindPaymentAdjustmentsParameters) => Promise<IStandardResponse<IFindPaymentAdjustmentsParameters, TResult>>;
    findPaymentAdjustment: <TResult>(parameters: IFindPaymentAdjustmentParameters) => Promise<IStandardResponse<IFindPaymentAdjustmentParameters, TResult>>;
    findPaymentAdjustmentForLedgerEntry: <TResult>(parameters: IFindPaymentAdjustmentForLedgerEntryParameters) => Promise<IStandardResponse<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>>;
};
