import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IFeaturedTreasury {
    treasury_key: string,
    treasury_id: number,
    treasury_owner_id: number,
    url: string,
    region: string,
    active_date: number
}

//parameters types
export interface IFindAllFeaturedTreasuriesParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    region?: string
}
export interface IGetFeaturedTreasuryByIdParameters extends IStandardParameters {
    featured_treasury_id: number
}
export interface IFindAllFeaturedTreasuriesByOwnerParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    owner_id: number
}

//methods
/**
 * Finds all FeaturedTreasuries.
 */
function findAllFeaturedTreasuries <TResult>(parameters: IFindAllFeaturedTreasuriesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>> {
    return request<IFindAllFeaturedTreasuriesParameters, TResult>("/featured_treasuries", parameters, "GET", options);
}
/**
 * Finds FeaturedTreasury by numeric ID.
 */
function getFeaturedTreasuryById <TResult>(parameters: IGetFeaturedTreasuryByIdParameters, options?: IOptions): Promise<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>> {
    return request<IGetFeaturedTreasuryByIdParameters, TResult>("/featured_treasuries/:featured_treasury_id", parameters, "GET", options);
}
/**
 * Finds all FeaturedTreasury by numeric owner_id.
 */
function findAllFeaturedTreasuriesByOwner <TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>> {
    return request<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>("/featured_treasuries/owner/:owner_id", parameters, "GET", options);
}

export const FeaturedTreasury = {findAllFeaturedTreasuries, getFeaturedTreasuryById, findAllFeaturedTreasuriesByOwner};
