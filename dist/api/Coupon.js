import { request } from "../client/client";
//methods class
export class Coupon {
    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    static findAllShopCoupons(parameters, options) {
        return request("/shops/:shop_id/coupons", parameters, "GET", options);
    }
    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    static createCoupon(parameters, options) {
        return request("/shops/:shop_id/coupons", parameters, "POST", options);
    }
    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    static findCoupon(parameters, options) {
        return request("/shops/:shop_id/coupons/:coupon_id", parameters, "GET", options);
    }
    /**
     * Updates a coupon
     */
    static updateCoupon(parameters, options) {
        return request("/shops/:shop_id/coupons/:coupon_id", parameters, "PUT", options);
    }
    /**
     * Deletes a coupon
     */
    static deleteCoupon(parameters, options) {
        return request("/shops/:shop_id/coupons/:coupon_id", parameters, "DELETE", options);
    }
}
