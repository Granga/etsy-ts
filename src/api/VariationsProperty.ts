import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IVariationsProperty {
    property_id: number,
    formatted_name: string,
    options: any[]
}

//parameters types
export interface IGetListingVariationsParameters extends IStandardParameters {
    listing_id: number
}
export interface ICreateListingVariationsParameters extends IStandardParameters {
    listing_id: number,
    variations: any[],
    custom_property_names?: [any, any],
    recipient_id?: number,
    sizing_scale?: number,
    weight_scale?: number,
    height_scale?: number,
    length_scale?: number,
    width_scale?: number,
    diameter_scale?: number,
    dimensions_scale?: number
}
export interface IUpdateListingVariationsParameters extends IStandardParameters {
    listing_id: number,
    variations: any[],
    custom_property_names?: [any, any],
    recipient_id?: number,
    sizing_scale?: number,
    weight_scale?: number,
    height_scale?: number,
    length_scale?: number,
    width_scale?: number,
    diameter_scale?: number,
    dimensions_scale?: number
}
export interface ICreateListingVariationParameters extends IStandardParameters {
    listing_id: number,
    property_id: number,
    value: string,
    is_available?: boolean,
    price?: number
}
export interface IUpdateListingVariationParameters extends IStandardParameters {
    listing_id: number,
    property_id: number,
    value: string,
    is_available: boolean,
    price?: number
}
export interface IDeleteListingVariationParameters extends IStandardParameters {
    listing_id: number,
    property_id: number,
    value: string
}

//methods
/**
 * Get the listing variations available for a listing.
 */
function getListingVariations <TResult>(parameters: IGetListingVariationsParameters, options?: IOptions): Promise<IStandardResponse<IGetListingVariationsParameters, TResult>> {
    return request<IGetListingVariationsParameters, TResult>("/listings/:listing_id/variations", parameters, "GET", options);
}
/**
 * Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
function createListingVariations <TResult>(parameters: ICreateListingVariationsParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingVariationsParameters, TResult>> {
    return request<ICreateListingVariationsParameters, TResult>("/listings/:listing_id/variations", parameters, "POST", options);
}
/**
 * Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
function updateListingVariations <TResult>(parameters: IUpdateListingVariationsParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingVariationsParameters, TResult>> {
    return request<IUpdateListingVariationsParameters, TResult>("/listings/:listing_id/variations", parameters, "PUT", options);
}
/**
 * Add a new listing variation for a listing.
 */
function createListingVariation <TResult>(parameters: ICreateListingVariationParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingVariationParameters, TResult>> {
    return request<ICreateListingVariationParameters, TResult>("/listings/:listing_id/variations/:property_id", parameters, "POST", options);
}
/**
 * Update a listing variation for a listing.
 */
function updateListingVariation <TResult>(parameters: IUpdateListingVariationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingVariationParameters, TResult>> {
    return request<IUpdateListingVariationParameters, TResult>("/listings/:listing_id/variations/:property_id", parameters, "PUT", options);
}
/**
 * Remove a listing variation for a listing.
 */
function deleteListingVariation <TResult>(parameters: IDeleteListingVariationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingVariationParameters, TResult>> {
    return request<IDeleteListingVariationParameters, TResult>("/listings/:listing_id/variations/:property_id", parameters, "DELETE", options);
}

export const VariationsProperty = {
    getListingVariations,
    createListingVariations,
    updateListingVariations,
    createListingVariation,
    updateListingVariation,
    deleteListingVariation
};
