import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class PaymentAdjustmentItem {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get Direct Checkout Payment Adjustment Items
     */
    findPaymentAdjustmentItem<TResult>(parameters: IFindPaymentAdjustmentItemParameters): Promise<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>> {
        return this.client.http<IFindPaymentAdjustmentItemParameters, TResult>("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET");
    }
}
