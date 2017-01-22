import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
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
export declare class BillCharge {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Metadata for the set of BillCharges objects associated to a User
     */
    getUserChargesMetadata<TResult>(parameters: IGetUserChargesMetadataParameters): Promise<IStandardResponse<IGetUserChargesMetadataParameters, TResult>>;
    /**
     * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
     */
    findAllUserCharges<TResult>(parameters: IFindAllUserChargesParameters): Promise<IStandardResponse<IFindAllUserChargesParameters, TResult>>;
}
