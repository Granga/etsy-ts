import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class PaymentAdjustmentItem {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get Etsy Payments Transaction Adjustment Items
     */
    async findPaymentAdjustmentItems<TResult>(
        params: IFindPaymentAdjustmentItemsParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentItemsParameters, TResult>>> {
        return request<IFindPaymentAdjustmentItemsParameters, TResult>({
            ...this.config,
            url: "/payments/:payment_id/adjustments/:payment_adjustment_id/items",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get an Etsy Payments Transaction Adjustment Item
     */
    async findPaymentAdjustmentItem<TResult>(
        params: IFindPaymentAdjustmentItemParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>>> {
        return request<IFindPaymentAdjustmentItemParameters, TResult>({
            ...this.config,
            url: "/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
