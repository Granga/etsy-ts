import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
    /**
     * Finds all FeaturedTreasuries.
     */
    static findAllFeaturedTreasuries<TResult>(parameters: IFindAllFeaturedTreasuriesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>>;
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    static getFeaturedTreasuryById<TResult>(parameters: IGetFeaturedTreasuryByIdParameters, options?: IOptions): Promise<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>>;
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    static findAllFeaturedTreasuriesByOwner<TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>>;
}
