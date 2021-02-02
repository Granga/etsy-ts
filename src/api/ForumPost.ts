import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class ForumPost {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Get a Treasury's Comments
     */
    async findTreasuryComments<TResult>(
        params: IFindTreasuryCommentsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindTreasuryCommentsParameters, TResult>>> {
        return request<IFindTreasuryCommentsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/treasuries/:treasury_key/comments",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Leave a comment on a Treasury List
     */
    async postTreasuryComment<TResult>(
        params: IPostTreasuryCommentParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IPostTreasuryCommentParameters, TResult>>> {
        return request<IPostTreasuryCommentParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/treasuries/:treasury_key/comments",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Delete a given comment on a Treasury List
     */
    async deleteTreasuryComment<TResult>(
        params: IDeleteTreasuryCommentParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>>> {
        return request<IDeleteTreasuryCommentParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/treasuries/:treasury_key/comments/:comment_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
