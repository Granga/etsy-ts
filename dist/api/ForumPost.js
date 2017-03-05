"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForumPost {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a Treasury's Comments
     */
    findTreasuryComments(parameters) {
        return this.client.http("/treasuries/:treasury_key/comments", parameters, "GET");
    }
    /**
     * Leave a comment on a Treasury List
     */
    postTreasuryComment(parameters) {
        return this.client.http("/treasuries/:treasury_key/comments", parameters, "POST");
    }
    /**
     * Delete a given comment on a Treasury List
     */
    deleteTreasuryComment(parameters) {
        return this.client.http("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE");
    }
}
exports.ForumPost = ForumPost;
