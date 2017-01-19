"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Metadata for the set of BillCharges objects associated to a User
*/
function getUserChargesMetadata(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/charges/meta', 'GET');
}
exports.getUserChargesMetadata = getUserChargesMetadata;
/**
* Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
*/
function findAllUserCharges(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/charges', 'GET');
}
exports.findAllUserCharges = findAllUserCharges;
