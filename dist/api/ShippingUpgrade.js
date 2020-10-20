"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingUpgrade = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get the shipping upgrades available for a listing.
 */
function getListingShippingUpgrades(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "GET", options);
}
/**
 * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function createListingShippingUpgrade(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "POST", options);
}
/**
 * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function updateListingShippingUpgrade(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "PUT", options);
}
/**
 * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
 */
function deleteListingShippingUpgrade(parameters, options) {
    return client_1.request("/listings/:listing_id/shipping/upgrades", parameters, "DELETE", options);
}
/**
 * Retrieves a list of shipping upgrades for the parent ShippingTemplate
 */
function findAllShippingTemplateUpgrades(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "GET", options);
}
/**
 * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function createShippingTemplateUpgrade(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "POST", options);
}
/**
 * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function updateShippingTemplateUpgrade(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "PUT", options);
}
/**
 * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
 */
function deleteShippingTemplateUpgrade(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/upgrades", parameters, "DELETE", options);
}
exports.ShippingUpgrade = {
    getListingShippingUpgrades,
    createListingShippingUpgrade,
    updateListingShippingUpgrade,
    deleteListingShippingUpgrade,
    findAllShippingTemplateUpgrades,
    createShippingTemplateUpgrade,
    updateShippingTemplateUpgrade,
    deleteShippingTemplateUpgrade
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpcHBpbmdVcGdyYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9TaGlwcGluZ1VwZ3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBMEZyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLDBCQUEwQixDQUFVLFVBQWlELEVBQUUsT0FBa0I7SUFDOUcsT0FBTyxnQkFBTyxDQUFpRCx5Q0FBeUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsNEJBQTRCLENBQVUsVUFBbUQsRUFBRSxPQUFrQjtJQUNsSCxPQUFPLGdCQUFPLENBQW1ELHlDQUF5QyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0ksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyw0QkFBNEIsQ0FBVSxVQUFtRCxFQUFFLE9BQWtCO0lBQ2xILE9BQU8sZ0JBQU8sQ0FBbUQseUNBQXlDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1SSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDRCQUE0QixDQUFVLFVBQW1ELEVBQUUsT0FBa0I7SUFDbEgsT0FBTyxnQkFBTyxDQUFtRCx5Q0FBeUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9JLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsK0JBQStCLENBQVUsVUFBc0QsRUFBRSxPQUFrQjtJQUN4SCxPQUFPLGdCQUFPLENBQXNELG9EQUFvRCxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUosQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyw2QkFBNkIsQ0FBVSxVQUFvRCxFQUFFLE9BQWtCO0lBQ3BILE9BQU8sZ0JBQU8sQ0FBb0Qsb0RBQW9ELEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDZCQUE2QixDQUFVLFVBQW9ELEVBQUUsT0FBa0I7SUFDcEgsT0FBTyxnQkFBTyxDQUFvRCxvREFBb0QsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsNkJBQTZCLENBQVUsVUFBb0QsRUFBRSxPQUFrQjtJQUNwSCxPQUFPLGdCQUFPLENBQW9ELG9EQUFvRCxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0osQ0FBQztBQUVZLFFBQUEsZUFBZSxHQUFHO0lBQzNCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7Q0FDaEMsQ0FBQyJ9