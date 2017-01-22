"use strict";
class ShopAbout {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    getShopAbout(parameters) {
        return this.client.http("/shops/:shop_id/about", parameters, "GET");
    }
}
exports.ShopAbout = ShopAbout;
