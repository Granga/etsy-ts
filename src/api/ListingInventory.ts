import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function getInventory <TResult>(parameters: IGetInventoryParameters): Promise<IStandardResponse<IGetInventoryParameters, TResult>> {
    return request<IGetInventoryParameters, TResult>("/listings/:listing_id/inventory", parameters, "GET");
}
/**
 * Update the inventory for a listing [developer preview - may be unstable]
 */
export function updateInventory <TResult>(parameters: IUpdateInventoryParameters): Promise<IStandardResponse<IUpdateInventoryParameters, TResult>> {
    return request<IUpdateInventoryParameters, TResult>("/listings/:listing_id/inventory", parameters, "PUT");
}

export const ListingInventory = {getInventory, updateInventory};
