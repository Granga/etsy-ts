import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IFindPaymentAdjustmentsParameters {
    payment_id: number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindPaymentAdjustmentParameters {
    payment_id: number,
    payment_adjustment_id: number
}

export interface IFindPaymentAdjustmentForLedgerEntryParameters {
    shop_id: string | number,
    ledger_entry_id: number[]
}

export interface IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters {
    shop_id: string | number,
    ledger_entry_id: number[]
}

//methods class
export class PaymentAdjustment extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get a Payment Adjustments from a Payment Id
     */
    async findPaymentAdjustments<TResult>(
        params: IFindPaymentAdjustmentsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentsParameters, TResult>>> {
        return this.request<IFindPaymentAdjustmentsParameters, TResult>("GET", "/payments/:payment_id/adjustments", params, extra);
    }

    /**
     * Get an Etsy Payments Transaction Adjustment
     */
    async findPaymentAdjustment<TResult>(
        params: IFindPaymentAdjustmentParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentParameters, TResult>>> {
        return this.request<IFindPaymentAdjustmentParameters, TResult>(
            "GET",
            "/payments/:payment_id/adjustments/:payment_adjustment_id",
            params,
            extra
        );
    }

    /**
     * Get a Payment Adjustment from a Ledger Entry ID, if applicable
     */
    async findPaymentAdjustmentForLedgerEntry<TResult>(
        params: IFindPaymentAdjustmentForLedgerEntryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>>> {
        return this.request<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>(
            "GET",
            "/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment",
            params,
            extra
        );
    }

    /**
     * Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
     */
    async findPaymentAdjustmentForPaymentAccountLedgerEntry<TResult>(
        params: IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters, TResult>>> {
        return this.request<IFindPaymentAdjustmentForPaymentAccountLedgerEntryParameters, TResult>(
            "GET",
            "/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment",
            params,
            extra
        );
    }
}
