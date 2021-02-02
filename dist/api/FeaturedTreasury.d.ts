import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IFeaturedTreasury {
    /**
     * The string key to identify the Treasury
     */
    treasury_key: string;
    /**
     * The numeric ID for this FeaturedTreasury.
     */
    treasury_id: number;
    /**
     * The user ID of the FeaturedTreasury owner.
     */
    treasury_owner_id: number;
    /**
     * The url to the FeaturedTreasury
     */
    url: string;
    /**
     * The region for which this FeaturedTreasury is active.
     */
    region: string;
    /**
     * The time this FeaturedTreasury is made active on the homepage
     */
    active_date: number;
}
export interface IFindAllFeaturedTreasuriesParameters {
    limit?: number;
    offset?: number;
    page?: number;
    region?: string;
}
export interface IGetFeaturedTreasuryByIdParameters {
    featured_treasury_id: number;
}
export interface IFindAllFeaturedTreasuriesByOwnerParameters {
    limit?: number;
    offset?: number;
    page?: number;
    owner_id: number;
}
export declare class FeaturedTreasury {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Finds all FeaturedTreasuries.
     */
    findAllFeaturedTreasuries<TResult>(params: IFindAllFeaturedTreasuriesParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>>>;
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    getFeaturedTreasuryById<TResult>(params: IGetFeaturedTreasuryByIdParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>>>;
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    findAllFeaturedTreasuriesByOwner<TResult>(params: IFindAllFeaturedTreasuriesByOwnerParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>>>;
}
