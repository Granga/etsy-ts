"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShopSection {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    findAllShopSections(parameters) {
        return this.client.http("/shops/:shop_id/sections", parameters, "GET");
    }
    /**
     * Creates a new ShopSection.
     */
    createShopSection(parameters) {
        return this.client.http("/shops/:shop_id/sections", parameters, "POST");
    }
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    getShopSection(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id", parameters, "GET");
    }
    /**
     * Updates a ShopSection with the given id.
     */
    updateShopSection(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT");
    }
    /**
     * Deletes the ShopSection with the given id.
     */
    deleteShopSection(parameters) {
        return this.client.http("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE");
    }
}
exports.ShopSection = ShopSection;
