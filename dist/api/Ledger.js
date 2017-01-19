"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get a Shop Payment Account Ledger
*/
function findLedger(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/ledger/', 'GET');
}
exports.findLedger = findLedger;
