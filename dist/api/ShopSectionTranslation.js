"use strict";
class ShopSectionTranslation {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    getShopSectionTranslation(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET");
    }
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    createShopSectionTranslation(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST");
    }
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    updateShopSectionTranslation(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT");
    }
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    deleteShopSectionTranslation(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE");
    }
}
exports.ShopSectionTranslation = ShopSectionTranslation;
