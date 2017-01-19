/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IUserAddress {
    user_address_id: number;
    user_id: number;
    name: string;
    first_line: string;
    second_line: string;
    city: string;
    state: string;
    zip: string;
    country_id: number;
    country_name: string;
    is_default_shipping: boolean;
}
export interface IFindAllUserAddressesParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface ICreateUserAddressParameters extends IStandardParameters {
    user_id: string | number;
    name: string;
    first_line: string;
    second_line?: string;
    city: string;
    state?: string;
    zip: string;
    country_id: number;
}
export interface IGetUserAddressParameters extends IStandardParameters {
    user_address_id: number[];
}
export interface IDeleteUserAddressParameters extends IStandardParameters {
    user_address_id: number;
}
/**
* Retrieves a set of UserAddress objects associated to a User.
*/
export declare function findAllUserAddresses<TResult>(parameters: IFindAllUserAddressesParameters): Bluebird<IStandardResponse<TResult, IFindAllUserAddressesParameters>>;
/**
* Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
*/
export declare function createUserAddress<TResult>(parameters: ICreateUserAddressParameters): Bluebird<IStandardResponse<TResult, ICreateUserAddressParameters>>;
/**
* Retrieves a UserAddress by id.
*/
export declare function getUserAddress<TResult>(parameters: IGetUserAddressParameters): Bluebird<IStandardResponse<TResult, IGetUserAddressParameters>>;
/**
* Deletes the UserAddress with the given id.
*/
export declare function deleteUserAddress<TResult>(parameters: IDeleteUserAddressParameters): Bluebird<IStandardResponse<TResult, IDeleteUserAddressParameters>>;
