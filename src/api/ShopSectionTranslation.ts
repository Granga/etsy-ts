import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function getShopSectionTranslation <TResult>(parameters: IGetShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>> {
    return request<IGetShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function createShopSectionTranslation <TResult>(parameters: ICreateShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>> {
    return request<ICreateShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function updateShopSectionTranslation <TResult>(parameters: IUpdateShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>> {
    return request<IUpdateShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function deleteShopSectionTranslation <TResult>(parameters: IDeleteShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>> {
    return request<IDeleteShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE", options);
}

export const ShopSectionTranslation = {
    getShopSectionTranslation,
    createShopSectionTranslation,
    updateShopSectionTranslation,
    deleteShopSectionTranslation
};
