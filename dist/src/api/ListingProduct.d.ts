import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IListingProduct {
    /**
     * The numeric ID of this product.
     */
    product_id: number;
    /**
     * A list of 0-2 properties associated with this product and their values.
     */
    property_values: any[];
    /**
     * The product identifier (if set).
     */
    sku: string;
    /**
     * A JSON list of active offerings for this product.
     */
    offerings: any[];
    /**
     * Has the product been deleted?
     */
    is_deleted: boolean;
}
export interface IGetProductParameters {
    listing_id: number;
    product_id: number;
}
export declare class ListingProduct {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Get a specific offering for a listing
     */
    getProduct<TResult>(params: IGetProductParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetProductParameters, TResult>>>;
}
