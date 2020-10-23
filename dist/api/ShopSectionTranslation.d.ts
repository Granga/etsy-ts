import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShopSectionTranslation {
    /**
     * The numeric ID for the ShopSection.
     */
    shop_section_id: number;
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string;
    /**
     * Translation of title of ShopSection.
     */
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
export declare class ShopSectionTranslation {
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static getShopSectionTranslation<TResult>(parameters: IGetShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>;
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static createShopSectionTranslation<TResult>(parameters: ICreateShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>;
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static updateShopSectionTranslation<TResult>(parameters: IUpdateShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>;
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static deleteShopSectionTranslation<TResult>(parameters: IDeleteShopSectionTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>;
}
