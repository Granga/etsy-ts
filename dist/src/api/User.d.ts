import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IUser {
    /**
     * The user's numeric ID. This is also valid as the user's shop ID.
     */
    user_id: number;
    /**
     * The user's login name.
     */
    login_name: string;
    /**
     * The user's primary email address.
     */
    primary_email: string;
    /**
     * The date and time the user was created, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * The numeric ID of the user that referred this user.
     */
    referred_by_user_id: number;
    /**
     * An associative array of feedback totals for the user.
     */
    feedback_info: any;
    /**
     * The total number of transactions the user has available for a new review.
     */
    awaiting_feedback_count: number;
    /**
     * Should this user's listings be created or edited using the new Inventory endpoints?
     */
    use_new_inventory_endpoints: boolean;
}
export interface IFindAllUsersParameters {
    keywords?: string;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetUserParameters {
    user_id: (string | number)[];
}
export interface IFindAllUsersForTeamParameters {
    team_id: number;
    status?: "active" | "invited" | "pending";
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetCirclesContainingUserParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetConnectedUserParameters {
    user_id: string | number;
    to_user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IUnconnectUsersParameters {
    user_id: string | number;
    to_user_id: string | number;
}
export interface IGetConnectedUsersParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IConnectUsersParameters {
    user_id: string | number;
    to_user_id: string | number;
}
export declare class User {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    findAllUsers<TResult>(params: IFindAllUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUsersParameters, TResult>>>;
    /**
     * Retrieves a User by id.
     */
    getUser<TResult>(params: IGetUserParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetUserParameters, TResult>>>;
    /**
     * Returns a list of users for a specific team
     */
    findAllUsersForTeam<TResult>(params: IFindAllUsersForTeamParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>>;
    /**
     * Returns a list of users who have circled this user
     */
    getCirclesContainingUser<TResult>(params: IGetCirclesContainingUserParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>>;
    /**
     * Returns details about a connection between users
     */
    getConnectedUser<TResult>(params: IGetConnectedUserParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetConnectedUserParameters, TResult>>>;
    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    unconnectUsers<TResult>(params: IUnconnectUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUnconnectUsersParameters, TResult>>>;
    /**
     * Returns a list of users that are in this user's cricle
     */
    getConnectedUsers<TResult>(params: IGetConnectedUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetConnectedUsersParameters, TResult>>>;
    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    connectUsers<TResult>(params: IConnectUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IConnectUsersParameters, TResult>>>;
}
