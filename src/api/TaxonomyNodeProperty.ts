import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ITaxonomyNodeProperty {
    property_id: number,
    name: string,
    display_name: string,
    scales: any[],
    is_required: boolean,
    supports_attributes: boolean,
    supports_variations: boolean,
    is_multivalued: boolean,
    possible_values: any[],
    selected_values: any[]
}

//parameters types

export interface IGetTaxonomyNodePropertiesParameters extends IStandardParameters {
    taxonomy_id: number
}

//methods

/**
 * Get the possible properties of a taxonomy node [developer preview - may be unstable]
 */
export function getTaxonomyNodeProperties <TResult>(parameters: IGetTaxonomyNodePropertiesParameters): Promise<IStandardResponse<IGetTaxonomyNodePropertiesParameters, TResult>> {
    return request<IGetTaxonomyNodePropertiesParameters, TResult>("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET");
}

export const TaxonomyNodeProperty = {getTaxonomyNodeProperties};
