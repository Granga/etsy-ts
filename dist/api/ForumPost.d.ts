import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IForumPost {
    /**
     * Unique identifier of the thread
     */
    thread_id: number;
    /**
     * Id of the individual post
     */
    post_id: number;
    /**
     * The content of the post
     */
    post: string;
    /**
     * Id of the user who created the post
     */
    user_id: string;
    /**
     * When the post was last edited
     */
    last_edit_time: number;
    /**
     * When the post was created
     */
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
declare function findTreasuryComments<TResult>(parameters: IFindTreasuryCommentsParameters, options?: IOptions): Promise<IStandardResponse<IFindTreasuryCommentsParameters, TResult>>;
/**
 * Leave a comment on a Treasury List
 */
declare function postTreasuryComment<TResult>(parameters: IPostTreasuryCommentParameters, options?: IOptions): Promise<IStandardResponse<IPostTreasuryCommentParameters, TResult>>;
/**
 * Delete a given comment on a Treasury List
 */
declare function deleteTreasuryComment<TResult>(parameters: IDeleteTreasuryCommentParameters, options?: IOptions): Promise<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>>;
export declare const ForumPost: {
    findTreasuryComments: typeof findTreasuryComments;
    postTreasuryComment: typeof postTreasuryComment;
    deleteTreasuryComment: typeof deleteTreasuryComment;
};
export {};
