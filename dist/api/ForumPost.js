import { request } from "../client/client";
//methods class
export class ForumPost {
    /**
     * Get a Treasury's Comments
     */
    static findTreasuryComments(parameters, options) {
        return request("/treasuries/:treasury_key/comments", parameters, "GET", options);
    }
    /**
     * Leave a comment on a Treasury List
     */
    static postTreasuryComment(parameters, options) {
        return request("/treasuries/:treasury_key/comments", parameters, "POST", options);
    }
    /**
     * Delete a given comment on a Treasury List
     */
    static deleteTreasuryComment(parameters, options) {
        return request("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE", options);
    }
}
