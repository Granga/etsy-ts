import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ITeam {
    /**
     * The team's numeric ID.
     */
    group_id: number;
    /**
     * The team's name.
     */
    name: string;
    /**
     * The date and time the team was created in Epoch seconds.
     */
    create_date: number;
    /**
     * The date and time the team was last updated in Epoch seconds.
     */
    update_date: number;
    /**
     * A list of tags describing the team.
     */
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
declare function findAllTeams<TResult>(parameters: IFindAllTeamsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTeamsParameters, TResult>>;
/**
 * Returns specified team by ID or team name
 */
declare function findTeams<TResult>(parameters: IFindTeamsParameters, options?: IOptions): Promise<IStandardResponse<IFindTeamsParameters, TResult>>;
/**
 * Returns a list of teams for a specific user
 */
declare function findAllTeamsForUser<TResult>(parameters: IFindAllTeamsForUserParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTeamsForUserParameters, TResult>>;
export declare const Team: {
    findAllTeams: typeof findAllTeams;
    findTeams: typeof findTeams;
    findAllTeamsForUser: typeof findAllTeamsForUser;
};
export {};
