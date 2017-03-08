import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IListingInventory {
    products: any[],
    price_on_property: number[],
    quantity_on_property: number[],
    sku_on_property: number[]
}

//parameters types
export interface IGetInventoryParameters extends IStandardParameters {
    listing_id: number
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
 * Get the inventory for a listing [developer preview - may be unstable]
 */
function getInventory <TResult>(parameters: IGetInventoryParameters, options?: IOptions): Promise<IStandardResponse<IGetInventoryParameters, TResult>> {
    return request<IGetInventoryParameters, TResult>("/listings/:listing_id/inventory", parameters, "GET", options);
}
/**
 * Update the inventory for a listing [developer preview - may be unstable]
 */
function updateInventory <TResult>(parameters: IUpdateInventoryParameters, options?: IOptions): Promise<IStandardResponse<IUpdateInventoryParameters, TResult>> {
    return request<IUpdateInventoryParameters, TResult>("/listings/:listing_id/inventory", parameters, "PUT", options);
}

export const ListingInventory = {getInventory, updateInventory};
