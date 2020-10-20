import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IListingImage {
    /**
     * The numeric ID of the listing image.
     */
    listing_image_id: number;
    /**
     * The image's average color, in webhex notation.
     */
    hex_code: string;
    /**
     * The image's average red value, 0-255 (RGB color).
     */
    red: number;
    /**
     * The image's average green value, 0-255 (RGB color).
     */
    green: number;
    /**
     * The image's average blue value, 0-255 (RGB color).
     */
    blue: number;
    /**
     * The image's average hue, 0-360 (HSV color).
     */
    hue: number;
    /**
     * The image's average saturation, 0-100 (HSV color).
     */
    saturation: number;
    /**
     * The image's average brightness, 0-100 (HSV color).
     */
    brightness: number;
    /**
     * True if the image is in black & white.
     */
    is_black_and_white: boolean;
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * The numeric value of the listing id the image belongs to.
     */
    listing_id: number;
    /**
     * Display order.
     */
    rank: number;
    /**
     * The url to a 75x75 thumbnail of the image.
     */
    url_75x75: string;
    /**
     * The url to a 170x135 thumbnail of the image.
     */
    url_170x135: string;
    /**
     * The url to a thumbnail of the image, no more than 570px width by variable height.
     */
    url_570xN: string;
    /**
     * The url to the full-size image, up to 3000px in each dimension.
     */
    url_fullxfull: string;
    /**
     * Height of the image returned by url_fullxfull.
     */
    full_height: number;
    /**
     * Width of the image returned by url_fullxfull.
     */
    full_width: number;
}
export interface IFindAllListingImagesParameters extends IStandardParameters {
    listing_id: number;
}
export interface IUploadListingImageParameters extends IStandardParameters {
    listing_id: number;
    listing_image_id?: number;
    image?: any;
    rank?: number;
    overwrite?: boolean;
    is_watermarked?: boolean;
}
export interface IGetImageListingParameters extends IStandardParameters {
    listing_image_id: number[];
    listing_id: number;
}
export interface IDeleteListingImageParameters extends IStandardParameters {
    listing_id: number;
    listing_image_id: number;
}
/**
 * Retrieves a set of ListingImage objects associated to a Listing.
 */
declare function findAllListingImages<TResult>(parameters: IFindAllListingImagesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingImagesParameters, TResult>>;
/**
 * Upload a new listing image, or re-associate a previously deleted one. You may associate an image
 to any listing within the same shop that the image's original listing belongs to.
 You MUST pass either a listing_image_id OR an image to this method.
 Passing a listing_image_id serves to re-associate an image that was previously deleted.
 If you wish to re-associate an image, we strongly recommend using the listing_image_id
 argument as opposed to re-uploading a new image each time, to save bandwidth for you as well as us.
 Pass overwrite=1 to replace the existing image at a given rank.
 When uploading a new listing image with a watermark, pass is_watermarked=1; existing listing images
 will not be affected by this parameter.
 */
declare function uploadListingImage<TResult>(parameters: IUploadListingImageParameters, options?: IOptions): Promise<IStandardResponse<IUploadListingImageParameters, TResult>>;
/**
 * Retrieves a Image_Listing by id.
 */
declare function getImage_Listing<TResult>(parameters: IGetImageListingParameters, options?: IOptions): Promise<IStandardResponse<IGetImageListingParameters, TResult>>;
/**
 * Deletes a listing image. A copy of the file remains on our servers,
 and so a deleted image may be re-associated with the listing without
 re-uploading the original image; see uploadListingImage
 */
declare function deleteListingImage<TResult>(parameters: IDeleteListingImageParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingImageParameters, TResult>>;
export declare const ListingImage: {
    findAllListingImages: typeof findAllListingImages;
    uploadListingImage: typeof uploadListingImage;
    getImage_Listing: typeof getImage_Listing;
    deleteListingImage: typeof deleteListingImage;
};
export {};
