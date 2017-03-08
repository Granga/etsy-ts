import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface ICart {
    cart_id: number;
    shop_name: string;
    message_to_seller: string;
    destination_country_id: number;
    coupon_code: string;
    currency_code: string;
    total: string;
    subtotal: string;
    shipping_cost: string;
    tax_cost: string;
    discount_amount: string;
    shipping_discount_amount: string;
    tax_discount_amount: string;
    url: string;
    listings: any[];
    is_download_only: boolean;
    has_vat: boolean;
    shipping_option: any;
}
export interface IGetAllUserCartsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IAddToCartParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    quantity?: number;
    selected_variations?: [any, any];
}
export interface IUpdateCartListingQuantityParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    quantity: number;
    listing_customization_id?: number;
}
export interface IRemoveCartListingParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    listing_customization_id?: number;
}
export interface IGetUserCartParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
}
export interface IUpdateCartParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
    destination_country_id?: number;
    message_to_seller?: string;
    coupon_code?: string;
    shipping_option_id?: string;
    destination_zip?: string;
}
export interface IDeleteCartParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
}
export interface IAddAndSelectShippingForApplePayParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
    second_line?: string;
    city: string;
    state?: string;
    zip: string;
    country_id: number;
}
export interface ISaveListingForLaterParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: number;
    listing_id: number;
    listing_inventory_id?: number;
    listing_customization_id?: number;
}
export interface IGetUserCartForShopParameters extends IStandardParameters {
    user_id: string | number;
    shop_id: string | number;
}
export interface ICreateSingleListingCartParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
    quantity?: number;
    selected_variations?: [any, any];
}
/**
 * Get a user's Carts
 */
export declare function getAllUserCarts<TResult>(parameters: IGetAllUserCartsParameters): Promise<IStandardResponse<IGetAllUserCartsParameters, TResult>>;
/**
 * Add a listing to a cart
 */
export declare function addToCart<TResult>(parameters: IAddToCartParameters): Promise<IStandardResponse<IAddToCartParameters, TResult>>;
/**
 * Update a cart listing purchase quantity
 */
export declare function updateCartListingQuantity<TResult>(parameters: IUpdateCartListingQuantityParameters): Promise<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>>;
/**
 * Remove a listing from a cart
 */
export declare function removeCartListing<TResult>(parameters: IRemoveCartListingParameters): Promise<IStandardResponse<IRemoveCartListingParameters, TResult>>;
/**
 * Get a cart
 */
export declare function getUserCart<TResult>(parameters: IGetUserCartParameters): Promise<IStandardResponse<IGetUserCartParameters, TResult>>;
/**
 * Update a cart
 */
export declare function updateCart<TResult>(parameters: IUpdateCartParameters): Promise<IStandardResponse<IUpdateCartParameters, TResult>>;
/**
 * Delete a cart
 */
export declare function deleteCart<TResult>(parameters: IDeleteCartParameters): Promise<IStandardResponse<IDeleteCartParameters, TResult>>;
/**
 * Saves and selects a shipping address for apple pay
 */
export declare function addAndSelectShippingForApplePay<TResult>(parameters: IAddAndSelectShippingForApplePayParameters): Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>>;
/**
 * Move a listing to Saved for Later
 */
export declare function saveListingForLater<TResult>(parameters: ISaveListingForLaterParameters): Promise<IStandardResponse<ISaveListingForLaterParameters, TResult>>;
/**
 * Get a cart from a shop ID
 */
export declare function getUserCartForShop<TResult>(parameters: IGetUserCartForShopParameters): Promise<IStandardResponse<IGetUserCartForShopParameters, TResult>>;
/**
 * Create a single-listing cart from a listing
 */
export declare function createSingleListingCart<TResult>(parameters: ICreateSingleListingCartParameters): Promise<IStandardResponse<ICreateSingleListingCartParameters, TResult>>;
export declare const Cart: {
    getAllUserCarts: <TResult>(parameters: IGetAllUserCartsParameters) => Promise<IStandardResponse<IGetAllUserCartsParameters, TResult>>;
    addToCart: <TResult>(parameters: IAddToCartParameters) => Promise<IStandardResponse<IAddToCartParameters, TResult>>;
    updateCartListingQuantity: <TResult>(parameters: IUpdateCartListingQuantityParameters) => Promise<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>>;
    removeCartListing: <TResult>(parameters: IRemoveCartListingParameters) => Promise<IStandardResponse<IRemoveCartListingParameters, TResult>>;
    getUserCart: <TResult>(parameters: IGetUserCartParameters) => Promise<IStandardResponse<IGetUserCartParameters, TResult>>;
    updateCart: <TResult>(parameters: IUpdateCartParameters) => Promise<IStandardResponse<IUpdateCartParameters, TResult>>;
    deleteCart: <TResult>(parameters: IDeleteCartParameters) => Promise<IStandardResponse<IDeleteCartParameters, TResult>>;
    addAndSelectShippingForApplePay: <TResult>(parameters: IAddAndSelectShippingForApplePayParameters) => Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>>;
    saveListingForLater: <TResult>(parameters: ISaveListingForLaterParameters) => Promise<IStandardResponse<ISaveListingForLaterParameters, TResult>>;
    getUserCartForShop: <TResult>(parameters: IGetUserCartForShopParameters) => Promise<IStandardResponse<IGetUserCartForShopParameters, TResult>>;
    createSingleListingCart: <TResult>(parameters: ICreateSingleListingCartParameters) => Promise<IStandardResponse<ICreateSingleListingCartParameters, TResult>>;
};
