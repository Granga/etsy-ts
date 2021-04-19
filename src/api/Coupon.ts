import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class Coupon extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    async findAllShopCoupons<TResult>(
        params: IFindAllShopCouponsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopCouponsParameters, TResult>>> {
        return this.request<IFindAllShopCouponsParameters, TResult>("GET", "/shops/:shop_id/coupons", params, extra);
    }

    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    async createCoupon<TResult>(
        params: ICreateCouponParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateCouponParameters, TResult>>> {
        return this.request<ICreateCouponParameters, TResult>("POST", "/shops/:shop_id/coupons", params, extra);
    }

    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    async findCoupon<TResult>(
        params: IFindCouponParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindCouponParameters, TResult>>> {
        return this.request<IFindCouponParameters, TResult>("GET", "/shops/:shop_id/coupons/:coupon_id", params, extra);
    }

    /**
     * Updates a coupon
     */
    async updateCoupon<TResult>(
        params: IUpdateCouponParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateCouponParameters, TResult>>> {
        return this.request<IUpdateCouponParameters, TResult>(
            "PUT",
            "/shops/:shop_id/coupons/:coupon_id",
            params,
            extra
        );
    }

    /**
     * Deletes a coupon
     */
    async deleteCoupon<TResult>(
        params: IDeleteCouponParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteCouponParameters, TResult>>> {
        return this.request<IDeleteCouponParameters, TResult>(
            "DELETE",
            "/shops/:shop_id/coupons/:coupon_id",
            params,
            extra
        );
    }
}
