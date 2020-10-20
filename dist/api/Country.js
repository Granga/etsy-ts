"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const client_1 = require("../client/client");
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
exports.Country = { findAllCountry, getCountry, findByIsoCode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvQ291bnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUFrRHJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFVLFVBQXFDLEVBQUUsT0FBa0I7SUFDdEYsT0FBTyxnQkFBTyxDQUFxQyxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBVSxVQUFpQyxFQUFFLE9BQWtCO0lBQzlFLE9BQU8sZ0JBQU8sQ0FBaUMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGFBQWEsQ0FBVSxVQUFvQyxFQUFFLE9BQWtCO0lBQ3BGLE9BQU8sZ0JBQU8sQ0FBb0MsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RyxDQUFDO0FBRVksUUFBQSxPQUFPLEdBQUcsRUFBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBQyxDQUFDIn0=