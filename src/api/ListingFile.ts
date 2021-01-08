import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class ListingFile {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Finds all ListingFiles on a Listing
     */
    async findAllListingFiles<TResult>(
        params: IFindAllListingFilesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingFilesParameters, TResult>>> {
        return request<IFindAllListingFilesParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/files",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
     of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
     a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
     cause the listing to have free shipping and will remove any variations.
     */
    async uploadListingFile<TResult>(
        params: IUploadListingFileParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUploadListingFileParameters, TResult>>> {
        return request<IUploadListingFileParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/files",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Finds a ListingFile by ID
     */
    async findListingFile<TResult>(
        params: IFindListingFileParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindListingFileParameters, TResult>>> {
        return request<IFindListingFileParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/files/:listing_file_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
     be considered a digital listing.
     */
    async deleteListingFile<TResult>(
        params: IDeleteListingFileParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingFileParameters, TResult>>> {
        return request<IDeleteListingFileParameters, TResult>({
            ...this.config,
            url: "/listings/:listing_id/files/:listing_file_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
