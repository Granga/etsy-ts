import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export interface IFindTreasuryCommentsParameters {
    treasury_key: string,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IPostTreasuryCommentParameters {
    message: any
}

export interface IDeleteTreasuryCommentParameters {

}

//methods class
export class ForumPost extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Get a Treasury's Comments
     */
    async findTreasuryComments<TResult>(
        params: IFindTreasuryCommentsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindTreasuryCommentsParameters, TResult>>> {
        return this.request<IFindTreasuryCommentsParameters, TResult>("GET", "/treasuries/:treasury_key/comments", params, extra);
    }

    /**
     * Leave a comment on a Treasury List
     */
    async postTreasuryComment<TResult>(
        params: IPostTreasuryCommentParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IPostTreasuryCommentParameters, TResult>>> {
        return this.request<IPostTreasuryCommentParameters, TResult>("POST", "/treasuries/:treasury_key/comments", params, extra);
    }

    /**
     * Delete a given comment on a Treasury List
     */
    async deleteTreasuryComment<TResult>(
        params: IDeleteTreasuryCommentParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>>> {
        return this.request<IDeleteTreasuryCommentParameters, TResult>("DELETE", "/treasuries/:treasury_key/comments/:comment_id", params, extra);
    }
}
