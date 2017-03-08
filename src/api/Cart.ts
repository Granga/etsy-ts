import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types

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

//methods

/**
 * Get a user's Carts
 */
export function getAllUserCarts <TResult>(parameters: IGetAllUserCartsParameters): Promise<IStandardResponse<IGetAllUserCartsParameters, TResult>> {
    return request<IGetAllUserCartsParameters, TResult>("/users/:user_id/carts", parameters, "GET");
}
/**
 * Add a listing to a cart
 */
export function addToCart <TResult>(parameters: IAddToCartParameters): Promise<IStandardResponse<IAddToCartParameters, TResult>> {
    return request<IAddToCartParameters, TResult>("/users/:user_id/carts", parameters, "POST");
}
/**
 * Update a cart listing purchase quantity
 */
export function updateCartListingQuantity <TResult>(parameters: IUpdateCartListingQuantityParameters): Promise<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>> {
    return request<IUpdateCartListingQuantityParameters, TResult>("/users/:user_id/carts", parameters, "PUT");
}
/**
 * Remove a listing from a cart
 */
export function removeCartListing <TResult>(parameters: IRemoveCartListingParameters): Promise<IStandardResponse<IRemoveCartListingParameters, TResult>> {
    return request<IRemoveCartListingParameters, TResult>("/users/:user_id/carts", parameters, "DELETE");
}
/**
 * Get a cart
 */
export function getUserCart <TResult>(parameters: IGetUserCartParameters): Promise<IStandardResponse<IGetUserCartParameters, TResult>> {
    return request<IGetUserCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "GET");
}
/**
 * Update a cart
 */
export function updateCart <TResult>(parameters: IUpdateCartParameters): Promise<IStandardResponse<IUpdateCartParameters, TResult>> {
    return request<IUpdateCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "PUT");
}
/**
 * Delete a cart
 */
export function deleteCart <TResult>(parameters: IDeleteCartParameters): Promise<IStandardResponse<IDeleteCartParameters, TResult>> {
    return request<IDeleteCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "DELETE");
}
/**
 * Saves and selects a shipping address for apple pay
 */
export function addAndSelectShippingForApplePay <TResult>(parameters: IAddAndSelectShippingForApplePayParameters): Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>> {
    return request<IAddAndSelectShippingForApplePayParameters, TResult>("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST");
}
/**
 * Move a listing to Saved for Later
 */
export function saveListingForLater <TResult>(parameters: ISaveListingForLaterParameters): Promise<IStandardResponse<ISaveListingForLaterParameters, TResult>> {
    return request<ISaveListingForLaterParameters, TResult>("/users/:user_id/carts/save", parameters, "DELETE");
}
/**
 * Get a cart from a shop ID
 */
export function getUserCartForShop <TResult>(parameters: IGetUserCartForShopParameters): Promise<IStandardResponse<IGetUserCartForShopParameters, TResult>> {
    return request<IGetUserCartForShopParameters, TResult>("/users/:user_id/carts/shop/:shop_id", parameters, "GET");
}
/**
 * Create a single-listing cart from a listing
 */
export function createSingleListingCart <TResult>(parameters: ICreateSingleListingCartParameters): Promise<IStandardResponse<ICreateSingleListingCartParameters, TResult>> {
    return request<ICreateSingleListingCartParameters, TResult>("/users/:user_id/carts/single_listing", parameters, "POST");
}

export const Cart = {
    getAllUserCarts,
    addToCart,
    updateCartListingQuantity,
    removeCartListing,
    getUserCart,
    updateCart,
    deleteCart,
    addAndSelectShippingForApplePay,
    saveListingForLater,
    getUserCartForShop,
    createSingleListingCart
};
