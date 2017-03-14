"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Describes the legal values for Listing.occasion.
 */
function describeOccasionEnum(parameters, options) {
    return client_1.request("/types/enum/occasion", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.recipient.
 */
function describeRecipientEnum(parameters, options) {
    return client_1.request("/types/enum/recipient", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.when_made.
 */
function describeWhenMadeEnum(parameters, options) {
    return client_1.request("/types/enum/when_made", parameters, "GET", options);
}
/**
 * Describes the legal values for Listing.who_made.
 */
function describeWhoMadeEnum(parameters, options) {
    return client_1.request("/types/enum/who_made", parameters, "GET", options);
}
exports.DataType = { describeOccasionEnum: describeOccasionEnum, describeRecipientEnum: describeRecipientEnum, describeWhenMadeEnum: describeWhenMadeEnum, describeWhoMadeEnum: describeWhoMadeEnum };
