"use strict";
class UserAddress {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    findAllUserAddresses(parameters) {
        return this.client.http("/users/:user_id/addresses", parameters, "GET");
    }
    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    createUserAddress(parameters) {
        return this.client.http("/users/:user_id/addresses/", parameters, "POST");
    }
    /**
     * Retrieves a UserAddress by id.
     */
    getUserAddress(parameters) {
        return this.client.http("/users/:user_id/addresses/:user_address_id", parameters, "GET");
    }
    /**
     * Deletes the UserAddress with the given id.
     */
    deleteUserAddress(parameters) {
        return this.client.http("/users/:user_id/addresses/:user_address_id", parameters, "DELETE");
    }
}
exports.UserAddress = UserAddress;
