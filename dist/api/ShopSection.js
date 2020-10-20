"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSection = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of ShopSection objects associated to a Shop.
 */
function findAllShopSections(parameters, options) {
    return client_1.request("/shops/:shop_id/sections", parameters, "GET", options);
}
/**
 * Creates a new ShopSection.
 */
function createShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections", parameters, "POST", options);
}
/**
 * Retrieves a ShopSection by id and shop_id
 */
function getShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "GET", options);
}
/**
 * Updates a ShopSection with the given id.
 */
function updateShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT", options);
}
/**
 * Deletes the ShopSection with the given id.
 */
function deleteShopSection(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE", options);
}
exports.ShopSection = {
    findAllShopSections,
    createShopSection,
    getShopSection,
    updateShopSection,
    deleteShopSection
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcFNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1Nob3BTZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQW9EckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxtQkFBbUIsQ0FBVSxVQUEwQyxFQUFFLE9BQWtCO0lBQ2hHLE9BQU8sZ0JBQU8sQ0FBMEMsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGlCQUFpQixDQUFVLFVBQXdDLEVBQUUsT0FBa0I7SUFDNUYsT0FBTyxnQkFBTyxDQUF3QywwQkFBMEIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25ILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFVLFVBQXFDLEVBQUUsT0FBa0I7SUFDdEYsT0FBTyxnQkFBTyxDQUFxQywyQ0FBMkMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsaUJBQWlCLENBQVUsVUFBd0MsRUFBRSxPQUFrQjtJQUM1RixPQUFPLGdCQUFPLENBQXdDLDJDQUEyQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBVSxVQUF3QyxFQUFFLE9BQWtCO0lBQzVGLE9BQU8sZ0JBQU8sQ0FBd0MsMkNBQTJDLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0SSxDQUFDO0FBRVksUUFBQSxXQUFXLEdBQUc7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQixDQUFDIn0=