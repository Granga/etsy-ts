"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Finds all Country.
 */
function findAllCountry(parameters, options) {
    return client_1.request("/countries", parameters, "GET", options);
}
/**
 * Retrieves a Country by id.
 */
function getCountry(parameters, options) {
    return client_1.request("/countries/:country_id", parameters, "GET", options);
}
/**
 * Get the country info for the given ISO code.
 */
function findByIsoCode(parameters, options) {
    return client_1.request("/countries/iso/:iso_code", parameters, "GET", options);
}
exports.Country = { findAllCountry: findAllCountry, getCountry: getCountry, findByIsoCode: findByIsoCode };
