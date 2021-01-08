import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IUserAddress {
    /**
     * The numeric ID of the user's address.
     */
    user_address_id: number;
    /**
     * The user's numeric ID.
     */
    user_id: number;
    /**
     * The user's name for this address.
     */
    name: string;
    /**
     * The first line of the user's address.
     */
    first_line: string;
    /**
     * The second line of the user's address.
     */
    second_line: string;
    /**
     * The city field of the user's address.
     */
    city: string;
    /**
     * The state field of the user's address.
     */
    state: string;
    /**
     * The zip code field of the user's address.
     */
    zip: string;
    /**
     * The country's numeric ID.
     */
    country_id: number;
    /**
     * The name of the user's country
     */
    country_name: string;
    /**
     * Is this the user's default shipping address
     */
    is_default_shipping: boolean;
}
export interface IFindAllUserAddressesParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface ICreateUserAddressParameters {
    user_id: string | number;
    name: string;
    first_line: string;
    second_line?: string;
    city: string;
    state?: string;
    zip: string;
    country_id: number;
}
export interface IGetUserAddressParameters {
    user_address_id: number[];
}
export interface IDeleteUserAddressParameters {
    user_address_id: number;
}
export declare class UserAddress {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    findAllUserAddresses<TResult>(params: IFindAllUserAddressesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserAddressesParameters, TResult>>>;
    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    createUserAddress<TResult>(params: ICreateUserAddressParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<ICreateUserAddressParameters, TResult>>>;
    /**
     * Retrieves a UserAddress by id.
     */
    getUserAddress<TResult>(params: IGetUserAddressParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetUserAddressParameters, TResult>>>;
    /**
     * Deletes the UserAddress with the given id.
     */
    deleteUserAddress<TResult>(params: IDeleteUserAddressParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteUserAddressParameters, TResult>>>;
}