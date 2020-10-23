import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

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
export interface IGetListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string
}

export interface ICreateListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}

export interface IUpdateListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string,
    title?: string,
    description?: string,
    tags?: string[]
}

export interface IDeleteListingTranslationParameters extends IStandardParameters {
    listing_id: number,
    language: string
}

//methods class
export class ListingTranslation {

    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    static getListingTranslation<TResult>(parameters: IGetListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IGetListingTranslationParameters, TResult>> {
        return request<IGetListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "GET", options);
    }

    /**
     * Creates a ListingTranslation by listing_id and language
     */
    static createListingTranslation<TResult>(parameters: ICreateListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>> {
        return request<ICreateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "POST", options);
    }

    /**
     * Updates a ListingTranslation by listing_id and language
     */
    static updateListingTranslation<TResult>(parameters: IUpdateListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>> {
        return request<IUpdateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "PUT", options);
    }

    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    static deleteListingTranslation<TResult>(parameters: IDeleteListingTranslationParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>> {
        return request<IDeleteListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "DELETE", options);
    }
}
