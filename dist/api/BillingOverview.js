"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves the user's current balance.
 */
function getUserBillingOverview(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/billing/overview', 'GET');
}
exports.getUserBillingOverview = getUserBillingOverview;
