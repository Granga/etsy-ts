import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IListingOffering {
    /**
     * The numeric ID of this offering.
     */
    offering_id: number;
    /**
     * The price of the product
     */
    price: any;
    /**
     * How many of this product are available?
     */
    quantity: number;
    /**
     * Is the offering shown to buyers?
     */
    is_enabled: boolean;
    /**
     * Has the offering been deleted?
     */
    is_deleted: boolean;
}
export interface IGetOfferingParameters {
    listing_id: number;
    product_id: number;
    offering_id: number;
}
export declare class ListingOffering {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Get a specific offering for a listing
     */
    getOffering<TResult>(params: IGetOfferingParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetOfferingParameters, TResult>>>;
}
