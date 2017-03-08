"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Retrieves all Shop_Coupons by shop_id
*/
function findAllShopCoupons(parameters, options) {
    return client_1.request("/shops/:shop_id/coupons", parameters, "GET", options);
}
/**
* Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
*/
function createCoupon(parameters, options) {
    return client_1.request("/shops/:shop_id/coupons", parameters, "POST", options);
}
/**
* Retrieves a Shop_Coupon by id and shop_id
*/
function findCoupon(parameters, options) {
    return client_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "GET", options);
}
/**
* Updates a coupon
*/
function updateCoupon(parameters, options) {
    return client_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "PUT", options);
}
/**
* Deletes a coupon
*/
function deleteCoupon(parameters, options) {
    return client_1.request("/shops/:shop_id/coupons/:coupon_id", parameters, "DELETE", options);
}
exports.Coupon = { findAllShopCoupons: findAllShopCoupons, createCoupon: createCoupon, findCoupon: findCoupon, updateCoupon: updateCoupon, deleteCoupon: deleteCoupon };
