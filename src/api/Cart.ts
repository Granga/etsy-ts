import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface ICart {
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


export interface IGetAllUserCartsParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IAddToCartParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any]
}
export interface IUpdateCartListingQuantityParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    quantity: number,
    listing_customization_id?: number
}
export interface IRemoveCartListingParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    listing_customization_id?: number
}
export interface IGetUserCartParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number
}
export interface IUpdateCartParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number,
    destination_country_id?: number,
    message_to_seller?: string,
    coupon_code?: string,
    shipping_option_id?: string,
    destination_zip?: string
}
export interface IDeleteCartParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number
}
export interface IAddAndSelectShippingForApplePayParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: string | number,
    second_line?: string,
    city: string,
    state?: string,
    zip: string,
    country_id: number
}
export interface ISaveListingForLaterParameters extends IStandardParameters {
    user_id: string | number,
    cart_id: number,
    listing_id: number,
    listing_inventory_id?: number,
    listing_customization_id?: number
}
export interface IGetUserCartForShopParameters extends IStandardParameters {
    user_id: string | number,
    shop_id: string | number
}
export interface ICreateSingleListingCartParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number,
    quantity?: number,
    selected_variations?: [any, any]
}

export class Cart {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get a user's Carts
     */
    getAllUserCarts<TResult>(parameters: IGetAllUserCartsParameters): Promise<IStandardResponse<IGetAllUserCartsParameters, TResult>> {
        return this.client.http<IGetAllUserCartsParameters, TResult>("/users/:user_id/carts", parameters, "GET");
    }

    /**
     * Add a listing to a cart
     */
    addToCart<TResult>(parameters: IAddToCartParameters): Promise<IStandardResponse<IAddToCartParameters, TResult>> {
        return this.client.http<IAddToCartParameters, TResult>("/users/:user_id/carts", parameters, "POST");
    }

    /**
     * Update a cart listing purchase quantity
     */
    updateCartListingQuantity<TResult>(parameters: IUpdateCartListingQuantityParameters): Promise<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>> {
        return this.client.http<IUpdateCartListingQuantityParameters, TResult>("/users/:user_id/carts", parameters, "PUT");
    }

    /**
     * Remove a listing from a cart
     */
    removeCartListing<TResult>(parameters: IRemoveCartListingParameters): Promise<IStandardResponse<IRemoveCartListingParameters, TResult>> {
        return this.client.http<IRemoveCartListingParameters, TResult>("/users/:user_id/carts", parameters, "DELETE");
    }

    /**
     * Get a cart
     */
    getUserCart<TResult>(parameters: IGetUserCartParameters): Promise<IStandardResponse<IGetUserCartParameters, TResult>> {
        return this.client.http<IGetUserCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "GET");
    }

    /**
     * Update a cart
     */
    updateCart<TResult>(parameters: IUpdateCartParameters): Promise<IStandardResponse<IUpdateCartParameters, TResult>> {
        return this.client.http<IUpdateCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "PUT");
    }

    /**
     * Delete a cart
     */
    deleteCart<TResult>(parameters: IDeleteCartParameters): Promise<IStandardResponse<IDeleteCartParameters, TResult>> {
        return this.client.http<IDeleteCartParameters, TResult>("/users/:user_id/carts/:cart_id", parameters, "DELETE");
    }

    /**
     * Saves and selects a shipping address for apple pay
     */
    addAndSelectShippingForApplePay<TResult>(parameters: IAddAndSelectShippingForApplePayParameters): Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>> {
        return this.client.http<IAddAndSelectShippingForApplePayParameters, TResult>("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple", parameters, "POST");
    }

    /**
     * Move a listing to Saved for Later
     */
    saveListingForLater<TResult>(parameters: ISaveListingForLaterParameters): Promise<IStandardResponse<ISaveListingForLaterParameters, TResult>> {
        return this.client.http<ISaveListingForLaterParameters, TResult>("/users/:user_id/carts/save", parameters, "DELETE");
    }

    /**
     * Get a cart from a shop ID
     */
    getUserCartForShop<TResult>(parameters: IGetUserCartForShopParameters): Promise<IStandardResponse<IGetUserCartForShopParameters, TResult>> {
        return this.client.http<IGetUserCartForShopParameters, TResult>("/users/:user_id/carts/shop/:shop_id", parameters, "GET");
    }

    /**
     * Create a single-listing cart from a listing
     */
    createSingleListingCart<TResult>(parameters: ICreateSingleListingCartParameters): Promise<IStandardResponse<ICreateSingleListingCartParameters, TResult>> {
        return this.client.http<ICreateSingleListingCartParameters, TResult>("/users/:user_id/carts/single_listing", parameters, "POST");
    }
}
