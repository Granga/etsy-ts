"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopTranslation = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a ShopTranslation by shop_id and language
 */
function getShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ShopTranslation by shop_id and language
 */
function createShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ShopTranslation by shop_id and language
 */
function updateShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ShopTranslation by shop_id and language
 */
function deleteShopTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/translations/:language", parameters, "DELETE", options);
}
exports.ShopTranslation = {
    getShopTranslation,
    createShopTranslation,
    updateShopTranslation,
    deleteShopTranslation
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcFRyYW5zbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9TaG9wVHJhbnNsYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBOEdyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGtCQUFrQixDQUFVLFVBQXlDLEVBQUUsT0FBa0I7SUFDOUYsT0FBTyxnQkFBTyxDQUF5Qyx3Q0FBd0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMscUJBQXFCLENBQVUsVUFBNEMsRUFBRSxPQUFrQjtJQUNwRyxPQUFPLGdCQUFPLENBQTRDLHdDQUF3QyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxxQkFBcUIsQ0FBVSxVQUE0QyxFQUFFLE9BQWtCO0lBQ3BHLE9BQU8sZ0JBQU8sQ0FBNEMsd0NBQXdDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwSSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHFCQUFxQixDQUFVLFVBQTRDLEVBQUUsT0FBa0I7SUFDcEcsT0FBTyxnQkFBTyxDQUE0Qyx3Q0FBd0MsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZJLENBQUM7QUFFWSxRQUFBLGVBQWUsR0FBRztJQUMzQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7Q0FDeEIsQ0FBQyJ9