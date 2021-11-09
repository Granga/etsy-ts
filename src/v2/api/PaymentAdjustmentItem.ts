import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IPaymentAdjustmentItem {
    /**
     * The payment adjustment item's numeric ID.
     */
    payment_adjustment_item_id: number,
    /**
     * The payment adjustment's numeric ID.
     */
    payment_adjustment_id: number,
    /**
     * A human readable string describing the area being refundedOne of: TRANS, TAX, or SHIP
     */
    adjustment_type: string,
    /**
     * The total amount of the payment adjustment item.
     */
    amount: number,
    /**
     * The numerice ID of the Credit Card Transaction
     */
    transaction_id: number,
    /**
     * The date and time the payment adjustment item was created in Epoch seconds.
     */
    create_date: number
}

//parameters types
export interface IFindPaymentAdjustmentItemsParameters {
    payment_id: number,
    payment_adjustment_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindPaymentAdjustmentItemParameters {
    payment_id: number,
    payment_adjustment_id: number,
    payment_adjustment_item_id: number
}

//methods class
export class PaymentAdjustmentItem extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get Etsy Payments Transaction Adjustment Items
     */
    async findPaymentAdjustmentItems<TResult>(
        params: IFindPaymentAdjustmentItemsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentItemsParameters, TResult>>> {
        return this.request<IFindPaymentAdjustmentItemsParameters, TResult>(
            "GET",
            "/payments/:payment_id/adjustments/:payment_adjustment_id/items",
            params,
            extra
        );
    }

    /**
     * Get an Etsy Payments Transaction Adjustment Item
     */
    async findPaymentAdjustmentItem<TResult>(
        params: IFindPaymentAdjustmentItemParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>>> {
        return this.request<IFindPaymentAdjustmentItemParameters, TResult>(
            "GET",
            "/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id",
            params,
            extra
        );
    }
}
