import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IPaymentAccountLedgerEntry {
    /**
     * The ledger entry's numeric ID.
     */
    entry_id: number,
    /**
     * The ledger's numeric ID.
     */
    ledger_id: number,
    /**
     * The sequence allows ledger entries to be sorted chronologically. The higher the sequence, the more recent the entry.
     */
    sequence_number: number,
    /**
     * The amount of money credited to the ledger.
     */
    amount: number,
    /**
     * The currency of the entry on the ledger.
     */
    currency: string,
    /**
     * Details what kind of ledger entry this is: a payment, refund, reversal of a failed refund, disbursement, returned disbursement, recoupment, miscellaneous credit, miscellaneous debit, or bill payment
     */
    description: string,
    /**
     * The amount of money in the shop's ledger the moment after this entry was applied.
     */
    balance: number,
    /**
     * The date and time the ledger entry was created in Epoch seconds.
     */
    create_date: number
}

//parameters types
export interface IFindPaymentAccountEntriesParameters extends IStandardParameters {
    shop_id: string | number,
    min_created: number,
    max_created: number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods class
export class PaymentAccountLedgerEntry {

    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    static findPaymentAccountEntries<TResult>(parameters: IFindPaymentAccountEntriesParameters, options?: IOptions): Promise<IStandardResponse<IFindPaymentAccountEntriesParameters, TResult>> {
        return request<IFindPaymentAccountEntriesParameters, TResult>("/shops/:shop_id/payment_account/entries", parameters, "GET", options);
    }
}
