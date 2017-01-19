import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IShopSectionTranslation {
    shop_section_id: number,
    language: string,
    title: string
}

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

/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function getShopSectionTranslation<TResult>(parameters: IGetShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, IGetShopSectionTranslationParameters>> {
    return request<IStandardResponse<TResult, IGetShopSectionTranslationParameters>>(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'GET');
}
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function createShopSectionTranslation<TResult>(parameters: ICreateShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, ICreateShopSectionTranslationParameters>> {
    return request<IStandardResponse<TResult, ICreateShopSectionTranslationParameters>>(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'POST');
}
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function updateShopSectionTranslation<TResult>(parameters: IUpdateShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, IUpdateShopSectionTranslationParameters>> {
    return request<IStandardResponse<TResult, IUpdateShopSectionTranslationParameters>>(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'PUT');
}
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export function deleteShopSectionTranslation<TResult>(parameters: IDeleteShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, IDeleteShopSectionTranslationParameters>> {
    return request<IStandardResponse<TResult, IDeleteShopSectionTranslationParameters>>(parameters, '/shops/:shop_id/sections/:shop_section_id/translations/:language', 'DELETE');
}
