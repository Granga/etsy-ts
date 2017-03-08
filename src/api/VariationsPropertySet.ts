import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function findPropertySet <TResult>(parameters: IFindPropertySetParameters, options?: IOptions): Promise<IStandardResponse<IFindPropertySetParameters, TResult>> {
    return request<IFindPropertySetParameters, TResult>("/property_sets", parameters, "GET", options);
}

export const VariationsPropertySet = {findPropertySet};
