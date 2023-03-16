import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IListingFile {
    /**
     * The numeric ID of the listing file.
     */
    listing_file_id: number,
    /**
     * The numeric ID of the listing the file belongs to.
     */
    listing_id: number,
    /**
     * Display order.
     */
    rank: number,
    /**
     * The file's displayable name.
     */
    filename: string,
    /**
     * The file's size in a displayable format.
     */
    filesize: string,
    /**
     * The file's size in raw bytes.
     */
    size_bytes: number,
    /**
     * The file's mimetype.
     */
    filetype: string,
    /**
     * The time when this file was uploaded, in Epoch seconds.
     */
    create_date: number
}

//parameters types
export interface IFindAllListingFilesParameters {
    listing_id: number
}

export interface IUploadListingFileParameters {
    listing_id: number,
    listing_file_id?: number,
    file?: any,
    name?: string,
    rank?: number
}

export interface IFindListingFileParameters {
    listing_id: number,
    listing_file_id: number
}

export interface IDeleteListingFileParameters {
    listing_id: number,
    listing_file_id: number
}

//methods class
export class ListingFile extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Finds all ListingFiles on a Listing
     */
    async findAllListingFiles<TResult>(
        params: IFindAllListingFilesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingFilesParameters, TResult>>> {
        return this.request<IFindAllListingFilesParameters, TResult>("GET", "/listings/:listing_id/files", params, extra);
    }

    /**
     * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
     of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
     a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
     cause the listing to have free shipping and will remove any variations.
     */
    async uploadListingFile<TResult>(
        params: IUploadListingFileParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUploadListingFileParameters, TResult>>> {
        return this.request<IUploadListingFileParameters, TResult>("POST", "/listings/:listing_id/files", params, extra);
    }

    /**
     * Finds a ListingFile by ID
     */
    async findListingFile<TResult>(
        params: IFindListingFileParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindListingFileParameters, TResult>>> {
        return this.request<IFindListingFileParameters, TResult>("GET", "/listings/:listing_id/files/:listing_file_id", params, extra);
    }

    /**
     * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
     be considered a digital listing.
     */
    async deleteListingFile<TResult>(
        params: IDeleteListingFileParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingFileParameters, TResult>>> {
        return this.request<IDeleteListingFileParameters, TResult>("DELETE", "/listings/:listing_id/files/:listing_file_id", params, extra);
    }
}
