import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShippingInfo {
    /**
     * The numeric ID of this shipping info record.
     */
    shipping_info_id: number;
    /**
     * The numeric ID of the country from which the listing ships.
     */
    origin_country_id: number;
    /**
     * The numeric ID of the country to which the listing ships (optional). If missing, these fees apply to all destinations.
     */
    destination_country_id: number;
    /**
     * Identifies the currency unit for shipping fees (currently, always 'USD').
     */
    currency_code: string;
    /**
     * The shipping fee for this item, if shipped alone.
     */
    primary_cost: number;
    /**
     * The shipping fee for this item, if shipped with another item.
     */
    secondary_cost: number;
    /**
     * The numeric ID of the listing to which this shipping info applies.
     */
    listing_id: number;
    /**
     * The numeric ID of the region to which this shipping info applies (optional). If missing, no region is selected.  Regions are shorthand for lists of individual countries.
     */
    region_id: number;
    /**
     * The name of the country from which this item ships.
     */
    origin_country_name: string;
    /**
     * The name of the country to which this item ships.
     */
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
declare function findAllListingShippingProfileEntries<TResult>(parameters: IFindAllListingShippingProfileEntriesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>;
/**
 * Creates a new ShippingInfo.
 */
declare function createShippingInfo<TResult>(parameters: ICreateShippingInfoParameters, options?: IOptions): Promise<IStandardResponse<ICreateShippingInfoParameters, TResult>>;
/**
 * Retrieves a ShippingInfo by id.
 */
declare function getShippingInfo<TResult>(parameters: IGetShippingInfoParameters, options?: IOptions): Promise<IStandardResponse<IGetShippingInfoParameters, TResult>>;
/**
 * Updates a ShippingInfo with the given id.
 */
declare function updateShippingInfo<TResult>(parameters: IUpdateShippingInfoParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShippingInfoParameters, TResult>>;
/**
 * Deletes the ShippingInfo with the given id.
 */
declare function deleteShippingInfo<TResult>(parameters: IDeleteShippingInfoParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShippingInfoParameters, TResult>>;
export declare const ShippingInfo: {
    findAllListingShippingProfileEntries: typeof findAllListingShippingProfileEntries;
    createShippingInfo: typeof createShippingInfo;
    getShippingInfo: typeof getShippingInfo;
    updateShippingInfo: typeof updateShippingInfo;
    deleteShippingInfo: typeof deleteShippingInfo;
};
export {};
