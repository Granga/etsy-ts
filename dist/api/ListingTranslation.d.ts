import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IListingTranslation {
    listing_id: number;
    language: string;
    title: string;
    description: string;
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
/**
 * Retrieves a ListingTranslation by listing_id and language
 */
export declare function getListingTranslation<TResult>(parameters: IGetListingTranslationParameters): Promise<IStandardResponse<IGetListingTranslationParameters, TResult>>;
/**
 * Creates a ListingTranslation by listing_id and language
 */
export declare function createListingTranslation<TResult>(parameters: ICreateListingTranslationParameters): Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>>;
/**
 * Updates a ListingTranslation by listing_id and language
 */
export declare function updateListingTranslation<TResult>(parameters: IUpdateListingTranslationParameters): Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>>;
/**
 * Deletes a ListingTranslation by listing_id and language
 */
export declare function deleteListingTranslation<TResult>(parameters: IDeleteListingTranslationParameters): Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>>;
export declare const ListingTranslation: {
    getListingTranslation: <TResult>(parameters: IGetListingTranslationParameters) => Promise<IStandardResponse<IGetListingTranslationParameters, TResult>>;
    createListingTranslation: <TResult>(parameters: ICreateListingTranslationParameters) => Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>>;
    updateListingTranslation: <TResult>(parameters: IUpdateListingTranslationParameters) => Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>>;
    deleteListingTranslation: <TResult>(parameters: IDeleteListingTranslationParameters) => Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>>;
};
