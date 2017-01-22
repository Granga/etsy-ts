import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface ILedger {
    ledger_id: number,
    shop_id: string,
    currency: string,
    create_date: number,
    update_date: number
}


export interface IFindLedgerParameters extends IStandardParameters {
    shop_id: string | number
}

export class Ledger {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get a Shop Payment Account Ledger
     */
    findLedger<TResult>(parameters: IFindLedgerParameters): Promise<IStandardResponse<IFindLedgerParameters, TResult>> {
        return this.client.http<IFindLedgerParameters, TResult>("/shops/:shop_id/ledger/", parameters, "GET");
    }
}
