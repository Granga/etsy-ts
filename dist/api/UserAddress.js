"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of UserAddress objects associated to a User.
 */
function findAllUserAddresses(parameters, options) {
    return client_1.request("/users/:user_id/addresses", parameters, "GET", options);
}
/**
 * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
 */
function createUserAddress(parameters, options) {
    return client_1.request("/users/:user_id/addresses/", parameters, "POST", options);
}
/**
 * Retrieves a UserAddress by id.
 */
function getUserAddress(parameters, options) {
    return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "GET", options);
}
/**
 * Deletes the UserAddress with the given id.
 */
function deleteUserAddress(parameters, options) {
    return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "DELETE", options);
}
exports.UserAddress = { findAllUserAddresses, createUserAddress, getUserAddress, deleteUserAddress };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckFkZHJlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1VzZXJBZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQTRFckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBVSxVQUEyQyxFQUFFLE9BQWtCO0lBQ2xHLE9BQU8sZ0JBQU8sQ0FBMkMsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0SCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGlCQUFpQixDQUFVLFVBQXdDLEVBQUUsT0FBa0I7SUFDNUYsT0FBTyxnQkFBTyxDQUF3Qyw0QkFBNEIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFVLFVBQXFDLEVBQUUsT0FBa0I7SUFDdEYsT0FBTyxnQkFBTyxDQUFxQyw0Q0FBNEMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsaUJBQWlCLENBQVUsVUFBd0MsRUFBRSxPQUFrQjtJQUM1RixPQUFPLGdCQUFPLENBQXdDLDRDQUE0QyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkksQ0FBQztBQUVZLFFBQUEsV0FBVyxHQUFHLEVBQUMsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFDLENBQUMifQ==