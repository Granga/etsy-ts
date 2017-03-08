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
export declare const UserAddress: {
    findAllUserAddresses: <TResult>(parameters: IFindAllUserAddressesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUserAddressesParameters, TResult>>;
    createUserAddress: <TResult>(parameters: ICreateUserAddressParameters, options?: IOptions) => Promise<IStandardResponse<ICreateUserAddressParameters, TResult>>;
    getUserAddress: <TResult>(parameters: IGetUserAddressParameters, options?: IOptions) => Promise<IStandardResponse<IGetUserAddressParameters, TResult>>;
    deleteUserAddress: <TResult>(parameters: IDeleteUserAddressParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteUserAddressParameters, TResult>>;
};
