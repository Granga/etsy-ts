import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

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
export interface IGetInventoryParameters extends IStandardParameters {
    listing_id: number,
    write_missing_inventory?: boolean
}

export interface IUpdateInventoryParameters extends IStandardParameters {
    listing_id: number,
    products: any,
    price_on_property?: number[],
    quantity_on_property?: number[],
    sku_on_property?: number[]
}

//methods
/**
 * Get the inventory for a listing
 */
function getInventory<TResult>(parameters: IGetInventoryParameters, options?: IOptions): Promise<IStandardResponse<IGetInventoryParameters, TResult>> {
    return request<IGetInventoryParameters, TResult>("/listings/:listing_id/inventory", parameters, "GET", options);
}

/**
 * Update the inventory for a listing
 */
function updateInventory<TResult>(parameters: IUpdateInventoryParameters, options?: IOptions): Promise<IStandardResponse<IUpdateInventoryParameters, TResult>> {
    return request<IUpdateInventoryParameters, TResult>("/listings/:listing_id/inventory", parameters, "PUT", options);
}

export const ListingInventory = {getInventory, updateInventory};
