"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a ShopAbout object associated to a Shop.
 */
function getShopAbout(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/about', 'GET');
}
exports.getShopAbout = getShopAbout;
