import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IPaymentAdjustmentItem {
    payment_adjustment_item_id: number,
    payment_adjustment_id: number,
    adjustment_type: string,
    amount: number,
    transaction_id: number,
    create_date: number
}

//parameters types
export interface IFindPaymentAdjustmentItemParameters extends IStandardParameters {
    payment_id: number,
    payment_adjustment_id: number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods
/**
 * Get Direct Checkout Payment Adjustment Items
 */
function findPaymentAdjustmentItem <TResult>(parameters: IFindPaymentAdjustmentItemParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>> {
    return request<IFindPaymentAdjustmentItemParameters, TResult>("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET", options);
}

export const PaymentAdjustmentItem = {findPaymentAdjustmentItem};
