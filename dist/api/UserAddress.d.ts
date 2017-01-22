import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
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
export declare class UserAddress {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    findAllUserAddresses<TResult>(parameters: IFindAllUserAddressesParameters): Promise<IStandardResponse<IFindAllUserAddressesParameters, TResult>>;
    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    createUserAddress<TResult>(parameters: ICreateUserAddressParameters): Promise<IStandardResponse<ICreateUserAddressParameters, TResult>>;
    /**
     * Retrieves a UserAddress by id.
     */
    getUserAddress<TResult>(parameters: IGetUserAddressParameters): Promise<IStandardResponse<IGetUserAddressParameters, TResult>>;
    /**
     * Deletes the UserAddress with the given id.
     */
    deleteUserAddress<TResult>(parameters: IDeleteUserAddressParameters): Promise<IStandardResponse<IDeleteUserAddressParameters, TResult>>;
}
