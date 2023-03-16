import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class Team extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Returns all Teams
     */
    async findAllTeams<TResult>(
        params: IFindAllTeamsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllTeamsParameters, TResult>>> {
        return this.request<IFindAllTeamsParameters, TResult>("GET", "/teams", params, extra);
    }

    /**
     * Returns specified team by ID or team name
     */
    async findTeams<TResult>(
        params: IFindTeamsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindTeamsParameters, TResult>>> {
        return this.request<IFindTeamsParameters, TResult>("GET", "/teams/:team_ids/", params, extra);
    }

    /**
     * Returns a list of teams for a specific user
     */
    async findAllTeamsForUser<TResult>(
        params: IFindAllTeamsForUserParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllTeamsForUserParameters, TResult>>> {
        return this.request<IFindAllTeamsForUserParameters, TResult>("GET", "/users/:user_id/teams", params, extra);
    }
}
