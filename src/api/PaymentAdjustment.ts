import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IPaymentAdjustment {
    payment_adjustment_id: number,
    payment_id: number,
    status: string,
    is_success: boolean,
    user_id: number,
    reason_code: string,
    total_adjustment_amount: number,
    shop_total_adjustment_amount: number,
    buyer_total_adjustment_amount: number,
    total_fee_adjustment_amount: number,
    create_date: number,
    update_date: number
}

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

/**
 * Get a Payment Adjustments from a Payment Id
 */
export function findPaymentAdjustments<TResult>(parameters: IFindPaymentAdjustmentsParameters): Bluebird<IStandardResponse<TResult, IFindPaymentAdjustmentsParameters>> {
    return request<IStandardResponse<TResult, IFindPaymentAdjustmentsParameters>>(parameters, '/payments/:payment_id/adjustments', 'GET');
}
/**
 * Get a Direct Checkout Payment Adjustment
 */
export function findPaymentAdjustment<TResult>(parameters: IFindPaymentAdjustmentParameters): Bluebird<IStandardResponse<TResult, IFindPaymentAdjustmentParameters>> {
    return request<IStandardResponse<TResult, IFindPaymentAdjustmentParameters>>(parameters, '/payments/:payment_id/adjustments/:payment_adjustment_id', 'GET');
}
/**
 * Get a Payment Adjustment from a Ledger Entry ID, if applicable
 */
export function findPaymentAdjustmentForLedgerEntry<TResult>(parameters: IFindPaymentAdjustmentForLedgerEntryParameters): Bluebird<IStandardResponse<TResult, IFindPaymentAdjustmentForLedgerEntryParameters>> {
    return request<IStandardResponse<TResult, IFindPaymentAdjustmentForLedgerEntryParameters>>(parameters, '/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment', 'GET');
}
