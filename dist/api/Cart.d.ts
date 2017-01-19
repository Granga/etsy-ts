/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function getAllUserCarts<TResult>(parameters: IGetAllUserCartsParameters): Bluebird<IStandardResponse<TResult, IGetAllUserCartsParameters>>;
/**
* Add a listing to a cart
*/
export declare function addToCart<TResult>(parameters: IAddToCartParameters): Bluebird<IStandardResponse<TResult, IAddToCartParameters>>;
/**
* Update a cart listing purchase quantity
*/
export declare function updateCartListingQuantity<TResult>(parameters: IUpdateCartListingQuantityParameters): Bluebird<IStandardResponse<TResult, IUpdateCartListingQuantityParameters>>;
/**
* Remove a listing from a cart
*/
export declare function removeCartListing<TResult>(parameters: IRemoveCartListingParameters): Bluebird<IStandardResponse<TResult, IRemoveCartListingParameters>>;
/**
* Get a cart
*/
export declare function getUserCart<TResult>(parameters: IGetUserCartParameters): Bluebird<IStandardResponse<TResult, IGetUserCartParameters>>;
/**
* Update a cart
*/
export declare function updateCart<TResult>(parameters: IUpdateCartParameters): Bluebird<IStandardResponse<TResult, IUpdateCartParameters>>;
/**
* Delete a cart
*/
export declare function deleteCart<TResult>(parameters: IDeleteCartParameters): Bluebird<IStandardResponse<TResult, IDeleteCartParameters>>;
/**
* Saves and selects a shipping address for apple pay
*/
export declare function addAndSelectShippingForApplePay<TResult>(parameters: IAddAndSelectShippingForApplePayParameters): Bluebird<IStandardResponse<TResult, IAddAndSelectShippingForApplePayParameters>>;
/**
* Move a listing to Saved for Later
*/
export declare function saveListingForLater<TResult>(parameters: ISaveListingForLaterParameters): Bluebird<IStandardResponse<TResult, ISaveListingForLaterParameters>>;
/**
* Get a cart from a shop ID
*/
export declare function getUserCartForShop<TResult>(parameters: IGetUserCartForShopParameters): Bluebird<IStandardResponse<TResult, IGetUserCartForShopParameters>>;
/**
* Create a single-listing cart from a listing
*/
export declare function createSingleListingCart<TResult>(parameters: ICreateSingleListingCartParameters): Bluebird<IStandardResponse<TResult, ICreateSingleListingCartParameters>>;
