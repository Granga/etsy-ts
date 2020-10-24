"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopTranslation = void 0;
var client_1 = require("../client/client");
//methods class
var ShopTranslation = /** @class */ (function () {
    function ShopTranslation() {
    }
    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    ShopTranslation.getShopTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "GET", options);
    };
    /**
     * Creates a ShopTranslation by shop_id and language
     */
    ShopTranslation.createShopTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "POST", options);
    };
    /**
     * Updates a ShopTranslation by shop_id and language
     */
    ShopTranslation.updateShopTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "PUT", options);
    };
    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    ShopTranslation.deleteShopTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "DELETE", options);
    };
    return ShopTranslation;
}());
exports.ShopTranslation = ShopTranslation;
