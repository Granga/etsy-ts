"use strict";
class ShopTranslation {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    getShopTranslation(parameters) {
        return this.client.http("/shops/:shop_id/translations/:language", parameters, "GET");
    }
    /**
     * Creates a ShopTranslation by shop_id and language
     */
    createShopTranslation(parameters) {
        return this.client.http("/shops/:shop_id/translations/:language", parameters, "POST");
    }
    /**
     * Updates a ShopTranslation by shop_id and language
     */
    updateShopTranslation(parameters) {
        return this.client.http("/shops/:shop_id/translations/:language", parameters, "PUT");
    }
    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    deleteShopTranslation(parameters) {
        return this.client.http("/shops/:shop_id/translations/:language", parameters, "DELETE");
    }
}
exports.ShopTranslation = ShopTranslation;
