import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IBillPayment {
    bill_payment_id: number;
    creation_tsz: number;
    type: string;
    type_id: number;
    user_id: number;
    amount: number;
    currency_code: string;
    creation_month: number;
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
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    findAllUserPayments<TResult>(parameters: IFindAllUserPaymentsParameters): Promise<IStandardResponse<IFindAllUserPaymentsParameters, TResult>>;
}
