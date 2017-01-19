/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IListingImage {
    listing_image_id: number;
    hex_code: string;
    red: number;
    green: number;
    blue: number;
    hue: number;
    saturation: number;
    brightness: number;
    is_black_and_white: boolean;
    creation_tsz: number;
    listing_id: number;
    rank: number;
    url_75x75: string;
    url_170x135: string;
    url_570xN: string;
    url_fullxfull: string;
    full_height: number;
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
export interface IGetImage_ListingParameters extends IStandardParameters {
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
export declare function findAllListingImages<TResult>(parameters: IFindAllListingImagesParameters): Bluebird<IStandardResponse<TResult, IFindAllListingImagesParameters>>;
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
export declare function uploadListingImage<TResult>(parameters: IUploadListingImageParameters): Bluebird<IStandardResponse<TResult, IUploadListingImageParameters>>;
/**
* Retrieves a Image_Listing by id.
*/
export declare function getImage_Listing<TResult>(parameters: IGetImage_ListingParameters): Bluebird<IStandardResponse<TResult, IGetImage_ListingParameters>>;
/**
* Deletes a listing image. A copy of the file remains on our servers,
                                       and so a deleted image may be re-associated with the listing without
                                       re-uploading the original image; see uploadListingImage
*/
export declare function deleteListingImage<TResult>(parameters: IDeleteListingImageParameters): Bluebird<IStandardResponse<TResult, IDeleteListingImageParameters>>;
