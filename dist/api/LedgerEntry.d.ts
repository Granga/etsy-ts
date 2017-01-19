/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface ILedgerEntry {
    ledger_entry_id: number;
    ledger_id: number;
    sequence: number;
    credit_amount: number;
    debit_amount: number;
    entry_type: string;
    reference_id: number;
    running_balance: number;
    create_date: number;
}
export interface IFindLedgerEntriesParameters extends IStandardParameters {
    shop_id: string | number;
    min_created?: number;
    max_created?: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindLedgerEntryParameters extends IStandardParameters {
    shop_id: string | number;
    ledger_entry_id: number;
}
/**
* Get a Shop Payment Account Ledger's Entries
*/
export declare function findLedgerEntries<TResult>(parameters: IFindLedgerEntriesParameters): Bluebird<IStandardResponse<TResult, IFindLedgerEntriesParameters>>;
/**
* Get a Shop Payment Account Ledger Entry
*/
export declare function findLedgerEntry<TResult>(parameters: IFindLedgerEntryParameters): Bluebird<IStandardResponse<TResult, IFindLedgerEntryParameters>>;
