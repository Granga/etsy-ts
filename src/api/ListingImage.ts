import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IListingImage {
    /**
     * The numeric ID of the listing image.
     */
    listing_image_id: number,
    /**
     * The image's average color, in webhex notation.
     */
    hex_code: string,
    /**
     * The image's average red value, 0-255 (RGB color).
     */
    red: number,
    /**
     * The image's average green value, 0-255 (RGB color).
     */
    green: number,
    /**
     * The image's average blue value, 0-255 (RGB color).
     */
    blue: number,
    /**
     * The image's average hue, 0-360 (HSV color).
     */
    hue: number,
    /**
     * The image's average saturation, 0-100 (HSV color).
     */
    saturation: number,
    /**
     * The image's average brightness, 0-100 (HSV color).
     */
    brightness: number,
    /**
     * True if the image is in black & white.
     */
    is_black_and_white: boolean,
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number,
    /**
     * The numeric value of the listing id the image belongs to.
     */
    listing_id: number,
    /**
     * Display order.
     */
    rank: number,
    /**
     * The url to a 75x75 thumbnail of the image.
     */
    url_75x75: string,
    /**
     * The url to a 170x135 thumbnail of the image.
     */
    url_170x135: string,
    /**
     * The url to a thumbnail of the image, no more than 570px width by variable height.
     */
    url_570xN: string,
    /**
     * The url to the full-size image, up to 3000px in each dimension.
     */
    url_fullxfull: string,
    /**
     * Height of the image returned by url_fullxfull.
     */
    full_height: number,
    /**
     * Width of the image returned by url_fullxfull.
     */
    full_width: number
}

//parameters types
export interface IFindAllListingImagesParameters {
    listing_id: number
}

export interface IUploadListingImageParameters {
    listing_id: number,
    listing_image_id?: number,
    image?: any,
    rank?: number,
    overwrite?: boolean,
    is_watermarked?: boolean
}

export interface IGetImageListingParameters {
    listing_image_id: number[],
    listing_id: number
}

export interface IDeleteListingImageParameters {
    listing_id: number,
    listing_image_id: number
}

//methods class
export class ListingImage {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Retrieves a set of ListingImage objects associated to a Listing.
     */
    async findAllListingImages<TResult>(
        params: IFindAllListingImagesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingImagesParameters, TResult>>> {
        return request<IFindAllListingImagesParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/images",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

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
    async uploadListingImage<TResult>(
        params: IUploadListingImageParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUploadListingImageParameters, TResult>>> {
        return request<IUploadListingImageParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/images",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Retrieves a Image_Listing by id.
     */
    async getImage_Listing<TResult>(
        params: IGetImageListingParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetImageListingParameters, TResult>>> {
        return request<IGetImageListingParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/images/:listing_image_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Deletes a listing image. A copy of the file remains on our servers,
     and so a deleted image may be re-associated with the listing without
     re-uploading the original image; see uploadListingImage
     */
    async deleteListingImage<TResult>(
        params: IDeleteListingImageParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingImageParameters, TResult>>> {
        return request<IDeleteListingImageParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/images/:listing_image_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
