"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSectionTranslation = void 0;
var client_1 = require("../client/client");
//methods class
var ShopSectionTranslation = /** @class */ (function () {
    function ShopSectionTranslation() {
    }
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    ShopSectionTranslation.getShopSectionTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET", options);
    };
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    ShopSectionTranslation.createShopSectionTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST", options);
    };
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    ShopSectionTranslation.updateShopSectionTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT", options);
    };
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    ShopSectionTranslation.deleteShopSectionTranslation = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE", options);
    };
    return ShopSectionTranslation;
}());
exports.ShopSectionTranslation = ShopSectionTranslation;
