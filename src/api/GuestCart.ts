import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IGuestCart {
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
export interface IFindAllGuestCartsParameters {
    guest_id: any
}

export interface IAddToGuestCartParameters {
    guest_id: any,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any],
    personalization?: any
}

export interface IUpdateGuestCartListingQuantityParameters {
    guest_id: any,
    listing_id: number,
    quantity: number,
    listing_customization_id?: number
}

export interface IRemoveGuestCartListingParameters {
    guest_id: any,
    listing_id: number,
    listing_customization_id?: number
}

export interface IFindGuestCartParameters {
    guest_id: any,
    cart_id: string | number
}

export interface IUpdateGuestCartParameters {
    guest_id: any,
    cart_id: string | number,
    destination_country_id?: number,
    message_to_seller?: string,
    coupon_code?: string,
    shipping_option_id?: string,
    destination_zip?: string
}

export interface IDeleteGuestCartParameters {
    guest_id: any,
    cart_id: string | number
}

//methods class
export class GuestCart {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get all guest's carts
     */
    async findAllGuestCarts<TResult>(
        params: IFindAllGuestCartsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllGuestCartsParameters, TResult>>> {
        return request<IFindAllGuestCartsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/carts",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Add a listing to guest's cart
     */
    async addToGuestCart<TResult>(
        params: IAddToGuestCartParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IAddToGuestCartParameters, TResult>>> {
        return request<IAddToGuestCartParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/carts",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Update a guest's cart listing purchase quantity
     */
    async updateGuestCartListingQuantity<TResult>(
        params: IUpdateGuestCartListingQuantityParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateGuestCartListingQuantityParameters, TResult>>> {
        return request<IUpdateGuestCartListingQuantityParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/carts",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Remove a listing from a guest's cart
     */
    async removeGuestCartListing<TResult>(
        params: IRemoveGuestCartListingParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IRemoveGuestCartListingParameters, TResult>>> {
        return request<IRemoveGuestCartListingParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/carts",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Get a guest's cart
     */
    async findGuestCart<TResult>(
        params: IFindGuestCartParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindGuestCartParameters, TResult>>> {
        return request<IFindGuestCartParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/carts/:cart_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Update a guest's cart
     */
    async updateGuestCart<TResult>(
        params: IUpdateGuestCartParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateGuestCartParameters, TResult>>> {
        return request<IUpdateGuestCartParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/carts/:cart_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Delete a guest's cart
     */
    async deleteGuestCart<TResult>(
        params: IDeleteGuestCartParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteGuestCartParameters, TResult>>> {
        return request<IDeleteGuestCartParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/guests/:guest_id/carts/:cart_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
