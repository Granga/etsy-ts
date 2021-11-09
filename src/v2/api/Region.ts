import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IFindAllRegionParameters {

}
export interface IGetRegionParameters {
    region_id: number[]
}
export interface IFindEligibleRegionsParameters {

}

//methods class
export class Region extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Finds all Region.
     */
    async findAllRegion<TResult>(
        params: IFindAllRegionParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllRegionParameters, TResult>>> {
        return this.request<IFindAllRegionParameters, TResult>("GET", "/regions", params, extra);
    }

    /**
     * Retrieves a Region by id.
     */
    async getRegion<TResult>(
        params: IGetRegionParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetRegionParameters, TResult>>> {
        return this.request<IGetRegionParameters, TResult>("GET", "/regions/:region_id", params, extra);
    }

    /**
     *
     */
    async findEligibleRegions<TResult>(
        params: IFindEligibleRegionsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindEligibleRegionsParameters, TResult>>> {
        return this.request<IFindEligibleRegionsParameters, TResult>("GET", "/regions/eligible", params, extra);
    }
}
