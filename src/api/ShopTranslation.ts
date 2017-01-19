import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IShopTranslation {
    shop_id: number,
    language: string,
    announcement: string,
    policy_welcome: string,
    policy_payment: string,
    policy_shipping: string,
    policy_refunds: string,
    policy_additional: string,
    policy_seller_info: string,
    sale_message: string,
    digital_sale_message: string,
    title: string,
    vacation_autoreply: string,
    vacation_message: string
}

export interface IGetShopTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    language: string
}
export interface ICreateShopTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    language: string,
    title?: string,
    sale_message?: string,
    announcement?: string,
    policy_welcome?: string,
    policy_payment?: string,
    policy_shipping?: string,
    policy_refunds?: string,
    policy_additional?: string,
    policy_seller_info?: string,
    vacation_autoreply?: string,
    vacation_message?: string
}
export interface IUpdateShopTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    language: string,
    title?: string,
    sale_message?: string,
    announcement?: string,
    policy_welcome?: string,
    policy_payment?: string,
    policy_shipping?: string,
    policy_refunds?: string,
    policy_additional?: string,
    policy_seller_info?: string,
    vacation_autoreply?: string,
    vacation_message?: string
}
export interface IDeleteShopTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    language: string
}

/**
 * Retrieves a ShopTranslation by shop_id and language
 */
export function getShopTranslation<TResult>(parameters: IGetShopTranslationParameters): Bluebird<IStandardResponse<TResult, IGetShopTranslationParameters>> {
    return request<IStandardResponse<TResult, IGetShopTranslationParameters>>(parameters, '/shops/:shop_id/translations/:language', 'GET');
}
/**
 * Creates a ShopTranslation by shop_id and language
 */
export function createShopTranslation<TResult>(parameters: ICreateShopTranslationParameters): Bluebird<IStandardResponse<TResult, ICreateShopTranslationParameters>> {
    return request<IStandardResponse<TResult, ICreateShopTranslationParameters>>(parameters, '/shops/:shop_id/translations/:language', 'POST');
}
/**
 * Updates a ShopTranslation by shop_id and language
 */
export function updateShopTranslation<TResult>(parameters: IUpdateShopTranslationParameters): Bluebird<IStandardResponse<TResult, IUpdateShopTranslationParameters>> {
    return request<IStandardResponse<TResult, IUpdateShopTranslationParameters>>(parameters, '/shops/:shop_id/translations/:language', 'PUT');
}
/**
 * Deletes a ShopTranslation by shop_id and language
 */
export function deleteShopTranslation<TResult>(parameters: IDeleteShopTranslationParameters): Bluebird<IStandardResponse<TResult, IDeleteShopTranslationParameters>> {
    return request<IStandardResponse<TResult, IDeleteShopTranslationParameters>>(parameters, '/shops/:shop_id/translations/:language', 'DELETE');
}
