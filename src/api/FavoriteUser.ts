import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IFavoriteUser {
    user_id: number,
    favorite_user_id: number,
    target_user_id: number,
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
export function findAllUserFavoredBy <TResult>(parameters: IFindAllUserFavoredByParameters): Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>> {
    return request<IFindAllUserFavoredByParameters, TResult>("/users/:user_id/favored-by", parameters, "GET");
}
/**
 * Finds all favorite users for a user
 */
export function findAllUserFavoriteUsers <TResult>(parameters: IFindAllUserFavoriteUsersParameters): Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>> {
    return request<IFindAllUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users", parameters, "GET");
}
/**
 * Finds a favorite user for a user
 */
export function findUserFavoriteUsers <TResult>(parameters: IFindUserFavoriteUsersParameters): Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>> {
    return request<IFindUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "GET");
}
/**
 * Creates a new favorite listing for a user
 */
export function createUserFavoriteUsers <TResult>(parameters: ICreateUserFavoriteUsersParameters): Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>> {
    return request<ICreateUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "POST");
}
/**
 * Delete a favorite listing for a user
 */
export function deleteUserFavoriteUsers <TResult>(parameters: IDeleteUserFavoriteUsersParameters): Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>> {
    return request<IDeleteUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE");
}

export const FavoriteUser = {
    findAllUserFavoredBy,
    findAllUserFavoriteUsers,
    findUserFavoriteUsers,
    createUserFavoriteUsers,
    deleteUserFavoriteUsers
};
