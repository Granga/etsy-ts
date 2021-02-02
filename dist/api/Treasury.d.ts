import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface ITreasury {
    /**
     * Unique id of the collection
     */
    id: string;
    /**
     * Title of the collection
     */
    title: string;
    /**
     * Description of the collection
     */
    description: string;
    /**
     * If the Treasury was featured on the homepage, the time in seconds since the epoch that it was featured
     */
    homepage: number;
    /**
     * Whether the Treasury has been flagged mature or not
     */
    mature: boolean;
    /**
     * Whether the Treasury has been set to private
     */
    private: boolean;
    /**
     * Language/Locale of the collection
     */
    locale: string;
    /**
     * The number of comments on this Treasury
     */
    comment_count: number;
    /**
     * The tags associated with this Treasury
     */
    tags: string[];
    /**
     * Clicks, views, shares, and reports metrics of this collection
     */
    counts: any;
    /**
     * The algorithmic ranking value assigned to this collection
     */
    hotness: number;
    /**
     * The algorithmic ranking value shown as a color (color hexadecimal)
     */
    hotness_color: string;
    /**
     * ID of the user (curator) of the collection
     */
    user_id: number;
    /**
     * Name of the user (curator) of the collection
     */
    user_name: string;
    /**
     * ID of the user's (curator's) avatar
     */
    user_avatar_id: number;
    /**
     * The listings that are in this collection
     */
    listings: any[];
    /**
     * Time this collection was created, in epoch seconds
     */
    creation_tsz: number;
    /**
     * The time that this treasury was published, in epoch seconds
     */
    became_public_date: number;
}
export interface IFindAllTreasuriesParameters {
    keywords?: string;
    sort_on?: "hotness" | "created";
    sort_order?: "up" | "down";
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetTreasuryParameters {
    treasury_key: string;
}
export interface IDeleteTreasuryParameters {
}
export interface IFindAllUserTreasuriesParameters {
    user_id: string | number;
    sort_on?: "hotness" | "created";
    sort_order?: "up" | "down";
    include_private?: boolean;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class Treasury {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Search Treasuries or else List all Treasuries
     */
    findAllTreasuries<TResult>(params: IFindAllTreasuriesParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllTreasuriesParameters, TResult>>>;
    /**
     * Get a Treasury
     */
    getTreasury<TResult>(params: IGetTreasuryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetTreasuryParameters, TResult>>>;
    /**
     * Delete a Treasury
     */
    deleteTreasury<TResult>(params: IDeleteTreasuryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IDeleteTreasuryParameters, TResult>>>;
    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    findAllUserTreasuries<TResult>(params: IFindAllUserTreasuriesParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllUserTreasuriesParameters, TResult>>>;
}
