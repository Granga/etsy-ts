import { request } from "../client/client";
//methods class
export class ShopSectionTranslation {
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static getShopSectionTranslation(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET", options);
    }
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static createShopSectionTranslation(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST", options);
    }
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static updateShopSectionTranslation(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT", options);
    }
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    static deleteShopSectionTranslation(parameters, options) {
        return request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE", options);
    }
}
