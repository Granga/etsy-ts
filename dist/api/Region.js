"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Finds all Region.
 */
function findAllRegion(parameters, options) {
    return client_1.request("/regions", parameters, "GET", options);
}
/**
 * Retrieves a Region by id.
 */
function getRegion(parameters, options) {
    return client_1.request("/regions/:region_id", parameters, "GET", options);
}
/**
 *
 */
function findEligibleRegions(parameters, options) {
    return client_1.request("/regions/eligible", parameters, "GET", options);
}
exports.Region = { findAllRegion, getRegion, findEligibleRegions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9SZWdpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBK0JyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGFBQWEsQ0FBVSxVQUFvQyxFQUFFLE9BQWtCO0lBQ3BGLE9BQU8sZ0JBQU8sQ0FBb0MsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUYsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxTQUFTLENBQVUsVUFBZ0MsRUFBRSxPQUFrQjtJQUM1RSxPQUFPLGdCQUFPLENBQWdDLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckcsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3RyxDQUFDO0FBRVksUUFBQSxNQUFNLEdBQUcsRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFDLENBQUMifQ==