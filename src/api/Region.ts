import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IRegion {
    region_id: number,
    region_name: string,
    is_dead: boolean
}

export interface IFindAllRegionParameters extends IStandardParameters {

}
export interface IGetRegionParameters extends IStandardParameters {
    region_id: number[]
}
export interface IFindEligibleRegionsParameters extends IStandardParameters {

}

/**
 * Finds all Region.
 */
export function findAllRegion<TResult>(parameters: IFindAllRegionParameters): Bluebird<IStandardResponse<TResult, IFindAllRegionParameters>> {
    return request<IStandardResponse<TResult, IFindAllRegionParameters>>(parameters, '/regions', 'GET');
}
/**
 * Retrieves a Region by id.
 */
export function getRegion<TResult>(parameters: IGetRegionParameters): Bluebird<IStandardResponse<TResult, IGetRegionParameters>> {
    return request<IStandardResponse<TResult, IGetRegionParameters>>(parameters, '/regions/:region_id', 'GET');
}
/**
 *
 */
export function findEligibleRegions<TResult>(parameters: IFindEligibleRegionsParameters): Bluebird<IStandardResponse<TResult, IFindEligibleRegionsParameters>> {
    return request<IStandardResponse<TResult, IFindEligibleRegionsParameters>>(parameters, '/regions/eligible', 'GET');
}
