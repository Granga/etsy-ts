import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IFavoriteUser {
    /**
     * The user's numeric ID.  Note: This field may be absent, depending on the user's privacy settings.
     */
    user_id: number,
    /**
     @deprecated
     * The numberic ID of this favorite user association.

     Deprecated: do not use.
     */
    favorite_user_id: number,
    /**
     * The targeted favorite user's numeric ID.
     */
    target_user_id: number,
    /**
     * The date and time that the user was favorited.
     */
    creation_tsz: number
}

//parameters types
export interface IFindAllUserFavoredByParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllUserFavoriteUsersParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindUserFavoriteUsersParameters {
    user_id: string | number,
    target_user_id: string | number
}

export interface ICreateUserFavoriteUsersParameters {
    user_id: string | number,
    target_user_id: string | number
}

export interface IDeleteUserFavoriteUsersParameters {
    user_id: string | number,
    target_user_id: string | number
}

//methods class
export class FavoriteUser {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    async findAllUserFavoredBy<TResult>(
        params: IFindAllUserFavoredByParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>> {
        return request<IFindAllUserFavoredByParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/favored-by",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Finds all favorite users for a user
     */
    async findAllUserFavoriteUsers<TResult>(
        params: IFindAllUserFavoriteUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>> {
        return request<IFindAllUserFavoriteUsersParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/favorites/users",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Finds a favorite user for a user
     */
    async findUserFavoriteUsers<TResult>(
        params: IFindUserFavoriteUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>> {
        return request<IFindUserFavoriteUsersParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/favorites/users/:target_user_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Creates a new favorite listing for a user
     */
    async createUserFavoriteUsers<TResult>(
        params: ICreateUserFavoriteUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>> {
        return request<ICreateUserFavoriteUsersParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/favorites/users/:target_user_id",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Delete a favorite listing for a user
     */
    async deleteUserFavoriteUsers<TResult>(
        params: IDeleteUserFavoriteUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>> {
        return request<IDeleteUserFavoriteUsersParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/favorites/users/:target_user_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
