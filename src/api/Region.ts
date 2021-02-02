import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class Region {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Finds all Region.
     */
    async findAllRegion<TResult>(
        params: IFindAllRegionParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllRegionParameters, TResult>>> {
        return request<IFindAllRegionParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/regions",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a Region by id.
     */
    async getRegion<TResult>(
        params: IGetRegionParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetRegionParameters, TResult>>> {
        return request<IGetRegionParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/regions/:region_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     *
     */
    async findEligibleRegions<TResult>(
        params: IFindEligibleRegionsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindEligibleRegionsParameters, TResult>>> {
        return request<IFindEligibleRegionsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/regions/eligible",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
