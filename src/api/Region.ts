import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
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
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Finds all Region.
     */
    async findAllRegion<TResult>(
        params: IFindAllRegionParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllRegionParameters, TResult>>> {
        return request<IFindAllRegionParameters, TResult>(
            {...this.config, url: "/regions", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Retrieves a Region by id.
     */
    async getRegion<TResult>(
        params: IGetRegionParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetRegionParameters, TResult>>> {
        return request<IGetRegionParameters, TResult>(
            {...this.config, url: "/regions/:region_id", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     *
     */
    async findEligibleRegions<TResult>(
        params: IFindEligibleRegionsParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindEligibleRegionsParameters, TResult>>> {
        return request<IFindEligibleRegionsParameters, TResult>({
            ...this.config,
            url: "/regions/eligible",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
