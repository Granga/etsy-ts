"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const client_1 = require("../client/client");
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
exports.Team = { findAllTeams, findTeams, findAllTeamsForUser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvVGVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUQ7QUE0Q3JELFNBQVM7QUFDVDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFVLFVBQW1DLEVBQUUsT0FBa0I7SUFDbEYsT0FBTyxnQkFBTyxDQUFtQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFNBQVMsQ0FBVSxVQUFnQyxFQUFFLE9BQWtCO0lBQzVFLE9BQU8sZ0JBQU8sQ0FBZ0MsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuRyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG1CQUFtQixDQUFVLFVBQTBDLEVBQUUsT0FBa0I7SUFDaEcsT0FBTyxnQkFBTyxDQUEwQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2pILENBQUM7QUFFWSxRQUFBLElBQUksR0FBRyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQyJ9