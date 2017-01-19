/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface ITreasury {
    id: string;
    title: string;
    description: string;
    homepage: number;
    mature: boolean;
    private: boolean;
    locale: string;
    comment_count: number;
    tags: string[];
    counts: any;
    hotness: number;
    hotness_color: string;
    user_id: number;
    user_name: string;
    user_avatar_id: number;
    listings: any[];
    creation_tsz: number;
    became_public_date: number;
}
export interface IFindAllTreasuriesParameters extends IStandardParameters {
    keywords?: string;
    sort_on?: "hotness" | "created";
    sort_order?: "up" | "down";
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetTreasuryParameters extends IStandardParameters {
    treasury_key: string;
}
export interface IDeleteTreasuryParameters extends IStandardParameters {
}
export interface IFindAllUserTreasuriesParameters extends IStandardParameters {
    user_id: string | number;
    sort_on?: "hotness" | "created";
    sort_order?: "up" | "down";
    include_private?: boolean;
    limit?: number;
    offset?: number;
    page?: number;
}
/**
* Search Treasuries or else List all Treasuries
*/
export declare function findAllTreasuries<TResult>(parameters: IFindAllTreasuriesParameters): Bluebird<IStandardResponse<TResult, IFindAllTreasuriesParameters>>;
/**
* Get a Treasury
*/
export declare function getTreasury<TResult>(parameters: IGetTreasuryParameters): Bluebird<IStandardResponse<TResult, IGetTreasuryParameters>>;
/**
* Delete a Treasury
*/
export declare function deleteTreasury<TResult>(parameters: IDeleteTreasuryParameters): Bluebird<IStandardResponse<TResult, IDeleteTreasuryParameters>>;
/**
* Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
*/
export declare function findAllUserTreasuries<TResult>(parameters: IFindAllUserTreasuriesParameters): Bluebird<IStandardResponse<TResult, IFindAllUserTreasuriesParameters>>;
