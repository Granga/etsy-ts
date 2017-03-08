import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function getAllUserCarts <TResult>(parameters: IGetAllUserCartsParameters, options?: IOptions): Promise<IStandardResponse<IGetAllUserCartsParameters, TResult>> {
    return request<IGetAllUserCartsParameters, TResult>("/users/:user_id/carts", parameters, "GET", options);
}
/**
 * Add a listing to a cart
 */
function addToCart <TResult>(parameters: IAddToCartParameters, options?: IOptions): Promise<IStandardResponse<IAddToCartParameters, TResult>> {
    return request<IAddToCartParameters, TResult>("/users/:user_id/carts", parameters, "POST", options);
}
/**
 * Update a cart listing purchase quantity
 */
function updateCartListingQuantity <TResult>(parameters: IUpdateCartListingQuantityParameters, options?: IOptions): Promise<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>> {
    return request<IUpdateCartListingQuantityParameters, TResult>("/users/:user_id/carts", parameters, "PUT", options);
}
/**
 * Remove a listing from a cart
 */
function removeCartListing <TResult>(parameters: IRemoveCartListingParameters, options?: IOptions): Promise<IStandardResponse<IRemoveCartListingParameters, TResult>> {
    return request<IRemoveCartListingParameters, TResult>("/users/:user_id/carts", parameters, "DELETE", options);
}
/**
 * Get a cart
 */
function getUserCart <TResult>(parameters: IGetUserCartParameters, options?: IOptions): Promise<IStandardResponse<IGetUserCartParameters, TResult>> {
    return request<IGetUserCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "GET", options);
}
/**
 * Update a cart
 */
function updateCart <TResult>(parameters: IUpdateCartParameters, options?: IOptions): Promise<IStandardResponse<IUpdateCartParameters, TResult>> {
    return request<IUpdateCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "PUT", options);
}
/**
 * Delete a cart
 */
function deleteCart <TResult>(parameters: IDeleteCartParameters, options?: IOptions): Promise<IStandardResponse<IDeleteCartParameters, TResult>> {
    return request<IDeleteCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "DELETE", options);
}
/**
 * Saves and selects a shipping address for apple pay
 */
function addAndSelectShippingForApplePay <TResult>(parameters: IAddAndSelectShippingForApplePayParameters, options?: IOptions): Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>> {
    return request<IAddAndSelectShippingForApplePayParameters, TResult>("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST", options);
}
/**
 * Move a listing to Saved for Later
 */
function saveListingForLater <TResult>(parameters: ISaveListingForLaterParameters, options?: IOptions): Promise<IStandardResponse<ISaveListingForLaterParameters, TResult>> {
    return request<ISaveListingForLaterParameters, TResult>("/users/:user_id/carts/save", parameters, "DELETE", options);
}
/**
 * Get a cart from a shop ID
 */
function getUserCartForShop <TResult>(parameters: IGetUserCartForShopParameters, options?: IOptions): Promise<IStandardResponse<IGetUserCartForShopParameters, TResult>> {
    return request<IGetUserCartForShopParameters, TResult>("/users/:user_id/carts/shop/:shop_id", parameters, "GET", options);
}
/**
 * Create a single-listing cart from a listing
 */
function createSingleListingCart <TResult>(parameters: ICreateSingleListingCartParameters, options?: IOptions): Promise<IStandardResponse<ICreateSingleListingCartParameters, TResult>> {
    return request<ICreateSingleListingCartParameters, TResult>("/users/:user_id/carts/single_listing", parameters, "POST", options);
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
