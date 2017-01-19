/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function getInventory<TResult>(parameters: IGetInventoryParameters): Bluebird<IStandardResponse<TResult, IGetInventoryParameters>>;
/**
 * Update the inventory for a listing [developer preview - may be unstable]
 */
export declare function updateInventory<TResult>(parameters: IUpdateInventoryParameters): Bluebird<IStandardResponse<TResult, IUpdateInventoryParameters>>;
