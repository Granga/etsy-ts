import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IPaymentAdjustment {
    /**
     * The payment adjustment's numeric ID.
     */
    payment_adjustment_id: number,
    /**
     * The payment's numeric ID.
     */
    payment_id: number,
    /**
     * The status of the Payment Adjustment. Can be OPEN, REFUNDED, ERROR, or REFUND_FAILED.
     */
    status: string,
    /**
     * Whether the Payment Adjustment was successful or will likely be completed successfully.
     */
    is_success: boolean,
    /**
     * The seller's numeric ID.
     */
    user_id: number,
    /**
     * A human-readable string describing the need for the refund.
     */
    reason_code: string,
    /**
     * The total amount of the refund in the payment currency.
     */
    total_adjustment_amount: number,
    /**
     * The total amount of the refund in the shop currency.
     */
    shop_total_adjustment_amount: number,
    /**
     * The total amount of the refund in the buyer currency.
     */
    buyer_total_adjustment_amount: number,
    /**
     * The amount of card processing fees associated with this adjustment.
     */
    total_fee_adjustment_amount: number,
    /**
     * The date and time the payment adjustment was created in Epoch seconds.
     */
    create_date: number,
    /**
     * The date and time the payment adjustment was last updated in Epoch seconds.
     */
    update_date: number
}

//parameters types
export interface IFindPaymentAdjustmentsParameters extends IStandardParameters {
    payment_id: number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindPaymentAdjustmentParameters extends IStandardParameters {
    payment_id: number,
    payment_adjustment_id: number
}

export interface IFindPaymentAdjustmentForLedgerEntryParameters extends IStandardParameters {
    shop_id: string | number,
    ledger_entry_id: number[]
}

export interface IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters extends IStandardParameters {
    shop_id: string | number,
    ledger_entry_id: number[]
}

//methods
/**
 * Get a Payment Adjustments from a Payment Id
 */
function findPaymentAdjustments<TResult>(parameters: IFindPaymentAdjustmentsParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentsParameters, TResult>> {
    return request<IFindPaymentAdjustmentsParameters, TResult>("/payments/:payment_id/adjustments", parameters, "GET", options);
}

/**
 * Get an Etsy Payments Transaction Adjustment
 */
function findPaymentAdjustment<TResult>(parameters: IFindPaymentAdjustmentParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentParameters, TResult>> {
    return request<IFindPaymentAdjustmentParameters, TResult>("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET", options);
}

/**
 * Get a Payment Adjustment from a Ledger Entry ID, if applicable
 */
function findPaymentAdjustmentForLedgerEntry<TResult>(parameters: IFindPaymentAdjustmentForLedgerEntryParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>> {
    return request<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
}

/**
 * Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
 */
function findPaymentAdjustmentForPaymentAccountLedgerEntry<TResult>(parameters: IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters, TResult>> {
    return request<IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters, TResult>("/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
}

export const PaymentAdjustment = {
    findPaymentAdjustments,
    findPaymentAdjustment,
    findPaymentAdjustmentForLedgerEntry,
    findPaymentAdjustmentForPaymentAccountLedgerEntry
};
