import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findAllListingShippingProfileEntries<TResult>(parameters: IFindAllListingShippingProfileEntriesParameters): Promise<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>;
/**
 * Creates a new ShippingInfo.
 */
export declare function createShippingInfo<TResult>(parameters: ICreateShippingInfoParameters): Promise<IStandardResponse<ICreateShippingInfoParameters, TResult>>;
/**
 * Retrieves a ShippingInfo by id.
 */
export declare function getShippingInfo<TResult>(parameters: IGetShippingInfoParameters): Promise<IStandardResponse<IGetShippingInfoParameters, TResult>>;
/**
 * Updates a ShippingInfo with the given id.
 */
export declare function updateShippingInfo<TResult>(parameters: IUpdateShippingInfoParameters): Promise<IStandardResponse<IUpdateShippingInfoParameters, TResult>>;
/**
 * Deletes the ShippingInfo with the given id.
 */
export declare function deleteShippingInfo<TResult>(parameters: IDeleteShippingInfoParameters): Promise<IStandardResponse<IDeleteShippingInfoParameters, TResult>>;
export declare const ShippingInfo: {
    findAllListingShippingProfileEntries: <TResult>(parameters: IFindAllListingShippingProfileEntriesParameters) => Promise<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>;
    createShippingInfo: <TResult>(parameters: ICreateShippingInfoParameters) => Promise<IStandardResponse<ICreateShippingInfoParameters, TResult>>;
    getShippingInfo: <TResult>(parameters: IGetShippingInfoParameters) => Promise<IStandardResponse<IGetShippingInfoParameters, TResult>>;
    updateShippingInfo: <TResult>(parameters: IUpdateShippingInfoParameters) => Promise<IStandardResponse<IUpdateShippingInfoParameters, TResult>>;
    deleteShippingInfo: <TResult>(parameters: IDeleteShippingInfoParameters) => Promise<IStandardResponse<IDeleteShippingInfoParameters, TResult>>;
};
