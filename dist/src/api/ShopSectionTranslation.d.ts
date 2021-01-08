import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IGetShopSectionTranslationParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
}
export interface ICreateShopSectionTranslationParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
    title?: string;
}
export interface IUpdateShopSectionTranslationParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
    title?: string;
}
export interface IDeleteShopSectionTranslationParameters {
    shop_id: string | number;
    shop_section_id: number;
    language: string;
}
export declare class ShopSectionTranslation {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    getShopSectionTranslation<TResult>(params: IGetShopSectionTranslationParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>>;
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    createShopSectionTranslation<TResult>(params: ICreateShopSectionTranslationParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>>;
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    updateShopSectionTranslation<TResult>(params: IUpdateShopSectionTranslationParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>>;
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    deleteShopSectionTranslation<TResult>(params: IDeleteShopSectionTranslationParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>>;
}
