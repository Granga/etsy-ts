import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IShopSectionTranslation {
    shop_section_id: number,
    language: string,
    title: string
}

//parameters types

export interface IGetShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string
}
export interface ICreateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string,
    title?: string
}
export interface IUpdateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string,
    title?: string
}
export interface IDeleteShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string
}

//methods

/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function getShopSectionTranslation <TResult>(parameters: IGetShopSectionTranslationParameters): Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>> {
    return request<IGetShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET");
}
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function createShopSectionTranslation <TResult>(parameters: ICreateShopSectionTranslationParameters): Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>> {
    return request<ICreateShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST");
}
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function updateShopSectionTranslation <TResult>(parameters: IUpdateShopSectionTranslationParameters): Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>> {
    return request<IUpdateShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT");
}
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function deleteShopSectionTranslation <TResult>(parameters: IDeleteShopSectionTranslationParameters): Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>> {
    return request<IDeleteShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE");
}

export const ShopSectionTranslation = {
    getShopSectionTranslation,
    createShopSectionTranslation,
    updateShopSectionTranslation,
    deleteShopSectionTranslation
};
