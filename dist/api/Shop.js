import { request } from "../client/client";
//methods class
export class Shop {
    /**
     * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
     */
    static findAllShops(parameters, options) {
        return request("/shops", parameters, "GET", options);
    }
    /**
     * Retrieves a Shop by id.
     */
    static getShop(parameters, options) {
        return request("/shops/:shop_id", parameters, "GET", options);
    }
    /**
     * Updates a Shop
     */
    static updateShop(parameters, options) {
        return request("/shops/:shop_id", parameters, "PUT", options);
    }
    /**
     * Upload a new shop banner image
     */
    static uploadShopBanner(parameters, options) {
        return request("/shops/:shop_id/appearance/banner", parameters, "POST", options);
    }
    /**
     * Deletes a shop banner image
     */
    static deleteShopBanner(parameters, options) {
        return request("/shops/:shop_id/appearance/banner", parameters, "DELETE", options);
    }
    /**
     * Retrieves a shop by a listing id.
     */
    static getListingShop(parameters, options) {
        return request("/shops/listing/:listing_id", parameters, "GET", options);
    }
    /**
     * Retrieves a set of Shop objects associated to a User.
     */
    static findAllUserShops(parameters, options) {
        return request("/users/:user_id/shops", parameters, "GET", options);
    }
}
