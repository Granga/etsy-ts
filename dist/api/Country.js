"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var client_1 = require("../client/client");
//methods class
var Country = /** @class */ (function () {
    function Country() {
    }
    /**
     * Finds all Country.
     */
    Country.findAllCountry = function (parameters, options) {
        return client_1.request("/countries", parameters, "GET", options);
    };
    /**
     * Retrieves a Country by id.
     */
    Country.getCountry = function (parameters, options) {
        return client_1.request("/countries/:country_id", parameters, "GET", options);
    };
    /**
     * Get the country info for the given ISO code.
     */
    Country.findByIsoCode = function (parameters, options) {
        return client_1.request("/countries/iso/:iso_code", parameters, "GET", options);
    };
    return Country;
}());
exports.Country = Country;
