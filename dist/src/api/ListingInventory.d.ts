import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IListingInventory {
    /**
     * The products available for this listing.
     */
    products: any[];
    /**
     * Which properties control price?
     */
    price_on_property: number[];
    /**
     * Which properties control quantity?
     */
    quantity_on_property: number[];
    /**
     * Which properties control SKU?
     */
    sku_on_property: number[];
}
export interface IGetInventoryParameters {
    listing_id: number;
    write_missing_inventory?: boolean;
}
export interface IUpdateInventoryParameters {
    listing_id: number;
    products: any;
    price_on_property?: number[];
    quantity_on_property?: number[];
    sku_on_property?: number[];
}
export declare class ListingInventory {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Get the inventory for a listing
     */
    getInventory<TResult>(params: IGetInventoryParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetInventoryParameters, TResult>>>;
    /**
     * Update the inventory for a listing
     */
    updateInventory<TResult>(params: IUpdateInventoryParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateInventoryParameters, TResult>>>;
}
