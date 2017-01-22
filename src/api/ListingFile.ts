import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class ListingFile {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Finds all ListingFiles on a Listing
     */
    findAllListingFiles<TResult>(parameters: IFindAllListingFilesParameters): Promise<IStandardResponse<IFindAllListingFilesParameters, TResult>> {
        return this.client.http<IFindAllListingFilesParameters, TResult>("/listings/:listing_id/files", parameters, "GET");
    }

    /**
     * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
     of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
     a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
     cause the listing to have free shipping and will remove any variations.
     */
    uploadListingFile<TResult>(parameters: IUploadListingFileParameters): Promise<IStandardResponse<IUploadListingFileParameters, TResult>> {
        return this.client.http<IUploadListingFileParameters, TResult>("/listings/:listing_id/files", parameters, "POST");
    }

    /**
     * Finds a ListingFile by ID
     */
    findListingFile<TResult>(parameters: IFindListingFileParameters): Promise<IStandardResponse<IFindListingFileParameters, TResult>> {
        return this.client.http<IFindListingFileParameters, TResult>("/listings/:listing_id/files/:listing_file_id", parameters, "GET");
    }

    /**
     * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
     be considered a digital listing.
     */
    deleteListingFile<TResult>(parameters: IDeleteListingFileParameters): Promise<IStandardResponse<IDeleteListingFileParameters, TResult>> {
        return this.client.http<IDeleteListingFileParameters, TResult>("/listings/:listing_id/files/:listing_file_id", parameters, "DELETE");
    }
}
