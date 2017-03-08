import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IListingTranslation {
    listing_id: number,
    language: string,
    title: string,
    description: string,
    tags: string[]
}

//parameters types

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

//methods

/**
 * Retrieves a ListingTranslation by listing_id and language
 */
export function getListingTranslation <TResult>(parameters: IGetListingTranslationParameters): Promise<IStandardResponse<IGetListingTranslationParameters, TResult>> {
    return request<IGetListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "GET");
}
/**
 * Creates a ListingTranslation by listing_id and language
 */
export function createListingTranslation <TResult>(parameters: ICreateListingTranslationParameters): Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>> {
    return request<ICreateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "POST");
}
/**
 * Updates a ListingTranslation by listing_id and language
 */
export function updateListingTranslation <TResult>(parameters: IUpdateListingTranslationParameters): Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>> {
    return request<IUpdateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "PUT");
}
/**
 * Deletes a ListingTranslation by listing_id and language
 */
export function deleteListingTranslation <TResult>(parameters: IDeleteListingTranslationParameters): Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>> {
    return request<IDeleteListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "DELETE");
}

export const ListingTranslation = {
    getListingTranslation,
    createListingTranslation,
    updateListingTranslation,
    deleteListingTranslation
};
