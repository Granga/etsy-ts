import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IShippingInfo {
    /**
     * The numeric ID of this shipping info record.
     */
    shipping_info_id: number,
    /**
     * The numeric ID of the country from which the listing ships.
     */
    origin_country_id: number,
    /**
     * The numeric ID of the country to which the listing ships (optional). If missing, these fees apply to all destinations.
     */
    destination_country_id: number,
    /**
     * Identifies the currency unit for shipping fees (currently, always 'USD').
     */
    currency_code: string,
    /**
     * The shipping fee for this item, if shipped alone.
     */
    primary_cost: number,
    /**
     * The shipping fee for this item, if shipped with another item.
     */
    secondary_cost: number,
    /**
     * The numeric ID of the listing to which this shipping info applies.
     */
    listing_id: number,
    /**
     * The numeric ID of the region to which this shipping info applies (optional). If missing, no region is selected.  Regions are shorthand for lists of individual countries.
     */
    region_id: number,
    /**
     * The name of the country from which this item ships.
     */
    origin_country_name: string,
    /**
     * The name of the country to which this item ships.
     */
    destination_country_name: string
}

//parameters types
export interface IFindAllListingShippingProfileEntriesParameters {

}

export interface ICreateShippingInfoParameters {
    destination_country_id?: number,
    primary_cost: number,
    secondary_cost: number,
    region_id?: number,
    listing_id: number
}

export interface IGetShippingInfoParameters {
    shipping_info_id: number[]
}

export interface IUpdateShippingInfoParameters {
    shipping_info_id: number,
    destination_country_id?: number,
    primary_cost?: number,
    secondary_cost?: number,
    region_id?: number,
    listing_id?: number
}

export interface IDeleteShippingInfoParameters {
    shipping_info_id: number
}

//methods class
export class ShippingInfo {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    async findAllListingShippingProfileEntries<TResult>(
        params: IFindAllListingShippingProfileEntriesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>> {
        return request<IFindAllListingShippingProfileEntriesParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/shipping/info",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Creates a new ShippingInfo.
     */
    async createShippingInfo<TResult>(
        params: ICreateShippingInfoParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingInfoParameters, TResult>>> {
        return request<ICreateShippingInfoParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/shipping/info",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Retrieves a ShippingInfo by id.
     */
    async getShippingInfo<TResult>(
        params: IGetShippingInfoParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetShippingInfoParameters, TResult>>> {
        return request<IGetShippingInfoParameters, TResult>({
            ...this.config,
            url: "/shipping/info/:shipping_info_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Updates a ShippingInfo with the given id.
     */
    async updateShippingInfo<TResult>(
        params: IUpdateShippingInfoParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingInfoParameters, TResult>>> {
        return request<IUpdateShippingInfoParameters, TResult>({
            ...this.config,
            url: "/shipping/info/:shipping_info_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Deletes the ShippingInfo with the given id.
     */
    async deleteShippingInfo<TResult>(
        params: IDeleteShippingInfoParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingInfoParameters, TResult>>> {
        return request<IDeleteShippingInfoParameters, TResult>({
            ...this.config,
            url: "/shipping/info/:shipping_info_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
