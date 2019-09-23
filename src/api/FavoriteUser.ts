import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

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
export interface IFindAllUserFavoredByParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    target_user_id: string | number
}

export interface ICreateUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    target_user_id: string | number
}

export interface IDeleteUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    target_user_id: string | number
}

//methods
/**
 * Retrieves a set of FavoriteUser objects associated to a User.
 */
function findAllUserFavoredBy<TResult>(parameters: IFindAllUserFavoredByParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>> {
    return request<IFindAllUserFavoredByParameters, TResult>("/users/:user_id/favored-by", parameters, "GET", options);
}

/**
 * Finds all favorite users for a user
 */
function findAllUserFavoriteUsers<TResult>(parameters: IFindAllUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>> {
    return request<IFindAllUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users", parameters, "GET", options);
}

/**
 * Finds a favorite user for a user
 */
function findUserFavoriteUsers<TResult>(parameters: IFindUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>> {
    return request<IFindUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "GET", options);
}

/**
 * Creates a new favorite listing for a user
 */
function createUserFavoriteUsers<TResult>(parameters: ICreateUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>> {
    return request<ICreateUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "POST", options);
}

/**
 * Delete a favorite listing for a user
 */
function deleteUserFavoriteUsers<TResult>(parameters: IDeleteUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>> {
    return request<IDeleteUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE", options);
}

export const FavoriteUser = {
    findAllUserFavoredBy,
    findAllUserFavoriteUsers,
    findUserFavoriteUsers,
    createUserFavoriteUsers,
    deleteUserFavoriteUsers
};
