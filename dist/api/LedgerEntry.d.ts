import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const LedgerEntry: {
    findLedgerEntries: <TResult>(parameters: IFindLedgerEntriesParameters, options?: IOptions) => Promise<IStandardResponse<IFindLedgerEntriesParameters, TResult>>;
    findLedgerEntry: <TResult>(parameters: IFindLedgerEntryParameters, options?: IOptions) => Promise<IStandardResponse<IFindLedgerEntryParameters, TResult>>;
};
