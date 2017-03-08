import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IVariationsPropertySetOption {
    property_option_id: number,
    name: string,
    formatted_name: string
}

//parameters types

export interface IFindAllSuggestedPropertyOptionsParameters extends IStandardParameters {
    property_id: number,
    category_id?: number,
    recipient_id?: number,
    sizing_scale?: number,
    weight_scale?: number,
    height_scale?: number,
    length_scale?: number,
    width_scale?: number,
    diameter_scale?: number,
    dimensions_scale?: number
}

//methods

/**
 * Finds all suggested property options for a given property.
 */
export function findAllSuggestedPropertyOptions <TResult>(parameters: IFindAllSuggestedPropertyOptionsParameters): Promise<IStandardResponse<IFindAllSuggestedPropertyOptionsParameters, TResult>> {
    return request<IFindAllSuggestedPropertyOptionsParameters, TResult>("/property_options/suggested", parameters, "GET");
}

export const VariationsPropertySetOption = {findAllSuggestedPropertyOptions};
