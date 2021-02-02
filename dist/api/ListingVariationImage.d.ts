import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IListingVariationImage {
    /**
     * The variation images on a listing. An array with inputs for the property_id, value_id, and image_id fields.
     */
    variation_images: any;
}
export interface IGetVariationImagesParameters {
    listing_id: number;
}
export interface IUpdateVariationImagesParameters {
    listing_id: number;
    variation_images: any;
}
export declare class ListingVariationImage {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Gets all variation images on a listing
     */
    getVariationImages<TResult>(params: IGetVariationImagesParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetVariationImagesParameters, TResult>>>;
    /**
     * Creates variation images on a listing
     */
    updateVariationImages<TResult>(params: IUpdateVariationImagesParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IUpdateVariationImagesParameters, TResult>>>;
}
