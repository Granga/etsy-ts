/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function getShopSectionTranslation<TResult>(parameters: IGetShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, IGetShopSectionTranslationParameters>>;
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export declare function createShopSectionTranslation<TResult>(parameters: ICreateShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, ICreateShopSectionTranslationParameters>>;
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export declare function updateShopSectionTranslation<TResult>(parameters: IUpdateShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, IUpdateShopSectionTranslationParameters>>;
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
export declare function deleteShopSectionTranslation<TResult>(parameters: IDeleteShopSectionTranslationParameters): Bluebird<IStandardResponse<TResult, IDeleteShopSectionTranslationParameters>>;
