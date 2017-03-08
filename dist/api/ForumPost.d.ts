import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IForumPost {
    thread_id: number;
    post_id: number;
    post: string;
    user_id: string;
    last_edit_time: number;
    create_date: number;
}
export interface IFindTreasuryCommentsParameters extends IStandardParameters {
    treasury_key: string;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IPostTreasuryCommentParameters extends IStandardParameters {
    message: any;
}
export interface IDeleteTreasuryCommentParameters extends IStandardParameters {
}
/**
 * Get a Treasury's Comments
 */
export declare function findTreasuryComments<TResult>(parameters: IFindTreasuryCommentsParameters): Promise<IStandardResponse<IFindTreasuryCommentsParameters, TResult>>;
/**
 * Leave a comment on a Treasury List
 */
export declare function postTreasuryComment<TResult>(parameters: IPostTreasuryCommentParameters): Promise<IStandardResponse<IPostTreasuryCommentParameters, TResult>>;
/**
 * Delete a given comment on a Treasury List
 */
export declare function deleteTreasuryComment<TResult>(parameters: IDeleteTreasuryCommentParameters): Promise<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>>;
export declare const ForumPost: {
    findTreasuryComments: <TResult>(parameters: IFindTreasuryCommentsParameters) => Promise<IStandardResponse<IFindTreasuryCommentsParameters, TResult>>;
    postTreasuryComment: <TResult>(parameters: IPostTreasuryCommentParameters) => Promise<IStandardResponse<IPostTreasuryCommentParameters, TResult>>;
    deleteTreasuryComment: <TResult>(parameters: IDeleteTreasuryCommentParameters) => Promise<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>>;
};
