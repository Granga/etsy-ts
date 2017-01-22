import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IFeaturedTreasury {
    treasury_key: string,
    treasury_id: number,
    treasury_owner_id: number,
    url: string,
    region: string,
    active_date: number
}


export interface IFindAllFeaturedTreasuriesParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    region?: string
}
export interface IGetFeaturedTreasuryByIdParameters extends IStandardParameters {
    featured_treasury_id: number
}
export interface IFindAllFeaturedTreasuriesByOwnerParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    owner_id: number
}

export class FeaturedTreasury {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Finds all FeaturedTreasuries.
     */
    findAllFeaturedTreasuries<TResult>(parameters: IFindAllFeaturedTreasuriesParameters): Promise<IStandardResponse<IFindAllFeaturedTreasuriesParameters, TResult>> {
        return this.client.http<IFindAllFeaturedTreasuriesParameters, TResult>("/featured_treasuries", parameters, "GET");
    }

    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    getFeaturedTreasuryById<TResult>(parameters: IGetFeaturedTreasuryByIdParameters): Promise<IStandardResponse<IGetFeaturedTreasuryByIdParameters, TResult>> {
        return this.client.http<IGetFeaturedTreasuryByIdParameters, TResult>("/featured_treasuries/:featured_treasury_id", parameters, "GET");
    }

    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    findAllFeaturedTreasuriesByOwner<TResult>(parameters: IFindAllFeaturedTreasuriesByOwnerParameters): Promise<IStandardResponse<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>> {
        return this.client.http<IFindAllFeaturedTreasuriesByOwnerParameters, TResult>("/featured_treasuries/owner/:owner_id", parameters, "GET");
    }
}
