import { request } from "../client/client";
//methods class
export class Team {
    /**
     * Returns all Teams
     */
    static findAllTeams(parameters, options) {
        return request("/teams", parameters, "GET", options);
    }
    /**
     * Returns specified team by ID or team name
     */
    static findTeams(parameters, options) {
        return request("/teams/:team_ids/", parameters, "GET", options);
    }
    /**
     * Returns a list of teams for a specific user
     */
    static findAllTeamsForUser(parameters, options) {
        return request("/users/:user_id/teams", parameters, "GET", options);
    }
}
