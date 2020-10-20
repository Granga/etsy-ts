"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingTemplate = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Creates a new ShippingTemplate
 */
function createShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates", parameters, "POST", options);
}
/**
 * Retrieves a ShippingTemplate by id.
 */
function getShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id", parameters, "GET", options);
}
/**
 * Updates a ShippingTemplate
 */
function updateShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id", parameters, "PUT", options);
}
/**
 * Deletes the ShippingTemplate with the given id.
 */
function deleteShippingTemplate(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id", parameters, "DELETE", options);
}
/**
 * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
 */
function findAllShippingTemplateEntries(parameters, options) {
    return client_1.request("/shipping/templates/:shipping_template_id/entries", parameters, "GET", options);
}
/**
 * Retrieves a set of ShippingTemplate objects associated to a User.
 */
function findAllUserShippingProfiles(parameters, options) {
    return client_1.request("/users/:user_id/shipping/templates", parameters, "GET", options);
}
exports.ShippingTemplate = {
    createShippingTemplate,
    getShippingTemplate,
    updateShippingTemplate,
    deleteShippingTemplate,
    findAllShippingTemplateEntries,
    findAllUserShippingProfiles
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpcHBpbmdUZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvU2hpcHBpbmdUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUF5RXJELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsc0JBQXNCLENBQVUsVUFBNkMsRUFBRSxPQUFrQjtJQUN0RyxPQUFPLGdCQUFPLENBQTZDLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkgsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsMkNBQTJDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNySSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHNCQUFzQixDQUFVLFVBQTZDLEVBQUUsT0FBa0I7SUFDdEcsT0FBTyxnQkFBTyxDQUE2QywyQ0FBMkMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsc0JBQXNCLENBQVUsVUFBNkMsRUFBRSxPQUFrQjtJQUN0RyxPQUFPLGdCQUFPLENBQTZDLDJDQUEyQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0ksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyw4QkFBOEIsQ0FBVSxVQUFxRCxFQUFFLE9BQWtCO0lBQ3RILE9BQU8sZ0JBQU8sQ0FBcUQsbURBQW1ELEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDJCQUEyQixDQUFVLFVBQWtELEVBQUUsT0FBa0I7SUFDaEgsT0FBTyxnQkFBTyxDQUFrRCxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RJLENBQUM7QUFFWSxRQUFBLGdCQUFnQixHQUFHO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0NBQzlCLENBQUMifQ==