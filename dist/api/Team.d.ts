/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface ITeam {
    group_id: number;
    name: string;
    create_date: number;
    update_date: number;
    tags: string[];
}
export interface IFindAllTeamsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindTeamsParameters extends IStandardParameters {
    team_ids: string | number[];
}
export interface IFindAllTeamsForUserParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
/**
* Returns all Teams
*/
export declare function findAllTeams<TResult>(parameters: IFindAllTeamsParameters): Bluebird<IStandardResponse<TResult, IFindAllTeamsParameters>>;
/**
* Returns specified team by ID or team name
*/
export declare function findTeams<TResult>(parameters: IFindTeamsParameters): Bluebird<IStandardResponse<TResult, IFindTeamsParameters>>;
/**
* Returns a list of teams for a specific user
*/
export declare function findAllTeamsForUser<TResult>(parameters: IFindAllTeamsForUserParameters): Bluebird<IStandardResponse<TResult, IFindAllTeamsForUserParameters>>;
