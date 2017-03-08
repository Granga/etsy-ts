import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const FavoriteListing: {
    findAllListingFavoredBy: <TResult>(parameters: IFindAllListingFavoredByParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllListingFavoredByParameters, TResult>>;
    findAllUserFavoriteListings: <TResult>(parameters: IFindAllUserFavoriteListingsParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUserFavoriteListingsParameters, TResult>>;
    findUserFavoriteListings: <TResult>(parameters: IFindUserFavoriteListingsParameters, options?: IOptions) => Promise<IStandardResponse<IFindUserFavoriteListingsParameters, TResult>>;
    createUserFavoriteListings: <TResult>(parameters: ICreateUserFavoriteListingsParameters, options?: IOptions) => Promise<IStandardResponse<ICreateUserFavoriteListingsParameters, TResult>>;
    deleteUserFavoriteListings: <TResult>(parameters: IDeleteUserFavoriteListingsParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteUserFavoriteListingsParameters, TResult>>;
};
