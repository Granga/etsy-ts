import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IBillPayment {
    /**
     * The numeric ID for this bill payment record.
     */
    bill_payment_id: number;
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * The name of the type of payment.
     */
    type: string;
    /**
     * The Listing or Transaction ID (or LedgerEntry ID in the case of a ledger payment) to which the payment applies.
     */
    type_id: number;
    /**
     * The user's numeric ID.
     */
    user_id: number;
    /**
     * The amount paid.
     */
    amount: number;
    /**
     * The currency of the payment.
     */
    currency_code: string;
    /**
     * Month that the payment was made.
     */
    creation_month: number;
    /**
     * Year that the payment was made.
     */
    creation_year: number;
}
export interface IFindAllUserPaymentsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    user_id: string | number;
    sort_order?: "up" | "down";
    min_created?: number;
    max_created?: number;
}
export declare class BillPayment {
    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    static findAllUserPayments<TResult>(parameters: IFindAllUserPaymentsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserPaymentsParameters, TResult>>;
}
