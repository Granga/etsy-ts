import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

export interface IGetTaxonomyNodePropertiesParameters extends IStandardParameters {
    taxonomy_id: number
}

/**
 * Get the possible properties of a taxonomy node [developer preview - may be unstable]
 */
export function getTaxonomyNodeProperties<TResult>(parameters: IGetTaxonomyNodePropertiesParameters): Bluebird<IStandardResponse<TResult, IGetTaxonomyNodePropertiesParameters>> {
    return request<IStandardResponse<TResult, IGetTaxonomyNodePropertiesParameters>>(parameters, '/taxonomy/seller/:taxonomy_id/properties', 'GET');
}
