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
export declare const User: {
    findAllUsers: <TResult>(parameters: IFindAllUsersParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUsersParameters, TResult>>;
    getUser: <TResult>(parameters: IGetUserParameters, options?: IOptions) => Promise<IStandardResponse<IGetUserParameters, TResult>>;
    findAllUsersForTeam: <TResult>(parameters: IFindAllUsersForTeamParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>;
    getCirclesContainingUser: <TResult>(parameters: IGetCirclesContainingUserParameters, options?: IOptions) => Promise<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>;
    getConnectedUser: <TResult>(parameters: IGetConnectedUserParameters, options?: IOptions) => Promise<IStandardResponse<IGetConnectedUserParameters, TResult>>;
    unconnectUsers: <TResult>(parameters: IUnconnectUsersParameters, options?: IOptions) => Promise<IStandardResponse<IUnconnectUsersParameters, TResult>>;
    getConnectedUsers: <TResult>(parameters: IGetConnectedUsersParameters, options?: IOptions) => Promise<IStandardResponse<IGetConnectedUsersParameters, TResult>>;
    connectUsers: <TResult>(parameters: IConnectUsersParameters, options?: IOptions) => Promise<IStandardResponse<IConnectUsersParameters, TResult>>;
};
