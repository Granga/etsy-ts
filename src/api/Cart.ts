import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class Cart {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Get a user's Carts
     */
    async getAllUserCarts<TResult>(
        params: IGetAllUserCartsParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetAllUserCartsParameters, TResult>>> {
        return request<IGetAllUserCartsParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Add a listing to a cart
     */
    async addToCart<TResult>(
        params: IAddToCartParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IAddToCartParameters, TResult>>> {
        return request<IAddToCartParameters, TResult>(
            {...this.config, url: "/users/:user_id/carts", method: "POST"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Update a cart listing purchase quantity
     */
    async updateCartListingQuantity<TResult>(
        params: IUpdateCartListingQuantityParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>>> {
        return request<IUpdateCartListingQuantityParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Remove a listing from a cart
     */
    async removeCartListing<TResult>(
        params: IRemoveCartListingParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IRemoveCartListingParameters, TResult>>> {
        return request<IRemoveCartListingParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get a cart
     */
    async getUserCart<TResult>(
        params: IGetUserCartParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetUserCartParameters, TResult>>> {
        return request<IGetUserCartParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts/:cart_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Update a cart
     */
    async updateCart<TResult>(
        params: IUpdateCartParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateCartParameters, TResult>>> {
        return request<IUpdateCartParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts/:cart_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Delete a cart
     */
    async deleteCart<TResult>(
        params: IDeleteCartParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteCartParameters, TResult>>> {
        return request<IDeleteCartParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts/:cart_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Saves and selects a shipping address for apple pay
     */
    async addAndSelectShippingForApplePay<TResult>(
        params: IAddAndSelectShippingForApplePayParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>>> {
        return request<IAddAndSelectShippingForApplePayParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Move a listing to Saved for Later
     */
    async saveListingForLater<TResult>(
        params: ISaveListingForLaterParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ISaveListingForLaterParameters, TResult>>> {
        return request<ISaveListingForLaterParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts/save",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get a cart from a shop ID
     */
    async getUserCartForShop<TResult>(
        params: IGetUserCartForShopParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetUserCartForShopParameters, TResult>>> {
        return request<IGetUserCartForShopParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts/shop/:shop_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Create a single-listing cart from a listing
     */
    async createSingleListingCart<TResult>(
        params: ICreateSingleListingCartParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ICreateSingleListingCartParameters, TResult>>> {
        return request<ICreateSingleListingCartParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/carts/single_listing",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
