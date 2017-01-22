"use strict";
class Team {
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns all Teams
     */
    findAllTeams(parameters) {
        return this.client.http("/teams", parameters, "GET");
    }
    /**
     * Returns specified team by ID or team name
     */
    findTeams(parameters) {
        return this.client.http("/teams/:team_ids/", parameters, "GET");
    }
    /**
     * Returns a list of teams for a specific user
     */
    findAllTeamsForUser(parameters) {
        return this.client.http("/users/:user_id/teams", parameters, "GET");
    }
}
exports.Team = Team;
