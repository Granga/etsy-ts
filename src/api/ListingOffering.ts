import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IListingOffering {
    /**
     * The numeric ID of this offering.
     */
    offering_id: number,
    /**
     * The price of the product
     */
    price: any,
    /**
     * How many of this product are available?
     */
    quantity: number,
    /**
     * Is the offering shown to buyers?
     */
    is_enabled: boolean,
    /**
     * Has the offering been deleted?
     */
    is_deleted: boolean
}

//parameters types
export interface IGetOfferingParameters {
    listing_id: number,
    product_id: number,
    offering_id: number
}

//methods class
export class ListingOffering {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get a specific offering for a listing
     */
    async getOffering<TResult>(
        params: IGetOfferingParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetOfferingParameters, TResult>>> {
        return request<IGetOfferingParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/products/:product_id/offerings/:offering_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
