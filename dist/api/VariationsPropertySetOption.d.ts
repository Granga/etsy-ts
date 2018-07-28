import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IVariationsPropertySetOption {
    property_option_id: number;
    name: string;
    formatted_name: string;
}
export interface IFindAllSuggestedPropertyOptionsParameters extends IStandardParameters {
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
 * Finds all suggested property options for a given property.
 */
declare function findAllSuggestedPropertyOptions<TResult>(parameters: IFindAllSuggestedPropertyOptionsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllSuggestedPropertyOptionsParameters, TResult>>;
export declare const VariationsPropertySetOption: {
    findAllSuggestedPropertyOptions: typeof findAllSuggestedPropertyOptions;
};
export {};
