import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

/**
 * Retrieves a set of UserAddress objects associated to a User.
 */
export function findAllUserAddresses<TResult>(parameters: IFindAllUserAddressesParameters): Bluebird<IStandardResponse<TResult, IFindAllUserAddressesParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserAddressesParameters>>(parameters, '/users/:user_id/addresses', 'GET');
}
/**
 * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
 */
export function createUserAddress<TResult>(parameters: ICreateUserAddressParameters): Bluebird<IStandardResponse<TResult, ICreateUserAddressParameters>> {
    return request<IStandardResponse<TResult, ICreateUserAddressParameters>>(parameters, '/users/:user_id/addresses/', 'POST');
}
/**
 * Retrieves a UserAddress by id.
 */
export function getUserAddress<TResult>(parameters: IGetUserAddressParameters): Bluebird<IStandardResponse<TResult, IGetUserAddressParameters>> {
    return request<IStandardResponse<TResult, IGetUserAddressParameters>>(parameters, '/users/:user_id/addresses/:user_address_id', 'GET');
}
/**
 * Deletes the UserAddress with the given id.
 */
export function deleteUserAddress<TResult>(parameters: IDeleteUserAddressParameters): Bluebird<IStandardResponse<TResult, IDeleteUserAddressParameters>> {
    return request<IStandardResponse<TResult, IDeleteUserAddressParameters>>(parameters, '/users/:user_id/addresses/:user_address_id', 'DELETE');
}
