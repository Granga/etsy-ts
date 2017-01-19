"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Describes the legal values for Listing.occasion.
*/
function describeOccasionEnum(parameters) {
    return HttpRequest_1.request(parameters, '/types/enum/occasion', 'GET');
}
exports.describeOccasionEnum = describeOccasionEnum;
/**
* Describes the legal values for Listing.recipient.
*/
function describeRecipientEnum(parameters) {
    return HttpRequest_1.request(parameters, '/types/enum/recipient', 'GET');
}
exports.describeRecipientEnum = describeRecipientEnum;
/**
* Describes the legal values for Listing.when_made.
*/
function describeWhenMadeEnum(parameters) {
    return HttpRequest_1.request(parameters, '/types/enum/when_made', 'GET');
}
exports.describeWhenMadeEnum = describeWhenMadeEnum;
/**
* Describes the legal values for Listing.who_made.
*/
function describeWhoMadeEnum(parameters) {
    return HttpRequest_1.request(parameters, '/types/enum/who_made', 'GET');
}
exports.describeWhoMadeEnum = describeWhoMadeEnum;
