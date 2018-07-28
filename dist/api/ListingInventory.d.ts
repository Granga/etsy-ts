import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IListingInventory {
    products: any[];
    price_on_property: number[];
    quantity_on_property: number[];
    sku_on_property: number[];
}
export interface IGetInventoryParameters extends IStandardParameters {
    listing_id: number;
}
export interface IUpdateInventoryParameters extends IStandardParameters {
    listing_id: number;
    products: any;
    price_on_property?: number[];
    quantity_on_property?: number[];
    sku_on_property?: number[];
}
/**
 * Get the inventory for a listing [developer preview - may be unstable]
 */
declare function getInventory<TResult>(parameters: IGetInventoryParameters, options?: IOptions): Promise<IStandardResponse<IGetInventoryParameters, TResult>>;
/**
 * Update the inventory for a listing [developer preview - may be unstable]
 */
declare function updateInventory<TResult>(parameters: IUpdateInventoryParameters, options?: IOptions): Promise<IStandardResponse<IUpdateInventoryParameters, TResult>>;
export declare const ListingInventory: {
    getInventory: typeof getInventory;
    updateInventory: typeof updateInventory;
};
export {};
