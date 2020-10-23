"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillCharge = void 0;
var client_1 = require("../client/client");
//methods class
var BillCharge = /** @class */ (function () {
    function BillCharge() {
    }
    /**
     * Metadata for the set of BillCharges objects associated to a User
     */
    BillCharge.getUserChargesMetadata = function (parameters, options) {
        return client_1.request("/users/:user_id/charges/meta", parameters, "GET", options);
    };
    /**
     * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
     */
    BillCharge.findAllUserCharges = function (parameters, options) {
        return client_1.request("/users/:user_id/charges", parameters, "GET", options);
    };
    return BillCharge;
}());
exports.BillCharge = BillCharge;
