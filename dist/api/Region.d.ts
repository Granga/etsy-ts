/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IRegion {
    region_id: number;
    region_name: string;
    is_dead: boolean;
}
export interface IFindAllRegionParameters extends IStandardParameters {
}
export interface IGetRegionParameters extends IStandardParameters {
    region_id: number[];
}
export interface IFindEligibleRegionsParameters extends IStandardParameters {
}
/**
 * Finds all Region.
 */
export declare function findAllRegion<TResult>(parameters: IFindAllRegionParameters): Bluebird<IStandardResponse<TResult, IFindAllRegionParameters>>;
/**
 * Retrieves a Region by id.
 */
export declare function getRegion<TResult>(parameters: IGetRegionParameters): Bluebird<IStandardResponse<TResult, IGetRegionParameters>>;
/**
 *
 */
export declare function findEligibleRegions<TResult>(parameters: IFindEligibleRegionsParameters): Bluebird<IStandardResponse<TResult, IFindEligibleRegionsParameters>>;
