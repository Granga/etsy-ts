import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IGuestCart {
    /**
     * The numeric ID of the cart
     */
    cart_id: number;
    /**
     * The shop name
     */
    shop_name: string;
    /**
     * The message to the seller
     */
    message_to_seller: string;
    /**
     * The numeric ID of the destination country
     */
    destination_country_id: number;
    /**
     @deprecated
     * The alphanumeric coupon code applied to the cart

     Deprecated: The Etsy API no longer supports coupons.
     */
    coupon_code: string;
    /**
     * The ISO (alphabetic) code for the currency
     */
    currency_code: string;
    /**
     * The total price
     */
    total: string;
    /**
     * The subtotal price
     */
    subtotal: string;
    /**
     * The shipping cost
     */
    shipping_cost: string;
    /**
     * The tax cost
     */
    tax_cost: string;
    /**
     * The line-item discount amount (does not include tax or shipping)
     */
    discount_amount: string;
    /**
     * The shipping discount amount
     */
    shipping_discount_amount: string;
    /**
     * The tax discount amount
     */
    tax_discount_amount: string;
    /**
     * The full URL to the cart page on Etsy
     */
    url: string;
    /**
     * An array of purchase information for the listings
     */
    listings: any[];
    /**
     * The cart is download only
     */
    is_download_only: boolean;
    /**
     * The cart has VAT tax
     */
    has_vat: boolean;
    /**
     * The selected shipping option identifier for the cart
     */
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
    personalization?: any;
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
declare function findAllGuestCarts<TResult>(parameters: IFindAllGuestCartsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllGuestCartsParameters, TResult>>;
/**
 * Add a listing to guest's cart
 */
declare function addToGuestCart<TResult>(parameters: IAddToGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IAddToGuestCartParameters, TResult>>;
/**
 * Update a guest's cart listing purchase quantity
 */
declare function updateGuestCartListingQuantity<TResult>(parameters: IUpdateGuestCartListingQuantityParameters, options?: IOptions): Promise<IStandardResponse<IUpdateGuestCartListingQuantityParameters, TResult>>;
/**
 * Remove a listing from a guest's cart
 */
declare function removeGuestCartListing<TResult>(parameters: IRemoveGuestCartListingParameters, options?: IOptions): Promise<IStandardResponse<IRemoveGuestCartListingParameters, TResult>>;
/**
 * Get a guest's cart
 */
declare function findGuestCart<TResult>(parameters: IFindGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IFindGuestCartParameters, TResult>>;
/**
 * Update a guest's cart
 */
declare function updateGuestCart<TResult>(parameters: IUpdateGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IUpdateGuestCartParameters, TResult>>;
/**
 * Delete a guest's cart
 */
declare function deleteGuestCart<TResult>(parameters: IDeleteGuestCartParameters, options?: IOptions): Promise<IStandardResponse<IDeleteGuestCartParameters, TResult>>;
export declare const GuestCart: {
    findAllGuestCarts: typeof findAllGuestCarts;
    addToGuestCart: typeof addToGuestCart;
    updateGuestCartListingQuantity: typeof updateGuestCartListingQuantity;
    removeGuestCartListing: typeof removeGuestCartListing;
    findGuestCart: typeof findGuestCart;
    updateGuestCart: typeof updateGuestCart;
    deleteGuestCart: typeof deleteGuestCart;
};
export {};
