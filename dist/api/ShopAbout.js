"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a ShopAbout object associated to a Shop.
 */
function getShopAbout(parameters) {
    return httpClient_1.request("/shops/:shop_id/about", parameters, "GET");
}
exports.getShopAbout = getShopAbout;
exports.ShopAbout = {getShopAbout: getShopAbout};
