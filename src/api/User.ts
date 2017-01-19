import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IUser {
    user_id: number,
    login_name: string,
    primary_email: string,
    creation_tsz: number,
    user_pub_key: any,
    referred_by_user_id: number,
    feedback_info: any,
    awaiting_feedback_count: number,
    use_new_inventory_endpoints: boolean
}

export interface IFindAllUsersParameters extends IStandardParameters {
    keywords?: string,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetUserParameters extends IStandardParameters {
    user_id: string | number[]
}
export interface IFindAllUsersForTeamParameters extends IStandardParameters {
    team_id: number,
    status?: "active"|"invited"|"pending",
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetCirclesContainingUserParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetConnectedUserParameters extends IStandardParameters {
    user_id: string | number,
    to_user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IUnconnectUsersParameters extends IStandardParameters {
    user_id: string | number,
    to_user_id: string | number
}
export interface IGetConnectedUsersParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IConnectUsersParameters extends IStandardParameters {
    user_id: string | number,
    to_user_id: string | number
}

/**
 * Finds all Users whose name or username match the keywords parameter.
 */
export function findAllUsers<TResult>(parameters: IFindAllUsersParameters): Bluebird<IStandardResponse<TResult, IFindAllUsersParameters>> {
    return request<IStandardResponse<TResult, IFindAllUsersParameters>>(parameters, '/users', 'GET');
}
/**
 * Retrieves a User by id.
 */
export function getUser<TResult>(parameters: IGetUserParameters): Bluebird<IStandardResponse<TResult, IGetUserParameters>> {
    return request<IStandardResponse<TResult, IGetUserParameters>>(parameters, '/users/:user_id', 'GET');
}
/**
 * Returns a list of users for a specific team
 */
export function findAllUsersForTeam<TResult>(parameters: IFindAllUsersForTeamParameters): Bluebird<IStandardResponse<TResult, IFindAllUsersForTeamParameters>> {
    return request<IStandardResponse<TResult, IFindAllUsersForTeamParameters>>(parameters, '/teams/:team_id/users/', 'GET');
}
/**
 * Returns a list of users who have circled this user
 */
export function getCirclesContainingUser<TResult>(parameters: IGetCirclesContainingUserParameters): Bluebird<IStandardResponse<TResult, IGetCirclesContainingUserParameters>> {
    return request<IStandardResponse<TResult, IGetCirclesContainingUserParameters>>(parameters, '/users/:user_id/circles', 'GET');
}
/**
 * Returns details about a connection between users
 */
export function getConnectedUser<TResult>(parameters: IGetConnectedUserParameters): Bluebird<IStandardResponse<TResult, IGetConnectedUserParameters>> {
    return request<IStandardResponse<TResult, IGetConnectedUserParameters>>(parameters, '/users/:user_id/circles/:to_user_id', 'GET');
}
/**
 * Removes a user (to_user_id) from the logged in user's (user_id) circle
 */
export function unconnectUsers<TResult>(parameters: IUnconnectUsersParameters): Bluebird<IStandardResponse<TResult, IUnconnectUsersParameters>> {
    return request<IStandardResponse<TResult, IUnconnectUsersParameters>>(parameters, '/users/:user_id/circles/:to_user_id', 'DELETE');
}
/**
 * Returns a list of users that are in this user's cricle
 */
export function getConnectedUsers<TResult>(parameters: IGetConnectedUsersParameters): Bluebird<IStandardResponse<TResult, IGetConnectedUsersParameters>> {
    return request<IStandardResponse<TResult, IGetConnectedUsersParameters>>(parameters, '/users/:user_id/connected_users', 'GET');
}
/**
 * Adds user (to_user_id) to the user's (user_id) circle
 */
export function connectUsers<TResult>(parameters: IConnectUsersParameters): Bluebird<IStandardResponse<TResult, IConnectUsersParameters>> {
    return request<IStandardResponse<TResult, IConnectUsersParameters>>(parameters, '/users/:user_id/connected_users', 'POST');
}
