import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findAllUsers<TResult>(parameters: IFindAllUsersParameters): Promise<IStandardResponse<IFindAllUsersParameters, TResult>>;
/**
 * Retrieves a User by id.
 */
export declare function getUser<TResult>(parameters: IGetUserParameters): Promise<IStandardResponse<IGetUserParameters, TResult>>;
/**
 * Returns a list of users for a specific team
 */
export declare function findAllUsersForTeam<TResult>(parameters: IFindAllUsersForTeamParameters): Promise<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>;
/**
 * Returns a list of users who have circled this user
 */
export declare function getCirclesContainingUser<TResult>(parameters: IGetCirclesContainingUserParameters): Promise<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>;
/**
 * Returns details about a connection between users
 */
export declare function getConnectedUser<TResult>(parameters: IGetConnectedUserParameters): Promise<IStandardResponse<IGetConnectedUserParameters, TResult>>;
/**
 * Removes a user (to_user_id) from the logged in user's (user_id) circle
 */
export declare function unconnectUsers<TResult>(parameters: IUnconnectUsersParameters): Promise<IStandardResponse<IUnconnectUsersParameters, TResult>>;
/**
 * Returns a list of users that are in this user's cricle
 */
export declare function getConnectedUsers<TResult>(parameters: IGetConnectedUsersParameters): Promise<IStandardResponse<IGetConnectedUsersParameters, TResult>>;
/**
 * Adds user (to_user_id) to the user's (user_id) circle
 */
export declare function connectUsers<TResult>(parameters: IConnectUsersParameters): Promise<IStandardResponse<IConnectUsersParameters, TResult>>;
export declare const User: {
    findAllUsers: <TResult>(parameters: IFindAllUsersParameters) => Promise<IStandardResponse<IFindAllUsersParameters, TResult>>;
    getUser: <TResult>(parameters: IGetUserParameters) => Promise<IStandardResponse<IGetUserParameters, TResult>>;
    findAllUsersForTeam: <TResult>(parameters: IFindAllUsersForTeamParameters) => Promise<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>;
    getCirclesContainingUser: <TResult>(parameters: IGetCirclesContainingUserParameters) => Promise<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>;
    getConnectedUser: <TResult>(parameters: IGetConnectedUserParameters) => Promise<IStandardResponse<IGetConnectedUserParameters, TResult>>;
    unconnectUsers: <TResult>(parameters: IUnconnectUsersParameters) => Promise<IStandardResponse<IUnconnectUsersParameters, TResult>>;
    getConnectedUsers: <TResult>(parameters: IGetConnectedUsersParameters) => Promise<IStandardResponse<IGetConnectedUsersParameters, TResult>>;
    connectUsers: <TResult>(parameters: IConnectUsersParameters) => Promise<IStandardResponse<IConnectUsersParameters, TResult>>;
};
