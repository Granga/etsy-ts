"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingOverview = void 0;
var client_1 = require("../client/client");
//methods class
var BillingOverview = /** @class */ (function () {
    function BillingOverview() {
    }
    /**
     * Retrieves the user's current balance.
     */
    BillingOverview.getUserBillingOverview = function (parameters, options) {
        return client_1.request("/users/:user_id/billing/overview", parameters, "GET", options);
    };
    return BillingOverview;
}());
exports.BillingOverview = BillingOverview;
