import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IShippingInfo {
    shipping_info_id: number,
    origin_country_id: number,
    destination_country_id: number,
    currency_code: string,
    primary_cost: number,
    secondary_cost: number,
    listing_id: number,
    region_id: number,
    origin_country_name: string,
    destination_country_name: string
}

export interface IFindAllListingShippingProfileEntriesParameters extends IStandardParameters {

}
export interface ICreateShippingInfoParameters extends IStandardParameters {
    destination_country_id?: number,
    primary_cost: number,
    secondary_cost: number,
    region_id?: number,
    listing_id: number
}
export interface IGetShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number[]
}
export interface IUpdateShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number,
    destination_country_id?: number,
    primary_cost?: number,
    secondary_cost?: number,
    region_id?: number,
    listing_id?: number
}
export interface IDeleteShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number
}

/**
 * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
 */
export function findAllListingShippingProfileEntries<TResult>(parameters: IFindAllListingShippingProfileEntriesParameters): Bluebird<IStandardResponse<TResult, IFindAllListingShippingProfileEntriesParameters>> {
    return request<IStandardResponse<TResult, IFindAllListingShippingProfileEntriesParameters>>(parameters, '/listings/:listing_id/shipping/info', 'GET');
}
/**
 * Creates a new ShippingInfo.
 */
export function createShippingInfo<TResult>(parameters: ICreateShippingInfoParameters): Bluebird<IStandardResponse<TResult, ICreateShippingInfoParameters>> {
    return request<IStandardResponse<TResult, ICreateShippingInfoParameters>>(parameters, '/listings/:listing_id/shipping/info', 'POST');
}
/**
 * Retrieves a ShippingInfo by id.
 */
export function getShippingInfo<TResult>(parameters: IGetShippingInfoParameters): Bluebird<IStandardResponse<TResult, IGetShippingInfoParameters>> {
    return request<IStandardResponse<TResult, IGetShippingInfoParameters>>(parameters, '/shipping/info/:shipping_info_id', 'GET');
}
/**
 * Updates a ShippingInfo with the given id.
 */
export function updateShippingInfo<TResult>(parameters: IUpdateShippingInfoParameters): Bluebird<IStandardResponse<TResult, IUpdateShippingInfoParameters>> {
    return request<IStandardResponse<TResult, IUpdateShippingInfoParameters>>(parameters, '/shipping/info/:shipping_info_id', 'PUT');
}
/**
 * Deletes the ShippingInfo with the given id.
 */
export function deleteShippingInfo<TResult>(parameters: IDeleteShippingInfoParameters): Bluebird<IStandardResponse<TResult, IDeleteShippingInfoParameters>> {
    return request<IStandardResponse<TResult, IDeleteShippingInfoParameters>>(parameters, '/shipping/info/:shipping_info_id', 'DELETE');
}
