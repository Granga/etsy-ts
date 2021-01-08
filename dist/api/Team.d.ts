import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindAllTeamsParameters {
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindTeamsParameters {
    team_ids: (string | number)[];
}
export interface IFindAllTeamsForUserParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class Team {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Returns all Teams
     */
    findAllTeams<TResult>(params: IFindAllTeamsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllTeamsParameters, TResult>>>;
    /**
     * Returns specified team by ID or team name
     */
    findTeams<TResult>(params: IFindTeamsParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindTeamsParameters, TResult>>>;
    /**
     * Returns a list of teams for a specific user
     */
    findAllTeamsForUser<TResult>(params: IFindAllTeamsForUserParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllTeamsForUserParameters, TResult>>>;
}
