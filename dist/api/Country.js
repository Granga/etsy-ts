"use strict";
class Country {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all Country.
     */
    findAllCountry(parameters) {
        return this.client.http("/countries", parameters, "GET");
    }
    /**
     * Retrieves a Country by id.
     */
    getCountry(parameters) {
        return this.client.http("/countries/:country_id", parameters, "GET");
    }
    /**
     * Get the country info for the given ISO code.
     */
    findByIsoCode(parameters) {
        return this.client.http("/countries/iso/:iso_code", parameters, "GET");
    }
}
exports.Country = Country;
