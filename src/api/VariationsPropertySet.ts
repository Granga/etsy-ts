import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IVariationsPropertySet {
    property_set_id: number,
    properties: [any, any],
    qualifying_properties: [any, any],
    options: [any, any],
    qualifiers: [any, any]
}

//parameters types

export interface IFindPropertySetParameters extends IStandardParameters {
    category_id?: number,
    taxonomy_id?: number,
    recipient_id?: number
}

//methods

/**
 * Find the property set for the category id
 */
export function findPropertySet <TResult>(parameters: IFindPropertySetParameters): Promise<IStandardResponse<IFindPropertySetParameters, TResult>> {
    return request<IFindPropertySetParameters, TResult>("/property_sets", parameters, "GET");
}

export const VariationsPropertySet = {findPropertySet};
