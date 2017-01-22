import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IShopTranslation {
    shop_id: number,
    language: string,
    announcement: string,
    policy_welcome: string,
    policy_payment: string,
    policy_shipping: string,
    policy_refunds: string,
    policy_additional: string,
    policy_seller_info: string,
    sale_message: string,
    digital_sale_message: string,
    title: string,
    vacation_autoreply: string,
    vacation_message: string
}


export interface IGetShopTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    language: string
}
export interface ICreateShopTranslationParameters extends IStandardParameters {
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
    policy_seller_info?: string,
    vacation_autoreply?: string,
    vacation_message?: string
}
export interface IUpdateShopTranslationParameters extends IStandardParameters {
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
    policy_seller_info?: string,
    vacation_autoreply?: string,
    vacation_message?: string
}
export interface IDeleteShopTranslationParameters extends IStandardParameters {
    shop_id: string | number,
    language: string
}

export class ShopTranslation {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    getShopTranslation<TResult>(parameters: IGetShopTranslationParameters): Promise<IStandardResponse<IGetShopTranslationParameters, TResult>> {
        return this.client.http<IGetShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "GET");
    }

    /**
     * Creates a ShopTranslation by shop_id and language
     */
    createShopTranslation<TResult>(parameters: ICreateShopTranslationParameters): Promise<IStandardResponse<ICreateShopTranslationParameters, TResult>> {
        return this.client.http<ICreateShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "POST");
    }

    /**
     * Updates a ShopTranslation by shop_id and language
     */
    updateShopTranslation<TResult>(parameters: IUpdateShopTranslationParameters): Promise<IStandardResponse<IUpdateShopTranslationParameters, TResult>> {
        return this.client.http<IUpdateShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "PUT");
    }

    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    deleteShopTranslation<TResult>(parameters: IDeleteShopTranslationParameters): Promise<IStandardResponse<IDeleteShopTranslationParameters, TResult>> {
        return this.client.http<IDeleteShopTranslationParameters, TResult>("/shops/:shop_id/translations/:language", parameters, "DELETE");
    }
}
