"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treasury = void 0;
var client_1 = require("../client/client");
//methods class
var Treasury = /** @class */ (function () {
    function Treasury() {
    }
    /**
     * Search Treasuries or else List all Treasuries
     */
    Treasury.findAllTreasuries = function (parameters, options) {
        return client_1.request("/treasuries", parameters, "GET", options);
    };
    /**
     * Get a Treasury
     */
    Treasury.getTreasury = function (parameters, options) {
        return client_1.request("/treasuries/:treasury_key", parameters, "GET", options);
    };
    /**
     * Delete a Treasury
     */
    Treasury.deleteTreasury = function (parameters, options) {
        return client_1.request("/treasuries/:treasury_key", parameters, "DELETE", options);
    };
    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    Treasury.findAllUserTreasuries = function (parameters, options) {
        return client_1.request("/users/:user_id/treasuries", parameters, "GET", options);
    };
    return Treasury;
}());
exports.Treasury = Treasury;
