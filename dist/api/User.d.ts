import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IUser {
    user_id: number;
    login_name: string;
    primary_email: string;
    creation_tsz: number;
    user_pub_key: any;
    referred_by_user_id: number;
    feedback_info: any;
    awaiting_feedback_count: number;
    use_new_inventory_endpoints: boolean;
}
export interface IFindAllUsersParameters extends IStandardParameters {
    keywords?: string;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetUserParameters extends IStandardParameters {
    user_id: (string | number)[];
}
export interface IFindAllUsersForTeamParameters extends IStandardParameters {
    team_id: number;
    status?: "active" | "invited" | "pending";
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetCirclesContainingUserParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetConnectedUserParameters extends IStandardParameters {
    user_id: string | number;
    to_user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IUnconnectUsersParameters extends IStandardParameters {
    user_id: string | number;
    to_user_id: string | number;
}
export interface IGetConnectedUsersParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IConnectUsersParameters extends IStandardParameters {
    user_id: string | number;
    to_user_id: string | number;
}
/**
 * Finds all Users whose name or username match the keywords parameter.
 */
declare function findAllUsers<TResult>(parameters: IFindAllUsersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUsersParameters, TResult>>;
/**
 * Retrieves a User by id.
 */
declare function getUser<TResult>(parameters: IGetUserParameters, options?: IOptions): Promise<IStandardResponse<IGetUserParameters, TResult>>;
/**
 * Returns a list of users for a specific team
 */
declare function findAllUsersForTeam<TResult>(parameters: IFindAllUsersForTeamParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>;
/**
 * Returns a list of users who have circled this user
 */
declare function getCirclesContainingUser<TResult>(parameters: IGetCirclesContainingUserParameters, options?: IOptions): Promise<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>;
/**
 * Returns details about a connection between users
 */
declare function getConnectedUser<TResult>(parameters: IGetConnectedUserParameters, options?: IOptions): Promise<IStandardResponse<IGetConnectedUserParameters, TResult>>;
/**
 * Removes a user (to_user_id) from the logged in user's (user_id) circle
 */
declare function unconnectUsers<TResult>(parameters: IUnconnectUsersParameters, options?: IOptions): Promise<IStandardResponse<IUnconnectUsersParameters, TResult>>;
/**
 * Returns a list of users that are in this user's cricle
 */
declare function getConnectedUsers<TResult>(parameters: IGetConnectedUsersParameters, options?: IOptions): Promise<IStandardResponse<IGetConnectedUsersParameters, TResult>>;
/**
 * Adds user (to_user_id) to the user's (user_id) circle
 */
declare function connectUsers<TResult>(parameters: IConnectUsersParameters, options?: IOptions): Promise<IStandardResponse<IConnectUsersParameters, TResult>>;
export declare const User: {
    findAllUsers: typeof findAllUsers;
    getUser: typeof getUser;
    findAllUsersForTeam: typeof findAllUsersForTeam;
    getCirclesContainingUser: typeof getCirclesContainingUser;
    getConnectedUser: typeof getConnectedUser;
    unconnectUsers: typeof unconnectUsers;
    getConnectedUsers: typeof getConnectedUsers;
    connectUsers: typeof connectUsers;
};
export {};
