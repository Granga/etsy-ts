import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types

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

//methods

/**
 * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
 */
export function findAllListingShippingProfileEntries <TResult>(parameters: IFindAllListingShippingProfileEntriesParameters): Promise<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>> {
    return request<IFindAllListingShippingProfileEntriesParameters, TResult>("/listings/:listing_id/shipping/info", parameters, "GET");
}
/**
 * Creates a new ShippingInfo.
 */
export function createShippingInfo <TResult>(parameters: ICreateShippingInfoParameters): Promise<IStandardResponse<ICreateShippingInfoParameters, TResult>> {
    return request<ICreateShippingInfoParameters, TResult>("/listings/:listing_id/shipping/info", parameters, "POST");
}
/**
 * Retrieves a ShippingInfo by id.
 */
export function getShippingInfo <TResult>(parameters: IGetShippingInfoParameters): Promise<IStandardResponse<IGetShippingInfoParameters, TResult>> {
    return request<IGetShippingInfoParameters, TResult>("/shipping/info/:shipping_info_id", parameters, "GET");
}
/**
 * Updates a ShippingInfo with the given id.
 */
export function updateShippingInfo <TResult>(parameters: IUpdateShippingInfoParameters): Promise<IStandardResponse<IUpdateShippingInfoParameters, TResult>> {
    return request<IUpdateShippingInfoParameters, TResult>("/shipping/info/:shipping_info_id", parameters, "PUT");
}
/**
 * Deletes the ShippingInfo with the given id.
 */
export function deleteShippingInfo <TResult>(parameters: IDeleteShippingInfoParameters): Promise<IStandardResponse<IDeleteShippingInfoParameters, TResult>> {
    return request<IDeleteShippingInfoParameters, TResult>("/shipping/info/:shipping_info_id", parameters, "DELETE");
}

export const ShippingInfo = {
    findAllListingShippingProfileEntries,
    createShippingInfo,
    getShippingInfo,
    updateShippingInfo,
    deleteShippingInfo
};
