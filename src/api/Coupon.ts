import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface ICoupon {
    /**
     * The numeric ID of the coupon
     */
    coupon_id: number,
    /**
     * The alphanumeric coupon code
     */
    coupon_code: string,
    /**
     * True if the coupon is active
     */
    seller_active: boolean,
    /**
     * The discount percent (null for free shipping coupons)
     */
    pct_discount: number,
    /**
     * True if the coupon applies free shipping
     */
    free_shipping: boolean,
    /**
     * True if the coupon free shipping applies to domestic addresses only
     */
    domestic_only: boolean,
    /**
     * The 3 letter currency code relating to currency values if any. fixed_discount or minimum_purchase_price
     */
    currency_code: string,
    /**
     * Discount amount the coupon should take. For currency information see currency_code
     */
    fixed_discount: string,
    /**
     * The minimum amount in a cart before tax or shipping needed in order to apply the coupon. For currency information see currency_code
     */
    minimum_purchase_price: string,
    /**
     * A epoch time (UTC) on which the coupon can no longer be applied
     */
    expiration_date: number,
    /**
     * The type of coupon: fixed_discount, pct_discount, free_shipping for example
     */
    coupon_type: string
}

//parameters types
export interface IFindAllShopCouponsParameters {
    shop_id: string | number
}

export interface ICreateCouponParameters {
    shop_id: string | number,
    coupon_code: string,
    pct_discount?: number,
    seller_active?: boolean,
    free_shipping?: boolean,
    domestic_only?: boolean,
    currency_code?: string,
    fixed_discount?: string,
    minimum_purchase_price?: string,
    expiration_date?: number
}

export interface IFindCouponParameters {
    shop_id: string | number,
    coupon_id: number
}

export interface IUpdateCouponParameters {
    shop_id: string | number,
    coupon_id: number,
    seller_active?: boolean
}

export interface IDeleteCouponParameters {
    shop_id: string | number,
    coupon_id: number
}

//methods class
export class Coupon {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    async findAllShopCoupons<TResult>(
        params: IFindAllShopCouponsParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopCouponsParameters, TResult>>> {
        return request<IFindAllShopCouponsParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/coupons",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    async createCoupon<TResult>(
        params: ICreateCouponParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ICreateCouponParameters, TResult>>> {
        return request<ICreateCouponParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/coupons",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    async findCoupon<TResult>(
        params: IFindCouponParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindCouponParameters, TResult>>> {
        return request<IFindCouponParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/coupons/:coupon_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Updates a coupon
     */
    async updateCoupon<TResult>(
        params: IUpdateCouponParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateCouponParameters, TResult>>> {
        return request<IUpdateCouponParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/coupons/:coupon_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Deletes a coupon
     */
    async deleteCoupon<TResult>(
        params: IDeleteCouponParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteCouponParameters, TResult>>> {
        return request<IDeleteCouponParameters, TResult>({
            ...this.config,
            url: "/shops/:shop_id/coupons/:coupon_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
