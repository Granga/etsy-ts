import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindAllUserFavoredByParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFavoriteUsersParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindUserFavoriteUsersParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export interface ICreateUserFavoriteUsersParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export interface IDeleteUserFavoriteUsersParameters {
    user_id: string | number;
    target_user_id: string | number;
}
export declare class FavoriteUser {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    findAllUserFavoredBy<TResult>(params: IFindAllUserFavoredByParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoredByParameters, TResult>>>;
    /**
     * Finds all favorite users for a user
     */
    findAllUserFavoriteUsers<TResult>(params: IFindAllUserFavoriteUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>>>;
    /**
     * Finds a favorite user for a user
     */
    findUserFavoriteUsers<TResult>(params: IFindUserFavoriteUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>>>;
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteUsers<TResult>(params: ICreateUserFavoriteUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>>>;
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteUsers<TResult>(params: IDeleteUserFavoriteUsersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>>>;
}
