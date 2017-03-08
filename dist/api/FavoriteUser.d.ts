import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
/**
 * Retrieves a set of FavoriteUser objects associated to a User.
 */
export declare function findAllUserFavoredBy<TResult>(parameters: IFindAllUserFavoredByParameters): Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>;
/**
 * Finds all favorite users for a user
 */
export declare function findAllUserFavoriteUsers<TResult>(parameters: IFindAllUserFavoriteUsersParameters): Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>;
/**
 * Finds a favorite user for a user
 */
export declare function findUserFavoriteUsers<TResult>(parameters: IFindUserFavoriteUsersParameters): Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>;
/**
 * Creates a new favorite listing for a user
 */
export declare function createUserFavoriteUsers<TResult>(parameters: ICreateUserFavoriteUsersParameters): Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>;
/**
 * Delete a favorite listing for a user
 */
export declare function deleteUserFavoriteUsers<TResult>(parameters: IDeleteUserFavoriteUsersParameters): Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>;
export declare const FavoriteUser: {
    findAllUserFavoredBy: <TResult>(parameters: IFindAllUserFavoredByParameters) => Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>;
    findAllUserFavoriteUsers: <TResult>(parameters: IFindAllUserFavoriteUsersParameters) => Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>;
    findUserFavoriteUsers: <TResult>(parameters: IFindUserFavoriteUsersParameters) => Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>;
    createUserFavoriteUsers: <TResult>(parameters: ICreateUserFavoriteUsersParameters) => Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>;
    deleteUserFavoriteUsers: <TResult>(parameters: IDeleteUserFavoriteUsersParameters) => Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>;
};
