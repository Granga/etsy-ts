import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
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
export declare class ShopTranslation {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    getShopTranslation<TResult>(parameters: IGetShopTranslationParameters): Promise<IStandardResponse<IGetShopTranslationParameters, TResult>>;
    /**
     * Creates a ShopTranslation by shop_id and language
     */
    createShopTranslation<TResult>(parameters: ICreateShopTranslationParameters): Promise<IStandardResponse<ICreateShopTranslationParameters, TResult>>;
    /**
     * Updates a ShopTranslation by shop_id and language
     */
    updateShopTranslation<TResult>(parameters: IUpdateShopTranslationParameters): Promise<IStandardResponse<IUpdateShopTranslationParameters, TResult>>;
    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    deleteShopTranslation<TResult>(parameters: IDeleteShopTranslationParameters): Promise<IStandardResponse<IDeleteShopTranslationParameters, TResult>>;
}
