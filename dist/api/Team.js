"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Returns all Teams
 */
function findAllTeams(parameters) {
    return httpClient_1.request("/teams", parameters, "GET");
}
exports.findAllTeams = findAllTeams;
/**
 * Returns specified team by ID or team name
 */
function findTeams(parameters) {
    return httpClient_1.request("/teams/:team_ids/", parameters, "GET");
}
exports.findTeams = findTeams;
/**
 * Returns a list of teams for a specific user
 */
function findAllTeamsForUser(parameters) {
    return httpClient_1.request("/users/:user_id/teams", parameters, "GET");
}
exports.findAllTeamsForUser = findAllTeamsForUser;
exports.Team = {findAllTeams: findAllTeams, findTeams: findTeams, findAllTeamsForUser: findAllTeamsForUser};
