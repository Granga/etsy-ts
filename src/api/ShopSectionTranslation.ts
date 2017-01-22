import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IShopSectionTranslation {
    shop_section_id: number,
    language: string,
    title: string
}


export interface IGetShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string
}
export interface ICreateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string,
    title?: string
}
export interface IUpdateShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string,
    title?: string
}
export interface IDeleteShopSectionTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    language: string
}

export class ShopSectionTranslation {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    getShopSectionTranslation<TResult>(parameters: IGetShopSectionTranslationParameters): Promise<IStandardResponse<IGetShopSectionTranslationParameters, TResult>> {
        return this.client.http<IGetShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET");
    }

    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    createShopSectionTranslation<TResult>(parameters: ICreateShopSectionTranslationParameters): Promise<IStandardResponse<ICreateShopSectionTranslationParameters, TResult>> {
        return this.client.http<ICreateShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST");
    }

    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    updateShopSectionTranslation<TResult>(parameters: IUpdateShopSectionTranslationParameters): Promise<IStandardResponse<IUpdateShopSectionTranslationParameters, TResult>> {
        return this.client.http<IUpdateShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT");
    }

    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    deleteShopSectionTranslation<TResult>(parameters: IDeleteShopSectionTranslationParameters): Promise<IStandardResponse<IDeleteShopSectionTranslationParameters, TResult>> {
        return this.client.http<IDeleteShopSectionTranslationParameters, TResult>("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE");
    }
}
