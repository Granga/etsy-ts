import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IListingVariationImage {
    /**
     * The variation images on a listing. An array with inputs for the property_id, value_id, and image_id fields.
     */
    variation_images: any
}

//parameters types
export interface IGetVariationImagesParameters {
    listing_id: number
}

export interface IUpdateVariationImagesParameters {
    listing_id: number,
    variation_images: any
}

//methods class
export class ListingVariationImage {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Gets all variation images on a listing
     */
    async getVariationImages<TResult>(
        params: IGetVariationImagesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetVariationImagesParameters, TResult>>> {
        return request<IGetVariationImagesParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/variation-images",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Creates variation images on a listing
     */
    async updateVariationImages<TResult>(
        params: IUpdateVariationImagesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateVariationImagesParameters, TResult>>> {
        return request<IUpdateVariationImagesParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/variation-images",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
