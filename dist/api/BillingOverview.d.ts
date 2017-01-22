import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare class BillingOverview {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves the user's current balance.
     */
    getUserBillingOverview<TResult>(parameters: IGetUserBillingOverviewParameters): Promise<IStandardResponse<IGetUserBillingOverviewParameters, TResult>>;
}
