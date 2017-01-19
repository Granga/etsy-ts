/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
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
export declare function findTreasuryComments<TResult>(parameters: IFindTreasuryCommentsParameters): Bluebird<IStandardResponse<TResult, IFindTreasuryCommentsParameters>>;
/**
* Leave a comment on a Treasury List
*/
export declare function postTreasuryComment<TResult>(parameters: IPostTreasuryCommentParameters): Bluebird<IStandardResponse<TResult, IPostTreasuryCommentParameters>>;
/**
* Delete a given comment on a Treasury List
*/
export declare function deleteTreasuryComment<TResult>(parameters: IDeleteTreasuryCommentParameters): Bluebird<IStandardResponse<TResult, IDeleteTreasuryCommentParameters>>;
