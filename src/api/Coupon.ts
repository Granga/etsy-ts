import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types

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

//methods

/**
 * Retrieves all Shop_Coupons by shop_id
 */
export function findAllShopCoupons <TResult>(parameters: IFindAllShopCouponsParameters): Promise<IStandardResponse<IFindAllShopCouponsParameters, TResult>> {
    return request<IFindAllShopCouponsParameters, TResult>("/shops/:shop_id/coupons", parameters, "GET");
}
/**
 * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
 */
export function createCoupon <TResult>(parameters: ICreateCouponParameters): Promise<IStandardResponse<ICreateCouponParameters, TResult>> {
    return request<ICreateCouponParameters, TResult>("/shops/:shop_id/coupons", parameters, "POST");
}
/**
 * Retrieves a Shop_Coupon by id and shop_id
 */
export function findCoupon <TResult>(parameters: IFindCouponParameters): Promise<IStandardResponse<IFindCouponParameters, TResult>> {
    return request<IFindCouponParameters, TResult>("/shops/:shop_id/coupons/:coupon_id", parameters, "GET");
}
/**
 * Updates a coupon
 */
export function updateCoupon <TResult>(parameters: IUpdateCouponParameters): Promise<IStandardResponse<IUpdateCouponParameters, TResult>> {
    return request<IUpdateCouponParameters, TResult>("/shops/:shop_id/coupons/:coupon_id", parameters, "PUT");
}
/**
 * Deletes a coupon
 */
export function deleteCoupon <TResult>(parameters: IDeleteCouponParameters): Promise<IStandardResponse<IDeleteCouponParameters, TResult>> {
    return request<IDeleteCouponParameters, TResult>("/shops/:shop_id/coupons/:coupon_id", parameters, "DELETE");
}

export const Coupon = {findAllShopCoupons, createCoupon, findCoupon, updateCoupon, deleteCoupon};
