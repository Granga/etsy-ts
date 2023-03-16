import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class FavoriteUser extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    async findAllUserFavoredBy<TResult>(
        params: IFindAllUserFavoredByParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>> {
        return this.request<IFindAllUserFavoredByParameters, TResult>("GET", "/users/:user_id/favored-by", params, extra);
    }

    /**
     * Finds all favorite users for a user
     */
    async findAllUserFavoriteUsers<TResult>(
        params: IFindAllUserFavoriteUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>> {
        return this.request<IFindAllUserFavoriteUsersParameters, TResult>("GET", "/users/:user_id/favorites/users", params, extra);
    }

    /**
     * Finds a favorite user for a user
     */
    async findUserFavoriteUsers<TResult>(
        params: IFindUserFavoriteUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>> {
        return this.request<IFindUserFavoriteUsersParameters, TResult>("GET", "/users/:user_id/favorites/users/:target_user_id", params, extra);
    }

    /**
     * Creates a new favorite listing for a user
     */
    async createUserFavoriteUsers<TResult>(
        params: ICreateUserFavoriteUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>> {
        return this.request<ICreateUserFavoriteUsersParameters, TResult>("POST", "/users/:user_id/favorites/users/:target_user_id", params, extra);
    }

    /**
     * Delete a favorite listing for a user
     */
    async deleteUserFavoriteUsers<TResult>(
        params: IDeleteUserFavoriteUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>> {
        return this.request<IDeleteUserFavoriteUsersParameters, TResult>("DELETE", "/users/:user_id/favorites/users/:target_user_id", params, extra);
    }
}
