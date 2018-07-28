import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
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
/**
 * Retrieves a set of BillPayment objects associated to a User.
 */
declare function findAllUserPayments<TResult>(parameters: IFindAllUserPaymentsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserPaymentsParameters, TResult>>;
export declare const BillPayment: {
    findAllUserPayments: typeof findAllUserPayments;
};
export {};
