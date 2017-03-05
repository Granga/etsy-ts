"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shop {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
     */
    findAllShops(parameters) {
        return this.client.http("/shops", parameters, "GET");
    }
    /**
     * Retrieves a Shop by id.
     */
    getShop(parameters) {
        return this.client.http("/shops/:shop_id", parameters, "GET");
    }
    /**
     * Updates a Shop
     */
    updateShop(parameters) {
        return this.client.http("/shops/:shop_id", parameters, "PUT");
    }
    /**
     * Upload a new shop banner image
     */
    uploadShopBanner(parameters) {
        return this.client.http("/shops/:shop_id/appearance/banner", parameters, "POST");
    }
    /**
     * Deletes a shop banner image
     */
    deleteShopBanner(parameters) {
        return this.client.http("/shops/:shop_id/appearance/banner", parameters, "DELETE");
    }
    /**
     * Retrieves a shop by a listing id.
     */
    getListingShop(parameters) {
        return this.client.http("/shops/listing/:listing_id", parameters, "GET");
    }
    /**
     * Retrieves a set of Shop objects associated to a User.
     */
    findAllUserShops(parameters) {
        return this.client.http("/users/:user_id/shops", parameters, "GET");
    }
}
exports.Shop = Shop;
