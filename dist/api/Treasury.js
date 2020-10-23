import { request } from "../client/client";
//methods class
export class Treasury {
    /**
     * Search Treasuries or else List all Treasuries
     */
    static findAllTreasuries(parameters, options) {
        return request("/treasuries", parameters, "GET", options);
    }
    /**
     * Get a Treasury
     */
    static getTreasury(parameters, options) {
        return request("/treasuries/:treasury_key", parameters, "GET", options);
    }
    /**
     * Delete a Treasury
     */
    static deleteTreasury(parameters, options) {
        return request("/treasuries/:treasury_key", parameters, "DELETE", options);
    }
    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    static findAllUserTreasuries(parameters, options) {
        return request("/users/:user_id/treasuries", parameters, "GET", options);
    }
}
