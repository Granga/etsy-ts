import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IBillCharge {
    bill_charge_id: number,
    creation_tsz: number,
    type: string,
    type_id: number,
    user_id: number,
    amount: number,
    currency_code: string,
    creation_year: number,
    creation_month: number,
    last_modified_tsz: number
}

//parameters types

export interface IGetUserChargesMetadataParameters extends IStandardParameters {
    user_id: string | number
}
export interface IFindAllUserChargesParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    user_id: string | number,
    sort_order?: "up"|"down",
    min_created?: number,
    max_created?: number
}

//methods

/**
 * Metadata for the set of BillCharges objects associated to a User
 */
export function getUserChargesMetadata <TResult>(parameters: IGetUserChargesMetadataParameters): Promise<IStandardResponse<IGetUserChargesMetadataParameters, TResult>> {
    return request<IGetUserChargesMetadataParameters, TResult>("/users/:user_id/charges/meta", parameters, "GET");
}
/**
 * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
 */
export function findAllUserCharges <TResult>(parameters: IFindAllUserChargesParameters): Promise<IStandardResponse<IFindAllUserChargesParameters, TResult>> {
    return request<IFindAllUserChargesParameters, TResult>("/users/:user_id/charges", parameters, "GET");
}

export const BillCharge = {getUserChargesMetadata, findAllUserCharges};
