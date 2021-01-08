import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IPaymentAdjustmentItem {
    /**
     * The payment adjustment item's numeric ID.
     */
    payment_adjustment_item_id: number;
    /**
     * The payment adjustment's numeric ID.
     */
    payment_adjustment_id: number;
    /**
     * A human readable string describing the area being refundedOne of: TRANS, TAX, or SHIP
     */
    adjustment_type: string;
    /**
     * The total amount of the payment adjustment item.
     */
    amount: number;
    /**
     * The numerice ID of the Credit Card Transaction
     */
    transaction_id: number;
    /**
     * The date and time the payment adjustment item was created in Epoch seconds.
     */
    create_date: number;
}
export interface IFindPaymentAdjustmentItemsParameters {
    payment_id: number;
    payment_adjustment_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindPaymentAdjustmentItemParameters {
    payment_id: number;
    payment_adjustment_id: number;
    payment_adjustment_item_id: number;
}
export declare class PaymentAdjustmentItem {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Get Etsy Payments Transaction Adjustment Items
     */
    findPaymentAdjustmentItems<TResult>(params: IFindPaymentAdjustmentItemsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentItemsParameters, TResult>>>;
    /**
     * Get an Etsy Payments Transaction Adjustment Item
     */
    findPaymentAdjustmentItem<TResult>(params: IFindPaymentAdjustmentItemParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentItemParameters, TResult>>>;
}
