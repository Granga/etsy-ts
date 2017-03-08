import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IBillingOverview {
    is_overdue: boolean,
    currency_code: string,
    overdue_balance: number,
    balance_due: number,
    total_balance: number,
    date_due: number,
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
function getUserBillingOverview <TResult>(parameters: IGetUserBillingOverviewParameters, options?: IOptions): Promise<IStandardResponse<IGetUserBillingOverviewParameters, TResult>> {
    return request<IGetUserBillingOverviewParameters, TResult>("/users/:user_id/billing/overview", parameters, "GET", options);
}

export const BillingOverview = {getUserBillingOverview};
