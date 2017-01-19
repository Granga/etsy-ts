/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IShopTranslation {
    shop_id: number;
    language: string;
    announcement: string;
    policy_welcome: string;
    policy_payment: string;
    policy_shipping: string;
    policy_refunds: string;
    policy_additional: string;
    policy_seller_info: string;
    sale_message: string;
    digital_sale_message: string;
    title: string;
    vacation_autoreply: string;
    vacation_message: string;
}
export interface IGetShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
}
export interface ICreateShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
    title?: string;
    sale_message?: string;
    announcement?: string;
    policy_welcome?: string;
    policy_payment?: string;
    policy_shipping?: string;
    policy_refunds?: string;
    policy_additional?: string;
    policy_seller_info?: string;
    vacation_autoreply?: string;
    vacation_message?: string;
}
export interface IUpdateShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
    title?: string;
    sale_message?: string;
    announcement?: string;
    policy_welcome?: string;
    policy_payment?: string;
    policy_shipping?: string;
    policy_refunds?: string;
    policy_additional?: string;
    policy_seller_info?: string;
    vacation_autoreply?: string;
    vacation_message?: string;
}
export interface IDeleteShopTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    language: string;
}
/**
 * Retrieves a ShopTranslation by shop_id and language
 */
export declare function getShopTranslation<TResult>(parameters: IGetShopTranslationParameters): Bluebird<IStandardResponse<TResult, IGetShopTranslationParameters>>;
/**
 * Creates a ShopTranslation by shop_id and language
 */
export declare function createShopTranslation<TResult>(parameters: ICreateShopTranslationParameters): Bluebird<IStandardResponse<TResult, ICreateShopTranslationParameters>>;
/**
 * Updates a ShopTranslation by shop_id and language
 */
export declare function updateShopTranslation<TResult>(parameters: IUpdateShopTranslationParameters): Bluebird<IStandardResponse<TResult, IUpdateShopTranslationParameters>>;
/**
 * Deletes a ShopTranslation by shop_id and language
 */
export declare function deleteShopTranslation<TResult>(parameters: IDeleteShopTranslationParameters): Bluebird<IStandardResponse<TResult, IDeleteShopTranslationParameters>>;
