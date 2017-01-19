import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IShop {
    shop_id: number,
    shop_name: string,
    first_line: string,
    second_line: string,
    city: string,
    state: string,
    zip: string,
    country_id: number,
    user_id: number,
    creation_tsz: number,
    title: string,
    announcement: string,
    currency_code: string,
    is_vacation: boolean,
    vacation_message: string,
    sale_message: string,
    digital_sale_message: string,
    last_updated_tsz: number,
    listing_active_count: number,
    digital_listing_count: number,
    login_name: string,
    lat: number,
    lon: number,
    accepts_custom_requests: boolean,
    policy_welcome: string,
    policy_payment: string,
    policy_shipping: string,
    policy_refunds: string,
    policy_additional: string,
    policy_seller_info: string,
    policy_updated_tsz: number,
    policy_has_private_receipt_info: boolean,
    vacation_autoreply: string,
    ga_code: string,
    name: string,
    url: string,
    image_url_760x100: string,
    num_favorers: number,
    languages: string[],
    upcoming_local_event_id: number,
    icon_url_fullxfull: string,
    is_using_structured_policies: boolean,
    has_onboarded_structured_policies: boolean,
    has_unstructured_policies: boolean,
    use_new_inventory_endpoints: boolean,
    include_dispute_form_link: boolean
}

export interface IFindAllShopsParameters extends IStandardParameters {
    shop_name?: string,
    limit?: number,
    offset?: number,
    page?: number,
    lat?: number,
    lon?: number,
    distance_max?: number
}
export interface IGetShopParameters extends IStandardParameters {
    shop_id: string | number[]
}
export interface IUpdateShopParameters extends IStandardParameters {
    shop_id: string | number,
    title?: string,
    announcement?: string,
    sale_message?: string,
    policy_welcome?: string,
    policy_payment?: string,
    policy_shipping?: string,
    policy_refunds?: string,
    policy_additional?: string,
    policy_seller_info?: string,
    digital_sale_message?: string
}
export interface IUploadShopBannerParameters extends IStandardParameters {
    shop_id: string | number,
    image: any
}
export interface IDeleteShopBannerParameters extends IStandardParameters {
    shop_id: string | number
}
export interface IGetListingShopParameters extends IStandardParameters {
    listing_id: number
}
export interface IFindAllUserShopsParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

/**
 * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
 */
export function findAllShops<TResult>(parameters: IFindAllShopsParameters): Bluebird<IStandardResponse<TResult, IFindAllShopsParameters>> {
    return request<IStandardResponse<TResult, IFindAllShopsParameters>>(parameters, '/shops', 'GET');
}
/**
 * Retrieves a Shop by id.
 */
export function getShop<TResult>(parameters: IGetShopParameters): Bluebird<IStandardResponse<TResult, IGetShopParameters>> {
    return request<IStandardResponse<TResult, IGetShopParameters>>(parameters, '/shops/:shop_id', 'GET');
}
/**
 * Updates a Shop
 */
export function updateShop<TResult>(parameters: IUpdateShopParameters): Bluebird<IStandardResponse<TResult, IUpdateShopParameters>> {
    return request<IStandardResponse<TResult, IUpdateShopParameters>>(parameters, '/shops/:shop_id', 'PUT');
}
/**
 * Upload a new shop banner image
 */
export function uploadShopBanner<TResult>(parameters: IUploadShopBannerParameters): Bluebird<IStandardResponse<TResult, IUploadShopBannerParameters>> {
    return request<IStandardResponse<TResult, IUploadShopBannerParameters>>(parameters, '/shops/:shop_id/appearance/banner', 'POST');
}
/**
 * Deletes a shop banner image
 */
export function deleteShopBanner<TResult>(parameters: IDeleteShopBannerParameters): Bluebird<IStandardResponse<TResult, IDeleteShopBannerParameters>> {
    return request<IStandardResponse<TResult, IDeleteShopBannerParameters>>(parameters, '/shops/:shop_id/appearance/banner', 'DELETE');
}
/**
 * Retrieves a shop by a listing id.
 */
export function getListingShop<TResult>(parameters: IGetListingShopParameters): Bluebird<IStandardResponse<TResult, IGetListingShopParameters>> {
    return request<IStandardResponse<TResult, IGetListingShopParameters>>(parameters, '/shops/listing/:listing_id', 'GET');
}
/**
 * Retrieves a set of Shop objects associated to a User.
 */
export function findAllUserShops<TResult>(parameters: IFindAllUserShopsParameters): Bluebird<IStandardResponse<TResult, IFindAllUserShopsParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserShopsParameters>>(parameters, '/users/:user_id/shops', 'GET');
}
