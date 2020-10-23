import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IFavoriteUser {
    /**
     * The user's numeric ID.  Note: This field may be absent, depending on the user's privacy settings.
     */
    user_id: number;
    /**
     @deprecated
     * The numberic ID of this favorite user association.

     Deprecated: do not use.
     */
    favorite_user_id: number;
    /**
     * The targeted favorite user's numeric ID.
     */
    target_user_id: number;
    /**
     * The date and time that the user was favorited.
     */
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
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    static findAllUserFavoredBy<TResult>(parameters: IFindAllUserFavoredByParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>;
    /**
     * Finds all favorite users for a user
     */
    static findAllUserFavoriteUsers<TResult>(parameters: IFindAllUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>;
    /**
     * Finds a favorite user for a user
     */
    static findUserFavoriteUsers<TResult>(parameters: IFindUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>;
    /**
     * Creates a new favorite listing for a user
     */
    static createUserFavoriteUsers<TResult>(parameters: ICreateUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>;
    /**
     * Delete a favorite listing for a user
     */
    static deleteUserFavoriteUsers<TResult>(parameters: IDeleteUserFavoriteUsersParameters, options?: IOptions): Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>;
}
