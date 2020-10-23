"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var client_1 = require("../client/client");
//methods class
var Team = /** @class */ (function () {
    function Team() {
    }
    /**
     * Returns all Teams
     */
    Team.findAllTeams = function (parameters, options) {
        return client_1.request("/teams", parameters, "GET", options);
    };
    /**
     * Returns specified team by ID or team name
     */
    Team.findTeams = function (parameters, options) {
        return client_1.request("/teams/:team_ids/", parameters, "GET", options);
    };
    /**
     * Returns a list of teams for a specific user
     */
    Team.findAllTeamsForUser = function (parameters, options) {
        return client_1.request("/users/:user_id/teams", parameters, "GET", options);
    };
    return Team;
}());
exports.Team = Team;
