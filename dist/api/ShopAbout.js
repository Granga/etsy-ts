"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a ShopAbout object associated to a Shop.
 */
function getShopAbout(parameters, options) {
    return client_1.request("/shops/:shop_id/about", parameters, "GET", options);
}
exports.ShopAbout = { getShopAbout: getShopAbout };
