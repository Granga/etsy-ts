import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IListingVariationImage {
    /**
     * The variation images on a listing. An array with inputs for the property_id, value_id, and image_id fields.
     */
    variation_images: any
}

//parameters types
export interface IGetVariationImagesParameters extends IStandardParameters {
    listing_id: number
}
export interface IUpdateVariationImagesParameters extends IStandardParameters {
    listing_id: number,
    variation_images: any
}

//methods
/**
 * Gets all variation images on a listing
 */
function getVariationImages<TResult>(parameters: IGetVariationImagesParameters, options?: IOptions): Promise<IStandardResponse<IGetVariationImagesParameters, TResult>> {
    return request<IGetVariationImagesParameters, TResult>("/listings/:listing_id/variation-images", parameters, "GET", options);
}

/**
 * Creates variation images on a listing
 */
function updateVariationImages<TResult>(parameters: IUpdateVariationImagesParameters, options?: IOptions): Promise<IStandardResponse<IUpdateVariationImagesParameters, TResult>> {
    return request<IUpdateVariationImagesParameters, TResult>("/listings/:listing_id/variation-images", parameters, "POST", options);
}

export const ListingVariationImage = {getVariationImages, updateVariationImages};
