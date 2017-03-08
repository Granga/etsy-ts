import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export declare function getShopSectionTranslation<TResult>(parameters: IGetShopSectionTranslationParameters): Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>;
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export declare function createShopSectionTranslation<TResult>(parameters: ICreateShopSectionTranslationParameters): Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>;
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export declare function updateShopSectionTranslation<TResult>(parameters: IUpdateShopSectionTranslationParameters): Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>;
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export declare function deleteShopSectionTranslation<TResult>(parameters: IDeleteShopSectionTranslationParameters): Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>;
export declare const ShopSectionTranslation: {
    getShopSectionTranslation: <TResult>(parameters: IGetShopSectionTranslationParameters) => Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>;
    createShopSectionTranslation: <TResult>(parameters: ICreateShopSectionTranslationParameters) => Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>;
    updateShopSectionTranslation: <TResult>(parameters: IUpdateShopSectionTranslationParameters) => Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>;
    deleteShopSectionTranslation: <TResult>(parameters: IDeleteShopSectionTranslationParameters) => Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>;
};
