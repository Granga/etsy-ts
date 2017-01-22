import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare class Region {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Finds all Region.
     */
    findAllRegion<TResult>(parameters: IFindAllRegionParameters): Promise<IStandardResponse<IFindAllRegionParameters, TResult>>;
    /**
     * Retrieves a Region by id.
     */
    getRegion<TResult>(parameters: IGetRegionParameters): Promise<IStandardResponse<IGetRegionParameters, TResult>>;
    /**
     *
     */
    findEligibleRegions<TResult>(parameters: IFindEligibleRegionsParameters): Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>>;
}
