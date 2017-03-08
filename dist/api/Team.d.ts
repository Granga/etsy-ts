import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
    team_ids: (string | number)[];
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
export declare function findAllTeams<TResult>(parameters: IFindAllTeamsParameters): Promise<IStandardResponse<IFindAllTeamsParameters, TResult>>;
/**
 * Returns specified team by ID or team name
 */
export declare function findTeams<TResult>(parameters: IFindTeamsParameters): Promise<IStandardResponse<IFindTeamsParameters, TResult>>;
/**
 * Returns a list of teams for a specific user
 */
export declare function findAllTeamsForUser<TResult>(parameters: IFindAllTeamsForUserParameters): Promise<IStandardResponse<IFindAllTeamsForUserParameters, TResult>>;
export declare const Team: {
    findAllTeams: <TResult>(parameters: IFindAllTeamsParameters) => Promise<IStandardResponse<IFindAllTeamsParameters, TResult>>;
    findTeams: <TResult>(parameters: IFindTeamsParameters) => Promise<IStandardResponse<IFindTeamsParameters, TResult>>;
    findAllTeamsForUser: <TResult>(parameters: IFindAllTeamsForUserParameters) => Promise<IStandardResponse<IFindAllTeamsForUserParameters, TResult>>;
};
