"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves the user's current balance.
 */
function getUserBillingOverview(parameters) {
    return httpClient_1.request("/users/:user_id/billing/overview", parameters, "GET");
}
exports.getUserBillingOverview = getUserBillingOverview;
exports.BillingOverview = {getUserBillingOverview: getUserBillingOverview};
