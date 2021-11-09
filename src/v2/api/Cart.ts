import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface ICart {
    /**
     * The numeric ID of the cart
     */
    cart_id: number,
    /**
     * The shop name
     */
    shop_name: string,
    /**
     * The message to the seller
     */
    message_to_seller: string,
    /**
     * The numeric ID of the destination country
     */
    destination_country_id: number,
    /**
     @deprecated
     * The alphanumeric coupon code applied to the cart

     Deprecated: The Etsy API no longer supports coupons.
     */
    coupon_code: string,
    /**
     * The ISO (alphabetic) code for the currency
     */
    currency_code: string,
    /**
     * The total price
     */
    total: string,
    /**
     * The subtotal price
     */
    subtotal: string,
    /**
     * The shipping cost
     */
    shipping_cost: string,
    /**
     * The tax cost
     */
    tax_cost: string,
    /**
     * The line-item discount amount (does not include tax or shipping)
     */
    discount_amount: string,
    /**
     * The shipping discount amount
     */
    shipping_discount_amount: string,
    /**
     * The tax discount amount
     */
    tax_discount_amount: string,
    /**
     * The full URL to the cart page on Etsy
     */
    url: string,
    /**
     * An array of purchase information for the listings
     */
    listings: any[],
    /**
     * The cart is download only
     */
    is_download_only: boolean,
    /**
     * The cart has VAT tax
     */
    has_vat: boolean,
    /**
     * The selected shipping option identifier for the cart
     */
    shipping_option: any
}

//parameters types
export interface IGetAllUserCartsParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IAddToCartParameters {
    user_id: string | number,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any],
    personalization?: any
}
export interface IUpdateCartListingQuantityParameters {
    user_id: string | number,
    listing_id: number,
    quantity: number,
    listing_customization_id?: number
}
export interface IRemoveCartListingParameters {
    user_id: string | number,
    listing_id: number,
    listing_customization_id?: number
}
export interface IGetUserCartParameters {
    user_id: string | number,
    cart_id: string | number
}
export interface IUpdateCartParameters {
    user_id: string | number,
    cart_id: string | number,
    destination_country_id?: number,
    message_to_seller?: string,
    coupon_code?: string,
    shipping_option_id?: string,
    destination_zip?: string
}
export interface IDeleteCartParameters {
    user_id: string | number,
    cart_id: string | number
}
export interface IAddAndSelectShippingForApplePayParameters {
    user_id: string | number,
    cart_id: string | number,
    second_line?: string,
    city: string,
    state?: string,
    zip: string,
    country_id: number
}
export interface ISaveListingForLaterParameters {
    user_id: string | number,
    cart_id: number,
    listing_id: number,
    listing_inventory_id?: number,
    listing_customization_id?: number
}
export interface IGetUserCartForShopParameters {
    user_id: string | number,
    shop_id: string | number
}
export interface ICreateSingleListingCartParameters {
    user_id: string | number,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any],
    personalization?: any
}

//methods class
export class Cart extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get a user's Carts
     */
    async getAllUserCarts<TResult>(
        params: IGetAllUserCartsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetAllUserCartsParameters, TResult>>> {
        return this.request<IGetAllUserCartsParameters, TResult>("GET", "/users/:user_id/carts", params, extra);
    }

    /**
     * Add a listing to a cart
     */
    async addToCart<TResult>(
        params: IAddToCartParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IAddToCartParameters, TResult>>> {
        return this.request<IAddToCartParameters, TResult>("POST", "/users/:user_id/carts", params, extra);
    }

    /**
     * Update a cart listing purchase quantity
     */
    async updateCartListingQuantity<TResult>(
        params: IUpdateCartListingQuantityParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>>> {
        return this.request<IUpdateCartListingQuantityParameters, TResult>(
            "PUT",
            "/users/:user_id/carts",
            params,
            extra
        );
    }

    /**
     * Remove a listing from a cart
     */
    async removeCartListing<TResult>(
        params: IRemoveCartListingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IRemoveCartListingParameters, TResult>>> {
        return this.request<IRemoveCartListingParameters, TResult>("DELETE", "/users/:user_id/carts", params, extra);
    }

    /**
     * Get a cart
     */
    async getUserCart<TResult>(
        params: IGetUserCartParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetUserCartParameters, TResult>>> {
        return this.request<IGetUserCartParameters, TResult>("GET", "/users/:user_id/carts/:cart_id", params, extra);
    }

    /**
     * Update a cart
     */
    async updateCart<TResult>(
        params: IUpdateCartParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateCartParameters, TResult>>> {
        return this.request<IUpdateCartParameters, TResult>("PUT", "/users/:user_id/carts/:cart_id", params, extra);
    }

    /**
     * Delete a cart
     */
    async deleteCart<TResult>(
        params: IDeleteCartParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteCartParameters, TResult>>> {
        return this.request<IDeleteCartParameters, TResult>("DELETE", "/users/:user_id/carts/:cart_id", params, extra);
    }

    /**
     * Saves and selects a shipping address for apple pay
     */
    async addAndSelectShippingForApplePay<TResult>(
        params: IAddAndSelectShippingForApplePayParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>>> {
        return this.request<IAddAndSelectShippingForApplePayParameters, TResult>(
            "POST",
            "/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple",
            params,
            extra
        );
    }

    /**
     * Move a listing to Saved for Later
     */
    async saveListingForLater<TResult>(
        params: ISaveListingForLaterParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ISaveListingForLaterParameters, TResult>>> {
        return this.request<ISaveListingForLaterParameters, TResult>(
            "DELETE",
            "/users/:user_id/carts/save",
            params,
            extra
        );
    }

    /**
     * Get a cart from a shop ID
     */
    async getUserCartForShop<TResult>(
        params: IGetUserCartForShopParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetUserCartForShopParameters, TResult>>> {
        return this.request<IGetUserCartForShopParameters, TResult>(
            "GET",
            "/users/:user_id/carts/shop/:shop_id",
            params,
            extra
        );
    }

    /**
     * Create a single-listing cart from a listing
     */
    async createSingleListingCart<TResult>(
        params: ICreateSingleListingCartParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateSingleListingCartParameters, TResult>>> {
        return this.request<ICreateSingleListingCartParameters, TResult>(
            "POST",
            "/users/:user_id/carts/single_listing",
            params,
            extra
        );
    }
}
