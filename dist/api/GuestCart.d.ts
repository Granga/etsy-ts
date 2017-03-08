import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IGuestCart {
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
export interface IFindAllGuestCartsParameters extends IStandardParameters {
    guest_id: any;
}
export interface IAddToGuestCartParameters extends IStandardParameters {
    guest_id: any;
    listing_id: number;
    quantity?: number;
    selected_variations?: [any, any];
}
export interface IUpdateGuestCartListingQuantityParameters extends IStandardParameters {
    guest_id: any;
    listing_id: number;
    quantity: number;
    listing_customization_id?: number;
}
export interface IRemoveGuestCartListingParameters extends IStandardParameters {
    guest_id: any;
    listing_id: number;
    listing_customization_id?: number;
}
export interface IFindGuestCartParameters extends IStandardParameters {
    guest_id: any;
    cart_id: string | number;
}
export interface IUpdateGuestCartParameters extends IStandardParameters {
    guest_id: any;
    cart_id: string | number;
    destination_country_id?: number;
    message_to_seller?: string;
    coupon_code?: string;
    shipping_option_id?: string;
    destination_zip?: string;
}
export interface IDeleteGuestCartParameters extends IStandardParameters {
    guest_id: any;
    cart_id: string | number;
}
/**
 * Get all guest's carts
 */
export declare function findAllGuestCarts<TResult>(parameters: IFindAllGuestCartsParameters): Promise<IStandardResponse<IFindAllGuestCartsParameters, TResult>>;
/**
 * Add a listing to guest's cart
 */
export declare function addToGuestCart<TResult>(parameters: IAddToGuestCartParameters): Promise<IStandardResponse<IAddToGuestCartParameters, TResult>>;
/**
 * Update a guest's cart listing purchase quantity
 */
export declare function updateGuestCartListingQuantity<TResult>(parameters: IUpdateGuestCartListingQuantityParameters): Promise<IStandardResponse<IUpdateGuestCartListingQuantityParameters, TResult>>;
/**
 * Remove a listing from a guest's cart
 */
export declare function removeGuestCartListing<TResult>(parameters: IRemoveGuestCartListingParameters): Promise<IStandardResponse<IRemoveGuestCartListingParameters, TResult>>;
/**
 * Get a guest's cart
 */
export declare function findGuestCart<TResult>(parameters: IFindGuestCartParameters): Promise<IStandardResponse<IFindGuestCartParameters, TResult>>;
/**
 * Update a guest's cart
 */
export declare function updateGuestCart<TResult>(parameters: IUpdateGuestCartParameters): Promise<IStandardResponse<IUpdateGuestCartParameters, TResult>>;
/**
 * Delete a guest's cart
 */
export declare function deleteGuestCart<TResult>(parameters: IDeleteGuestCartParameters): Promise<IStandardResponse<IDeleteGuestCartParameters, TResult>>;
export declare const GuestCart: {
    findAllGuestCarts: <TResult>(parameters: IFindAllGuestCartsParameters) => Promise<IStandardResponse<IFindAllGuestCartsParameters, TResult>>;
    addToGuestCart: <TResult>(parameters: IAddToGuestCartParameters) => Promise<IStandardResponse<IAddToGuestCartParameters, TResult>>;
    updateGuestCartListingQuantity: <TResult>(parameters: IUpdateGuestCartListingQuantityParameters) => Promise<IStandardResponse<IUpdateGuestCartListingQuantityParameters, TResult>>;
    removeGuestCartListing: <TResult>(parameters: IRemoveGuestCartListingParameters) => Promise<IStandardResponse<IRemoveGuestCartListingParameters, TResult>>;
    findGuestCart: <TResult>(parameters: IFindGuestCartParameters) => Promise<IStandardResponse<IFindGuestCartParameters, TResult>>;
    updateGuestCart: <TResult>(parameters: IUpdateGuestCartParameters) => Promise<IStandardResponse<IUpdateGuestCartParameters, TResult>>;
    deleteGuestCart: <TResult>(parameters: IDeleteGuestCartParameters) => Promise<IStandardResponse<IDeleteGuestCartParameters, TResult>>;
};
