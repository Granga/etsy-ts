/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function findAllUserFavoredBy<TResult>(parameters: IFindAllUserFavoredByParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFavoredByParameters>>;
/**
* Finds all favorite users for a user
*/
export declare function findAllUserFavoriteUsers<TResult>(parameters: IFindAllUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFavoriteUsersParameters>>;
/**
* Finds a favorite user for a user
*/
export declare function findUserFavoriteUsers<TResult>(parameters: IFindUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, IFindUserFavoriteUsersParameters>>;
/**
* Creates a new favorite listing for a user
*/
export declare function createUserFavoriteUsers<TResult>(parameters: ICreateUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, ICreateUserFavoriteUsersParameters>>;
/**
* Delete a favorite listing for a user
*/
export declare function deleteUserFavoriteUsers<TResult>(parameters: IDeleteUserFavoriteUsersParameters): Bluebird<IStandardResponse<TResult, IDeleteUserFavoriteUsersParameters>>;
