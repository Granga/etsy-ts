import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IVariationsProperty {
    property_id: number;
    formatted_name: string;
    options: any[];
}
export interface IGetListingVariationsParameters extends IStandardParameters {
    listing_id: number;
}
export interface ICreateListingVariationsParameters extends IStandardParameters {
    listing_id: number;
    variations: any[];
    custom_property_names?: [any, any];
    recipient_id?: number;
    sizing_scale?: number;
    weight_scale?: number;
    height_scale?: number;
    length_scale?: number;
    width_scale?: number;
    diameter_scale?: number;
    dimensions_scale?: number;
}
export interface IUpdateListingVariationsParameters extends IStandardParameters {
    listing_id: number;
    variations: any[];
    custom_property_names?: [any, any];
    recipient_id?: number;
    sizing_scale?: number;
    weight_scale?: number;
    height_scale?: number;
    length_scale?: number;
    width_scale?: number;
    diameter_scale?: number;
    dimensions_scale?: number;
}
export interface ICreateListingVariationParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
    value: string;
    is_available?: boolean;
    price?: number;
}
export interface IUpdateListingVariationParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
    value: string;
    is_available: boolean;
    price?: number;
}
export interface IDeleteListingVariationParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
    value: string;
}
export declare const VariationsProperty: {
    getListingVariations: <TResult>(parameters: IGetListingVariationsParameters, options?: IOptions) => Promise<IStandardResponse<IGetListingVariationsParameters, TResult>>;
    createListingVariations: <TResult>(parameters: ICreateListingVariationsParameters, options?: IOptions) => Promise<IStandardResponse<ICreateListingVariationsParameters, TResult>>;
    updateListingVariations: <TResult>(parameters: IUpdateListingVariationsParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateListingVariationsParameters, TResult>>;
    createListingVariation: <TResult>(parameters: ICreateListingVariationParameters, options?: IOptions) => Promise<IStandardResponse<ICreateListingVariationParameters, TResult>>;
    updateListingVariation: <TResult>(parameters: IUpdateListingVariationParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateListingVariationParameters, TResult>>;
    deleteListingVariation: <TResult>(parameters: IDeleteListingVariationParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteListingVariationParameters, TResult>>;
};
