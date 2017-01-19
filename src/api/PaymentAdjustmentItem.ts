import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IPaymentAdjustmentItem {
    payment_adjustment_item_id: number,
    payment_adjustment_id: number,
    adjustment_type: string,
    amount: number,
    transaction_id: number,
    create_date: number
}

export interface IFindPaymentAdjustmentItemParameters extends IStandardParameters {
    payment_id: number,
    payment_adjustment_id: number,
    limit?: number,
    offset?: number,
    page?: number
}

/**
 * Get Direct Checkout Payment Adjustment Items
 */
export function findPaymentAdjustmentItem<TResult>(parameters: IFindPaymentAdjustmentItemParameters): Bluebird<IStandardResponse<TResult, IFindPaymentAdjustmentItemParameters>> {
    return request<IStandardResponse<TResult, IFindPaymentAdjustmentItemParameters>>(parameters, '/payments/:payment_id/adjustments/:payment_adjustment_id/items', 'GET');
}
