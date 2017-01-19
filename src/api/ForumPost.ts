import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IForumPost {
    thread_id: number,
    post_id: number,
    post: string,
    user_id: string,
    last_edit_time: number,
    create_date: number
}

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

/**
 * Get a Treasury's Comments
 */
export function findTreasuryComments<TResult>(parameters: IFindTreasuryCommentsParameters): Bluebird<IStandardResponse<TResult, IFindTreasuryCommentsParameters>> {
    return request<IStandardResponse<TResult, IFindTreasuryCommentsParameters>>(parameters, '/treasuries/:treasury_key/comments', 'GET');
}
/**
 * Leave a comment on a Treasury List
 */
export function postTreasuryComment<TResult>(parameters: IPostTreasuryCommentParameters): Bluebird<IStandardResponse<TResult, IPostTreasuryCommentParameters>> {
    return request<IStandardResponse<TResult, IPostTreasuryCommentParameters>>(parameters, '/treasuries/:treasury_key/comments', 'POST');
}
/**
 * Delete a given comment on a Treasury List
 */
export function deleteTreasuryComment<TResult>(parameters: IDeleteTreasuryCommentParameters): Bluebird<IStandardResponse<TResult, IDeleteTreasuryCommentParameters>> {
    return request<IStandardResponse<TResult, IDeleteTreasuryCommentParameters>>(parameters, '/treasuries/:treasury_key/comments/:comment_id', 'DELETE');
}
