import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ListingVariationImage extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Gets all variation images on a listing
     */
    async getVariationImages<TResult>(
        params: IGetVariationImagesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetVariationImagesParameters, TResult>>> {
        return this.request<IGetVariationImagesParameters, TResult>(
            "GET",
            "/listings/:listing_id/variation-images",
            params,
            extra
        );
    }

    /**
     * Creates variation images on a listing
     */
    async updateVariationImages<TResult>(
        params: IUpdateVariationImagesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateVariationImagesParameters, TResult>>> {
        return this.request<IUpdateVariationImagesParameters, TResult>(
            "POST",
            "/listings/:listing_id/variation-images",
            params,
            extra
        );
    }
}
