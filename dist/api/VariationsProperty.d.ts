import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
/**
 * Get the listing variations available for a listing.
 */
export declare function getListingVariations<TResult>(parameters: IGetListingVariationsParameters): Promise<IStandardResponse<IGetListingVariationsParameters, TResult>>;
/**
 * Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
export declare function createListingVariations<TResult>(parameters: ICreateListingVariationsParameters): Promise<IStandardResponse<ICreateListingVariationsParameters, TResult>>;
/**
 * Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
export declare function updateListingVariations<TResult>(parameters: IUpdateListingVariationsParameters): Promise<IStandardResponse<IUpdateListingVariationsParameters, TResult>>;
/**
 * Add a new listing variation for a listing.
 */
export declare function createListingVariation<TResult>(parameters: ICreateListingVariationParameters): Promise<IStandardResponse<ICreateListingVariationParameters, TResult>>;
/**
 * Update a listing variation for a listing.
 */
export declare function updateListingVariation<TResult>(parameters: IUpdateListingVariationParameters): Promise<IStandardResponse<IUpdateListingVariationParameters, TResult>>;
/**
 * Remove a listing variation for a listing.
 */
export declare function deleteListingVariation<TResult>(parameters: IDeleteListingVariationParameters): Promise<IStandardResponse<IDeleteListingVariationParameters, TResult>>;
export declare const VariationsProperty: {
    getListingVariations: <TResult>(parameters: IGetListingVariationsParameters) => Promise<IStandardResponse<IGetListingVariationsParameters, TResult>>;
    createListingVariations: <TResult>(parameters: ICreateListingVariationsParameters) => Promise<IStandardResponse<ICreateListingVariationsParameters, TResult>>;
    updateListingVariations: <TResult>(parameters: IUpdateListingVariationsParameters) => Promise<IStandardResponse<IUpdateListingVariationsParameters, TResult>>;
    createListingVariation: <TResult>(parameters: ICreateListingVariationParameters) => Promise<IStandardResponse<ICreateListingVariationParameters, TResult>>;
    updateListingVariation: <TResult>(parameters: IUpdateListingVariationParameters) => Promise<IStandardResponse<IUpdateListingVariationParameters, TResult>>;
    deleteListingVariation: <TResult>(parameters: IDeleteListingVariationParameters) => Promise<IStandardResponse<IDeleteListingVariationParameters, TResult>>;
};
