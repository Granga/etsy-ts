"use strict";
class Coupon {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    findAllShopCoupons(parameters) {
        return this.client.http("/shops/:shop_id/coupons", parameters, "GET");
    }
    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    createCoupon(parameters) {
        return this.client.http("/shops/:shop_id/coupons", parameters, "POST");
    }
    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    findCoupon(parameters) {
        return this.client.http("/shops/:shop_id/coupons/:coupon_id", parameters, "GET");
    }
    /**
     * Updates a coupon
     */
    updateCoupon(parameters) {
        return this.client.http("/shops/:shop_id/coupons/:coupon_id", parameters, "PUT");
    }
    /**
     * Deletes a coupon
     */
    deleteCoupon(parameters) {
        return this.client.http("/shops/:shop_id/coupons/:coupon_id", parameters, "DELETE");
    }
}
exports.Coupon = Coupon;
