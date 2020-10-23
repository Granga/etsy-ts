"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPost = void 0;
var client_1 = require("../client/client");
//methods class
var ForumPost = /** @class */ (function () {
    function ForumPost() {
    }
    /**
     * Get a Treasury's Comments
     */
    ForumPost.findTreasuryComments = function (parameters, options) {
        return client_1.request("/treasuries/:treasury_key/comments", parameters, "GET", options);
    };
    /**
     * Leave a comment on a Treasury List
     */
    ForumPost.postTreasuryComment = function (parameters, options) {
        return client_1.request("/treasuries/:treasury_key/comments", parameters, "POST", options);
    };
    /**
     * Delete a given comment on a Treasury List
     */
    ForumPost.deleteTreasuryComment = function (parameters, options) {
        return client_1.request("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE", options);
    };
    return ForumPost;
}());
exports.ForumPost = ForumPost;
