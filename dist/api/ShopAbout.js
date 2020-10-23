import { request } from "../client/client";
//methods class
export class ShopAbout {
    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    static getShopAbout(parameters, options) {
        return request("/shops/:shop_id/about", parameters, "GET", options);
    }
}
