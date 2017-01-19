"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Retrieves a set of BillPayment objects associated to a User.
*/
function findAllUserPayments(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/payments', 'GET');
}
exports.findAllUserPayments = findAllUserPayments;
