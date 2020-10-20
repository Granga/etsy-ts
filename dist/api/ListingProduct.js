"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingProduct = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a specific offering for a listing
 */
function getProduct(parameters, options) {
    return client_1.request("/listings/:listing_id/products/:product_id", parameters, "GET", options);
}
exports.ListingProduct = { getProduct };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZ1Byb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL0xpc3RpbmdQcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQWtDckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQVUsVUFBaUMsRUFBRSxPQUFrQjtJQUM5RSxPQUFPLGdCQUFPLENBQWlDLDRDQUE0QyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0gsQ0FBQztBQUVZLFFBQUEsY0FBYyxHQUFHLEVBQUMsVUFBVSxFQUFDLENBQUMifQ==