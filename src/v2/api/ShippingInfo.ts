import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ShippingInfo extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    async findAllListingShippingProfileEntries<TResult>(
        params: IFindAllListingShippingProfileEntriesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>> {
        return this.request<IFindAllListingShippingProfileEntriesParameters, TResult>(
            "GET",
            "/listings/:listing_id/shipping/info",
            params,
            extra
        );
    }

    /**
     * Creates a new ShippingInfo.
     */
    async createShippingInfo<TResult>(
        params: ICreateShippingInfoParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingInfoParameters, TResult>>> {
        return this.request<ICreateShippingInfoParameters, TResult>(
            "POST",
            "/listings/:listing_id/shipping/info",
            params,
            extra
        );
    }

    /**
     * Retrieves a ShippingInfo by id.
     */
    async getShippingInfo<TResult>(
        params: IGetShippingInfoParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShippingInfoParameters, TResult>>> {
        return this.request<IGetShippingInfoParameters, TResult>(
            "GET",
            "/shipping/info/:shipping_info_id",
            params,
            extra
        );
    }

    /**
     * Updates a ShippingInfo with the given id.
     */
    async updateShippingInfo<TResult>(
        params: IUpdateShippingInfoParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingInfoParameters, TResult>>> {
        return this.request<IUpdateShippingInfoParameters, TResult>(
            "PUT",
            "/shipping/info/:shipping_info_id",
            params,
            extra
        );
    }

    /**
     * Deletes the ShippingInfo with the given id.
     */
    async deleteShippingInfo<TResult>(
        params: IDeleteShippingInfoParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingInfoParameters, TResult>>> {
        return this.request<IDeleteShippingInfoParameters, TResult>(
            "DELETE",
            "/shipping/info/:shipping_info_id",
            params,
            extra
        );
    }
}
