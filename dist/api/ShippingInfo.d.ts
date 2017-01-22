import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare class ShippingInfo {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    findAllListingShippingProfileEntries<TResult>(parameters: IFindAllListingShippingProfileEntriesParameters): Promise<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>;
    /**
     * Creates a new ShippingInfo.
     */
    createShippingInfo<TResult>(parameters: ICreateShippingInfoParameters): Promise<IStandardResponse<ICreateShippingInfoParameters, TResult>>;
    /**
     * Retrieves a ShippingInfo by id.
     */
    getShippingInfo<TResult>(parameters: IGetShippingInfoParameters): Promise<IStandardResponse<IGetShippingInfoParameters, TResult>>;
    /**
     * Updates a ShippingInfo with the given id.
     */
    updateShippingInfo<TResult>(parameters: IUpdateShippingInfoParameters): Promise<IStandardResponse<IUpdateShippingInfoParameters, TResult>>;
    /**
     * Deletes the ShippingInfo with the given id.
     */
    deleteShippingInfo<TResult>(parameters: IDeleteShippingInfoParameters): Promise<IStandardResponse<IDeleteShippingInfoParameters, TResult>>;
}
