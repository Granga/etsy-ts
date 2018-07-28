import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShop {
    shop_id: number;
    shop_name: string;
    first_line: string;
    second_line: string;
    city: string;
    state: string;
    zip: string;
    country_id: number;
    user_id: number;
    creation_tsz: number;
    title: string;
    announcement: string;
    currency_code: string;
    is_vacation: boolean;
    vacation_message: string;
    sale_message: string;
    digital_sale_message: string;
    last_updated_tsz: number;
    listing_active_count: number;
    digital_listing_count: number;
    login_name: string;
    lat: number;
    lon: number;
    accepts_custom_requests: boolean;
    policy_welcome: string;
    policy_payment: string;
    policy_shipping: string;
    policy_refunds: string;
    policy_additional: string;
    policy_seller_info: string;
    policy_updated_tsz: number;
    policy_has_private_receipt_info: boolean;
    vacation_autoreply: string;
    ga_code: string;
    name: string;
    url: string;
    image_url_760x100: string;
    num_favorers: number;
    languages: string[];
    upcoming_local_event_id: number;
    icon_url_fullxfull: string;
    is_using_structured_policies: boolean;
    has_onboarded_structured_policies: boolean;
    has_unstructured_policies: boolean;
    use_new_inventory_endpoints: boolean;
    include_dispute_form_link: boolean;
}
export interface IFindAllShopsParameters extends IStandardParameters {
    shop_name?: string;
    limit?: number;
    offset?: number;
    page?: number;
    lat?: number;
    lon?: number;
    distance_max?: number;
}
export interface IGetShopParameters extends IStandardParameters {
    shop_id: (string | number)[];
}
export interface IUpdateShopParameters extends IStandardParameters {
    shop_id: string | number;
    title?: string;
    announcement?: string;
    sale_message?: string;
    policy_welcome?: string;
    policy_payment?: string;
    policy_shipping?: string;
    policy_refunds?: string;
    policy_additional?: string;
    policy_seller_info?: string;
    digital_sale_message?: string;
}
export interface IUploadShopBannerParameters extends IStandardParameters {
    shop_id: string | number;
    image: any;
}
export interface IDeleteShopBannerParameters extends IStandardParameters {
    shop_id: string | number;
}
export interface IGetListingShopParameters extends IStandardParameters {
    listing_id: number;
}
export interface IFindAllUserShopsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
/**
 * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
 */
declare function findAllShops<TResult>(parameters: IFindAllShopsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopsParameters, TResult>>;
/**
 * Retrieves a Shop by id.
 */
declare function getShop<TResult>(parameters: IGetShopParameters, options?: IOptions): Promise<IStandardResponse<IGetShopParameters, TResult>>;
/**
 * Updates a Shop
 */
declare function updateShop<TResult>(parameters: IUpdateShopParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopParameters, TResult>>;
/**
 * Upload a new shop banner image
 */
declare function uploadShopBanner<TResult>(parameters: IUploadShopBannerParameters, options?: IOptions): Promise<IStandardResponse<IUploadShopBannerParameters, TResult>>;
/**
 * Deletes a shop banner image
 */
declare function deleteShopBanner<TResult>(parameters: IDeleteShopBannerParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopBannerParameters, TResult>>;
/**
 * Retrieves a shop by a listing id.
 */
declare function getListingShop<TResult>(parameters: IGetListingShopParameters, options?: IOptions): Promise<IStandardResponse<IGetListingShopParameters, TResult>>;
/**
 * Retrieves a set of Shop objects associated to a User.
 */
declare function findAllUserShops<TResult>(parameters: IFindAllUserShopsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserShopsParameters, TResult>>;
export declare const Shop: {
    findAllShops: typeof findAllShops;
    getShop: typeof getShop;
    updateShop: typeof updateShop;
    uploadShopBanner: typeof uploadShopBanner;
    deleteShopBanner: typeof deleteShopBanner;
    getListingShop: typeof getListingShop;
    findAllUserShops: typeof findAllUserShops;
};
export {};
