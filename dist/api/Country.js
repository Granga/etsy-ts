"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Finds all Country.
*/
function findAllCountry(parameters) {
    return HttpRequest_1.request(parameters, '/countries', 'GET');
}
exports.findAllCountry = findAllCountry;
/**
* Retrieves a Country by id.
*/
function getCountry(parameters) {
    return HttpRequest_1.request(parameters, '/countries/:country_id', 'GET');
}
exports.getCountry = getCountry;
/**
* Get the country info for the given ISO code.
*/
function findByIsoCode(parameters) {
    return HttpRequest_1.request(parameters, '/countries/iso/:iso_code', 'GET');
}
exports.findByIsoCode = findByIsoCode;
