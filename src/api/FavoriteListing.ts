import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class FavoriteListing {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    async findAllListingFavoredBy<TResult>(
        params: IFindAllListingFavoredByParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllListingFavoredByParameters, TResult>>> {
        return request<IFindAllListingFavoredByParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/listings/:listing_id/favored-by",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Finds all favorite listings for a user
     */
    async findAllUserFavoriteListings<TResult>(
        params: IFindAllUserFavoriteListingsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>>> {
        return request<IFindAllUserFavoriteListingsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/favorites/listings",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Finds a favorite listing for a user
     */
    async findUserFavoriteListings<TResult>(
        params: IFindUserFavoriteListingsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>>> {
        return request<IFindUserFavoriteListingsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/favorites/listings/:listing_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Creates a new favorite listing for a user
     */
    async createUserFavoriteListings<TResult>(
        params: ICreateUserFavoriteListingsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>>> {
        return request<ICreateUserFavoriteListingsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/favorites/listings/:listing_id",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Delete a favorite listing for a user
     */
    async deleteUserFavoriteListings<TResult>(
        params: IDeleteUserFavoriteListingsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>>> {
        return request<IDeleteUserFavoriteListingsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/favorites/listings/:listing_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
