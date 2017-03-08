import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IFavoriteUser {
    user_id: number;
    favorite_user_id: number;
    target_user_id: number;
    creation_tsz: number;
}
export interface IFindAllUserFavoredByParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export interface ICreateUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export interface IDeleteUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export declare const FavoriteUser: {
    findAllUserFavoredBy: <TResult>(parameters: IFindAllUserFavoredByParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>;
    findAllUserFavoriteUsers: <TResult>(parameters: IFindAllUserFavoriteUsersParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>;
    findUserFavoriteUsers: <TResult>(parameters: IFindUserFavoriteUsersParameters, options?: IOptions) => Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>;
    createUserFavoriteUsers: <TResult>(parameters: ICreateUserFavoriteUsersParameters, options?: IOptions) => Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>;
    deleteUserFavoriteUsers: <TResult>(parameters: IDeleteUserFavoriteUsersParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>;
};
