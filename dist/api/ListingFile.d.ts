import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findAllListingFiles<TResult>(parameters: IFindAllListingFilesParameters): Promise<IStandardResponse<IFindAllListingFilesParameters, TResult>>;
/**
 * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
 of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
 a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
 cause the listing to have free shipping and will remove any variations.
 */
export declare function uploadListingFile<TResult>(parameters: IUploadListingFileParameters): Promise<IStandardResponse<IUploadListingFileParameters, TResult>>;
/**
 * Finds a ListingFile by ID
 */
export declare function findListingFile<TResult>(parameters: IFindListingFileParameters): Promise<IStandardResponse<IFindListingFileParameters, TResult>>;
/**
 * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
 be considered a digital listing.
 */
export declare function deleteListingFile<TResult>(parameters: IDeleteListingFileParameters): Promise<IStandardResponse<IDeleteListingFileParameters, TResult>>;
export declare const ListingFile: {
    findAllListingFiles: <TResult>(parameters: IFindAllListingFilesParameters) => Promise<IStandardResponse<IFindAllListingFilesParameters, TResult>>;
    uploadListingFile: <TResult>(parameters: IUploadListingFileParameters) => Promise<IStandardResponse<IUploadListingFileParameters, TResult>>;
    findListingFile: <TResult>(parameters: IFindListingFileParameters) => Promise<IStandardResponse<IFindListingFileParameters, TResult>>;
    deleteListingFile: <TResult>(parameters: IDeleteListingFileParameters) => Promise<IStandardResponse<IDeleteListingFileParameters, TResult>>;
};
