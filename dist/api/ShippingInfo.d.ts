import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindAllListingShippingProfileEntriesParameters {
}
export interface ICreateShippingInfoParameters {
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    region_id?: number;
    listing_id: number;
}
export interface IGetShippingInfoParameters {
    shipping_info_id: number[];
}
export interface IUpdateShippingInfoParameters {
    shipping_info_id: number;
    destination_country_id?: number;
    primary_cost?: number;
    secondary_cost?: number;
    region_id?: number;
    listing_id?: number;
}
export interface IDeleteShippingInfoParameters {
    shipping_info_id: number;
}
export declare class ShippingInfo {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    findAllListingShippingProfileEntries<TResult>(params: IFindAllListingShippingProfileEntriesParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>>;
    /**
     * Creates a new ShippingInfo.
     */
    createShippingInfo<TResult>(params: ICreateShippingInfoParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<ICreateShippingInfoParameters, TResult>>>;
    /**
     * Retrieves a ShippingInfo by id.
     */
    getShippingInfo<TResult>(params: IGetShippingInfoParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetShippingInfoParameters, TResult>>>;
    /**
     * Updates a ShippingInfo with the given id.
     */
    updateShippingInfo<TResult>(params: IUpdateShippingInfoParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IUpdateShippingInfoParameters, TResult>>>;
    /**
     * Deletes the ShippingInfo with the given id.
     */
    deleteShippingInfo<TResult>(params: IDeleteShippingInfoParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IDeleteShippingInfoParameters, TResult>>>;
}
