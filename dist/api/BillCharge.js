"use strict";
class BillCharge {
    constructor(client) {
        this.client = client;
    }
    /**
     * Metadata for the set of BillCharges objects associated to a User
     */
    getUserChargesMetadata(parameters) {
        return this.client.http("/users/:user_id/charges/meta", parameters, "GET");
    }
    /**
     * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
     */
    findAllUserCharges(parameters) {
        return this.client.http("/users/:user_id/charges", parameters, "GET");
    }
}
exports.BillCharge = BillCharge;
