"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopAbout = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a ShopAbout object associated to a Shop.
 */
function getShopAbout(parameters, options) {
    return client_1.request("/shops/:shop_id/about", parameters, "GET", options);
}
exports.ShopAbout = { getShopAbout };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcEFib3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9TaG9wQWJvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBeUNyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLFlBQVksQ0FBVSxVQUFtQyxFQUFFLE9BQWtCO0lBQ2xGLE9BQU8sZ0JBQU8sQ0FBbUMsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRyxDQUFDO0FBRVksUUFBQSxTQUFTLEdBQUcsRUFBQyxZQUFZLEVBQUMsQ0FBQyJ9