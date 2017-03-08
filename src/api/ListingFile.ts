import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IListingFile {
    listing_file_id: number,
    listing_id: number,
    rank: number,
    filename: string,
    filesize: string,
    size_bytes: number,
    filetype: string,
    create_date: number
}

//parameters types

export interface IFindAllListingFilesParameters extends IStandardParameters {
    listing_id: number
}
export interface IUploadListingFileParameters extends IStandardParameters {
    listing_id: number,
    listing_file_id?: number,
    file?: any,
    name?: string,
    rank?: number
}
export interface IFindListingFileParameters extends IStandardParameters {
    listing_id: number,
    listing_file_id: number
}
export interface IDeleteListingFileParameters extends IStandardParameters {
    listing_id: number,
    listing_file_id: number
}

//methods

/**
 * Finds all ListingFiles on a Listing
 */
export function findAllListingFiles <TResult>(parameters: IFindAllListingFilesParameters): Promise<IStandardResponse<IFindAllListingFilesParameters, TResult>> {
    return request<IFindAllListingFilesParameters, TResult>("/listings/:listing_id/files", parameters, "GET");
}
/**
 * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
 of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
 a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
 cause the listing to have free shipping and will remove any variations.
 */
export function uploadListingFile <TResult>(parameters: IUploadListingFileParameters): Promise<IStandardResponse<IUploadListingFileParameters, TResult>> {
    return request<IUploadListingFileParameters, TResult>("/listings/:listing_id/files", parameters, "POST");
}
/**
 * Finds a ListingFile by ID
 */
export function findListingFile <TResult>(parameters: IFindListingFileParameters): Promise<IStandardResponse<IFindListingFileParameters, TResult>> {
    return request<IFindListingFileParameters, TResult>("/listings/:listing_id/files/:listing_file_id", parameters, "GET");
}
/**
 * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
 be considered a digital listing.
 */
export function deleteListingFile <TResult>(parameters: IDeleteListingFileParameters): Promise<IStandardResponse<IDeleteListingFileParameters, TResult>> {
    return request<IDeleteListingFileParameters, TResult>("/listings/:listing_id/files/:listing_file_id", parameters, "DELETE");
}

export const ListingFile = {findAllListingFiles, uploadListingFile, findListingFile, deleteListingFile};
