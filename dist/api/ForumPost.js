"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Get a Treasury's Comments
 */
function findTreasuryComments(parameters) {
    return httpClient_1.request("/treasuries/:treasury_key/comments", parameters, "GET");
}
exports.findTreasuryComments = findTreasuryComments;
/**
 * Leave a comment on a Treasury List
 */
function postTreasuryComment(parameters) {
    return httpClient_1.request("/treasuries/:treasury_key/comments", parameters, "POST");
}
exports.postTreasuryComment = postTreasuryComment;
/**
 * Delete a given comment on a Treasury List
 */
function deleteTreasuryComment(parameters) {
    return httpClient_1.request("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE");
}
exports.deleteTreasuryComment = deleteTreasuryComment;
exports.ForumPost = {
    findTreasuryComments: findTreasuryComments,
    postTreasuryComment: postTreasuryComment,
    deleteTreasuryComment: deleteTreasuryComment
};
