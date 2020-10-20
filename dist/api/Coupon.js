"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
const client_1 = require("../client/client");
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
exports.Coupon = { findAllShopCoupons, createCoupon, findCoupon, updateCoupon, deleteCoupon };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291cG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9Db3Vwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBa0ZyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGtCQUFrQixDQUFVLFVBQXlDLEVBQUUsT0FBa0I7SUFDOUYsT0FBTyxnQkFBTyxDQUF5Qyx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyx5QkFBeUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFVLFVBQWlDLEVBQUUsT0FBa0I7SUFDOUUsT0FBTyxnQkFBTyxDQUFpQyxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFILENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBRyxFQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBQyxDQUFDIn0=