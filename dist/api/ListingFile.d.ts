/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IListingFile {
    listing_file_id: number;
    listing_id: number;
    rank: number;
    filename: string;
    filesize: string;
    size_bytes: number;
    filetype: string;
    create_date: number;
}
export interface IFindAllListingFilesParameters extends IStandardParameters {
    listing_id: number;
}
export interface IUploadListingFileParameters extends IStandardParameters {
    listing_id: number;
    listing_file_id?: number;
    file?: any;
    name?: string;
    rank?: number;
}
export interface IFindListingFileParameters extends IStandardParameters {
    listing_id: number;
    listing_file_id: number;
}
export interface IDeleteListingFileParameters extends IStandardParameters {
    listing_id: number;
    listing_file_id: number;
}
/**
* Finds all ListingFiles on a Listing
*/
export declare function findAllListingFiles<TResult>(parameters: IFindAllListingFilesParameters): Bluebird<IStandardResponse<TResult, IFindAllListingFilesParameters>>;
/**
* Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
cause the listing to have free shipping and will remove any variations.
*/
export declare function uploadListingFile<TResult>(parameters: IUploadListingFileParameters): Bluebird<IStandardResponse<TResult, IUploadListingFileParameters>>;
/**
* Finds a ListingFile by ID
*/
export declare function findListingFile<TResult>(parameters: IFindListingFileParameters): Bluebird<IStandardResponse<TResult, IFindListingFileParameters>>;
/**
* Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
be considered a digital listing.
*/
export declare function deleteListingFile<TResult>(parameters: IDeleteListingFileParameters): Bluebird<IStandardResponse<TResult, IDeleteListingFileParameters>>;
