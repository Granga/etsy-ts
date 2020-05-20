import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IRegion {
    /**
     * The numeric ID of this region.
     */
    region_id: number,
    /**
     * The name of the region.
     */
    region_name: string,
    /**
     * The eligibilty of this region to be used
     */
    is_dead: boolean
}

//parameters types
export interface IFindAllRegionParameters extends IStandardParameters {

}
export interface IGetRegionParameters extends IStandardParameters {
    region_id: number[]
}
export interface IFindEligibleRegionsParameters extends IStandardParameters {

}

//methods
/**
 * Finds all Region.
 */
function findAllRegion<TResult>(parameters: IFindAllRegionParameters, options?: IOptions): Promise<IStandardResponse<IFindAllRegionParameters, TResult>> {
    return request<IFindAllRegionParameters, TResult>("/regions", parameters, "GET", options);
}

/**
 * Retrieves a Region by id.
 */
function getRegion<TResult>(parameters: IGetRegionParameters, options?: IOptions): Promise<IStandardResponse<IGetRegionParameters, TResult>> {
    return request<IGetRegionParameters, TResult>("/regions/:region_id", parameters, "GET", options);
}

/**
 *
 */
function findEligibleRegions<TResult>(parameters: IFindEligibleRegionsParameters, options?: IOptions): Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>> {
    return request<IFindEligibleRegionsParameters, TResult>("/regions/eligible", parameters, "GET", options);
}

export const Region = {findAllRegion, getRegion, findEligibleRegions};
