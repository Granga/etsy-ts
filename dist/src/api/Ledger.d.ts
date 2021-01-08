import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface ILedger {
    /**
     * The ledger's numeric ID.
     */
    ledger_id: number;
    /**
     * The shop's numeric ID.
     */
    shop_id: string;
    /**
     * The currency code of the shop.
     */
    currency: string;
    /**
     * The date and time the ledger was created in Epoch seconds.
     */
    create_date: number;
    /**
     * The date and time the ledger was last updated in Epoch seconds.
     */
    update_date: number;
}
export interface IFindLedgerParameters {
    shop_id: string | number;
}
export declare class Ledger {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Get a Shop Payment Account Ledger
     */
    findLedger<TResult>(params: IFindLedgerParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindLedgerParameters, TResult>>>;
}
