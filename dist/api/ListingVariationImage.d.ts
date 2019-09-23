import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IListingVariationImage {
    /**
     * The variation images on a listing. An array with inputs for the property_id, value_id, and image_id fields.
     */
    variation_images: any;
}
export interface IGetVariationImagesParameters extends IStandardParameters {
    listing_id: number;
}
export interface IUpdateVariationImagesParameters extends IStandardParameters {
    listing_id: number;
    variation_images: any;
}
/**
 * Gets all variation images on a listing
 */
declare function getVariationImages<TResult>(parameters: IGetVariationImagesParameters, options?: IOptions): Promise<IStandardResponse<IGetVariationImagesParameters, TResult>>;
/**
 * Creates variation images on a listing
 */
declare function updateVariationImages<TResult>(parameters: IUpdateVariationImagesParameters, options?: IOptions): Promise<IStandardResponse<IUpdateVariationImagesParameters, TResult>>;
export declare const ListingVariationImage: {
    getVariationImages: typeof getVariationImages;
    updateVariationImages: typeof updateVariationImages;
};
export {};
