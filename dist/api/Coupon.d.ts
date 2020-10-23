import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ICoupon {
    /**
     * The numeric ID of the coupon
     */
    coupon_id: number;
    /**
     * The alphanumeric coupon code
     */
    coupon_code: string;
    /**
     * True if the coupon is active
     */
    seller_active: boolean;
    /**
     * The discount percent (null for free shipping coupons)
     */
    pct_discount: number;
    /**
     * True if the coupon applies free shipping
     */
    free_shipping: boolean;
    /**
     * True if the coupon free shipping applies to domestic addresses only
     */
    domestic_only: boolean;
    /**
     * The 3 letter currency code relating to currency values if any. fixed_discount or minimum_purchase_price
     */
    currency_code: string;
    /**
     * Discount amount the coupon should take. For currency information see currency_code
     */
    fixed_discount: string;
    /**
     * The minimum amount in a cart before tax or shipping needed in order to apply the coupon. For currency information see currency_code
     */
    minimum_purchase_price: string;
    /**
     * A epoch time (UTC) on which the coupon can no longer be applied
     */
    expiration_date: number;
    /**
     * The type of coupon: fixed_discount, pct_discount, free_shipping for example
     */
    coupon_type: string;
}
export interface IFindAllShopCouponsParameters extends IStandardParameters {
    shop_id: string | number;
}
export interface ICreateCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_code: string;
    pct_discount?: number;
    seller_active?: boolean;
    free_shipping?: boolean;
    domestic_only?: boolean;
    currency_code?: string;
    fixed_discount?: string;
    minimum_purchase_price?: string;
    expiration_date?: number;
}
export interface IFindCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
}
export interface IUpdateCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
    seller_active?: boolean;
}
export interface IDeleteCouponParameters extends IStandardParameters {
    shop_id: string | number;
    coupon_id: number;
}
export declare class Coupon {
    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    static findAllShopCoupons<TResult>(parameters: IFindAllShopCouponsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopCouponsParameters, TResult>>;
    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    static createCoupon<TResult>(parameters: ICreateCouponParameters, options?: IOptions): Promise<IStandardResponse<ICreateCouponParameters, TResult>>;
    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    static findCoupon<TResult>(parameters: IFindCouponParameters, options?: IOptions): Promise<IStandardResponse<IFindCouponParameters, TResult>>;
    /**
     * Updates a coupon
     */
    static updateCoupon<TResult>(parameters: IUpdateCouponParameters, options?: IOptions): Promise<IStandardResponse<IUpdateCouponParameters, TResult>>;
    /**
     * Deletes a coupon
     */
    static deleteCoupon<TResult>(parameters: IDeleteCouponParameters, options?: IOptions): Promise<IStandardResponse<IDeleteCouponParameters, TResult>>;
}
