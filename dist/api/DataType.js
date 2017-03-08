"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Describes the legal values for Listing.occasion.
 */
function describeOccasionEnum(parameters) {
    return httpClient_1.request("/types/enum/occasion", parameters, "GET");
}
exports.describeOccasionEnum = describeOccasionEnum;
/**
 * Describes the legal values for Listing.recipient.
 */
function describeRecipientEnum(parameters) {
    return httpClient_1.request("/types/enum/recipient", parameters, "GET");
}
exports.describeRecipientEnum = describeRecipientEnum;
/**
 * Describes the legal values for Listing.when_made.
 */
function describeWhenMadeEnum(parameters) {
    return httpClient_1.request("/types/enum/when_made", parameters, "GET");
}
exports.describeWhenMadeEnum = describeWhenMadeEnum;
/**
 * Describes the legal values for Listing.who_made.
 */
function describeWhoMadeEnum(parameters) {
    return httpClient_1.request("/types/enum/who_made", parameters, "GET");
}
exports.describeWhoMadeEnum = describeWhoMadeEnum;
exports.DataType = {
    describeOccasionEnum: describeOccasionEnum,
    describeRecipientEnum: describeRecipientEnum,
    describeWhenMadeEnum: describeWhenMadeEnum,
    describeWhoMadeEnum: describeWhoMadeEnum
};
