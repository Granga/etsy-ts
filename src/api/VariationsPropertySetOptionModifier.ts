import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IVariationsPropertySetOptionModifier {
    prefix: string,
    suffix: string
}

//parameters types

export interface IGetPropertyOptionModifierParameters extends IStandardParameters {
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
 * Add a value for a given property.
 */
export function getPropertyOptionModifier <TResult>(parameters: IGetPropertyOptionModifierParameters): Promise<IStandardResponse<IGetPropertyOptionModifierParameters, TResult>> {
    return request<IGetPropertyOptionModifierParameters, TResult>("/property_options/modifiers", parameters, "GET");
}

export const VariationsPropertySetOptionModifier = {getPropertyOptionModifier};
