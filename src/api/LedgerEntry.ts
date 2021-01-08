import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface ILedgerEntry {
    /**
     * The ledger entry's numeric ID.
     */
    ledger_entry_id: number,
    /**
     * The ledger's numeric ID.
     */
    ledger_id: number,
    /**
     * The sequence allows ledger entries to be sorted chronologically. The higher the sequence, the more recent the entry.
     */
    sequence: number,
    /**
     * The amount of money credited to the ledger.
     */
    credit_amount: number,
    /**
     * The amount of money debited from the ledger.
     */
    debit_amount: number,
    /**
     * Details what kind of ledger entry this is: a payment, refund, reversal of a failed refund, disbursement, returned disbursement, recoupment, miscellaneous credit, miscellaneous debit, or bill payment
     */
    entry_type: string,
    /**
     * Depending on the entry_type, this is the id of the corresponding payment, payment adjustment, or disbursement.
     */
    reference_id: number,
    /**
     * The amount of money in the shop's ledger the moment after this entry was applied.
     */
    running_balance: number,
    /**
     * The date and time the ledger entry was created in Epoch seconds.
     */
    create_date: number
}

//parameters types
export interface IFindLedgerEntriesParameters {
    shop_id: string | number,
    min_created?: number,
    max_created?: number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindLedgerEntryParameters {
    shop_id: string | number,
    ledger_entry_id: number
}

//methods class
export class LedgerEntry {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    async findLedgerEntries<TResult>(
        params: IFindLedgerEntriesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindLedgerEntriesParameters, TResult>>> {
        return request<IFindLedgerEntriesParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/ledger/entries",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get a Shop Payment Account Ledger Entry
     */
    async findLedgerEntry<TResult>(
        params: IFindLedgerEntryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindLedgerEntryParameters, TResult>>> {
        return request<IFindLedgerEntryParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/ledger/entries/:ledger_entry_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
