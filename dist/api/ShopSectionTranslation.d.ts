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
/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
declare function getShopSectionTranslation<TResult>(parameters: IGetShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>;
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
declare function createShopSectionTranslation<TResult>(parameters: ICreateShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>;
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
declare function updateShopSectionTranslation<TResult>(parameters: IUpdateShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>;
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
declare function deleteShopSectionTranslation<TResult>(parameters: IDeleteShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>;
export declare const ShopSectionTranslation: {
    getShopSectionTranslation: typeof getShopSectionTranslation;
    createShopSectionTranslation: typeof createShopSectionTranslation;
    updateShopSectionTranslation: typeof updateShopSectionTranslation;
    deleteShopSectionTranslation: typeof deleteShopSectionTranslation;
};
export {};
