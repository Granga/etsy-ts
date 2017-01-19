/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IShippingInfo {
    shipping_info_id: number;
    origin_country_id: number;
    destination_country_id: number;
    currency_code: string;
    primary_cost: number;
    secondary_cost: number;
    listing_id: number;
    region_id: number;
    origin_country_name: string;
    destination_country_name: string;
}
export interface IFindAllListingShippingProfileEntriesParameters extends IStandardParameters {
}
export interface ICreateShippingInfoParameters extends IStandardParameters {
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    region_id?: number;
    listing_id: number;
}
export interface IGetShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number[];
}
export interface IUpdateShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number;
    destination_country_id?: number;
    primary_cost?: number;
    secondary_cost?: number;
    region_id?: number;
    listing_id?: number;
}
export interface IDeleteShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number;
}
/**
 * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
 */
export declare function findAllListingShippingProfileEntries<TResult>(parameters: IFindAllListingShippingProfileEntriesParameters): Bluebird<IStandardResponse<TResult, IFindAllListingShippingProfileEntriesParameters>>;
/**
 * Creates a new ShippingInfo.
 */
export declare function createShippingInfo<TResult>(parameters: ICreateShippingInfoParameters): Bluebird<IStandardResponse<TResult, ICreateShippingInfoParameters>>;
/**
 * Retrieves a ShippingInfo by id.
 */
export declare function getShippingInfo<TResult>(parameters: IGetShippingInfoParameters): Bluebird<IStandardResponse<TResult, IGetShippingInfoParameters>>;
/**
 * Updates a ShippingInfo with the given id.
 */
export declare function updateShippingInfo<TResult>(parameters: IUpdateShippingInfoParameters): Bluebird<IStandardResponse<TResult, IUpdateShippingInfoParameters>>;
/**
 * Deletes the ShippingInfo with the given id.
 */
export declare function deleteShippingInfo<TResult>(parameters: IDeleteShippingInfoParameters): Bluebird<IStandardResponse<TResult, IDeleteShippingInfoParameters>>;
