"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Guest {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a guest by ID.
     */
    getGuest(parameters) {
        return this.client.http("/guests/:guest_id", parameters, "GET");
    }
    /**
     * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
     */
    generateGuest(parameters) {
        return this.client.http("/guests/generator", parameters, "GET");
    }
    /**
     * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
     */
    claimGuest(parameters) {
        return this.client.http("/guests/:guest_id/claim", parameters, "POST");
    }
    /**
     * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
     */
    mergeGuest(parameters) {
        return this.client.http("/guests/:guest_id/merge", parameters, "POST");
    }
}
exports.Guest = Guest;
