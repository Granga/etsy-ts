"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
* Get a Treasury's Comments
*/
function findTreasuryComments(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries/:treasury_key/comments', 'GET');
}
exports.findTreasuryComments = findTreasuryComments;
/**
* Leave a comment on a Treasury List
*/
function postTreasuryComment(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries/:treasury_key/comments', 'POST');
}
exports.postTreasuryComment = postTreasuryComment;
/**
* Delete a given comment on a Treasury List
*/
function deleteTreasuryComment(parameters) {
    return HttpRequest_1.request(parameters, '/treasuries/:treasury_key/comments/:comment_id', 'DELETE');
}
exports.deleteTreasuryComment = deleteTreasuryComment;
