import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface ITeam {
    /**
     * The team's numeric ID.
     */
    group_id: number,
    /**
     * The team's name.
     */
    name: string,
    /**
     * The date and time the team was created in Epoch seconds.
     */
    create_date: number,
    /**
     * The date and time the team was last updated in Epoch seconds.
     */
    update_date: number,
    /**
     * A list of tags describing the team.
     */
    tags: string[]
}

//parameters types
export interface IFindAllTeamsParameters {
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindTeamsParameters {
    team_ids: (string | number)[]
}

export interface IFindAllTeamsForUserParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods class
export class Team {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Returns all Teams
     */
    async findAllTeams<TResult>(
        params: IFindAllTeamsParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllTeamsParameters, TResult>>> {
        return request<IFindAllTeamsParameters, TResult>(
            {...this.config, url: "/teams", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Returns specified team by ID or team name
     */
    async findTeams<TResult>(
        params: IFindTeamsParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindTeamsParameters, TResult>>> {
        return request<IFindTeamsParameters, TResult>(
            {...this.config, url: "/teams/:team_ids/", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Returns a list of teams for a specific user
     */
    async findAllTeamsForUser<TResult>(
        params: IFindAllTeamsForUserParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllTeamsForUserParameters, TResult>>> {
        return request<IFindAllTeamsForUserParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/teams",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
