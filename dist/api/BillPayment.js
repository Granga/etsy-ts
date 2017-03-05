"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BillPayment {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    findAllUserPayments(parameters) {
        return this.client.http("/users/:user_id/payments", parameters, "GET");
    }
}
exports.BillPayment = BillPayment;
