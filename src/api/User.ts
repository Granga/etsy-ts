import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function findAllUsers <TResult>(parameters: IFindAllUsersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUsersParameters, TResult>> {
    return request<IFindAllUsersParameters, TResult>("/users", parameters, "GET", options);
}
/**
 * Retrieves a User by id.
 */
function getUser <TResult>(parameters: IGetUserParameters, options?: IOptions): Promise<IStandardResponse<IGetUserParameters, TResult>> {
    return request<IGetUserParameters, TResult>("/users/:user_id", parameters, "GET", options);
}
/**
 * Returns a list of users for a specific team
 */
function findAllUsersForTeam <TResult>(parameters: IFindAllUsersForTeamParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUsersForTeamParameters, TResult>> {
    return request<IFindAllUsersForTeamParameters, TResult>("/teams/:team_id/users/", parameters, "GET", options);
}
/**
 * Returns a list of users who have circled this user
 */
function getCirclesContainingUser <TResult>(parameters: IGetCirclesContainingUserParameters, options?: IOptions): Promise<IStandardResponse<IGetCirclesContainingUserParameters, TResult>> {
    return request<IGetCirclesContainingUserParameters, TResult>("/users/:user_id/circles", parameters, "GET", options);
}
/**
 * Returns details about a connection between users
 */
function getConnectedUser <TResult>(parameters: IGetConnectedUserParameters, options?: IOptions): Promise<IStandardResponse<IGetConnectedUserParameters, TResult>> {
    return request<IGetConnectedUserParameters, TResult>("/users/:user_id/circles/:to_user_id", parameters, "GET", options);
}
/**
 * Removes a user (to_user_id) from the logged in user's (user_id) circle
 */
function unconnectUsers <TResult>(parameters: IUnconnectUsersParameters, options?: IOptions): Promise<IStandardResponse<IUnconnectUsersParameters, TResult>> {
    return request<IUnconnectUsersParameters, TResult>("/users/:user_id/circles/:to_user_id", parameters, "DELETE", options);
}
/**
 * Returns a list of users that are in this user's cricle
 */
function getConnectedUsers <TResult>(parameters: IGetConnectedUsersParameters, options?: IOptions): Promise<IStandardResponse<IGetConnectedUsersParameters, TResult>> {
    return request<IGetConnectedUsersParameters, TResult>("/users/:user_id/connected_users", parameters, "GET", options);
}
/**
 * Adds user (to_user_id) to the user's (user_id) circle
 */
function connectUsers <TResult>(parameters: IConnectUsersParameters, options?: IOptions): Promise<IStandardResponse<IConnectUsersParameters, TResult>> {
    return request<IConnectUsersParameters, TResult>("/users/:user_id/connected_users", parameters, "POST", options);
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
