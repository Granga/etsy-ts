import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
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
export declare class ListingInventory {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Get the inventory for a listing [developer preview - may be unstable]
     */
    getInventory<TResult>(parameters: IGetInventoryParameters): Promise<IStandardResponse<IGetInventoryParameters, TResult>>;
    /**
     * Update the inventory for a listing [developer preview - may be unstable]
     */
    updateInventory<TResult>(parameters: IUpdateInventoryParameters): Promise<IStandardResponse<IUpdateInventoryParameters, TResult>>;
}
