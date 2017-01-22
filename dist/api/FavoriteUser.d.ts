import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
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
export declare class FavoriteUser {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    findAllUserFavoredBy<TResult>(parameters: IFindAllUserFavoredByParameters): Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>;
    /**
     * Finds all favorite users for a user
     */
    findAllUserFavoriteUsers<TResult>(parameters: IFindAllUserFavoriteUsersParameters): Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>;
    /**
     * Finds a favorite user for a user
     */
    findUserFavoriteUsers<TResult>(parameters: IFindUserFavoriteUsersParameters): Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>;
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteUsers<TResult>(parameters: ICreateUserFavoriteUsersParameters): Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>;
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteUsers<TResult>(parameters: IDeleteUserFavoriteUsersParameters): Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>;
}
