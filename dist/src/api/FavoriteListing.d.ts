import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindAllListingFavoredByParameters {
    listing_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFavoriteListingsParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindUserFavoriteListingsParameters {
    user_id: string | number;
    listing_id: number;
}
export interface ICreateUserFavoriteListingsParameters {
    user_id: string | number;
    listing_id: number;
}
export interface IDeleteUserFavoriteListingsParameters {
    user_id: string | number;
    listing_id: number;
}
export declare class FavoriteListing {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    findAllListingFavoredBy<TResult>(params: IFindAllListingFavoredByParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllListingFavoredByParameters, TResult>>>;
    /**
     * Finds all favorite listings for a user
     */
    findAllUserFavoriteListings<TResult>(params: IFindAllUserFavoriteListingsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>>>;
    /**
     * Finds a favorite listing for a user
     */
    findUserFavoriteListings<TResult>(params: IFindUserFavoriteListingsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>>>;
    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteListings<TResult>(params: ICreateUserFavoriteListingsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>>>;
    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteListings<TResult>(params: IDeleteUserFavoriteListingsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>>>;
}
