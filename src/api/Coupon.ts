import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ICoupon {
    coupon_id: number,
    coupon_code: string,
    seller_active: boolean,
    pct_discount: number,
    free_shipping: boolean,
    domestic_only: boolean,
    currency_code: string,
    fixed_discount: string,
    minimum_purchase_price: string,
    expiration_date: number,
    coupon_type: string
}

export interface IFindAllShopCouponsParameters extends IStandardParameters {
    shop_id: string | number
}
export interface ICreateCouponParameters extends IStandardParameters {
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
export interface IFindCouponParameters extends IStandardParameters {
    shop_id: string | number,
    coupon_id: number
}
export interface IUpdateCouponParameters extends IStandardParameters {
    shop_id: string | number,
    coupon_id: number,
    seller_active?: boolean
}
export interface IDeleteCouponParameters extends IStandardParameters {
    shop_id: string | number,
    coupon_id: number
}

/**
 * Retrieves all Shop_Coupons by shop_id
 */
export function findAllShopCoupons<TResult>(parameters: IFindAllShopCouponsParameters): Bluebird<IStandardResponse<TResult, IFindAllShopCouponsParameters>> {
    return request<IStandardResponse<TResult, IFindAllShopCouponsParameters>>(parameters, '/shops/:shop_id/coupons', 'GET');
}
/**
 * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
 */
export function createCoupon<TResult>(parameters: ICreateCouponParameters): Bluebird<IStandardResponse<TResult, ICreateCouponParameters>> {
    return request<IStandardResponse<TResult, ICreateCouponParameters>>(parameters, '/shops/:shop_id/coupons', 'POST');
}
/**
 * Retrieves a Shop_Coupon by id and shop_id
 */
export function findCoupon<TResult>(parameters: IFindCouponParameters): Bluebird<IStandardResponse<TResult, IFindCouponParameters>> {
    return request<IStandardResponse<TResult, IFindCouponParameters>>(parameters, '/shops/:shop_id/coupons/:coupon_id', 'GET');
}
/**
 * Updates a coupon
 */
export function updateCoupon<TResult>(parameters: IUpdateCouponParameters): Bluebird<IStandardResponse<TResult, IUpdateCouponParameters>> {
    return request<IStandardResponse<TResult, IUpdateCouponParameters>>(parameters, '/shops/:shop_id/coupons/:coupon_id', 'PUT');
}
/**
 * Deletes a coupon
 */
export function deleteCoupon<TResult>(parameters: IDeleteCouponParameters): Bluebird<IStandardResponse<TResult, IDeleteCouponParameters>> {
    return request<IStandardResponse<TResult, IDeleteCouponParameters>>(parameters, '/shops/:shop_id/coupons/:coupon_id', 'DELETE');
}
