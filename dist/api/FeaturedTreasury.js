"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedTreasury = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Finds all FeaturedTreasuries.
 */
function findAllFeaturedTreasuries(parameters, options) {
    return client_1.request("/featured_treasuries", parameters, "GET", options);
}
/**
 * Finds FeaturedTreasury by numeric ID.
 */
function getFeaturedTreasuryById(parameters, options) {
    return client_1.request("/featured_treasuries/:featured_treasury_id", parameters, "GET", options);
}
/**
 * Finds all FeaturedTreasury by numeric owner_id.
 */
function findAllFeaturedTreasuriesByOwner(parameters, options) {
    return client_1.request("/featured_treasuries/owner/:owner_id", parameters, "GET", options);
}
exports.FeaturedTreasury = { findAllFeaturedTreasuries, getFeaturedTreasuryById, findAllFeaturedTreasuriesByOwner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZWRUcmVhc3VyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvRmVhdHVyZWRUcmVhc3VyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUFpRHJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMseUJBQXlCLENBQVUsVUFBZ0QsRUFBRSxPQUFrQjtJQUM1RyxPQUFPLGdCQUFPLENBQWdELHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyx1QkFBdUIsQ0FBVSxVQUE4QyxFQUFFLE9BQWtCO0lBQ3hHLE9BQU8sZ0JBQU8sQ0FBOEMsNENBQTRDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxSSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGdDQUFnQyxDQUFVLFVBQXVELEVBQUUsT0FBa0I7SUFDMUgsT0FBTyxnQkFBTyxDQUF1RCxzQ0FBc0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdJLENBQUM7QUFFWSxRQUFBLGdCQUFnQixHQUFHLEVBQUMseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUUsZ0NBQWdDLEVBQUMsQ0FBQyJ9