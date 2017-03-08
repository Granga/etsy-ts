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
export declare const ListingInventory: {
    getInventory: <TResult>(parameters: IGetInventoryParameters, options?: IOptions) => Promise<IStandardResponse<IGetInventoryParameters, TResult>>;
    updateInventory: <TResult>(parameters: IUpdateInventoryParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateInventoryParameters, TResult>>;
};
