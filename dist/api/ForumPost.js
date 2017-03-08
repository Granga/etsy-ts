"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
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
exports.ForumPost = { findTreasuryComments: findTreasuryComments, postTreasuryComment: postTreasuryComment, deleteTreasuryComment: deleteTreasuryComment };
