import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare class ListingTranslation {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    getListingTranslation<TResult>(parameters: IGetListingTranslationParameters): Promise<IStandardResponse<IGetListingTranslationParameters, TResult>>;
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    createListingTranslation<TResult>(parameters: ICreateListingTranslationParameters): Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>>;
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    updateListingTranslation<TResult>(parameters: IUpdateListingTranslationParameters): Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>>;
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    deleteListingTranslation<TResult>(parameters: IDeleteListingTranslationParameters): Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>>;
}
