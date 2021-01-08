import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IListingInventory {
    /**
     * The products available for this listing.
     */
    products: any[],
    /**
     * Which properties control price?
     */
    price_on_property: number[],
    /**
     * Which properties control quantity?
     */
    quantity_on_property: number[],
    /**
     * Which properties control SKU?
     */
    sku_on_property: number[]
}

//parameters types
export interface IGetInventoryParameters {
    listing_id: number,
    write_missing_inventory?: boolean
}

export interface IUpdateInventoryParameters {
    listing_id: number,
    products: any,
    price_on_property?: number[],
    quantity_on_property?: number[],
    sku_on_property?: number[]
}

//methods class
export class ListingInventory {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Get the inventory for a listing
     */
    async getInventory<TResult>(
        params: IGetInventoryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetInventoryParameters, TResult>>> {
        return request<IGetInventoryParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/inventory",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Update the inventory for a listing
     */
    async updateInventory<TResult>(
        params: IUpdateInventoryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateInventoryParameters, TResult>>> {
        return request<IUpdateInventoryParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/inventory",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
