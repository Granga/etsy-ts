import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface ITreasury {
    id: string,
    title: string,
    description: string,
    homepage: number,
    mature: boolean,
    private: boolean,
    locale: string,
    comment_count: number,
    tags: string[],
    counts: any,
    hotness: number,
    hotness_color: string,
    user_id: number,
    user_name: string,
    user_avatar_id: number,
    listings: any[],
    creation_tsz: number,
    became_public_date: number
}


export interface IFindAllTreasuriesParameters extends IStandardParameters {
    keywords?: string,
    sort_on?: "hotness"|"created",
    sort_order?: "up"|"down",
    limit?: number,
    offset?: number,
    page?: number
}
export interface IGetTreasuryParameters extends IStandardParameters {
    treasury_key: string
}
export interface IDeleteTreasuryParameters extends IStandardParameters {

}
export interface IFindAllUserTreasuriesParameters extends IStandardParameters {
    user_id: string | number,
    sort_on?: "hotness"|"created",
    sort_order?: "up"|"down",
    include_private?: boolean,
    limit?: number,
    offset?: number,
    page?: number
}

export class Treasury {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Search Treasuries or else List all Treasuries
     */
    findAllTreasuries<TResult>(parameters: IFindAllTreasuriesParameters): Promise<IStandardResponse<IFindAllTreasuriesParameters, TResult>> {
        return this.client.http<IFindAllTreasuriesParameters, TResult>("/treasuries", parameters, "GET");
    }

    /**
     * Get a Treasury
     */
    getTreasury<TResult>(parameters: IGetTreasuryParameters): Promise<IStandardResponse<IGetTreasuryParameters, TResult>> {
        return this.client.http<IGetTreasuryParameters, TResult>("/treasuries/:treasury_key", parameters, "GET");
    }

    /**
     * Delete a Treasury
     */
    deleteTreasury<TResult>(parameters: IDeleteTreasuryParameters): Promise<IStandardResponse<IDeleteTreasuryParameters, TResult>> {
        return this.client.http<IDeleteTreasuryParameters, TResult>("/treasuries/:treasury_key", parameters, "DELETE");
    }

    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    findAllUserTreasuries<TResult>(parameters: IFindAllUserTreasuriesParameters): Promise<IStandardResponse<IFindAllUserTreasuriesParameters, TResult>> {
        return this.client.http<IFindAllUserTreasuriesParameters, TResult>("/users/:user_id/treasuries", parameters, "GET");
    }
}
