"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Upload a new user avatar image
 */
function uploadAvatar(parameters, options) {
    return client_1.request("/users/:user_id/avatar", parameters, "POST", options);
}
/**
 * Get avatar image source
 */
function getAvatarImgSrc(parameters, options) {
    return client_1.request("/users/:user_id/avatar/src", parameters, "GET", options);
}
exports.Avatar = { uploadAvatar, getAvatarImgSrc };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9BdmF0YXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBOERyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLFlBQVksQ0FBVSxVQUFtQyxFQUFFLE9BQWtCO0lBQ2xGLE9BQU8sZ0JBQU8sQ0FBbUMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1RyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBVSxVQUFzQyxFQUFFLE9BQWtCO0lBQ3hGLE9BQU8sZ0JBQU8sQ0FBc0MsNEJBQTRCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsSCxDQUFDO0FBRVksUUFBQSxNQUFNLEdBQUcsRUFBQyxZQUFZLEVBQUUsZUFBZSxFQUFDLENBQUMifQ==