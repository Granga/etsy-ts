"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Finds all Country.
 */
function findAllCountry(parameters) {
    return httpClient_1.request("/countries", parameters, "GET");
}
exports.findAllCountry = findAllCountry;
/**
 * Retrieves a Country by id.
 */
function getCountry(parameters) {
    return httpClient_1.request("/countries/:country_id", parameters, "GET");
}
exports.getCountry = getCountry;
/**
 * Get the country info for the given ISO code.
 */
function findByIsoCode(parameters) {
    return httpClient_1.request("/countries/iso/:iso_code", parameters, "GET");
}
exports.findByIsoCode = findByIsoCode;
exports.Country = {findAllCountry: findAllCountry, getCountry: getCountry, findByIsoCode: findByIsoCode};
