"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTemplate = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves the PaymentTemplate associated with the Shop
 */
function findShopPaymentTemplates(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_templates", parameters, "GET", options);
}
/**
 * Creates a new PaymentTemplate
 */
function createShopPaymentTemplate(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_templates", parameters, "POST", options);
}
/**
 * Updates a PaymentTemplate
 */
function updateShopPaymentTemplate(parameters, options) {
    return client_1.request("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT", options);
}
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
function findAllUserPaymentTemplates(parameters, options) {
    return client_1.request("/users/:user_id/payments/templates", parameters, "GET", options);
}
exports.PaymentTemplate = {
    findShopPaymentTemplates,
    createShopPaymentTemplate,
    updateShopPaymentTemplate,
    findAllUserPaymentTemplates
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudFRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9QYXltZW50VGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBcUhyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLHdCQUF3QixDQUFVLFVBQStDLEVBQUUsT0FBa0I7SUFDMUcsT0FBTyxnQkFBTyxDQUErQyxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2xJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMseUJBQXlCLENBQVUsVUFBZ0QsRUFBRSxPQUFrQjtJQUM1RyxPQUFPLGdCQUFPLENBQWdELG1DQUFtQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyx5QkFBeUIsQ0FBVSxVQUFnRCxFQUFFLE9BQWtCO0lBQzVHLE9BQU8sZ0JBQU8sQ0FBZ0Qsd0RBQXdELEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDJCQUEyQixDQUFVLFVBQWtELEVBQUUsT0FBa0I7SUFDaEgsT0FBTyxnQkFBTyxDQUFrRCxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RJLENBQUM7QUFFWSxRQUFBLGVBQWUsR0FBRztJQUMzQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiwyQkFBMkI7Q0FDOUIsQ0FBQyJ9