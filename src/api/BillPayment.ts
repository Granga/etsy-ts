import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IBillPayment {
    /**
     * The numeric ID for this bill payment record.
     */
    bill_payment_id: number,
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number,
    /**
     * The name of the type of payment.
     */
    type: string,
    /**
     * The Listing or Transaction ID (or LedgerEntry ID in the case of a ledger payment) to which the payment applies.
     */
    type_id: number,
    /**
     * The user's numeric ID.
     */
    user_id: number,
    /**
     * The amount paid.
     */
    amount: number,
    /**
     * The currency of the payment.
     */
    currency_code: string,
    /**
     * Month that the payment was made.
     */
    creation_month: number,
    /**
     * Year that the payment was made.
     */
    creation_year: number
}

//parameters types
export interface IFindAllUserPaymentsParameters {
    limit?: number,
    offset?: number,
    page?: number,
    user_id: string | number,
    sort_order?: "up" | "down",
    min_created?: number,
    max_created?: number
}

//methods class
export class BillPayment {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    async findAllUserPayments<TResult>(
        params: IFindAllUserPaymentsParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserPaymentsParameters, TResult>>> {
        return request<IFindAllUserPaymentsParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/payments",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
