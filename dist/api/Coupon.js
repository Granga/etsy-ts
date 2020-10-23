"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
var client_1 = require("../client/client");
//methods class
var Coupon = /** @class */ (function () {
    function Coupon() {
    }
    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    Coupon.findAllShopCoupons = function (parameters, options) {
        return client_1.request("/shops/:shop_id/coupons", parameters, "GET", options);
    };
    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    Coupon.createCoupon = function (parameters, options) {
        return client_1.request("/shops/:shop_id/coupons", parameters, "POST", options);
    };
    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    Coupon.findCoupon = function (parameters, options) {
        return client_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "GET", options);
    };
    /**
     * Updates a coupon
     */
    Coupon.updateCoupon = function (parameters, options) {
        return client_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "PUT", options);
    };
    /**
     * Deletes a coupon
     */
    Coupon.deleteCoupon = function (parameters, options) {
        return client_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "DELETE", options);
    };
    return Coupon;
}());
exports.Coupon = Coupon;
