import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types

export interface IFindAllUsersParameters extends IStandardParameters {
    keywords?: string,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetUserParameters extends IStandardParameters {
    user_id: (string | number)[]
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

//methods

/**
 * Finds all Users whose name or username match the keywords parameter.
 */
export function findAllUsers <TResult>(parameters: IFindAllUsersParameters): Promise<IStandardResponse<IFindAllUsersParameters, TResult>> {
    return request<IFindAllUsersParameters, TResult>("/users", parameters, "GET");
}
/**
 * Retrieves a User by id.
 */
export function getUser <TResult>(parameters: IGetUserParameters): Promise<IStandardResponse<IGetUserParameters, TResult>> {
    return request<IGetUserParameters, TResult>("/users/:user_id", parameters, "GET");
}
/**
 * Returns a list of users for a specific team
 */
export function findAllUsersForTeam <TResult>(parameters: IFindAllUsersForTeamParameters): Promise<IStandardResponse<IFindAllUsersForTeamParameters, TResult>> {
    return request<IFindAllUsersForTeamParameters, TResult>("/teams/:team_id/users/", parameters, "GET");
}
/**
 * Returns a list of users who have circled this user
 */
export function getCirclesContainingUser <TResult>(parameters: IGetCirclesContainingUserParameters): Promise<IStandardResponse<IGetCirclesContainingUserParameters, TResult>> {
    return request<IGetCirclesContainingUserParameters, TResult>("/users/:user_id/circles", parameters, "GET");
}
/**
 * Returns details about a connection between users
 */
export function getConnectedUser <TResult>(parameters: IGetConnectedUserParameters): Promise<IStandardResponse<IGetConnectedUserParameters, TResult>> {
    return request<IGetConnectedUserParameters, TResult>("/users/:user_id/circles/:to_user_id", parameters, "GET");
}
/**
 * Removes a user (to_user_id) from the logged in user's (user_id) circle
 */
export function unconnectUsers <TResult>(parameters: IUnconnectUsersParameters): Promise<IStandardResponse<IUnconnectUsersParameters, TResult>> {
    return request<IUnconnectUsersParameters, TResult>("/users/:user_id/circles/:to_user_id", parameters, "DELETE");
}
/**
 * Returns a list of users that are in this user's cricle
 */
export function getConnectedUsers <TResult>(parameters: IGetConnectedUsersParameters): Promise<IStandardResponse<IGetConnectedUsersParameters, TResult>> {
    return request<IGetConnectedUsersParameters, TResult>("/users/:user_id/connected_users", parameters, "GET");
}
/**
 * Adds user (to_user_id) to the user's (user_id) circle
 */
export function connectUsers <TResult>(parameters: IConnectUsersParameters): Promise<IStandardResponse<IConnectUsersParameters, TResult>> {
    return request<IConnectUsersParameters, TResult>("/users/:user_id/connected_users", parameters, "POST");
}

export const User = {
    findAllUsers,
    getUser,
    findAllUsersForTeam,
    getCirclesContainingUser,
    getConnectedUser,
    unconnectUsers,
    getConnectedUsers,
    connectUsers
};
