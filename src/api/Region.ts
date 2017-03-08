import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IRegion {
    region_id: number,
    region_name: string,
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
export function findAllRegion <TResult>(parameters: IFindAllRegionParameters): Promise<IStandardResponse<IFindAllRegionParameters, TResult>> {
    return request<IFindAllRegionParameters, TResult>("/regions", parameters, "GET");
}
/**
 * Retrieves a Region by id.
 */
export function getRegion <TResult>(parameters: IGetRegionParameters): Promise<IStandardResponse<IGetRegionParameters, TResult>> {
    return request<IGetRegionParameters, TResult>("/regions/:region_id", parameters, "GET");
}
/**
 *
 */
export function findEligibleRegions <TResult>(parameters: IFindEligibleRegionsParameters): Promise<IStandardResponse<IFindEligibleRegionsParameters, TResult>> {
    return request<IFindEligibleRegionsParameters, TResult>("/regions/eligible", parameters, "GET");
}

export const Region = {findAllRegion, getRegion, findEligibleRegions};
