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
/**
 * Get the listing variations available for a listing.
 */
declare function getListingVariations<TResult>(parameters: IGetListingVariationsParameters, options?: IOptions): Promise<IStandardResponse<IGetListingVariationsParameters, TResult>>;
/**
 * Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
declare function createListingVariations<TResult>(parameters: ICreateListingVariationsParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingVariationsParameters, TResult>>;
/**
 * Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
declare function updateListingVariations<TResult>(parameters: IUpdateListingVariationsParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingVariationsParameters, TResult>>;
/**
 * Add a new listing variation for a listing.
 */
declare function createListingVariation<TResult>(parameters: ICreateListingVariationParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingVariationParameters, TResult>>;
/**
 * Update a listing variation for a listing.
 */
declare function updateListingVariation<TResult>(parameters: IUpdateListingVariationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingVariationParameters, TResult>>;
/**
 * Remove a listing variation for a listing.
 */
declare function deleteListingVariation<TResult>(parameters: IDeleteListingVariationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingVariationParameters, TResult>>;
export declare const VariationsProperty: {
    getListingVariations: typeof getListingVariations;
    createListingVariations: typeof createListingVariations;
    updateListingVariations: typeof updateListingVariations;
    createListingVariation: typeof createListingVariation;
    updateListingVariation: typeof updateListingVariation;
    deleteListingVariation: typeof deleteListingVariation;
};
export {};
