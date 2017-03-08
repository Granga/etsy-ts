import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ITeam {
    group_id: number,
    name: string,
    create_date: number,
    update_date: number,
    tags: string[]
}

//parameters types

export interface IFindAllTeamsParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindTeamsParameters extends IStandardParameters {
    team_ids: (string | number)[]
}
export interface IFindAllTeamsForUserParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods

/**
 * Returns all Teams
 */
export function findAllTeams <TResult>(parameters: IFindAllTeamsParameters): Promise<IStandardResponse<IFindAllTeamsParameters, TResult>> {
    return request<IFindAllTeamsParameters, TResult>("/teams", parameters, "GET");
}
/**
 * Returns specified team by ID or team name
 */
export function findTeams <TResult>(parameters: IFindTeamsParameters): Promise<IStandardResponse<IFindTeamsParameters, TResult>> {
    return request<IFindTeamsParameters, TResult>("/teams/:team_ids/", parameters, "GET");
}
/**
 * Returns a list of teams for a specific user
 */
export function findAllTeamsForUser <TResult>(parameters: IFindAllTeamsForUserParameters): Promise<IStandardResponse<IFindAllTeamsForUserParameters, TResult>> {
    return request<IFindAllTeamsForUserParameters, TResult>("/users/:user_id/teams", parameters, "GET");
}

export const Team = {findAllTeams, findTeams, findAllTeamsForUser};
