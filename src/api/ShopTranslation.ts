import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IShopTranslation {
    /**
     * The numeric ID for the Shop.
     */
    shop_id: number,
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string,
    /**
     * Translation of an announcement to buyers that displays on the shop's homepage.
     */
    announcement: string,
    /**
     * Translation of the introductory text from the top of the seller's policies page (may be blank).
     */
    policy_welcome: string,
    /**
     * Translation of the seller's policy on payment (may be blank).
     */
    policy_payment: string,
    /**
     * Translation of the seller's policy on shipping (may be blank).
     */
    policy_shipping: string,
    /**
     * Translation of the seller's policy on refunds (may be blank).
     */
    policy_refunds: string,
    /**
     * Translation of any additional policy information the seller provides (may be blank).
     */
    policy_additional: string,
    /**
     * Translation of privacy policy information the seller provides (may be blank).
     */
    policy_privacy: string,
    /**
     * Translation of the Shop's Seller information (may be blank).
     */
    policy_seller_info: string,
    /**
     * Translation of a message that is sent to users who buy from this shop.
     */
    sale_message: string,
    /**
     * Translation of a message that is sent to users who buy a digital item from this shop.
     */
    digital_sale_message: string,
    /**
     * Translation of a brief heading for the shop's main page.
     */
    title: string,
    /**
     * Translation of a message to buyers in response to new convos (if Shop.is_vacation is true).
     */
    vacation_autoreply: string,
    /**
     * Translation of a message to buyers (if Shop.is_vacation is true).
     */
    vacation_message: string
}

//parameters types
export interface IGetShopTranslationParameters {
    shop_id: string | number,
    language: string
}

export interface ICreateShopTranslationParameters {
    shop_id: string | number,
    language: string,
    title?: string,
    sale_message?: string,
    announcement?: string,
    policy_welcome?: string,
    policy_payment?: string,
    policy_shipping?: string,
    policy_refunds?: string,
    policy_additional?: string,
    policy_privacy?: string,
    policy_seller_info?: string,
    vacation_autoreply?: string,
    vacation_message?: string
}

export interface IUpdateShopTranslationParameters {
    shop_id: string | number,
    language: string,
    title?: string,
    sale_message?: string,
    announcement?: string,
    policy_welcome?: string,
    policy_payment?: string,
    policy_shipping?: string,
    policy_refunds?: string,
    policy_additional?: string,
    policy_privacy?: string,
    policy_seller_info?: string,
    vacation_autoreply?: string,
    vacation_message?: string
}

export interface IDeleteShopTranslationParameters {
    shop_id: string | number,
    language: string
}

//methods class
export class ShopTranslation {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    async getShopTranslation<TResult>(
        params: IGetShopTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetShopTranslationParameters, TResult>>> {
        return request<IGetShopTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/translations/:language",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Creates a ShopTranslation by shop_id and language
     */
    async createShopTranslation<TResult>(
        params: ICreateShopTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<ICreateShopTranslationParameters, TResult>>> {
        return request<ICreateShopTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/translations/:language",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Updates a ShopTranslation by shop_id and language
     */
    async updateShopTranslation<TResult>(
        params: IUpdateShopTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShopTranslationParameters, TResult>>> {
        return request<IUpdateShopTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/translations/:language",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    async deleteShopTranslation<TResult>(
        params: IDeleteShopTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShopTranslationParameters, TResult>>> {
        return request<IDeleteShopTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/translations/:language",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
