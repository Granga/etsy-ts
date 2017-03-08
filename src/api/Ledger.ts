import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function findLedger <TResult>(parameters: IFindLedgerParameters): Promise<IStandardResponse<IFindLedgerParameters, TResult>> {
    return request<IFindLedgerParameters, TResult>("/shops/:shop_id/ledger/", parameters, "GET");
}

export const Ledger = {findLedger};
