import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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
    team_ids: (string | number)[]
}
export interface IFindAllTeamsForUserParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export class Team {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Returns all Teams
     */
    findAllTeams<TResult>(parameters: IFindAllTeamsParameters): Promise<IStandardResponse<IFindAllTeamsParameters, TResult>> {
        return this.client.http<IFindAllTeamsParameters, TResult>("/teams", parameters, "GET");
    }

    /**
     * Returns specified team by ID or team name
     */
    findTeams<TResult>(parameters: IFindTeamsParameters): Promise<IStandardResponse<IFindTeamsParameters, TResult>> {
        return this.client.http<IFindTeamsParameters, TResult>("/teams/:team_ids/", parameters, "GET");
    }

    /**
     * Returns a list of teams for a specific user
     */
    findAllTeamsForUser<TResult>(parameters: IFindAllTeamsForUserParameters): Promise<IStandardResponse<IFindAllTeamsForUserParameters, TResult>> {
        return this.client.http<IFindAllTeamsForUserParameters, TResult>("/users/:user_id/teams", parameters, "GET");
    }
}
