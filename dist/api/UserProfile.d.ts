import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IUserProfile {
    user_profile_id: number;
    user_id: number;
    login_name: string;
    bio: string;
    gender: string;
    birth_month: string;
    birth_day: string;
    birth_year: string;
    join_tsz: number;
    materials: string;
    country_id: number;
    region: string;
    city: string;
    location: string;
    avatar_id: number;
    lat: number;
    lon: number;
    transaction_buy_count: number;
    transaction_sold_count: number;
    is_seller: boolean;
    image_url_75x75: string;
    first_name: string;
    last_name: string;
}
export interface IFindUserProfileParameters extends IStandardParameters {
    user_id: string | number;
}
export interface IUpdateUserProfileParameters extends IStandardParameters {
    user_id: string | number;
    bio?: string;
    gender?: string;
    birth_month?: number;
    birth_day?: number;
    birth_year?: number;
    materials?: string;
    country_id?: string;
    region?: string;
    city?: string;
}
/**
 * Returns the UserProfile object associated with a User.
 */
export declare function findUserProfile<TResult>(parameters: IFindUserProfileParameters): Promise<IStandardResponse<IFindUserProfileParameters, TResult>>;
/**
 * Updates the UserProfile object associated with a User. Notes:Name changes are subject to admin review and therefore unavailable via the API.Materials must be provided as a period-separated list of ASCII words.
 */
export declare function updateUserProfile<TResult>(parameters: IUpdateUserProfileParameters): Promise<IStandardResponse<IUpdateUserProfileParameters, TResult>>;
export declare const UserProfile: {
    findUserProfile: <TResult>(parameters: IFindUserProfileParameters) => Promise<IStandardResponse<IFindUserProfileParameters, TResult>>;
    updateUserProfile: <TResult>(parameters: IUpdateUserProfileParameters) => Promise<IStandardResponse<IUpdateUserProfileParameters, TResult>>;
};
