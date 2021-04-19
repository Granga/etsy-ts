import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IFindAllListingFavoredByParameters {
    listing_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserFavoriteListingsParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindUserFavoriteListingsParameters {
    user_id: string | number,
    listing_id: number
}
export interface ICreateUserFavoriteListingsParameters {
    user_id: string | number,
    listing_id: number
}
export interface IDeleteUserFavoriteListingsParameters {
    user_id: string | number,
    listing_id: number
}

//methods class
export class FavoriteListing extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    async findAllListingFavoredBy<TResult>(
        params: IFindAllListingFavoredByParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingFavoredByParameters, TResult>>> {
        return this.request<IFindAllListingFavoredByParameters, TResult>(
            "GET",
            "/listings/:listing_id/favored-by",
            params,
            extra
        );
    }

    /**
     * Finds all favorite listings for a user
     */
    async findAllUserFavoriteListings<TResult>(
        params: IFindAllUserFavoriteListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>>> {
        return this.request<IFindAllUserFavoriteListingsParameters, TResult>(
            "GET",
            "/users/:user_id/favorites/listings",
            params,
            extra
        );
    }

    /**
     * Finds a favorite listing for a user
     */
    async findUserFavoriteListings<TResult>(
        params: IFindUserFavoriteListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>>> {
        return this.request<IFindUserFavoriteListingsParameters, TResult>(
            "GET",
            "/users/:user_id/favorites/listings/:listing_id",
            params,
            extra
        );
    }

    /**
     * Creates a new favorite listing for a user
     */
    async createUserFavoriteListings<TResult>(
        params: ICreateUserFavoriteListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>>> {
        return this.request<ICreateUserFavoriteListingsParameters, TResult>(
            "POST",
            "/users/:user_id/favorites/listings/:listing_id",
            params,
            extra
        );
    }

    /**
     * Delete a favorite listing for a user
     */
    async deleteUserFavoriteListings<TResult>(
        params: IDeleteUserFavoriteListingsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>>> {
        return this.request<IDeleteUserFavoriteListingsParameters, TResult>(
            "DELETE",
            "/users/:user_id/favorites/listings/:listing_id",
            params,
            extra
        );
    }
}
