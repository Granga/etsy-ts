import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ILedger {
    /**
     * The ledger's numeric ID.
     */
    ledger_id: number;
    /**
     * The shop's numeric ID.
     */
    shop_id: string;
    /**
     * The currency code of the shop.
     */
    currency: string;
    /**
     * The date and time the ledger was created in Epoch seconds.
     */
    create_date: number;
    /**
     * The date and time the ledger was last updated in Epoch seconds.
     */
    update_date: number;
}
export interface IFindLedgerParameters extends IStandardParameters {
    shop_id: string | number;
}
/**
 * Get a Shop Payment Account Ledger
 */
declare function findLedger<TResult>(parameters: IFindLedgerParameters, options?: IOptions): Promise<IStandardResponse<IFindLedgerParameters, TResult>>;
export declare const Ledger: {
    findLedger: typeof findLedger;
};
export {};
