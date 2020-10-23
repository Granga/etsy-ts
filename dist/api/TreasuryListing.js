import { request } from "../client/client";
//methods class
export class TreasuryListing {
    /**
     * Add listing to a Treasury
     */
    static addTreasuryListing(parameters, options) {
        return request("/treasuries/:treasury_key/listings", parameters, "POST", options);
    }
    /**
     * Remove listing from a Treasury
     */
    static removeTreasuryListing(parameters, options) {
        return request("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE", options);
    }
}
