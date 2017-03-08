import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findAllListingFavoredBy<TResult>(parameters: IFindAllListingFavoredByParameters): Promise<IStandardResponse<IFindAllListingFavoredByParameters, TResult>>;
/**
 * Finds all favorite listings for a user
 */
export declare function findAllUserFavoriteListings<TResult>(parameters: IFindAllUserFavoriteListingsParameters): Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>>;
/**
 * Finds a favorite listing for a user
 */
export declare function findUserFavoriteListings<TResult>(parameters: IFindUserFavoriteListingsParameters): Promise<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>>;
/**
 * Creates a new favorite listing for a user
 */
export declare function createUserFavoriteListings<TResult>(parameters: ICreateUserFavoriteListingsParameters): Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>>;
/**
 * Delete a favorite listing for a user
 */
export declare function deleteUserFavoriteListings<TResult>(parameters: IDeleteUserFavoriteListingsParameters): Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>>;
export declare const FavoriteListing: {
    findAllListingFavoredBy: <TResult>(parameters: IFindAllListingFavoredByParameters) => Promise<IStandardResponse<IFindAllListingFavoredByParameters, TResult>>;
    findAllUserFavoriteListings: <TResult>(parameters: IFindAllUserFavoriteListingsParameters) => Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>>;
    findUserFavoriteListings: <TResult>(parameters: IFindUserFavoriteListingsParameters) => Promise<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>>;
    createUserFavoriteListings: <TResult>(parameters: ICreateUserFavoriteListingsParameters) => Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>>;
    deleteUserFavoriteListings: <TResult>(parameters: IDeleteUserFavoriteListingsParameters) => Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>>;
};
