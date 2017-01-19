import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IListingTranslation {
    listing_id: number,
    language: string,
    title: string,
    description: string,
    tags: string[]
}

export interface IGetListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string
}
export interface ICreateListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}
export interface IUpdateListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}
export interface IDeleteListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string
}

/**
 * Retrieves a ListingTranslation by listing_id and language
 */
export function getListingTranslation<TResult>(parameters: IGetListingTranslationParameters): Bluebird<IStandardResponse<TResult, IGetListingTranslationParameters>> {
    return request<IStandardResponse<TResult, IGetListingTranslationParameters>>(parameters, '/listings/:listing_id/translations/:language', 'GET');
}
/**
 * Creates a ListingTranslation by listing_id and language
 */
export function createListingTranslation<TResult>(parameters: ICreateListingTranslationParameters): Bluebird<IStandardResponse<TResult, ICreateListingTranslationParameters>> {
    return request<IStandardResponse<TResult, ICreateListingTranslationParameters>>(parameters, '/listings/:listing_id/translations/:language', 'POST');
}
/**
 * Updates a ListingTranslation by listing_id and language
 */
export function updateListingTranslation<TResult>(parameters: IUpdateListingTranslationParameters): Bluebird<IStandardResponse<TResult, IUpdateListingTranslationParameters>> {
    return request<IStandardResponse<TResult, IUpdateListingTranslationParameters>>(parameters, '/listings/:listing_id/translations/:language', 'PUT');
}
/**
 * Deletes a ListingTranslation by listing_id and language
 */
export function deleteListingTranslation<TResult>(parameters: IDeleteListingTranslationParameters): Bluebird<IStandardResponse<TResult, IDeleteListingTranslationParameters>> {
    return request<IStandardResponse<TResult, IDeleteListingTranslationParameters>>(parameters, '/listings/:listing_id/translations/:language', 'DELETE');
}
