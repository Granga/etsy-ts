import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindAllRegionParameters {
}
export interface IGetRegionParameters {
    region_id: number[];
}
export interface IFindEligibleRegionsParameters {
}
export declare class Region {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Finds all Region.
     */
    findAllRegion<TResult>(params: IFindAllRegionParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllRegionParameters, TResult>>>;
    /**
     * Retrieves a Region by id.
     */
    getRegion<TResult>(params: IGetRegionParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetRegionParameters, TResult>>>;
    /**
     *
     */
    findEligibleRegions<TResult>(params: IFindEligibleRegionsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindEligibleRegionsParameters, TResult>>>;
}
