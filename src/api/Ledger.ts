import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ILedger {
    ledger_id: number,
    shop_id: string,
    currency: string,
    create_date: number,
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
function findLedger <TResult>(parameters: IFindLedgerParameters, options?: IOptions): Promise<IStandardResponse<IFindLedgerParameters, TResult>> {
    return request<IFindLedgerParameters, TResult>("/shops/:shop_id/ledger/", parameters, "GET", options);
}

export const Ledger = {findLedger};
