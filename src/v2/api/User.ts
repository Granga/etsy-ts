import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IUser {
    /**
     * The user's numeric ID. This is also valid as the user's shop ID.
     */
    user_id: number,
    /**
     * The user's login name.
     */
    login_name: string,
    /**
     * The user's primary email address.
     */
    primary_email: string,
    /**
     * The date and time the user was created, in epoch seconds.
     */
    creation_tsz: number,
    /**
     * The numeric ID of the user that referred this user.
     */
    referred_by_user_id: number,
    /**
     * An associative array of feedback totals for the user.
     */
    feedback_info: any,
    /**
     * The total number of transactions the user has available for a new review.
     */
    awaiting_feedback_count: number,
    /**
     * Should this user's listings be created or edited using the new Inventory endpoints?
     */
    use_new_inventory_endpoints: boolean
}

//parameters types
export interface IFindAllUsersParameters {
    keywords?: string,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetUserParameters {
    user_id: string | number
}

export interface IFindAllUsersForTeamParameters {
    team_id: number,
    status?: "active" | "invited" | "pending",
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetCirclesContainingUserParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetConnectedUserParameters {
    user_id: string | number,
    to_user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IUnconnectUsersParameters {
    user_id: string | number,
    to_user_id: string | number
}

export interface IGetConnectedUsersParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IConnectUsersParameters {
    user_id: string | number,
    to_user_id: string | number
}

//methods class
export class User extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    async findAllUsers<TResult>(
        params: IFindAllUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUsersParameters, TResult>>> {
        return this.request<IFindAllUsersParameters, TResult>("GET", "/users", params, extra);
    }

    /**
     * Retrieves a User model object.
     */
    async getUser<TResult>(
        params: IGetUserParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetUserParameters, TResult>>> {
        return this.request<IGetUserParameters, TResult>("GET", "/users/:user_id", params, extra);
    }

    /**
     * Returns a list of users for a specific team
     */
    async findAllUsersForTeam<TResult>(
        params: IFindAllUsersForTeamParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>> {
        return this.request<IFindAllUsersForTeamParameters, TResult>("GET", "/teams/:team_id/users/", params, extra);
    }

    /**
     * Returns a list of users who have circled this user
     */
    async getCirclesContainingUser<TResult>(
        params: IGetCirclesContainingUserParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>> {
        return this.request<IGetCirclesContainingUserParameters, TResult>("GET", "/users/:user_id/circles", params, extra);
    }

    /**
     * Returns details about a connection between users
     */
    async getConnectedUser<TResult>(
        params: IGetConnectedUserParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetConnectedUserParameters, TResult>>> {
        return this.request<IGetConnectedUserParameters, TResult>("GET", "/users/:user_id/circles/:to_user_id", params, extra);
    }

    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    async unconnectUsers<TResult>(
        params: IUnconnectUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUnconnectUsersParameters, TResult>>> {
        return this.request<IUnconnectUsersParameters, TResult>("DELETE", "/users/:user_id/circles/:to_user_id", params, extra);
    }

    /**
     * Returns a list of users that are in this user's cricle
     */
    async getConnectedUsers<TResult>(
        params: IGetConnectedUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetConnectedUsersParameters, TResult>>> {
        return this.request<IGetConnectedUsersParameters, TResult>("GET", "/users/:user_id/connected_users", params, extra);
    }

    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    async connectUsers<TResult>(
        params: IConnectUsersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IConnectUsersParameters, TResult>>> {
        return this.request<IConnectUsersParameters, TResult>("POST", "/users/:user_id/connected_users", params, extra);
    }
}
