"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingOffering = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a specific offering for a listing
 */
function getOffering(parameters, options) {
    return client_1.request("/listings/:listing_id/products/:product_id/offerings/:offering_id", parameters, "GET", options);
}
exports.ListingOffering = { getOffering };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZ09mZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9MaXN0aW5nT2ZmZXJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBbUNyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLFdBQVcsQ0FBVSxVQUFrQyxFQUFFLE9BQWtCO0lBQ2hGLE9BQU8sZ0JBQU8sQ0FBa0MsbUVBQW1FLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNySixDQUFDO0FBRVksUUFBQSxlQUFlLEdBQUcsRUFBQyxXQUFXLEVBQUMsQ0FBQyJ9