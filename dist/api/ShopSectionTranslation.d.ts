import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShopSectionTranslation {
    shop_section_id: number;
    language: string;
    title: string;
}
export interface IGetShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
}
export interface ICreateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
    title?: string;
}
export interface IUpdateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
    title?: string;
}
export interface IDeleteShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
}
export declare const ShopSectionTranslation: {
    getShopSectionTranslation: <TResult>(parameters: IGetShopSectionTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>;
    createShopSectionTranslation: <TResult>(parameters: ICreateShopSectionTranslationParameters, options?: IOptions) => Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>;
    updateShopSectionTranslation: <TResult>(parameters: IUpdateShopSectionTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>;
    deleteShopSectionTranslation: <TResult>(parameters: IDeleteShopSectionTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>;
};
