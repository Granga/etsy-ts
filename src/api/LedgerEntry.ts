import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ILedgerEntry {
    ledger_entry_id: number,
    ledger_id: number,
    sequence: number,
    credit_amount: number,
    debit_amount: number,
    entry_type: string,
    reference_id: number,
    running_balance: number,
    create_date: number
}

//parameters types

export interface IFindLedgerEntriesParameters extends IStandardParameters {
    shop_id: string | number,
    min_created?: number,
    max_created?: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindLedgerEntryParameters extends IStandardParameters {
    shop_id: string | number,
    ledger_entry_id: number
}

//methods

/**
 * Get a Shop Payment Account Ledger's Entries
 */
export function findLedgerEntries <TResult>(parameters: IFindLedgerEntriesParameters): Promise<IStandardResponse<IFindLedgerEntriesParameters, TResult>> {
    return request<IFindLedgerEntriesParameters, TResult>("/shops/:shop_id/ledger/entries", parameters, "GET");
}
/**
 * Get a Shop Payment Account Ledger Entry
 */
export function findLedgerEntry <TResult>(parameters: IFindLedgerEntryParameters): Promise<IStandardResponse<IFindLedgerEntryParameters, TResult>> {
    return request<IFindLedgerEntryParameters, TResult>("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET");
}

export const LedgerEntry = {findLedgerEntries, findLedgerEntry};
