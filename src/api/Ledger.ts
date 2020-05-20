import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

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
export interface IFindLedgerParameters extends IStandardParameters {
    shop_id: string | number
}

//methods
/**
 * Get a Shop Payment Account Ledger
 */
function findLedger<TResult>(parameters: IFindLedgerParameters, options?: IOptions): Promise<IStandardResponse<IFindLedgerParameters, TResult>> {
    return request<IFindLedgerParameters, TResult>("/shops/:shop_id/ledger/", parameters, "GET", options);
}

export const Ledger = {findLedger};
