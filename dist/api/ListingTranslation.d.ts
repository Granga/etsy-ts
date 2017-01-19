/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function getListingTranslation<TResult>(parameters: IGetListingTranslationParameters): Bluebird<IStandardResponse<TResult, IGetListingTranslationParameters>>;
/**
 * Creates a ListingTranslation by listing_id and language
 */
export declare function createListingTranslation<TResult>(parameters: ICreateListingTranslationParameters): Bluebird<IStandardResponse<TResult, ICreateListingTranslationParameters>>;
/**
 * Updates a ListingTranslation by listing_id and language
 */
export declare function updateListingTranslation<TResult>(parameters: IUpdateListingTranslationParameters): Bluebird<IStandardResponse<TResult, IUpdateListingTranslationParameters>>;
/**
 * Deletes a ListingTranslation by listing_id and language
 */
export declare function deleteListingTranslation<TResult>(parameters: IDeleteListingTranslationParameters): Bluebird<IStandardResponse<TResult, IDeleteListingTranslationParameters>>;
