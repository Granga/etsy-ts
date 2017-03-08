import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IBillingOverview {
    is_overdue: boolean;
    currency_code: string;
    overdue_balance: number;
    balance_due: number;
    total_balance: number;
    date_due: number;
    date_overdue: number;
}
export interface IGetUserBillingOverviewParameters extends IStandardParameters {
    user_id: string | number;
}
/**
 * Retrieves the user's current balance.
 */
export declare function getUserBillingOverview<TResult>(parameters: IGetUserBillingOverviewParameters): Promise<IStandardResponse<IGetUserBillingOverviewParameters, TResult>>;
export declare const BillingOverview: {
    getUserBillingOverview: <TResult>(parameters: IGetUserBillingOverviewParameters) => Promise<IStandardResponse<IGetUserBillingOverviewParameters, TResult>>;
};
