import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IFeaturedTreasury {
    treasury_key: string;
    treasury_id: number;
    treasury_owner_id: number;
    url: string;
    region: string;
    active_date: number;
}
export interface IFindAllFeaturedTreasuriesParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    region?: string;
}
export interface IGetFeaturedTreasuryByIdParameters extends IStandardParameters {
    featured_treasury_id: number;
}
export interface IFindAllFeaturedTreasuriesByOwnerParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    owner_id: number;
}
export declare class FeaturedTreasury {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Finds all FeaturedTreasuries.
     */
    findAllFeaturedTreasuries<TResult>(parameters: IFindAllFeaturedTreasuriesParameters): Promise<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>>;
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    getFeaturedTreasuryById<TResult>(parameters: IGetFeaturedTreasuryByIdParameters): Promise<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>>;
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    findAllFeaturedTreasuriesByOwner<TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters): Promise<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>>;
}
