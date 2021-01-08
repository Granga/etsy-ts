import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface ITreasury {
    /**
     * Unique id of the collection
     */
    id: string,
    /**
     * Title of the collection
     */
    title: string,
    /**
     * Description of the collection
     */
    description: string,
    /**
     * If the Treasury was featured on the homepage, the time in seconds since the epoch that it was featured
     */
    homepage: number,
    /**
     * Whether the Treasury has been flagged mature or not
     */
    mature: boolean,
    /**
     * Whether the Treasury has been set to private
     */
    private: boolean,
    /**
     * Language/Locale of the collection
     */
    locale: string,
    /**
     * The number of comments on this Treasury
     */
    comment_count: number,
    /**
     * The tags associated with this Treasury
     */
    tags: string[],
    /**
     * Clicks, views, shares, and reports metrics of this collection
     */
    counts: any,
    /**
     * The algorithmic ranking value assigned to this collection
     */
    hotness: number,
    /**
     * The algorithmic ranking value shown as a color (color hexadecimal)
     */
    hotness_color: string,
    /**
     * ID of the user (curator) of the collection
     */
    user_id: number,
    /**
     * Name of the user (curator) of the collection
     */
    user_name: string,
    /**
     * ID of the user's (curator's) avatar
     */
    user_avatar_id: number,
    /**
     * The listings that are in this collection
     */
    listings: any[],
    /**
     * Time this collection was created, in epoch seconds
     */
    creation_tsz: number,
    /**
     * The time that this treasury was published, in epoch seconds
     */
    became_public_date: number
}

//parameters types
export interface IFindAllTreasuriesParameters {
    keywords?: string,
    sort_on?: "hotness" | "created",
    sort_order?: "up" | "down",
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetTreasuryParameters {
    treasury_key: string
}

export interface IDeleteTreasuryParameters {

}

export interface IFindAllUserTreasuriesParameters {
    user_id: string | number,
    sort_on?: "hotness" | "created",
    sort_order?: "up" | "down",
    include_private?: boolean,
    limit?: number,
    offset?: number,
    page?: number
}

//methods class
export class Treasury {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Search Treasuries or else List all Treasuries
     */
    async findAllTreasuries<TResult>(
        params: IFindAllTreasuriesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllTreasuriesParameters, TResult>>> {
        return request<IFindAllTreasuriesParameters, TResult>(
            {...this.config, url: "/treasuries", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Get a Treasury
     */
    async getTreasury<TResult>(
        params: IGetTreasuryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetTreasuryParameters, TResult>>> {
        return request<IGetTreasuryParameters, TResult>({
            ...this.config,
            url: "/treasuries/:treasury_key",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Delete a Treasury
     */
    async deleteTreasury<TResult>(
        params: IDeleteTreasuryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteTreasuryParameters, TResult>>> {
        return request<IDeleteTreasuryParameters, TResult>({
            ...this.config,
            url: "/treasuries/:treasury_key",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    async findAllUserTreasuries<TResult>(
        params: IFindAllUserTreasuriesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserTreasuriesParameters, TResult>>> {
        return request<IFindAllUserTreasuriesParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/treasuries",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
