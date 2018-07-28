import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function findAllUserAddresses<TResult>(parameters: IFindAllUserAddressesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserAddressesParameters, TResult>>;
/**
 * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
 */
declare function createUserAddress<TResult>(parameters: ICreateUserAddressParameters, options?: IOptions): Promise<IStandardResponse<ICreateUserAddressParameters, TResult>>;
/**
 * Retrieves a UserAddress by id.
 */
declare function getUserAddress<TResult>(parameters: IGetUserAddressParameters, options?: IOptions): Promise<IStandardResponse<IGetUserAddressParameters, TResult>>;
/**
 * Deletes the UserAddress with the given id.
 */
declare function deleteUserAddress<TResult>(parameters: IDeleteUserAddressParameters, options?: IOptions): Promise<IStandardResponse<IDeleteUserAddressParameters, TResult>>;
export declare const UserAddress: {
    findAllUserAddresses: typeof findAllUserAddresses;
    createUserAddress: typeof createUserAddress;
    getUserAddress: typeof getUserAddress;
    deleteUserAddress: typeof deleteUserAddress;
};
export {};
