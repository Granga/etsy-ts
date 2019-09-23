import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IForumPost {
    /**
     * Unique identifier of the thread
     */
    thread_id: number,
    /**
     * Id of the individual post
     */
    post_id: number,
    /**
     * The content of the post
     */
    post: string,
    /**
     * Id of the user who created the post
     */
    user_id: string,
    /**
     * When the post was last edited
     */
    last_edit_time: number,
    /**
     * When the post was created
     */
    create_date: number
}

//parameters types
export interface IFindTreasuryCommentsParameters extends IStandardParameters {
    treasury_key: string,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IPostTreasuryCommentParameters extends IStandardParameters {
    message: any
}

export interface IDeleteTreasuryCommentParameters extends IStandardParameters {

}

//methods
/**
 * Get a Treasury's Comments
 */
function findTreasuryComments<TResult>(parameters: IFindTreasuryCommentsParameters, options?: IOptions): Promise<IStandardResponse<IFindTreasuryCommentsParameters, TResult>> {
    return request<IFindTreasuryCommentsParameters, TResult>("/treasuries/:treasury_key/comments", parameters, "GET", options);
}

/**
 * Leave a comment on a Treasury List
 */
function postTreasuryComment<TResult>(parameters: IPostTreasuryCommentParameters, options?: IOptions): Promise<IStandardResponse<IPostTreasuryCommentParameters, TResult>> {
    return request<IPostTreasuryCommentParameters, TResult>("/treasuries/:treasury_key/comments", parameters, "POST", options);
}

/**
 * Delete a given comment on a Treasury List
 */
function deleteTreasuryComment<TResult>(parameters: IDeleteTreasuryCommentParameters, options?: IOptions): Promise<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>> {
    return request<IDeleteTreasuryCommentParameters, TResult>("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE", options);
}

export const ForumPost = {findTreasuryComments, postTreasuryComment, deleteTreasuryComment};
