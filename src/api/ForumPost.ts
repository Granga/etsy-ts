import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IForumPost {
    thread_id: number,
    post_id: number,
    post: string,
    user_id: string,
    last_edit_time: number,
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
export function findTreasuryComments <TResult>(parameters: IFindTreasuryCommentsParameters): Promise<IStandardResponse<IFindTreasuryCommentsParameters, TResult>> {
    return request<IFindTreasuryCommentsParameters, TResult>("/treasuries/:treasury_key/comments", parameters, "GET");
}
/**
 * Leave a comment on a Treasury List
 */
export function postTreasuryComment <TResult>(parameters: IPostTreasuryCommentParameters): Promise<IStandardResponse<IPostTreasuryCommentParameters, TResult>> {
    return request<IPostTreasuryCommentParameters, TResult>("/treasuries/:treasury_key/comments", parameters, "POST");
}
/**
 * Delete a given comment on a Treasury List
 */
export function deleteTreasuryComment <TResult>(parameters: IDeleteTreasuryCommentParameters): Promise<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>> {
    return request<IDeleteTreasuryCommentParameters, TResult>("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE");
}

export const ForumPost = {findTreasuryComments, postTreasuryComment, deleteTreasuryComment};
