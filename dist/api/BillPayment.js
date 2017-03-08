"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a set of BillPayment objects associated to a User.
 */
function findAllUserPayments(parameters) {
    return httpClient_1.request("/users/:user_id/payments", parameters, "GET");
}
exports.findAllUserPayments = findAllUserPayments;
exports.BillPayment = {findAllUserPayments: findAllUserPayments};
