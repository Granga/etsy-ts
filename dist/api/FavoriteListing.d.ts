import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IFavoriteListing {
    /**
     * The listings numeric ID.
     */
    listing_id: number;
    /**
     * The user's numeric ID.  Note: This field may be absent, depending on the user's privacy settings.
     */
    user_id: number;
    /**
     * The state of the listing.
     */
    listing_state: string;
    /**
     * The date and time that the listing was favorited.
     */
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
export declare class FavoriteListing {
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    static findAllListingFavoredBy<TResult>(parameters: IFindAllListingFavoredByParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingFavoredByParameters, TResult>>;
    /**
     * Finds all favorite listings for a user
     */
    static findAllUserFavoriteListings<TResult>(parameters: IFindAllUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>>;
    /**
     * Finds a favorite listing for a user
     */
    static findUserFavoriteListings<TResult>(parameters: IFindUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>>;
    /**
     * Creates a new favorite listing for a user
     */
    static createUserFavoriteListings<TResult>(parameters: ICreateUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>>;
    /**
     * Delete a favorite listing for a user
     */
    static deleteUserFavoriteListings<TResult>(parameters: IDeleteUserFavoriteListingsParameters, options?: IOptions): Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>>;
}
