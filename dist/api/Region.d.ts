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
export declare class Region {
    /**
     * Finds all Region.
     */
    static findAllRegion<TResult>(parameters: IFindAllRegionParameters, options?: IOptions): Promise<IStandardResponse<IFindAllRegionParameters, TResult>>;
    /**
     * Retrieves a Region by id.
     */
    static getRegion<TResult>(parameters: IGetRegionParameters, options?: IOptions): Promise<IStandardResponse<IGetRegionParameters, TResult>>;
    /**
     *
     */
    static findEligibleRegions<TResult>(parameters: IFindEligibleRegionsParameters, options?: IOptions): Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>>;
}
