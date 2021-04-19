import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ListingInventory extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get the inventory for a listing
     */
    async getInventory<TResult>(
        params: IGetInventoryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetInventoryParameters, TResult>>> {
        return this.request<IGetInventoryParameters, TResult>("GET", "/listings/:listing_id/inventory", params, extra);
    }

    /**
     * Update the inventory for a listing
     */
    async updateInventory<TResult>(
        params: IUpdateInventoryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateInventoryParameters, TResult>>> {
        return this.request<IUpdateInventoryParameters, TResult>(
            "PUT",
            "/listings/:listing_id/inventory",
            params,
            extra
        );
    }
}
