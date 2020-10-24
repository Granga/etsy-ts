"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillPayment = void 0;
var client_1 = require("../client/client");
//methods class
var BillPayment = /** @class */ (function () {
    function BillPayment() {
    }
    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    BillPayment.findAllUserPayments = function (parameters, options) {
        return client_1.request("/users/:user_id/payments", parameters, "GET", options);
    };
    return BillPayment;
}());
exports.BillPayment = BillPayment;
