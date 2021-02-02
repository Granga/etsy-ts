import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IListingTranslation {
    /**
     * The numeric ID for the Listing.
     */
    listing_id: number,
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     */
    language: string,
    /**
     * The title of the Listing of this Translation.
     */
    title: string,
    /**
     * The description of the Listing of this Translation.
     */
    description: string,
    /**
     * The tags of the Listing of this Translation.
     */
    tags: string[]
}

//parameters types
export interface IGetListingTranslationParameters {
    listing_id: number,
    language: string
}

export interface ICreateListingTranslationParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}

export interface IUpdateListingTranslationParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}

export interface IDeleteListingTranslationParameters {
    listing_id: number,
    language: string
}

//methods class
export class ListingTranslation {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    async getListingTranslation<TResult>(
        params: IGetListingTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetListingTranslationParameters, TResult>>> {
        return request<IGetListingTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/translations/:language",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Creates a ListingTranslation by listing_id and language
     */
    async createListingTranslation<TResult>(
        params: ICreateListingTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<ICreateListingTranslationParameters, TResult>>> {
        return request<ICreateListingTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/translations/:language",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Updates a ListingTranslation by listing_id and language
     */
    async updateListingTranslation<TResult>(
        params: IUpdateListingTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateListingTranslationParameters, TResult>>> {
        return request<IUpdateListingTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/translations/:language",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    async deleteListingTranslation<TResult>(
        params: IDeleteListingTranslationParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingTranslationParameters, TResult>>> {
        return request<IDeleteListingTranslationParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/translations/:language",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
