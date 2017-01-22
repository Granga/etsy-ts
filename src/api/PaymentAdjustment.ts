import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class PaymentAdjustment {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get a Payment Adjustments from a Payment Id
     */
    findPaymentAdjustments<TResult>(parameters: IFindPaymentAdjustmentsParameters): Promise<IStandardResponse<IFindPaymentAdjustmentsParameters, TResult>> {
        return this.client.http<IFindPaymentAdjustmentsParameters, TResult>("/payments/:payment_id/adjustments", parameters, "GET");
    }

    /**
     * Get a Direct Checkout Payment Adjustment
     */
    findPaymentAdjustment<TResult>(parameters: IFindPaymentAdjustmentParameters): Promise<IStandardResponse<IFindPaymentAdjustmentParameters, TResult>> {
        return this.client.http<IFindPaymentAdjustmentParameters, TResult>("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET");
    }

    /**
     * Get a Payment Adjustment from a Ledger Entry ID, if applicable
     */
    findPaymentAdjustmentForLedgerEntry<TResult>(parameters: IFindPaymentAdjustmentForLedgerEntryParameters): Promise<IStandardResponse<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>> {
        return this.client.http<IFindPaymentAdjustmentForLedgerEntryParameters, TResult>("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET");
    }
}
