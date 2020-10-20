"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingTemplateEntry = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Creates a new ShippingTemplateEntry
 */
function createShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries", parameters, "POST", options);
}
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
function getShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET", options);
}
/**
 * Updates a ShippingTemplateEntry
 */
function updateShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT", options);
}
/**
 * Deletes the ShippingTemplateEntry
 */
function deleteShippingTemplateEntry(parameters, options) {
    return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE", options);
}
exports.ShippingTemplateEntry = {
    createShippingTemplateEntry,
    getShippingTemplateEntry,
    updateShippingTemplateEntry,
    deleteShippingTemplateEntry
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpcHBpbmdUZW1wbGF0ZUVudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9TaGlwcGluZ1RlbXBsYXRlRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBNkRyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLDJCQUEyQixDQUFVLFVBQWtELEVBQUUsT0FBa0I7SUFDaEgsT0FBTyxnQkFBTyxDQUFrRCw2QkFBNkIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsd0JBQXdCLENBQVUsVUFBK0MsRUFBRSxPQUFrQjtJQUMxRyxPQUFPLGdCQUFPLENBQStDLHlEQUF5RCxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEosQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUywyQkFBMkIsQ0FBVSxVQUFrRCxFQUFFLE9BQWtCO0lBQ2hILE9BQU8sZ0JBQU8sQ0FBa0QseURBQXlELEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDJCQUEyQixDQUFVLFVBQWtELEVBQUUsT0FBa0I7SUFDaEgsT0FBTyxnQkFBTyxDQUFrRCx5REFBeUQsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlKLENBQUM7QUFFWSxRQUFBLHFCQUFxQixHQUFHO0lBQ2pDLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtDQUM5QixDQUFDIn0=