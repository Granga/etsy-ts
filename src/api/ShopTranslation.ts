import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types

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

//methods

/**
 * Retrieves a ShopTranslation by shop_id and language
 */
export function getShopTranslation <TResult>(parameters: IGetShopTranslationParameters): Promise<IStandardResponse<IGetShopTranslationParameters, TResult>> {
    return request<IGetShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "GET");
}
/**
 * Creates a ShopTranslation by shop_id and language
 */
export function createShopTranslation <TResult>(parameters: ICreateShopTranslationParameters): Promise<IStandardResponse<ICreateShopTranslationParameters, TResult>> {
    return request<ICreateShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "POST");
}
/**
 * Updates a ShopTranslation by shop_id and language
 */
export function updateShopTranslation <TResult>(parameters: IUpdateShopTranslationParameters): Promise<IStandardResponse<IUpdateShopTranslationParameters, TResult>> {
    return request<IUpdateShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "PUT");
}
/**
 * Deletes a ShopTranslation by shop_id and language
 */
export function deleteShopTranslation <TResult>(parameters: IDeleteShopTranslationParameters): Promise<IStandardResponse<IDeleteShopTranslationParameters, TResult>> {
    return request<IDeleteShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "DELETE");
}

export const ShopTranslation = {
    getShopTranslation,
    createShopTranslation,
    updateShopTranslation,
    deleteShopTranslation
};
