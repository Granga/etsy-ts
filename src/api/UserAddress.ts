import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IUserAddress {
    /**
     * The numeric ID of the user's address.
     */
    user_address_id: number,
    /**
     * The user's numeric ID.
     */
    user_id: number,
    /**
     * The user's name for this address.
     */
    name: string,
    /**
     * The first line of the user's address.
     */
    first_line: string,
    /**
     * The second line of the user's address.
     */
    second_line: string,
    /**
     * The city field of the user's address.
     */
    city: string,
    /**
     * The state field of the user's address.
     */
    state: string,
    /**
     * The zip code field of the user's address.
     */
    zip: string,
    /**
     * The country's numeric ID.
     */
    country_id: number,
    /**
     * The name of the user's country
     */
    country_name: string,
    /**
     * Is this the user's default shipping address
     */
    is_default_shipping: boolean
}

//parameters types
export interface IFindAllUserAddressesParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface ICreateUserAddressParameters {
    user_id: string | number,
    name: string,
    first_line: string,
    second_line?: string,
    city: string,
    state?: string,
    zip: string,
    country_id: number
}

export interface IGetUserAddressParameters {
    user_address_id: number[]
}

export interface IDeleteUserAddressParameters {
    user_address_id: number
}

//methods class
export class UserAddress {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    async findAllUserAddresses<TResult>(
        params: IFindAllUserAddressesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserAddressesParameters, TResult>>> {
        return request<IFindAllUserAddressesParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/addresses",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    async createUserAddress<TResult>(
        params: ICreateUserAddressParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ICreateUserAddressParameters, TResult>>> {
        return request<ICreateUserAddressParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/addresses/",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Retrieves a UserAddress by id.
     */
    async getUserAddress<TResult>(
        params: IGetUserAddressParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetUserAddressParameters, TResult>>> {
        return request<IGetUserAddressParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/addresses/:user_address_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Deletes the UserAddress with the given id.
     */
    async deleteUserAddress<TResult>(
        params: IDeleteUserAddressParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteUserAddressParameters, TResult>>> {
        return request<IDeleteUserAddressParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/addresses/:user_address_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
