import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IVariationsPropertySetOption {
    property_option_id: number,
    name: string,
    formatted_name: string
}

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

/**
 * Finds all suggested property options for a given property.
 */
export function findAllSuggestedPropertyOptions<TResult>(parameters: IFindAllSuggestedPropertyOptionsParameters): Bluebird<IStandardResponse<TResult, IFindAllSuggestedPropertyOptionsParameters>> {
    return request<IStandardResponse<TResult, IFindAllSuggestedPropertyOptionsParameters>>(parameters, '/property_options/suggested', 'GET');
}
