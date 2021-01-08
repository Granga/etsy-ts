import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IListingFile {
    /**
     * The numeric ID of the listing file.
     */
    listing_file_id: number;
    /**
     * The numeric ID of the listing the file belongs to.
     */
    listing_id: number;
    /**
     * Display order.
     */
    rank: number;
    /**
     * The file's displayable name.
     */
    filename: string;
    /**
     * The file's size in a displayable format.
     */
    filesize: string;
    /**
     * The file's size in raw bytes.
     */
    size_bytes: number;
    /**
     * The file's mimetype.
     */
    filetype: string;
    /**
     * The time when this file was uploaded, in Epoch seconds.
     */
    create_date: number;
}
export interface IFindAllListingFilesParameters {
    listing_id: number;
}
export interface IUploadListingFileParameters {
    listing_id: number;
    listing_file_id?: number;
    file?: any;
    name?: string;
    rank?: number;
}
export interface IFindListingFileParameters {
    listing_id: number;
    listing_file_id: number;
}
export interface IDeleteListingFileParameters {
    listing_id: number;
    listing_file_id: number;
}
export declare class ListingFile {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Finds all ListingFiles on a Listing
     */
    findAllListingFiles<TResult>(params: IFindAllListingFilesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllListingFilesParameters, TResult>>>;
    /**
     * Upload a new listing file, or attach an existing file to this listing.  You must either provide the listing_file_id
     of an existing listing file, or the name and file data of a new file that you are uploading.  If you are attaching
     a file to a listing that is currently not digital, the listing will be converted to a digital listing.  This will
     cause the listing to have free shipping and will remove any variations.
     */
    uploadListingFile<TResult>(params: IUploadListingFileParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUploadListingFileParameters, TResult>>>;
    /**
     * Finds a ListingFile by ID
     */
    findListingFile<TResult>(params: IFindListingFileParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindListingFileParameters, TResult>>>;
    /**
     * Removes the listing file from this listing.  If this is the last file on a listing, the listing will no longer
     be considered a digital listing.
     */
    deleteListingFile<TResult>(params: IDeleteListingFileParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteListingFileParameters, TResult>>>;
}
