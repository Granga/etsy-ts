"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Retrieves the user's current balance.
*/
function getUserBillingOverview(parameters, options) {
    return client_1.request("/users/:user_id/billing/overview", parameters, "GET", options);
}
exports.BillingOverview = { getUserBillingOverview: getUserBillingOverview };
