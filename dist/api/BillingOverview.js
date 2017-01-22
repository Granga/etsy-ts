"use strict";
class BillingOverview {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the user's current balance.
     */
    getUserBillingOverview(parameters) {
        return this.client.http("/users/:user_id/billing/overview", parameters, "GET");
    }
}
exports.BillingOverview = BillingOverview;
