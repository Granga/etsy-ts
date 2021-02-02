import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IListingTranslation {
    /**
     * The numeric ID for the Listing.
     */
    listing_id: number;
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string;
    /**
     * The title of the Listing of this Translation.
     */
    title: string;
    /**
     * The description of the Listing of this Translation.
     */
    description: string;
    /**
     * The tags of the Listing of this Translation.
     */
    tags: string[];
}
export interface IGetListingTranslationParameters {
    listing_id: number;
    language: string;
}
export interface ICreateListingTranslationParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IUpdateListingTranslationParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IDeleteListingTranslationParameters {
    listing_id: number;
    language: string;
}
export declare class ListingTranslation {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    getListingTranslation<TResult>(params: IGetListingTranslationParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetListingTranslationParameters, TResult>>>;
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    createListingTranslation<TResult>(params: ICreateListingTranslationParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<ICreateListingTranslationParameters, TResult>>>;
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    updateListingTranslation<TResult>(params: IUpdateListingTranslationParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IUpdateListingTranslationParameters, TResult>>>;
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    deleteListingTranslation<TResult>(params: IDeleteListingTranslationParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IDeleteListingTranslationParameters, TResult>>>;
}
