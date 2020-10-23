import { request } from "../client/client";
//methods class
export class ShopSection {
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    static findAllShopSections(parameters, options) {
        return request("/shops/:shop_id/sections", parameters, "GET", options);
    }
    /**
     * Creates a new ShopSection.
     */
    static createShopSection(parameters, options) {
        return request("/shops/:shop_id/sections", parameters, "POST", options);
    }
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    static getShopSection(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id", parameters, "GET", options);
    }
    /**
     * Updates a ShopSection with the given id.
     */
    static updateShopSection(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT", options);
    }
    /**
     * Deletes the ShopSection with the given id.
     */
    static deleteShopSection(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE", options);
    }
}
