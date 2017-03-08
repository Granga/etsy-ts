import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface ILedger {
    ledger_id: number;
    shop_id: string;
    currency: string;
    create_date: number;
    update_date: number;
}
export interface IFindLedgerParameters extends IStandardParameters {
    shop_id: string | number;
}
/**
 * Get a Shop Payment Account Ledger
 */
export declare function findLedger<TResult>(parameters: IFindLedgerParameters): Promise<IStandardResponse<IFindLedgerParameters, TResult>>;
export declare const Ledger: {
    findLedger: <TResult>(parameters: IFindLedgerParameters) => Promise<IStandardResponse<IFindLedgerParameters, TResult>>;
};
