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
export declare class ListingVariationImage {
    /**
     * Gets all variation images on a listing
     */
    static getVariationImages<TResult>(parameters: IGetVariationImagesParameters, options?: IOptions): Promise<IStandardResponse<IGetVariationImagesParameters, TResult>>;
    /**
     * Creates variation images on a listing
     */
    static updateVariationImages<TResult>(parameters: IUpdateVariationImagesParameters, options?: IOptions): Promise<IStandardResponse<IUpdateVariationImagesParameters, TResult>>;
}
