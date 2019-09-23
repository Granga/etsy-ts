import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IBillingOverview {
    /**
     * True if the user has an overdue balance.
     */
    is_overdue: boolean,
    /**
     * The currency unit in which the user is billed.
     */
    currency_code: string,
    /**
     * The total overdue balance owed by the user.
     */
    overdue_balance: number,
    /**
     * The total amount currently due for payment (including any overdue balance.)
     */
    balance_due: number,
    /**
     * The total amount owed by the user (including fees that are not yet due for payment.)
     */
    total_balance: number,
    /**
     * The date by which the user's balance due must be paid.
     */
    date_due: number,
    /**
     @deprecated
     * The date on which the user's balance became overdue.

     Deprecated: do not use - always returns 0
     */
    date_overdue: number
}

//parameters types
export interface IGetUserBillingOverviewParameters extends IStandardParameters {
    user_id: string | number
}

//methods
/**
 * Retrieves the user's current balance.
 */
function getUserBillingOverview<TResult>(parameters: IGetUserBillingOverviewParameters, options?: IOptions): Promise<IStandardResponse<IGetUserBillingOverviewParameters, TResult>> {
    return request<IGetUserBillingOverviewParameters, TResult>("/users/:user_id/billing/overview", parameters, "GET", options);
}

export const BillingOverview = {getUserBillingOverview};
