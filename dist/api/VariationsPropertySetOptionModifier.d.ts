import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IVariationsPropertySetOptionModifier {
    prefix: string;
    suffix: string;
}
export interface IGetPropertyOptionModifierParameters extends IStandardParameters {
    property_id: number;
    category_id?: number;
    recipient_id?: number;
    sizing_scale?: number;
    weight_scale?: number;
    height_scale?: number;
    length_scale?: number;
    width_scale?: number;
    diameter_scale?: number;
    dimensions_scale?: number;
}
/**
 * Add a value for a given property.
 */
export declare function getPropertyOptionModifier<TResult>(parameters: IGetPropertyOptionModifierParameters): Promise<IStandardResponse<IGetPropertyOptionModifierParameters, TResult>>;
export declare const VariationsPropertySetOptionModifier: {
    getPropertyOptionModifier: <TResult>(parameters: IGetPropertyOptionModifierParameters) => Promise<IStandardResponse<IGetPropertyOptionModifierParameters, TResult>>;
};
