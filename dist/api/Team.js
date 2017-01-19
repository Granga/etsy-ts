"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Returns all Teams
*/
function findAllTeams(parameters) {
    return HttpRequest_1.request(parameters, '/teams', 'GET');
}
exports.findAllTeams = findAllTeams;
/**
* Returns specified team by ID or team name
*/
function findTeams(parameters) {
    return HttpRequest_1.request(parameters, '/teams/:team_ids/', 'GET');
}
exports.findTeams = findTeams;
/**
* Returns a list of teams for a specific user
*/
function findAllTeamsForUser(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/teams', 'GET');
}
exports.findAllTeamsForUser = findAllTeamsForUser;
