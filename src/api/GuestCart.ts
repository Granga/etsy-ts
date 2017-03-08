import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types
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

//methods
/**
 * Get all guest's carts
 */
function findAllGuestCarts <TResult>(parameters: IFindAllGuestCartsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllGuestCartsParameters, TResult>> {
    return request<IFindAllGuestCartsParameters, TResult>("/guests/:guest_id/carts", parameters, "GET", options);
}
/**
 * Add a listing to guest's cart
 */
function addToGuestCart <TResult>(parameters: IAddToGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IAddToGuestCartParameters, TResult>> {
    return request<IAddToGuestCartParameters, TResult>("/guests/:guest_id/carts", parameters, "POST", options);
}
/**
 * Update a guest's cart listing purchase quantity
 */
function updateGuestCartListingQuantity <TResult>(parameters: IUpdateGuestCartListingQuantityParameters, options?: IOptions): Promise<IStandardResponse<IUpdateGuestCartListingQuantityParameters, TResult>> {
    return request<IUpdateGuestCartListingQuantityParameters, TResult>("/guests/:guest_id/carts", parameters, "PUT", options);
}
/**
 * Remove a listing from a guest's cart
 */
function removeGuestCartListing <TResult>(parameters: IRemoveGuestCartListingParameters, options?: IOptions): Promise<IStandardResponse<IRemoveGuestCartListingParameters, TResult>> {
    return request<IRemoveGuestCartListingParameters, TResult>("/guests/:guest_id/carts", parameters, "DELETE", options);
}
/**
 * Get a guest's cart
 */
function findGuestCart <TResult>(parameters: IFindGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IFindGuestCartParameters, TResult>> {
    return request<IFindGuestCartParameters, TResult>("/guests/:guest_id/carts/:cart_id", parameters, "GET", options);
}
/**
 * Update a guest's cart
 */
function updateGuestCart <TResult>(parameters: IUpdateGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IUpdateGuestCartParameters, TResult>> {
    return request<IUpdateGuestCartParameters, TResult>("/guests/:guest_id/carts/:cart_id", parameters, "PUT", options);
}
/**
 * Delete a guest's cart
 */
function deleteGuestCart <TResult>(parameters: IDeleteGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IDeleteGuestCartParameters, TResult>> {
    return request<IDeleteGuestCartParameters, TResult>("/guests/:guest_id/carts/:cart_id", parameters, "DELETE", options);
}

export const GuestCart = {
    findAllGuestCarts,
    addToGuestCart,
    updateGuestCartListingQuantity,
    removeGuestCartListing,
    findGuestCart,
    updateGuestCart,
    deleteGuestCart
};
