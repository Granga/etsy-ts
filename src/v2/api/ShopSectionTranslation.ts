import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ShopSectionTranslation extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async getShopSectionTranslation<TResult>(
        params: IGetShopSectionTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShopSectionTranslationParameters, TResult>>> {
        return this.request<IGetShopSectionTranslationParameters, TResult>(
            "GET",
            "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            params,
            extra
        );
    }

    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async createShopSectionTranslation<TResult>(
        params: ICreateShopSectionTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>>> {
        return this.request<ICreateShopSectionTranslationParameters, TResult>(
            "POST",
            "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            params,
            extra
        );
    }

    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async updateShopSectionTranslation<TResult>(
        params: IUpdateShopSectionTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>>> {
        return this.request<IUpdateShopSectionTranslationParameters, TResult>(
            "PUT",
            "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            params,
            extra
        );
    }

    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    async deleteShopSectionTranslation<TResult>(
        params: IDeleteShopSectionTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>>> {
        return this.request<IDeleteShopSectionTranslationParameters, TResult>(
            "DELETE",
            "/shops/:shop_id/sections/:shop_section_id/translations/:language",
            params,
            extra
        );
    }
}
