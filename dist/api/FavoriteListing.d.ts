/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IFavoriteListing {
    listing_id: number;
    user_id: number;
    listing_state: string;
    create_date: number;
}
export interface IFindAllListingFavoredByParameters extends IStandardParameters {
    listing_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
}
export interface ICreateUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
}
export interface IDeleteUserFavoriteListingsParameters extends IStandardParameters {
    user_id: string | number;
    listing_id: number;
}
/**
* Retrieves a set of FavoriteListing objects associated to a Listing.
*/
export declare function findAllListingFavoredBy<TResult>(parameters: IFindAllListingFavoredByParameters): Bluebird<IStandardResponse<TResult, IFindAllListingFavoredByParameters>>;
/**
* Finds all favorite listings for a user
*/
export declare function findAllUserFavoriteListings<TResult>(parameters: IFindAllUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFavoriteListingsParameters>>;
/**
* Finds a favorite listing for a user
*/
export declare function findUserFavoriteListings<TResult>(parameters: IFindUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, IFindUserFavoriteListingsParameters>>;
/**
* Creates a new favorite listing for a user
*/
export declare function createUserFavoriteListings<TResult>(parameters: ICreateUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, ICreateUserFavoriteListingsParameters>>;
/**
* Delete a favorite listing for a user
*/
export declare function deleteUserFavoriteListings<TResult>(parameters: IDeleteUserFavoriteListingsParameters): Bluebird<IStandardResponse<TResult, IDeleteUserFavoriteListingsParameters>>;
