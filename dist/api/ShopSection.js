"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSection = void 0;
var client_1 = require("../client/client");
//methods class
var ShopSection = /** @class */ (function () {
    function ShopSection() {
    }
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    ShopSection.findAllShopSections = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections", parameters, "GET", options);
    };
    /**
     * Creates a new ShopSection.
     */
    ShopSection.createShopSection = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections", parameters, "POST", options);
    };
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    ShopSection.getShopSection = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "GET", options);
    };
    /**
     * Updates a ShopSection with the given id.
     */
    ShopSection.updateShopSection = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT", options);
    };
    /**
     * Deletes the ShopSection with the given id.
     */
    ShopSection.deleteShopSection = function (parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE", options);
    };
    return ShopSection;
}());
exports.ShopSection = ShopSection;
