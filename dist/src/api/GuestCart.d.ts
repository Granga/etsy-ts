import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindAllGuestCartsParameters {
    guest_id: any;
}
export interface IAddToGuestCartParameters {
    guest_id: any;
    listing_id: number;
    quantity?: number;
    selected_variations?: [any, any];
    personalization?: any;
}
export interface IUpdateGuestCartListingQuantityParameters {
    guest_id: any;
    listing_id: number;
    quantity: number;
    listing_customization_id?: number;
}
export interface IRemoveGuestCartListingParameters {
    guest_id: any;
    listing_id: number;
    listing_customization_id?: number;
}
export interface IFindGuestCartParameters {
    guest_id: any;
    cart_id: string | number;
}
export interface IUpdateGuestCartParameters {
    guest_id: any;
    cart_id: string | number;
    destination_country_id?: number;
    message_to_seller?: string;
    coupon_code?: string;
    shipping_option_id?: string;
    destination_zip?: string;
}
export interface IDeleteGuestCartParameters {
    guest_id: any;
    cart_id: string | number;
}
export declare class GuestCart {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Get all guest's carts
     */
    findAllGuestCarts<TResult>(params: IFindAllGuestCartsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllGuestCartsParameters, TResult>>>;
    /**
     * Add a listing to guest's cart
     */
    addToGuestCart<TResult>(params: IAddToGuestCartParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IAddToGuestCartParameters, TResult>>>;
    /**
     * Update a guest's cart listing purchase quantity
     */
    updateGuestCartListingQuantity<TResult>(params: IUpdateGuestCartListingQuantityParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateGuestCartListingQuantityParameters, TResult>>>;
    /**
     * Remove a listing from a guest's cart
     */
    removeGuestCartListing<TResult>(params: IRemoveGuestCartListingParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IRemoveGuestCartListingParameters, TResult>>>;
    /**
     * Get a guest's cart
     */
    findGuestCart<TResult>(params: IFindGuestCartParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindGuestCartParameters, TResult>>>;
    /**
     * Update a guest's cart
     */
    updateGuestCart<TResult>(params: IUpdateGuestCartParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateGuestCartParameters, TResult>>>;
    /**
     * Delete a guest's cart
     */
    deleteGuestCart<TResult>(params: IDeleteGuestCartParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteGuestCartParameters, TResult>>>;
}
