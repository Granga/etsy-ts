import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IUserProfile {
    user_profile_id: number,
    user_id: number,
    login_name: string,
    bio: string,
    gender: string,
    birth_month: string,
    birth_day: string,
    birth_year: string,
    join_tsz: number,
    materials: string,
    country_id: number,
    region: string,
    city: string,
    location: string,
    avatar_id: number,
    lat: number,
    lon: number,
    transaction_buy_count: number,
    transaction_sold_count: number,
    is_seller: boolean,
    image_url_75x75: string,
    first_name: string,
    last_name: string
}

//parameters types
export interface IFindUserProfileParameters extends IStandardParameters {
    user_id: string | number
}
export interface IUpdateUserProfileParameters extends IStandardParameters {
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

//methods
/**
 * Returns the UserProfile object associated with a User.
 */
function findUserProfile <TResult>(parameters: IFindUserProfileParameters, options?: IOptions): Promise<IStandardResponse<IFindUserProfileParameters, TResult>> {
    return request<IFindUserProfileParameters, TResult>("/users/:user_id/profile", parameters, "GET", options);
}
/**
 * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
 */
function updateUserProfile <TResult>(parameters: IUpdateUserProfileParameters, options?: IOptions): Promise<IStandardResponse<IUpdateUserProfileParameters, TResult>> {
    return request<IUpdateUserProfileParameters, TResult>("/users/:user_id/profile", parameters, "PUT", options);
}

export const UserProfile = {findUserProfile, updateUserProfile};
