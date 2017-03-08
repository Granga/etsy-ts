import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function getShopTranslation <TResult>(parameters: IGetShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetShopTranslationParameters, TResult>> {
    return request<IGetShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ShopTranslation by shop_id and language
 */
function createShopTranslation <TResult>(parameters: ICreateShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopTranslationParameters, TResult>> {
    return request<ICreateShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ShopTranslation by shop_id and language
 */
function updateShopTranslation <TResult>(parameters: IUpdateShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopTranslationParameters, TResult>> {
    return request<IUpdateShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ShopTranslation by shop_id and language
 */
function deleteShopTranslation <TResult>(parameters: IDeleteShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopTranslationParameters, TResult>> {
    return request<IDeleteShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "DELETE", options);
}

export const ShopTranslation = {
    getShopTranslation,
    createShopTranslation,
    updateShopTranslation,
    deleteShopTranslation
};
