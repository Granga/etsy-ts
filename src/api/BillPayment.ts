import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IBillPayment {
    bill_payment_id: number,
    creation_tsz: number,
    type: string,
    type_id: number,
    user_id: number,
    amount: number,
    currency_code: string,
    creation_month: number,
    creation_year: number
}

export interface IFindAllUserPaymentsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    user_id: string | number,
    sort_order?: "up"|"down",
    min_created?: number,
    max_created?: number
}

/**
 * Retrieves a set of BillPayment objects associated to a User.
 */
export function findAllUserPayments<TResult>(parameters: IFindAllUserPaymentsParameters): Bluebird<IStandardResponse<TResult, IFindAllUserPaymentsParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserPaymentsParameters>>(parameters, '/users/:user_id/payments', 'GET');
}
