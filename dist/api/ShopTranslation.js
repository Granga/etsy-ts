import { request } from "../client/client";
//methods class
export class ShopTranslation {
    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    static getShopTranslation(parameters, options) {
        return request("/shops/:shop_id/translations/:language", parameters, "GET", options);
    }
    /**
     * Creates a ShopTranslation by shop_id and language
     */
    static createShopTranslation(parameters, options) {
        return request("/shops/:shop_id/translations/:language", parameters, "POST", options);
    }
    /**
     * Updates a ShopTranslation by shop_id and language
     */
    static updateShopTranslation(parameters, options) {
        return request("/shops/:shop_id/translations/:language", parameters, "PUT", options);
    }
    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    static deleteShopTranslation(parameters, options) {
        return request("/shops/:shop_id/translations/:language", parameters, "DELETE", options);
    }
}
