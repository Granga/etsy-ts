import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function findAllTeams <TResult>(parameters: IFindAllTeamsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTeamsParameters, TResult>> {
    return request<IFindAllTeamsParameters, TResult>("/teams", parameters, "GET", options);
}
/**
 * Returns specified team by ID or team name
 */
function findTeams <TResult>(parameters: IFindTeamsParameters, options?: IOptions): Promise<IStandardResponse<IFindTeamsParameters, TResult>> {
    return request<IFindTeamsParameters, TResult>("/teams/:team_ids/", parameters, "GET", options);
}
/**
 * Returns a list of teams for a specific user
 */
function findAllTeamsForUser <TResult>(parameters: IFindAllTeamsForUserParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTeamsForUserParameters, TResult>> {
    return request<IFindAllTeamsForUserParameters, TResult>("/users/:user_id/teams", parameters, "GET", options);
}

export const Team = {findAllTeams, findTeams, findAllTeamsForUser};
