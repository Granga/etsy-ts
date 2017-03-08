import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const Ledger: {
    findLedger: <TResult>(parameters: IFindLedgerParameters, options?: IOptions) => Promise<IStandardResponse<IFindLedgerParameters, TResult>>;
};
