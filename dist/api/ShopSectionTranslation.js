"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSectionTranslation = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function getShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "GET", options);
}
/**
 * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function createShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "POST", options);
}
/**
 * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function updateShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "PUT", options);
}
/**
 * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
 */
function deleteShopSectionTranslation(parameters, options) {
    return client_1.request("/shops/:shop_id/sections/:shop_section_id/translations/:language", parameters, "DELETE", options);
}
exports.ShopSectionTranslation = {
    getShopSectionTranslation,
    createShopSectionTranslation,
    updateShopSectionTranslation,
    deleteShopSectionTranslation
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcFNlY3Rpb25UcmFuc2xhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvU2hvcFNlY3Rpb25UcmFuc2xhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUE0Q3JELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMseUJBQXlCLENBQVUsVUFBZ0QsRUFBRSxPQUFrQjtJQUM1RyxPQUFPLGdCQUFPLENBQWdELGtFQUFrRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEssQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyw0QkFBNEIsQ0FBVSxVQUFtRCxFQUFFLE9BQWtCO0lBQ2xILE9BQU8sZ0JBQU8sQ0FBbUQsa0VBQWtFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0SyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDRCQUE0QixDQUFVLFVBQW1ELEVBQUUsT0FBa0I7SUFDbEgsT0FBTyxnQkFBTyxDQUFtRCxrRUFBa0UsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JLLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsNEJBQTRCLENBQVUsVUFBbUQsRUFBRSxPQUFrQjtJQUNsSCxPQUFPLGdCQUFPLENBQW1ELGtFQUFrRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEssQ0FBQztBQUVZLFFBQUEsc0JBQXNCLEdBQUc7SUFDbEMseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0NBQy9CLENBQUMifQ==