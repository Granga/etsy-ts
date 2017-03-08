import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function getListingVariations <TResult>(parameters: IGetListingVariationsParameters): Promise<IStandardResponse<IGetListingVariationsParameters, TResult>> {
    return request<IGetListingVariationsParameters, TResult>("/listings/:listing_id/variations", parameters, "GET");
}
/**
 * Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
export function createListingVariations <TResult>(parameters: ICreateListingVariationsParameters): Promise<IStandardResponse<ICreateListingVariationsParameters, TResult>> {
    return request<ICreateListingVariationsParameters, TResult>("/listings/:listing_id/variations", parameters, "POST");
}
/**
 * Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
export function updateListingVariations <TResult>(parameters: IUpdateListingVariationsParameters): Promise<IStandardResponse<IUpdateListingVariationsParameters, TResult>> {
    return request<IUpdateListingVariationsParameters, TResult>("/listings/:listing_id/variations", parameters, "PUT");
}
/**
 * Add a new listing variation for a listing.
 */
export function createListingVariation <TResult>(parameters: ICreateListingVariationParameters): Promise<IStandardResponse<ICreateListingVariationParameters, TResult>> {
    return request<ICreateListingVariationParameters, TResult>("/listings/:listing_id/variations/:property_id", parameters, "POST");
}
/**
 * Update a listing variation for a listing.
 */
export function updateListingVariation <TResult>(parameters: IUpdateListingVariationParameters): Promise<IStandardResponse<IUpdateListingVariationParameters, TResult>> {
    return request<IUpdateListingVariationParameters, TResult>("/listings/:listing_id/variations/:property_id", parameters, "PUT");
}
/**
 * Remove a listing variation for a listing.
 */
export function deleteListingVariation <TResult>(parameters: IDeleteListingVariationParameters): Promise<IStandardResponse<IDeleteListingVariationParameters, TResult>> {
    return request<IDeleteListingVariationParameters, TResult>("/listings/:listing_id/variations/:property_id", parameters, "DELETE");
}

export const VariationsProperty = {
    getListingVariations,
    createListingVariations,
    updateListingVariations,
    createListingVariation,
    updateListingVariation,
    deleteListingVariation
};
