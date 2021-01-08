import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface ILedger {
    /**
     * The ledger's numeric ID.
     */
    ledger_id: number,
    /**
     * The shop's numeric ID.
     */
    shop_id: string,
    /**
     * The currency code of the shop.
     */
    currency: string,
    /**
     * The date and time the ledger was created in Epoch seconds.
     */
    create_date: number,
    /**
     * The date and time the ledger was last updated in Epoch seconds.
     */
    update_date: number
}

//parameters types
export interface IFindLedgerParameters {
    shop_id: string | number
}

//methods class
export class Ledger {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get a Shop Payment Account Ledger
     */
    async findLedger<TResult>(
        params: IFindLedgerParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindLedgerParameters, TResult>>> {
        return request<IFindLedgerParameters, TResult>(
            {...this.config, url: "/shops/:shop_id/ledger/", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }
}
