import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export interface IGetListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
}
export interface ICreateListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IUpdateListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IDeleteListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
}
export declare class ListingTranslation {
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    static getListingTranslation<TResult>(parameters: IGetListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetListingTranslationParameters, TResult>>;
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    static createListingTranslation<TResult>(parameters: ICreateListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>>;
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    static updateListingTranslation<TResult>(parameters: IUpdateListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>>;
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    static deleteListingTranslation<TResult>(parameters: IDeleteListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>>;
}
