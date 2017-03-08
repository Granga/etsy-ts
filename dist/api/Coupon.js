"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves all Shop_Coupons by shop_id
 */
function findAllShopCoupons(parameters) {
    return httpClient_1.request("/shops/:shop_id/coupons", parameters, "GET");
}
exports.findAllShopCoupons = findAllShopCoupons;
/**
 * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
 */
function createCoupon(parameters) {
    return httpClient_1.request("/shops/:shop_id/coupons", parameters, "POST");
}
exports.createCoupon = createCoupon;
/**
 * Retrieves a Shop_Coupon by id and shop_id
 */
function findCoupon(parameters) {
    return httpClient_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "GET");
}
exports.findCoupon = findCoupon;
/**
 * Updates a coupon
 */
function updateCoupon(parameters) {
    return httpClient_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "PUT");
}
exports.updateCoupon = updateCoupon;
/**
 * Deletes a coupon
 */
function deleteCoupon(parameters) {
    return httpClient_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "DELETE");
}
exports.deleteCoupon = deleteCoupon;
exports.Coupon = {
    findAllShopCoupons: findAllShopCoupons,
    createCoupon: createCoupon,
    findCoupon: findCoupon,
    updateCoupon: updateCoupon,
    deleteCoupon: deleteCoupon
};
