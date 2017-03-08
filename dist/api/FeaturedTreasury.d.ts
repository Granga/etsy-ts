import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
/**
 * Finds all FeaturedTreasuries.
 */
export declare function findAllFeaturedTreasuries<TResult>(parameters: IFindAllFeaturedTreasuriesParameters): Promise<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>>;
/**
 * Finds FeaturedTreasury by numeric ID.
 */
export declare function getFeaturedTreasuryById<TResult>(parameters: IGetFeaturedTreasuryByIdParameters): Promise<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>>;
/**
 * Finds all FeaturedTreasury by numeric owner_id.
 */
export declare function findAllFeaturedTreasuriesByOwner<TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters): Promise<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>>;
export declare const FeaturedTreasury: {
    findAllFeaturedTreasuries: <TResult>(parameters: IFindAllFeaturedTreasuriesParameters) => Promise<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>>;
    getFeaturedTreasuryById: <TResult>(parameters: IGetFeaturedTreasuryByIdParameters) => Promise<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>>;
    findAllFeaturedTreasuriesByOwner: <TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters) => Promise<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>>;
};
