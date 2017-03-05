"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Treasury {
    constructor(client) {
        this.client = client;
    }
    /**
     * Search Treasuries or else List all Treasuries
     */
    findAllTreasuries(parameters) {
        return this.client.http("/treasuries", parameters, "GET");
    }
    /**
     * Get a Treasury
     */
    getTreasury(parameters) {
        return this.client.http("/treasuries/:treasury_key", parameters, "GET");
    }
    /**
     * Delete a Treasury
     */
    deleteTreasury(parameters) {
        return this.client.http("/treasuries/:treasury_key", parameters, "DELETE");
    }
    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    findAllUserTreasuries(parameters) {
        return this.client.http("/users/:user_id/treasuries", parameters, "GET");
    }
}
exports.Treasury = Treasury;
