import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IBillCharge {
    bill_charge_id: number;
    creation_tsz: number;
    type: string;
    type_id: number;
    user_id: number;
    amount: number;
    currency_code: string;
    creation_year: number;
    creation_month: number;
    last_modified_tsz: number;
}
export interface IGetUserChargesMetadataParameters extends IStandardParameters {
    user_id: string | number;
}
export interface IFindAllUserChargesParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    user_id: string | number;
    sort_order?: "up" | "down";
    min_created?: number;
    max_created?: number;
}
export declare const BillCharge: {
    getUserChargesMetadata: <TResult>(parameters: IGetUserChargesMetadataParameters, options?: IOptions) => Promise<IStandardResponse<IGetUserChargesMetadataParameters, TResult>>;
    findAllUserCharges: <TResult>(parameters: IFindAllUserChargesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUserChargesParameters, TResult>>;
};
