import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IListingTranslation {
    listing_id: number,
    language: string,
    title: string,
    description: string,
    tags: string[]
}


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

export class ListingTranslation {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    getListingTranslation<TResult>(parameters: IGetListingTranslationParameters): Promise<IStandardResponse<IGetListingTranslationParameters, TResult>> {
        return this.client.http<IGetListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "GET");
    }

    /**
     * Creates a ListingTranslation by listing_id and language
     */
    createListingTranslation<TResult>(parameters: ICreateListingTranslationParameters): Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>> {
        return this.client.http<ICreateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "POST");
    }

    /**
     * Updates a ListingTranslation by listing_id and language
     */
    updateListingTranslation<TResult>(parameters: IUpdateListingTranslationParameters): Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>> {
        return this.client.http<IUpdateListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "PUT");
    }

    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    deleteListingTranslation<TResult>(parameters: IDeleteListingTranslationParameters): Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>> {
        return this.client.http<IDeleteListingTranslationParameters, TResult>("/listings/:listing_id/translations/:language", parameters, "DELETE");
    }
}
