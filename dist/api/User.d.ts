/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
    user_id: string | number[];
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
export declare function findAllUsers<TResult>(parameters: IFindAllUsersParameters): Bluebird<IStandardResponse<TResult, IFindAllUsersParameters>>;
/**
* Retrieves a User by id.
*/
export declare function getUser<TResult>(parameters: IGetUserParameters): Bluebird<IStandardResponse<TResult, IGetUserParameters>>;
/**
* Returns a list of users for a specific team
*/
export declare function findAllUsersForTeam<TResult>(parameters: IFindAllUsersForTeamParameters): Bluebird<IStandardResponse<TResult, IFindAllUsersForTeamParameters>>;
/**
* Returns a list of users who have circled this user
*/
export declare function getCirclesContainingUser<TResult>(parameters: IGetCirclesContainingUserParameters): Bluebird<IStandardResponse<TResult, IGetCirclesContainingUserParameters>>;
/**
* Returns details about a connection between users
*/
export declare function getConnectedUser<TResult>(parameters: IGetConnectedUserParameters): Bluebird<IStandardResponse<TResult, IGetConnectedUserParameters>>;
/**
* Removes a user (to_user_id) from the logged in user's (user_id) circle
*/
export declare function unconnectUsers<TResult>(parameters: IUnconnectUsersParameters): Bluebird<IStandardResponse<TResult, IUnconnectUsersParameters>>;
/**
* Returns a list of users that are in this user's cricle
*/
export declare function getConnectedUsers<TResult>(parameters: IGetConnectedUsersParameters): Bluebird<IStandardResponse<TResult, IGetConnectedUsersParameters>>;
/**
* Adds user (to_user_id) to the user's (user_id) circle
*/
export declare function connectUsers<TResult>(parameters: IConnectUsersParameters): Bluebird<IStandardResponse<TResult, IConnectUsersParameters>>;
