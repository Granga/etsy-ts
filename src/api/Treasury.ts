import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ITreasury {
    id: string,
    title: string,
    description: string,
    homepage: number,
    mature: boolean,
    private: boolean,
    locale: string,
    comment_count: number,
    tags: string[],
    counts: any,
    hotness: number,
    hotness_color: string,
    user_id: number,
    user_name: string,
    user_avatar_id: number,
    listings: any[],
    creation_tsz: number,
    became_public_date: number
}

//parameters types
export interface IFindAllTreasuriesParameters extends IStandardParameters {
    keywords?: string,
    sort_on?: "hotness"|"created",
    sort_order?: "up"|"down",
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetTreasuryParameters extends IStandardParameters {
    treasury_key: string
}
export interface IDeleteTreasuryParameters extends IStandardParameters {

}
export interface IFindAllUserTreasuriesParameters extends IStandardParameters {
    user_id: string | number,
    sort_on?: "hotness"|"created",
    sort_order?: "up"|"down",
    include_private?: boolean,
    limit?: number,
    offset?: number,
    page?: number
}

//methods
/**
 * Search Treasuries or else List all Treasuries
 */
function findAllTreasuries <TResult>(parameters: IFindAllTreasuriesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTreasuriesParameters, TResult>> {
    return request<IFindAllTreasuriesParameters, TResult>("/treasuries", parameters, "GET", options);
}
/**
 * Get a Treasury
 */
function getTreasury <TResult>(parameters: IGetTreasuryParameters, options?: IOptions): Promise<IStandardResponse<IGetTreasuryParameters, TResult>> {
    return request<IGetTreasuryParameters, TResult>("/treasuries/:treasury_key", parameters, "GET", options);
}
/**
 * Delete a Treasury
 */
function deleteTreasury <TResult>(parameters: IDeleteTreasuryParameters, options?: IOptions): Promise<IStandardResponse<IDeleteTreasuryParameters, TResult>> {
    return request<IDeleteTreasuryParameters, TResult>("/treasuries/:treasury_key", parameters, "DELETE", options);
}
/**
 * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
 */
function findAllUserTreasuries <TResult>(parameters: IFindAllUserTreasuriesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserTreasuriesParameters, TResult>> {
    return request<IFindAllUserTreasuriesParameters, TResult>("/users/:user_id/treasuries", parameters, "GET", options);
}

export const Treasury = {findAllTreasuries, getTreasury, deleteTreasury, findAllUserTreasuries};
