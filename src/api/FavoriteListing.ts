import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IFavoriteListing {
    /**
     * The listings numeric ID.
     */
    listing_id: number,
    /**
     * The user's numeric ID.  Note: This field may be absent, depending on the user's privacy settings.
     */
    user_id: number,
    /**
     * The state of the listing.
     */
    listing_state: string,
    /**
     * The date and time that the listing was favorited.
     */
    create_date: number
}

//parameters types
export interface IFindAllListingFavoredByParameters extends IStandardParameters {
    listing_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number
}
export interface ICreateUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number
}
export interface IDeleteUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number,
    listing_id: number
}

//methods
/**
 * Retrieves a set of FavoriteListing objects associated to a Listing.
 */
function findAllListingFavoredBy<TResult>(parameters: IFindAllListingFavoredByParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingFavoredByParameters, TResult>> {
    return request<IFindAllListingFavoredByParameters, TResult>("/listings/:listing_id/favored-by", parameters, "GET", options);
}

/**
 * Finds all favorite listings for a user
 */
function findAllUserFavoriteListings<TResult>(parameters: IFindAllUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>> {
    return request<IFindAllUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings", parameters, "GET", options);
}

/**
 * Finds a favorite listing for a user
 */
function findUserFavoriteListings<TResult>(parameters: IFindUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>> {
    return request<IFindUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "GET", options);
}

/**
 * Creates a new favorite listing for a user
 */
function createUserFavoriteListings<TResult>(parameters: ICreateUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>> {
    return request<ICreateUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "POST", options);
}

/**
 * Delete a favorite listing for a user
 */
function deleteUserFavoriteListings<TResult>(parameters: IDeleteUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>> {
    return request<IDeleteUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE", options);
}

export const FavoriteListing = {
    findAllListingFavoredBy,
    findAllUserFavoriteListings,
    findUserFavoriteListings,
    createUserFavoriteListings,
    deleteUserFavoriteListings
};
