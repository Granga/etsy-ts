import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IFavoriteListing {
    listing_id: number,
    user_id: number,
    listing_state: string,
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
export function findAllListingFavoredBy <TResult>(parameters: IFindAllListingFavoredByParameters): Promise<IStandardResponse<IFindAllListingFavoredByParameters, TResult>> {
    return request<IFindAllListingFavoredByParameters, TResult>("/listings/:listing_id/favored-by", parameters, "GET");
}
/**
 * Finds all favorite listings for a user
 */
export function findAllUserFavoriteListings <TResult>(parameters: IFindAllUserFavoriteListingsParameters): Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>> {
    return request<IFindAllUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings", parameters, "GET");
}
/**
 * Finds a favorite listing for a user
 */
export function findUserFavoriteListings <TResult>(parameters: IFindUserFavoriteListingsParameters): Promise<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>> {
    return request<IFindUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "GET");
}
/**
 * Creates a new favorite listing for a user
 */
export function createUserFavoriteListings <TResult>(parameters: ICreateUserFavoriteListingsParameters): Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>> {
    return request<ICreateUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "POST");
}
/**
 * Delete a favorite listing for a user
 */
export function deleteUserFavoriteListings <TResult>(parameters: IDeleteUserFavoriteListingsParameters): Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>> {
    return request<IDeleteUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE");
}

export const FavoriteListing = {
    findAllListingFavoredBy,
    findAllUserFavoriteListings,
    findUserFavoriteListings,
    createUserFavoriteListings,
    deleteUserFavoriteListings
};
