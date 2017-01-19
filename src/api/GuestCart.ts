import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IGuestCart {
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

export interface IFindAllGuestCartsParameters extends IStandardParameters {
    guest_id: any
}
export interface IAddToGuestCartParameters extends IStandardParameters {
    guest_id: any,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any]
}
export interface IUpdateGuestCartListingQuantityParameters extends IStandardParameters {
    guest_id: any,
    listing_id: number,
    quantity: number,
    listing_customization_id?: number
}
export interface IRemoveGuestCartListingParameters extends IStandardParameters {
    guest_id: any,
    listing_id: number,
    listing_customization_id?: number
}
export interface IFindGuestCartParameters extends IStandardParameters {
    guest_id: any,
    cart_id: string | number
}
export interface IUpdateGuestCartParameters extends IStandardParameters {
    guest_id: any,
    cart_id: string | number,
    destination_country_id?: number,
    message_to_seller?: string,
    coupon_code?: string,
    shipping_option_id?: string,
    destination_zip?: string
}
export interface IDeleteGuestCartParameters extends IStandardParameters {
    guest_id: any,
    cart_id: string | number
}

/**
 * Get all guest's carts
 */
export function findAllGuestCarts<TResult>(parameters: IFindAllGuestCartsParameters): Bluebird<IStandardResponse<TResult, IFindAllGuestCartsParameters>> {
    return request<IStandardResponse<TResult, IFindAllGuestCartsParameters>>(parameters, '/guests/:guest_id/carts', 'GET');
}
/**
 * Add a listing to guest's cart
 */
export function addToGuestCart<TResult>(parameters: IAddToGuestCartParameters): Bluebird<IStandardResponse<TResult, IAddToGuestCartParameters>> {
    return request<IStandardResponse<TResult, IAddToGuestCartParameters>>(parameters, '/guests/:guest_id/carts', 'POST');
}
/**
 * Update a guest's cart listing purchase quantity
 */
export function updateGuestCartListingQuantity<TResult>(parameters: IUpdateGuestCartListingQuantityParameters): Bluebird<IStandardResponse<TResult, IUpdateGuestCartListingQuantityParameters>> {
    return request<IStandardResponse<TResult, IUpdateGuestCartListingQuantityParameters>>(parameters, '/guests/:guest_id/carts', 'PUT');
}
/**
 * Remove a listing from a guest's cart
 */
export function removeGuestCartListing<TResult>(parameters: IRemoveGuestCartListingParameters): Bluebird<IStandardResponse<TResult, IRemoveGuestCartListingParameters>> {
    return request<IStandardResponse<TResult, IRemoveGuestCartListingParameters>>(parameters, '/guests/:guest_id/carts', 'DELETE');
}
/**
 * Get a guest's cart
 */
export function findGuestCart<TResult>(parameters: IFindGuestCartParameters): Bluebird<IStandardResponse<TResult, IFindGuestCartParameters>> {
    return request<IStandardResponse<TResult, IFindGuestCartParameters>>(parameters, '/guests/:guest_id/carts/:cart_id', 'GET');
}
/**
 * Update a guest's cart
 */
export function updateGuestCart<TResult>(parameters: IUpdateGuestCartParameters): Bluebird<IStandardResponse<TResult, IUpdateGuestCartParameters>> {
    return request<IStandardResponse<TResult, IUpdateGuestCartParameters>>(parameters, '/guests/:guest_id/carts/:cart_id', 'PUT');
}
/**
 * Delete a guest's cart
 */
export function deleteGuestCart<TResult>(parameters: IDeleteGuestCartParameters): Bluebird<IStandardResponse<TResult, IDeleteGuestCartParameters>> {
    return request<IStandardResponse<TResult, IDeleteGuestCartParameters>>(parameters, '/guests/:guest_id/carts/:cart_id', 'DELETE');
}
