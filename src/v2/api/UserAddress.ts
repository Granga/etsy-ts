import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class UserAddress extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    async findAllUserAddresses<TResult>(
        params: IFindAllUserAddressesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserAddressesParameters, TResult>>> {
        return this.request<IFindAllUserAddressesParameters, TResult>(
            "GET",
            "/users/:user_id/addresses",
            params,
            extra
        );
    }

    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    async createUserAddress<TResult>(
        params: ICreateUserAddressParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateUserAddressParameters, TResult>>> {
        return this.request<ICreateUserAddressParameters, TResult>("POST", "/users/:user_id/addresses/", params, extra);
    }

    /**
     * Retrieves a UserAddress by id.
     */
    async getUserAddress<TResult>(
        params: IGetUserAddressParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetUserAddressParameters, TResult>>> {
        return this.request<IGetUserAddressParameters, TResult>(
            "GET",
            "/users/:user_id/addresses/:user_address_id",
            params,
            extra
        );
    }

    /**
     * Deletes the UserAddress with the given id.
     */
    async deleteUserAddress<TResult>(
        params: IDeleteUserAddressParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteUserAddressParameters, TResult>>> {
        return this.request<IDeleteUserAddressParameters, TResult>(
            "DELETE",
            "/users/:user_id/addresses/:user_address_id",
            params,
            extra
        );
    }
}
