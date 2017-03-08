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
export declare const ShopTranslation: {
    getShopTranslation: <TResult>(parameters: IGetShopTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IGetShopTranslationParameters, TResult>>;
    createShopTranslation: <TResult>(parameters: ICreateShopTranslationParameters, options?: IOptions) => Promise<IStandardResponse<ICreateShopTranslationParameters, TResult>>;
    updateShopTranslation: <TResult>(parameters: IUpdateShopTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateShopTranslationParameters, TResult>>;
    deleteShopTranslation: <TResult>(parameters: IDeleteShopTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteShopTranslationParameters, TResult>>;
};
