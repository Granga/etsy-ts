import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class FeaturedTreasury extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Finds all FeaturedTreasuries.
     */
    async findAllFeaturedTreasuries<TResult>(
        params: IFindAllFeaturedTreasuriesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>>> {
        return this.request<IFindAllFeaturedTreasuriesParameters, TResult>("GET", "/featured_treasuries", params, extra);
    }

    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    async getFeaturedTreasuryById<TResult>(
        params: IGetFeaturedTreasuryByIdParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>>> {
        return this.request<IGetFeaturedTreasuryByIdParameters, TResult>("GET", "/featured_treasuries/:featured_treasury_id", params, extra);
    }

    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    async findAllFeaturedTreasuriesByOwner<TResult>(
        params: IFindAllFeaturedTreasuriesByOwnerParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>>> {
        return this.request<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>("GET", "/featured_treasuries/owner/:owner_id", params, extra);
    }
}
