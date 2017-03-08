import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ICoupon {
    coupon_id: number;
    coupon_code: string;
    seller_active: boolean;
    pct_discount: number;
    free_shipping: boolean;
    domestic_only: boolean;
    currency_code: string;
    fixed_discount: string;
    minimum_purchase_price: string;
    expiration_date: number;
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
export declare const Coupon: {
    findAllShopCoupons: <TResult>(parameters: IFindAllShopCouponsParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllShopCouponsParameters, TResult>>;
    createCoupon: <TResult>(parameters: ICreateCouponParameters, options?: IOptions) => Promise<IStandardResponse<ICreateCouponParameters, TResult>>;
    findCoupon: <TResult>(parameters: IFindCouponParameters, options?: IOptions) => Promise<IStandardResponse<IFindCouponParameters, TResult>>;
    updateCoupon: <TResult>(parameters: IUpdateCouponParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateCouponParameters, TResult>>;
    deleteCoupon: <TResult>(parameters: IDeleteCouponParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteCouponParameters, TResult>>;
};
