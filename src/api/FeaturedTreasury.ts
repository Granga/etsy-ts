import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IFeaturedTreasury {
    /**
     * The string key to identify the Treasury
     */
    treasury_key: string,
    /**
     * The numeric ID for this FeaturedTreasury.
     */
    treasury_id: number,
    /**
     * The user ID of the FeaturedTreasury owner.
     */
    treasury_owner_id: number,
    /**
     * The url to the FeaturedTreasury
     */
    url: string,
    /**
     * The region for which this FeaturedTreasury is active.
     */
    region: string,
    /**
     * The time this FeaturedTreasury is made active on the homepage
     */
    active_date: number
}

//parameters types
export interface IFindAllFeaturedTreasuriesParameters {
    limit?: number,
    offset?: number,
    page?: number,
    region?: string
}

export interface IGetFeaturedTreasuryByIdParameters {
    featured_treasury_id: number
}

export interface IFindAllFeaturedTreasuriesByOwnerParameters {
    limit?: number,
    offset?: number,
    page?: number,
    owner_id: number
}

//methods class
export class FeaturedTreasury {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Finds all FeaturedTreasuries.
     */
    async findAllFeaturedTreasuries<TResult>(
        params: IFindAllFeaturedTreasuriesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>>> {
        return request<IFindAllFeaturedTreasuriesParameters, TResult>({
            ...this.config,
            url: "/featured_treasuries",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    async getFeaturedTreasuryById<TResult>(
        params: IGetFeaturedTreasuryByIdParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>>> {
        return request<IGetFeaturedTreasuryByIdParameters, TResult>({
            ...this.config,
            url: "/featured_treasuries/:featured_treasury_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    async findAllFeaturedTreasuriesByOwner<TResult>(
        params: IFindAllFeaturedTreasuriesByOwnerParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>>> {
        return request<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>({
            ...this.config,
            url: "/featured_treasuries/owner/:owner_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
