import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class Ledger extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get a Shop Payment Account Ledger
     */
    async findLedger<TResult>(
        params: IFindLedgerParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindLedgerParameters, TResult>>> {
        return this.request<IFindLedgerParameters, TResult>("GET", "/shops/:shop_id/ledger/", params, extra);
    }
}
