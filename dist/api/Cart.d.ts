import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const Cart: {
    getAllUserCarts: <TResult>(parameters: IGetAllUserCartsParameters, options?: IOptions) => Promise<IStandardResponse<IGetAllUserCartsParameters, TResult>>;
    addToCart: <TResult>(parameters: IAddToCartParameters, options?: IOptions) => Promise<IStandardResponse<IAddToCartParameters, TResult>>;
    updateCartListingQuantity: <TResult>(parameters: IUpdateCartListingQuantityParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateCartListingQuantityParameters, TResult>>;
    removeCartListing: <TResult>(parameters: IRemoveCartListingParameters, options?: IOptions) => Promise<IStandardResponse<IRemoveCartListingParameters, TResult>>;
    getUserCart: <TResult>(parameters: IGetUserCartParameters, options?: IOptions) => Promise<IStandardResponse<IGetUserCartParameters, TResult>>;
    updateCart: <TResult>(parameters: IUpdateCartParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateCartParameters, TResult>>;
    deleteCart: <TResult>(parameters: IDeleteCartParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteCartParameters, TResult>>;
    addAndSelectShippingForApplePay: <TResult>(parameters: IAddAndSelectShippingForApplePayParameters, options?: IOptions) => Promise<IStandardResponse<IAddAndSelectShippingForApplePayParameters, TResult>>;
    saveListingForLater: <TResult>(parameters: ISaveListingForLaterParameters, options?: IOptions) => Promise<IStandardResponse<ISaveListingForLaterParameters, TResult>>;
    getUserCartForShop: <TResult>(parameters: IGetUserCartForShopParameters, options?: IOptions) => Promise<IStandardResponse<IGetUserCartForShopParameters, TResult>>;
    createSingleListingCart: <TResult>(parameters: ICreateSingleListingCartParameters, options?: IOptions) => Promise<IStandardResponse<ICreateSingleListingCartParameters, TResult>>;
};
