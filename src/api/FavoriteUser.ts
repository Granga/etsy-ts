import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IFavoriteUser {
    user_id: number,
    favorite_user_id: number,
    target_user_id: number,
    creation_tsz: number
}

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

/**
 * Retrieves a set of FavoriteUser objects associated to a User.
 */
export function findAllUserFavoredBy<TResult>(parameters: IFindAllUserFavoredByParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFavoredByParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserFavoredByParameters>>(parameters, '/users/:user_id/favored-by', 'GET');
}
/**
 * Finds all favorite users for a user
 */
export function findAllUserFavoriteUsers<TResult>(parameters: IFindAllUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFavoriteUsersParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserFavoriteUsersParameters>>(parameters, '/users/:user_id/favorites/users', 'GET');
}
/**
 * Finds a favorite user for a user
 */
export function findUserFavoriteUsers<TResult>(parameters: IFindUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, IFindUserFavoriteUsersParameters>> {
    return request<IStandardResponse<TResult, IFindUserFavoriteUsersParameters>>(parameters, '/users/:user_id/favorites/users/:target_user_id', 'GET');
}
/**
 * Creates a new favorite listing for a user
 */
export function createUserFavoriteUsers<TResult>(parameters: ICreateUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, ICreateUserFavoriteUsersParameters>> {
    return request<IStandardResponse<TResult, ICreateUserFavoriteUsersParameters>>(parameters, '/users/:user_id/favorites/users/:target_user_id', 'POST');
}
/**
 * Delete a favorite listing for a user
 */
export function deleteUserFavoriteUsers<TResult>(parameters: IDeleteUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, IDeleteUserFavoriteUsersParameters>> {
    return request<IStandardResponse<TResult, IDeleteUserFavoriteUsersParameters>>(parameters, '/users/:user_id/favorites/users/:target_user_id', 'DELETE');
}
