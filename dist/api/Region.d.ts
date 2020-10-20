import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IRegion {
    /**
     * The numeric ID of this region.
     */
    region_id: number;
    /**
     * The name of the region.
     */
    region_name: string;
    /**
     * The eligibilty of this region to be used
     */
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
declare function findAllRegion<TResult>(parameters: IFindAllRegionParameters, options?: IOptions): Promise<IStandardResponse<IFindAllRegionParameters, TResult>>;
/**
 * Retrieves a Region by id.
 */
declare function getRegion<TResult>(parameters: IGetRegionParameters, options?: IOptions): Promise<IStandardResponse<IGetRegionParameters, TResult>>;
/**
 *
 */
declare function findEligibleRegions<TResult>(parameters: IFindEligibleRegionsParameters, options?: IOptions): Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>>;
export declare const Region: {
    findAllRegion: typeof findAllRegion;
    getRegion: typeof getRegion;
    findEligibleRegions: typeof findEligibleRegions;
};
export {};
