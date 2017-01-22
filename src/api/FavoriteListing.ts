import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class FavoriteListing {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a set of FavoriteListing objects associated to a Listing.
     */
    findAllListingFavoredBy<TResult>(parameters: IFindAllListingFavoredByParameters): Promise<IStandardResponse<IFindAllListingFavoredByParameters, TResult>> {
        return this.client.http<IFindAllListingFavoredByParameters, TResult>("/listings/:listing_id/favored-by", parameters, "GET");
    }

    /**
     * Finds all favorite listings for a user
     */
    findAllUserFavoriteListings<TResult>(parameters: IFindAllUserFavoriteListingsParameters): Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>> {
        return this.client.http<IFindAllUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings", parameters, "GET");
    }

    /**
     * Finds a favorite listing for a user
     */
    findUserFavoriteListings<TResult>(parameters: IFindUserFavoriteListingsParameters): Promise<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>> {
        return this.client.http<IFindUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "GET");
    }

    /**
     * Creates a new favorite listing for a user
     */
    createUserFavoriteListings<TResult>(parameters: ICreateUserFavoriteListingsParameters): Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>> {
        return this.client.http<ICreateUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "POST");
    }

    /**
     * Delete a favorite listing for a user
     */
    deleteUserFavoriteListings<TResult>(parameters: IDeleteUserFavoriteListingsParameters): Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>> {
        return this.client.http<IDeleteUserFavoriteListingsParameters, TResult>("/users/:user_id/favorites/listings/:listing_id", parameters, "DELETE");
    }
}
