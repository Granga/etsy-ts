/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function findLedger<TResult>(parameters: IFindLedgerParameters): Bluebird<IStandardResponse<TResult, IFindLedgerParameters>>;
