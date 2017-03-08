import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findAllRegion<TResult>(parameters: IFindAllRegionParameters): Promise<IStandardResponse<IFindAllRegionParameters, TResult>>;
/**
 * Retrieves a Region by id.
 */
export declare function getRegion<TResult>(parameters: IGetRegionParameters): Promise<IStandardResponse<IGetRegionParameters, TResult>>;
/**
 *
 */
export declare function findEligibleRegions<TResult>(parameters: IFindEligibleRegionsParameters): Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>>;
export declare const Region: {
    findAllRegion: <TResult>(parameters: IFindAllRegionParameters) => Promise<IStandardResponse<IFindAllRegionParameters, TResult>>;
    getRegion: <TResult>(parameters: IGetRegionParameters) => Promise<IStandardResponse<IGetRegionParameters, TResult>>;
    findEligibleRegions: <TResult>(parameters: IFindEligibleRegionsParameters) => Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>>;
};
