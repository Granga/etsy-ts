import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IVariationsPropertySetOptionModifier {
    prefix: string,
    suffix: string
}

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

/**
 * Add a value for a given property.
 */
export function getPropertyOptionModifier<TResult>(parameters: IGetPropertyOptionModifierParameters): Bluebird<IStandardResponse<TResult, IGetPropertyOptionModifierParameters>> {
    return request<IStandardResponse<TResult, IGetPropertyOptionModifierParameters>>(parameters, '/property_options/modifiers', 'GET');
}
