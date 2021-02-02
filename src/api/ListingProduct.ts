import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IListingProduct {
    /**
     * The numeric ID of this product.
     */
    product_id: number,
    /**
     * A list of 0-2 properties associated with this product and their values.
     */
    property_values: any[],
    /**
     * The product identifier (if set).
     */
    sku: string,
    /**
     * A JSON list of active offerings for this product.
     */
    offerings: any[],
    /**
     * Has the product been deleted?
     */
    is_deleted: boolean
}

//parameters types
export interface IGetProductParameters {
    listing_id: number,
    product_id: number
}

//methods class
export class ListingProduct {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get a specific offering for a listing
     */
    async getProduct<TResult>(
        params: IGetProductParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetProductParameters, TResult>>> {
        return request<IGetProductParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/products/:product_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
