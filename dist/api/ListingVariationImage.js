"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingVariationImage = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Gets all variation images on a listing
 */
function getVariationImages(parameters, options) {
    return client_1.request("/listings/:listing_id/variation-images", parameters, "GET", options);
}
/**
 * Creates variation images on a listing
 */
function updateVariationImages(parameters, options) {
    return client_1.request("/listings/:listing_id/variation-images", parameters, "POST", options);
}
exports.ListingVariationImage = { getVariationImages, updateVariationImages };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZ1ZhcmlhdGlvbkltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9MaXN0aW5nVmFyaWF0aW9uSW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBcUJyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGtCQUFrQixDQUFVLFVBQXlDLEVBQUUsT0FBa0I7SUFDOUYsT0FBTyxnQkFBTyxDQUF5Qyx3Q0FBd0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMscUJBQXFCLENBQVUsVUFBNEMsRUFBRSxPQUFrQjtJQUNwRyxPQUFPLGdCQUFPLENBQTRDLHdDQUF3QyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckksQ0FBQztBQUVZLFFBQUEscUJBQXFCLEdBQUcsRUFBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBQyxDQUFDIn0=