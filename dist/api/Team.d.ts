import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const Team: {
    findAllTeams: <TResult>(parameters: IFindAllTeamsParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllTeamsParameters, TResult>>;
    findTeams: <TResult>(parameters: IFindTeamsParameters, options?: IOptions) => Promise<IStandardResponse<IFindTeamsParameters, TResult>>;
    findAllTeamsForUser: <TResult>(parameters: IFindAllTeamsForUserParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllTeamsForUserParameters, TResult>>;
};
