"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Metadata for the set of BillCharges objects associated to a User
*/
function getUserChargesMetadata(parameters, options) {
    return client_1.request("/users/:user_id/charges/meta", parameters, "GET", options);
}
/**
* Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
*/
function findAllUserCharges(parameters, options) {
    return client_1.request("/users/:user_id/charges", parameters, "GET", options);
}
exports.BillCharge = { getUserChargesMetadata: getUserChargesMetadata, findAllUserCharges: findAllUserCharges };
