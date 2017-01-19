/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IFeaturedTreasury {
    treasury_key: string;
    treasury_id: number;
    treasury_owner_id: number;
    url: string;
    region: string;
    active_date: number;
}
export interface IFindAllFeaturedTreasuriesParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    region?: string;
}
export interface IGetFeaturedTreasuryByIdParameters extends IStandardParameters {
    featured_treasury_id: number;
}
export interface IFindAllFeaturedTreasuriesByOwnerParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    owner_id: number;
}
/**
* Finds all FeaturedTreasuries.
*/
export declare function findAllFeaturedTreasuries<TResult>(parameters: IFindAllFeaturedTreasuriesParameters): Bluebird<IStandardResponse<TResult, IFindAllFeaturedTreasuriesParameters>>;
/**
* Finds FeaturedTreasury by numeric ID.
*/
export declare function getFeaturedTreasuryById<TResult>(parameters: IGetFeaturedTreasuryByIdParameters): Bluebird<IStandardResponse<TResult, IGetFeaturedTreasuryByIdParameters>>;
/**
* Finds all FeaturedTreasury by numeric owner_id.
*/
export declare function findAllFeaturedTreasuriesByOwner<TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters): Bluebird<IStandardResponse<TResult, IFindAllFeaturedTreasuriesByOwnerParameters>>;
