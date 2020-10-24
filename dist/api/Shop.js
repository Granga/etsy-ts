"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var client_1 = require("../client/client");
//methods class
var Shop = /** @class */ (function () {
    function Shop() {
    }
    /**
     * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
     */
    Shop.findAllShops = function (parameters, options) {
        return client_1.request("/shops", parameters, "GET", options);
    };
    /**
     * Retrieves a Shop by id.
     */
    Shop.getShop = function (parameters, options) {
        return client_1.request("/shops/:shop_id", parameters, "GET", options);
    };
    /**
     * Updates a Shop
     */
    Shop.updateShop = function (parameters, options) {
        return client_1.request("/shops/:shop_id", parameters, "PUT", options);
    };
    /**
     * Upload a new shop banner image
     */
    Shop.uploadShopBanner = function (parameters, options) {
        return client_1.request("/shops/:shop_id/appearance/banner", parameters, "POST", options);
    };
    /**
     * Deletes a shop banner image
     */
    Shop.deleteShopBanner = function (parameters, options) {
        return client_1.request("/shops/:shop_id/appearance/banner", parameters, "DELETE", options);
    };
    /**
     * Retrieves a shop by a listing id.
     */
    Shop.getListingShop = function (parameters, options) {
        return client_1.request("/shops/listing/:listing_id", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Shop objects associated to a User.
     */
    Shop.findAllUserShops = function (parameters, options) {
        return client_1.request("/users/:user_id/shops", parameters, "GET", options);
    };
    return Shop;
}());
exports.Shop = Shop;
