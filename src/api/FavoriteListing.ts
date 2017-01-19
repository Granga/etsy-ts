import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IFavoriteListing {
    listing_id: number,
    user_id: number,
    listing_state: string,
    create_date: number
}

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

/**
 * Retrieves a set of FavoriteListing objects associated to a Listing.
 */
export function findAllListingFavoredBy<TResult>(parameters: IFindAllListingFavoredByParameters): Bluebird<IStandardResponse<TResult, IFindAllListingFavoredByParameters>> {
    return request<IStandardResponse<TResult, IFindAllListingFavoredByParameters>>(parameters, '/listings/:listing_id/favored-by', 'GET');
}
/**
 * Finds all favorite listings for a user
 */
export function findAllUserFavoriteListings<TResult>(parameters: IFindAllUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFavoriteListingsParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserFavoriteListingsParameters>>(parameters, '/users/:user_id/favorites/listings', 'GET');
}
/**
 * Finds a favorite listing for a user
 */
export function findUserFavoriteListings<TResult>(parameters: IFindUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, IFindUserFavoriteListingsParameters>> {
    return request<IStandardResponse<TResult, IFindUserFavoriteListingsParameters>>(parameters, '/users/:user_id/favorites/listings/:listing_id', 'GET');
}
/**
 * Creates a new favorite listing for a user
 */
export function createUserFavoriteListings<TResult>(parameters: ICreateUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, ICreateUserFavoriteListingsParameters>> {
    return request<IStandardResponse<TResult, ICreateUserFavoriteListingsParameters>>(parameters, '/users/:user_id/favorites/listings/:listing_id', 'POST');
}
/**
 * Delete a favorite listing for a user
 */
export function deleteUserFavoriteListings<TResult>(parameters: IDeleteUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, IDeleteUserFavoriteListingsParameters>> {
    return request<IStandardResponse<TResult, IDeleteUserFavoriteListingsParameters>>(parameters, '/users/:user_id/favorites/listings/:listing_id', 'DELETE');
}
