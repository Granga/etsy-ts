import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function getShopTranslation<TResult>(parameters: IGetShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetShopTranslationParameters, TResult>>;
/**
 * Creates a ShopTranslation by shop_id and language
 */
declare function createShopTranslation<TResult>(parameters: ICreateShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopTranslationParameters, TResult>>;
/**
 * Updates a ShopTranslation by shop_id and language
 */
declare function updateShopTranslation<TResult>(parameters: IUpdateShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopTranslationParameters, TResult>>;
/**
 * Deletes a ShopTranslation by shop_id and language
 */
declare function deleteShopTranslation<TResult>(parameters: IDeleteShopTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopTranslationParameters, TResult>>;
export declare const ShopTranslation: {
    getShopTranslation: typeof getShopTranslation;
    createShopTranslation: typeof createShopTranslation;
    updateShopTranslation: typeof updateShopTranslation;
    deleteShopTranslation: typeof deleteShopTranslation;
};
export {};
