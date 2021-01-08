import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IUserProfile {
    /**
     @deprecated
     * The numeric ID of the user profile.

     Deprecated: Do not use
     */
    user_profile_id: number,
    /**
     * The numeric ID of the user this profile corresponds to.
     */
    user_id: number,
    /**
     * The login name of the user that owns this profile.
     */
    login_name: string,
    /**
     * The bio of the user.
     */
    bio: string,
    /**
     * The gender of the user.
     */
    gender: string,
    /**
     * The birth month of the user.
     */
    birth_month: string,
    /**
     * The birth day of the user.
     */
    birth_day: string,
    /**
     * The birth year of the user.
     */
    birth_year: string,
    /**
     * The date and time the user was created, in epoch seconds.
     */
    join_tsz: number,
    /**
     * A list of the user's favorite materials.
     */
    materials: string,
    /**
     * The numeric ID of the user's country.
     */
    country_id: number,
    /**
     * The user's region (free-form text)
     */
    region: string,
    /**
     * The user's city (free-form text)
     */
    city: string,
    /**
     @deprecated
     * The user's location (self-supplied, free-form text).

     Deprecated: Do not use.
     */
    location: string,
    /**
     * The numeric ID of this user's avatar image.
     */
    avatar_id: number,
    /**
     * The latitude of the user.
     */
    lat: number,
    /**
     * The longitude of the user.
     */
    lon: number,
    /**
     * The number of bought items for this user.
     */
    transaction_buy_count: number,
    /**
     * The number of sold transactions for this user.
     */
    transaction_sold_count: number,
    /**
     * If the user is a seller or not. Value true if user is a seller.
     */
    is_seller: boolean,
    /**
     * The URL to the user's avatar image; dimensions 75px square.
     */
    image_url_75x75: string,
    /**
     * The first name of the user.
     */
    first_name: string,
    /**
     * The last name of the user.
     */
    last_name: string
}

//parameters types
export interface IFindUserProfileParameters {
    user_id: string | number
}

export interface IUpdateUserProfileParameters {
    user_id: string | number,
    bio?: string,
    gender?: string,
    birth_month?: number,
    birth_day?: number,
    birth_year?: number,
    materials?: string,
    country_id?: string,
    region?: string,
    city?: string
}

//methods class
export class UserProfile {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Returns the UserProfile object associated with a User.
     */
    async findUserProfile<TResult>(
        params: IFindUserProfileParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindUserProfileParameters, TResult>>> {
        return request<IFindUserProfileParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/profile",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
     */
    async updateUserProfile<TResult>(
        params: IUpdateUserProfileParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateUserProfileParameters, TResult>>> {
        return request<IUpdateUserProfileParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/profile",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
