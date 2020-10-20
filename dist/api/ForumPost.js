"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPost = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a Treasury's Comments
 */
function findTreasuryComments(parameters, options) {
    return client_1.request("/treasuries/:treasury_key/comments", parameters, "GET", options);
}
/**
 * Leave a comment on a Treasury List
 */
function postTreasuryComment(parameters, options) {
    return client_1.request("/treasuries/:treasury_key/comments", parameters, "POST", options);
}
/**
 * Delete a given comment on a Treasury List
 */
function deleteTreasuryComment(parameters, options) {
    return client_1.request("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE", options);
}
exports.ForumPost = { findTreasuryComments, postTreasuryComment, deleteTreasuryComment };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ydW1Qb3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9Gb3J1bVBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBOENyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLG9CQUFvQixDQUFVLFVBQTJDLEVBQUUsT0FBa0I7SUFDbEcsT0FBTyxnQkFBTyxDQUEyQyxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9ILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsbUJBQW1CLENBQVUsVUFBMEMsRUFBRSxPQUFrQjtJQUNoRyxPQUFPLGdCQUFPLENBQTBDLG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxxQkFBcUIsQ0FBVSxVQUE0QyxFQUFFLE9BQWtCO0lBQ3BHLE9BQU8sZ0JBQU8sQ0FBNEMsZ0RBQWdELEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvSSxDQUFDO0FBRVksUUFBQSxTQUFTLEdBQUcsRUFBQyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBQyxDQUFDIn0=