import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ICart {
    cart_id: number,
    shop_name: string,
    message_to_seller: string,
    destination_country_id: number,
    coupon_code: string,
    currency_code: string,
    total: string,
    subtotal: string,
    shipping_cost: string,
    tax_cost: string,
    discount_amount: string,
    shipping_discount_amount: string,
    tax_discount_amount: string,
    url: string,
    listings: any[],
    is_download_only: boolean,
    has_vat: boolean,
    shipping_option: any
}

export interface IGetAllUserCartsParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IAddToCartParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any]
}
export interface IUpdateCartListingQuantityParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    quantity: number,
    listing_customization_id?: number
}
export interface IRemoveCartListingParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    listing_customization_id?: number
}
export interface IGetUserCartParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number
}
export interface IUpdateCartParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number,
    destination_country_id?: number,
    message_to_seller?: string,
    coupon_code?: string,
    shipping_option_id?: string,
    destination_zip?: string
}
export interface IDeleteCartParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number
}
export interface IAddAndSelectShippingForApplePayParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number,
    second_line?: string,
    city: string,
    state?: string,
    zip: string,
    country_id: number
}
export interface ISaveListingForLaterParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: number,
    listing_id: number,
    listing_inventory_id?: number,
    listing_customization_id?: number
}
export interface IGetUserCartForShopParameters extends IStandardParameters {
    user_id: string | number,
    shop_id: string | number
}
export interface ICreateSingleListingCartParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any]
}

/**
 * Get a user's Carts
 */
export function getAllUserCarts<TResult>(parameters: IGetAllUserCartsParameters): Bluebird<IStandardResponse<TResult, IGetAllUserCartsParameters>> {
    return request<IStandardResponse<TResult, IGetAllUserCartsParameters>>(parameters, '/users/:user_id/carts', 'GET');
}
/**
 * Add a listing to a cart
 */
export function addToCart<TResult>(parameters: IAddToCartParameters): Bluebird<IStandardResponse<TResult, IAddToCartParameters>> {
    return request<IStandardResponse<TResult, IAddToCartParameters>>(parameters, '/users/:user_id/carts', 'POST');
}
/**
 * Update a cart listing purchase quantity
 */
export function updateCartListingQuantity<TResult>(parameters: IUpdateCartListingQuantityParameters): Bluebird<IStandardResponse<TResult, IUpdateCartListingQuantityParameters>> {
    return request<IStandardResponse<TResult, IUpdateCartListingQuantityParameters>>(parameters, '/users/:user_id/carts', 'PUT');
}
/**
 * Remove a listing from a cart
 */
export function removeCartListing<TResult>(parameters: IRemoveCartListingParameters): Bluebird<IStandardResponse<TResult, IRemoveCartListingParameters>> {
    return request<IStandardResponse<TResult, IRemoveCartListingParameters>>(parameters, '/users/:user_id/carts', 'DELETE');
}
/**
 * Get a cart
 */
export function getUserCart<TResult>(parameters: IGetUserCartParameters): Bluebird<IStandardResponse<TResult, IGetUserCartParameters>> {
    return request<IStandardResponse<TResult, IGetUserCartParameters>>(parameters, '/users/:user_id/carts/:cart_id', 'GET');
}
/**
 * Update a cart
 */
export function updateCart<TResult>(parameters: IUpdateCartParameters): Bluebird<IStandardResponse<TResult, IUpdateCartParameters>> {
    return request<IStandardResponse<TResult, IUpdateCartParameters>>(parameters, '/users/:user_id/carts/:cart_id', 'PUT');
}
/**
 * Delete a cart
 */
export function deleteCart<TResult>(parameters: IDeleteCartParameters): Bluebird<IStandardResponse<TResult, IDeleteCartParameters>> {
    return request<IStandardResponse<TResult, IDeleteCartParameters>>(parameters, '/users/:user_id/carts/:cart_id', 'DELETE');
}
/**
 * Saves and selects a shipping address for apple pay
 */
export function addAndSelectShippingForApplePay<TResult>(parameters: IAddAndSelectShippingForApplePayParameters): Bluebird<IStandardResponse<TResult, IAddAndSelectShippingForApplePayParameters>> {
    return request<IStandardResponse<TResult, IAddAndSelectShippingForApplePayParameters>>(parameters, '/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple', 'POST');
}
/**
 * Move a listing to Saved for Later
 */
export function saveListingForLater<TResult>(parameters: ISaveListingForLaterParameters): Bluebird<IStandardResponse<TResult, ISaveListingForLaterParameters>> {
    return request<IStandardResponse<TResult, ISaveListingForLaterParameters>>(parameters, '/users/:user_id/carts/save', 'DELETE');
}
/**
 * Get a cart from a shop ID
 */
export function getUserCartForShop<TResult>(parameters: IGetUserCartForShopParameters): Bluebird<IStandardResponse<TResult, IGetUserCartForShopParameters>> {
    return request<IStandardResponse<TResult, IGetUserCartForShopParameters>>(parameters, '/users/:user_id/carts/shop/:shop_id', 'GET');
}
/**
 * Create a single-listing cart from a listing
 */
export function createSingleListingCart<TResult>(parameters: ICreateSingleListingCartParameters): Bluebird<IStandardResponse<TResult, ICreateSingleListingCartParameters>> {
    return request<IStandardResponse<TResult, ICreateSingleListingCartParameters>>(parameters, '/users/:user_id/carts/single_listing', 'POST');
}
