import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IPaymentAdjustmentItem {
    payment_adjustment_item_id: number;
    payment_adjustment_id: number;
    adjustment_type: string;
    amount: number;
    transaction_id: number;
    create_date: number;
}
export interface IFindPaymentAdjustmentItemParameters extends IStandardParameters {
    payment_id: number;
    payment_adjustment_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
/**
 * Get Direct Checkout Payment Adjustment Items
 */
export declare function findPaymentAdjustmentItem<TResult>(parameters: IFindPaymentAdjustmentItemParameters): Promise<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>>;
export declare const PaymentAdjustmentItem: {
    findPaymentAdjustmentItem: <TResult>(parameters: IFindPaymentAdjustmentItemParameters) => Promise<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>>;
};
