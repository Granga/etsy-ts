import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IVariationsProperty {
    property_id: number,
    formatted_name: string,
    options: any[]
}

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

/**
 * Get the listing variations available for a listing.
 */
export function getListingVariations<TResult>(parameters: IGetListingVariationsParameters): Bluebird<IStandardResponse<TResult, IGetListingVariationsParameters>> {
    return request<IStandardResponse<TResult, IGetListingVariationsParameters>>(parameters, '/listings/:listing_id/variations', 'GET');
}
/**
 * Update all of the listing variations available for a listing; optionally set custom property names and property qualifiers. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
export function createListingVariations<TResult>(parameters: ICreateListingVariationsParameters): Bluebird<IStandardResponse<TResult, ICreateListingVariationsParameters>> {
    return request<IStandardResponse<TResult, ICreateListingVariationsParameters>>(parameters, '/listings/:listing_id/variations', 'POST');
}
/**
 * Update all of the listing variations available for a listing. Expects a JSON array with a collection of objects of the form: [{"property_id":200, "value":"Black"}, {"property_id":200, "value":"White"}]
 */
export function updateListingVariations<TResult>(parameters: IUpdateListingVariationsParameters): Bluebird<IStandardResponse<TResult, IUpdateListingVariationsParameters>> {
    return request<IStandardResponse<TResult, IUpdateListingVariationsParameters>>(parameters, '/listings/:listing_id/variations', 'PUT');
}
/**
 * Add a new listing variation for a listing.
 */
export function createListingVariation<TResult>(parameters: ICreateListingVariationParameters): Bluebird<IStandardResponse<TResult, ICreateListingVariationParameters>> {
    return request<IStandardResponse<TResult, ICreateListingVariationParameters>>(parameters, '/listings/:listing_id/variations/:property_id', 'POST');
}
/**
 * Update a listing variation for a listing.
 */
export function updateListingVariation<TResult>(parameters: IUpdateListingVariationParameters): Bluebird<IStandardResponse<TResult, IUpdateListingVariationParameters>> {
    return request<IStandardResponse<TResult, IUpdateListingVariationParameters>>(parameters, '/listings/:listing_id/variations/:property_id', 'PUT');
}
/**
 * Remove a listing variation for a listing.
 */
export function deleteListingVariation<TResult>(parameters: IDeleteListingVariationParameters): Bluebird<IStandardResponse<TResult, IDeleteListingVariationParameters>> {
    return request<IStandardResponse<TResult, IDeleteListingVariationParameters>>(parameters, '/listings/:listing_id/variations/:property_id', 'DELETE');
}
