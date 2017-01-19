import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IFeaturedTreasury {
    treasury_key: string,
    treasury_id: number,
    treasury_owner_id: number,
    url: string,
    region: string,
    active_date: number
}

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

/**
 * Finds all FeaturedTreasuries.
 */
export function findAllFeaturedTreasuries<TResult>(parameters: IFindAllFeaturedTreasuriesParameters): Bluebird<IStandardResponse<TResult, IFindAllFeaturedTreasuriesParameters>> {
    return request<IStandardResponse<TResult, IFindAllFeaturedTreasuriesParameters>>(parameters, '/featured_treasuries', 'GET');
}
/**
 * Finds FeaturedTreasury by numeric ID.
 */
export function getFeaturedTreasuryById<TResult>(parameters: IGetFeaturedTreasuryByIdParameters): Bluebird<IStandardResponse<TResult, IGetFeaturedTreasuryByIdParameters>> {
    return request<IStandardResponse<TResult, IGetFeaturedTreasuryByIdParameters>>(parameters, '/featured_treasuries/:featured_treasury_id', 'GET');
}
/**
 * Finds all FeaturedTreasury by numeric owner_id.
 */
export function findAllFeaturedTreasuriesByOwner<TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters): Bluebird<IStandardResponse<TResult, IFindAllFeaturedTreasuriesByOwnerParameters>> {
    return request<IStandardResponse<TResult, IFindAllFeaturedTreasuriesByOwnerParameters>>(parameters, '/featured_treasuries/owner/:owner_id', 'GET');
}
