import { request } from "../client/client";
//methods class
export class Country {
    /**
     * Finds all Country.
     */
    static findAllCountry(parameters, options) {
        return request("/countries", parameters, "GET", options);
    }
    /**
     * Retrieves a Country by id.
     */
    static getCountry(parameters, options) {
        return request("/countries/:country_id", parameters, "GET", options);
    }
    /**
     * Get the country info for the given ISO code.
     */
    static findByIsoCode(parameters, options) {
        return request("/countries/iso/:iso_code", parameters, "GET", options);
    }
}
