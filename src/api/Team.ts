import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ITeam {
    group_id: number,
    name: string,
    create_date: number,
    update_date: number,
    tags: string[]
}

export interface IFindAllTeamsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindTeamsParameters extends IStandardParameters {
    team_ids: string | number[]
}
export interface IFindAllTeamsForUserParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

/**
 * Returns all Teams
 */
export function findAllTeams<TResult>(parameters: IFindAllTeamsParameters): Bluebird<IStandardResponse<TResult, IFindAllTeamsParameters>> {
    return request<IStandardResponse<TResult, IFindAllTeamsParameters>>(parameters, '/teams', 'GET');
}
/**
 * Returns specified team by ID or team name
 */
export function findTeams<TResult>(parameters: IFindTeamsParameters): Bluebird<IStandardResponse<TResult, IFindTeamsParameters>> {
    return request<IStandardResponse<TResult, IFindTeamsParameters>>(parameters, '/teams/:team_ids/', 'GET');
}
/**
 * Returns a list of teams for a specific user
 */
export function findAllTeamsForUser<TResult>(parameters: IFindAllTeamsForUserParameters): Bluebird<IStandardResponse<TResult, IFindAllTeamsForUserParameters>> {
    return request<IStandardResponse<TResult, IFindAllTeamsForUserParameters>>(parameters, '/users/:user_id/teams', 'GET');
}
