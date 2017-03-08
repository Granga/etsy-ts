import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export interface IGetImageListingParameters extends IStandardParameters {
    listing_image_id: number[];
    listing_id: number;
}
export interface IDeleteListingImageParameters extends IStandardParameters {
    listing_id: number;
    listing_image_id: number;
}
export declare const ListingImage: {
    findAllListingImages: <TResult>(parameters: IFindAllListingImagesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllListingImagesParameters, TResult>>;
    uploadListingImage: <TResult>(parameters: IUploadListingImageParameters, options?: IOptions) => Promise<IStandardResponse<IUploadListingImageParameters, TResult>>;
    getImage_Listing: <TResult>(parameters: IGetImageListingParameters, options?: IOptions) => Promise<IStandardResponse<IGetImageListingParameters, TResult>>;
    deleteListingImage: <TResult>(parameters: IDeleteListingImageParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteListingImageParameters, TResult>>;
};
