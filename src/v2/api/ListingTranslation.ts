import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ListingTranslation extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    async getListingTranslation<TResult>(
        params: IGetListingTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetListingTranslationParameters, TResult>>> {
        return this.request<IGetListingTranslationParameters, TResult>("GET", "/listings/:listing_id/translations/:language", params, extra);
    }

    /**
     * Creates a ListingTranslation by listing_id and language
     */
    async createListingTranslation<TResult>(
        params: ICreateListingTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateListingTranslationParameters, TResult>>> {
        return this.request<ICreateListingTranslationParameters, TResult>("POST", "/listings/:listing_id/translations/:language", params, extra);
    }

    /**
     * Updates a ListingTranslation by listing_id and language
     */
    async updateListingTranslation<TResult>(
        params: IUpdateListingTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateListingTranslationParameters, TResult>>> {
        return this.request<IUpdateListingTranslationParameters, TResult>("PUT", "/listings/:listing_id/translations/:language", params, extra);
    }

    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    async deleteListingTranslation<TResult>(
        params: IDeleteListingTranslationParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteListingTranslationParameters, TResult>>> {
        return this.request<IDeleteListingTranslationParameters, TResult>("DELETE", "/listings/:listing_id/translations/:language", params, extra);
    }
}
