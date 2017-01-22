import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IFavoriteUser {
    user_id: number,
    favorite_user_id: number,
    target_user_id: number,
    creation_tsz: number
}


export interface IFindAllUserFavoredByParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    target_user_id: string | number
}
export interface ICreateUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    target_user_id: string | number
}
export interface IDeleteUserFavoriteUsersParameters extends IStandardParameters {
    user_id: string | number,
    target_user_id: string | number
}

export class FavoriteUser {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a set of FavoriteUser objects associated to a User.
     */
    findAllUserFavoredBy<TResult>(parameters: IFindAllUserFavoredByParameters): Promise<IStandardResponse<IFindAllUserFavoredByParameters, TResult>> {
        return this.client.http<IFindAllUserFavoredByParameters, TResult>("/users/:user_id/favored-by", parameters, "GET");
    }

    /**
     * Finds all favorite users for a user
     */
    findAllUserFavoriteUsers<TResult>(parameters: IFindAllUserFavoriteUsersParameters): Promise<IStandardResponse<IFindAllUserFavoriteUsersParameters, TResult>> {
        return this.client.http<IFindAllUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users", parameters, "GET");
    }

    /**
     * Finds a favorite user for a user
     */
    findUserFavoriteUsers<TResult>(parameters: IFindUserFavoriteUsersParameters): Promise<IStandardResponse<IFindUserFavoriteUsersParameters, TResult>> {
        return this.client.http<IFindUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "GET");
    }

    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteUsers<TResult>(parameters: ICreateUserFavoriteUsersParameters): Promise<IStandardResponse<ICreateUserFavoriteUsersParameters, TResult>> {
        return this.client.http<ICreateUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "POST");
    }

    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteUsers<TResult>(parameters: IDeleteUserFavoriteUsersParameters): Promise<IStandardResponse<IDeleteUserFavoriteUsersParameters, TResult>> {
        return this.client.http<IDeleteUserFavoriteUsersParameters, TResult>("/users/:user_id/favorites/users/:target_user_id", parameters, "DELETE");
    }
}
