"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopAbout = void 0;
var client_1 = require("../client/client");
//methods class
var ShopAbout = /** @class */ (function () {
    function ShopAbout() {
    }
    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    ShopAbout.getShopAbout = function (parameters, options) {
        return client_1.request("/shops/:shop_id/about", parameters, "GET", options);
    };
    return ShopAbout;
}());
exports.ShopAbout = ShopAbout;
