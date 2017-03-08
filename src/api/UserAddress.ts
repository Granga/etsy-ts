import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IUserAddress {
    user_address_id: number,
    user_id: number,
    name: string,
    first_line: string,
    second_line: string,
    city: string,
    state: string,
    zip: string,
    country_id: number,
    country_name: string,
    is_default_shipping: boolean
}

//parameters types

export interface IFindAllUserAddressesParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface ICreateUserAddressParameters extends IStandardParameters {
    user_id: string | number,
    name: string,
    first_line: string,
    second_line?: string,
    city: string,
    state?: string,
    zip: string,
    country_id: number
}
export interface IGetUserAddressParameters extends IStandardParameters {
    user_address_id: number[]
}
export interface IDeleteUserAddressParameters extends IStandardParameters {
    user_address_id: number
}

//methods

/**
 * Retrieves a set of UserAddress objects associated to a User.
 */
export function findAllUserAddresses <TResult>(parameters: IFindAllUserAddressesParameters): Promise<IStandardResponse<IFindAllUserAddressesParameters, TResult>> {
    return request<IFindAllUserAddressesParameters, TResult>("/users/:user_id/addresses", parameters, "GET");
}
/**
 * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
 */
export function createUserAddress <TResult>(parameters: ICreateUserAddressParameters): Promise<IStandardResponse<ICreateUserAddressParameters, TResult>> {
    return request<ICreateUserAddressParameters, TResult>("/users/:user_id/addresses/", parameters, "POST");
}
/**
 * Retrieves a UserAddress by id.
 */
export function getUserAddress <TResult>(parameters: IGetUserAddressParameters): Promise<IStandardResponse<IGetUserAddressParameters, TResult>> {
    return request<IGetUserAddressParameters, TResult>("/users/:user_id/addresses/:user_address_id", parameters, "GET");
}
/**
 * Deletes the UserAddress with the given id.
 */
export function deleteUserAddress <TResult>(parameters: IDeleteUserAddressParameters): Promise<IStandardResponse<IDeleteUserAddressParameters, TResult>> {
    return request<IDeleteUserAddressParameters, TResult>("/users/:user_id/addresses/:user_address_id", parameters, "DELETE");
}

export const UserAddress = {findAllUserAddresses, createUserAddress, getUserAddress, deleteUserAddress};
