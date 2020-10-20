"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxonomy = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieve the entire taxonomy as seen by buyers in search.
 */
function getBuyerTaxonomy(parameters, options) {
    return client_1.request("/taxonomy/buyer/get", parameters, "GET", options);
}
/**
 * Retrieve the entire taxonomy as used by sellers in the listing process.
 */
function getSellerTaxonomy(parameters, options) {
    return client_1.request("/taxonomy/seller/get", parameters, "GET", options);
}
/**
 * Get the current version of the seller taxonomy
 */
function getSellerTaxonomyVersion(parameters, options) {
    return client_1.request("/taxonomy/seller/version", parameters, "GET", options);
}
exports.Taxonomy = { getBuyerTaxonomy, getSellerTaxonomy, getSellerTaxonomyVersion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGF4b25vbXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1RheG9ub215LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQTJEckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxnQkFBZ0IsQ0FBVSxVQUF1QyxFQUFFLE9BQWtCO0lBQzFGLE9BQU8sZ0JBQU8sQ0FBdUMscUJBQXFCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1RyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGlCQUFpQixDQUFVLFVBQXdDLEVBQUUsT0FBa0I7SUFDNUYsT0FBTyxnQkFBTyxDQUF3QyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlHLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsd0JBQXdCLENBQVUsVUFBK0MsRUFBRSxPQUFrQjtJQUMxRyxPQUFPLGdCQUFPLENBQStDLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekgsQ0FBQztBQUVZLFFBQUEsUUFBUSxHQUFHLEVBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQyJ9