"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = void 0;
var client_1 = require("../client/client");
//methods class
var DataType = /** @class */ (function () {
    function DataType() {
    }
    /**
     * Describes the legal values for Listing.occasion.
     */
    DataType.describeOccasionEnum = function (parameters, options) {
        return client_1.request("/types/enum/occasion", parameters, "GET", options);
    };
    /**
     * Describes the legal values for Listing.recipient.
     */
    DataType.describeRecipientEnum = function (parameters, options) {
        return client_1.request("/types/enum/recipient", parameters, "GET", options);
    };
    /**
     * Describes the legal values for Listing.when_made.
     */
    DataType.describeWhenMadeEnum = function (parameters, options) {
        return client_1.request("/types/enum/when_made", parameters, "GET", options);
    };
    /**
     * Describes the legal values for Listing.who_made.
     */
    DataType.describeWhoMadeEnum = function (parameters, options) {
        return client_1.request("/types/enum/who_made", parameters, "GET", options);
    };
    return DataType;
}());
exports.DataType = DataType;
