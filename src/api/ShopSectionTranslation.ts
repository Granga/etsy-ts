import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IShopSectionTranslation {
    /**
     * The numeric ID for the ShopSection.
     */
    shop_section_id: number,
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string,
    /**
     * Translation of title of ShopSection.
     */
    title: string
}

//parameters types
export interface IGetShopSectionTranslationParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string
}

export interface ICreateShopSectionTranslationParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string,
    title?: string
}

export interface IUpdateShopSectionTranslationParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string,
    title?: string
}

export interface IDeleteShopSectionTranslationParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string
}

//methods class
export class ShopSectionTranslation {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async getShopSectionTranslation<TResult>(
        params: IGetShopSectionTranslationParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>> {
        return request<IGetShopSectionTranslationParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async createShopSectionTranslation<TResult>(
        params: ICreateShopSectionTranslationParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>> {
        return request<ICreateShopSectionTranslationParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async updateShopSectionTranslation<TResult>(
        params: IUpdateShopSectionTranslationParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>> {
        return request<IUpdateShopSectionTranslationParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async deleteShopSectionTranslation<TResult>(
        params: IDeleteShopSectionTranslationParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>> {
        return request<IDeleteShopSectionTranslationParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
