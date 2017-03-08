"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Returns all Teams
*/
function findAllTeams(parameters, options) {
    return client_1.request("/teams", parameters, "GET", options);
}
/**
* Returns specified team by ID or team name
*/
function findTeams(parameters, options) {
    return client_1.request("/teams/:team_ids/", parameters, "GET", options);
}
/**
* Returns a list of teams for a specific user
*/
function findAllTeamsForUser(parameters, options) {
    return client_1.request("/users/:user_id/teams", parameters, "GET", options);
}
exports.Team = { findAllTeams: findAllTeams, findTeams: findTeams, findAllTeamsForUser: findAllTeamsForUser };
