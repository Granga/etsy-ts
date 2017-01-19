"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieves all Shop_Coupons by shop_id
*/
function findAllShopCoupons(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/coupons', 'GET');
}
exports.findAllShopCoupons = findAllShopCoupons;
/**
* Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
*/
function createCoupon(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/coupons', 'POST');
}
exports.createCoupon = createCoupon;
/**
* Retrieves a Shop_Coupon by id and shop_id
*/
function findCoupon(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/coupons/:coupon_id', 'GET');
}
exports.findCoupon = findCoupon;
/**
* Updates a coupon
*/
function updateCoupon(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/coupons/:coupon_id', 'PUT');
}
exports.updateCoupon = updateCoupon;
/**
* Deletes a coupon
*/
function deleteCoupon(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/coupons/:coupon_id', 'DELETE');
}
exports.deleteCoupon = deleteCoupon;
