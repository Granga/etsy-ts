"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Retrieves a set of BillPayment objects associated to a User.
*/
function findAllUserPayments(parameters, options) {
    return client_1.request("/users/:user_id/payments", parameters, "GET", options);
}
exports.BillPayment = { findAllUserPayments: findAllUserPayments };
