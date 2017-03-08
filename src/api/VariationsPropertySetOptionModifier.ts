import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function getPropertyOptionModifier <TResult>(parameters: IGetPropertyOptionModifierParameters, options?: IOptions): Promise<IStandardResponse<IGetPropertyOptionModifierParameters, TResult>> {
    return request<IGetPropertyOptionModifierParameters, TResult>("/property_options/modifiers", parameters, "GET", options);
}

export const VariationsPropertySetOptionModifier = {getPropertyOptionModifier};
