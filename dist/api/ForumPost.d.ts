import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindTreasuryCommentsParameters {
    treasury_key: string;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IPostTreasuryCommentParameters {
    message: any;
}
export interface IDeleteTreasuryCommentParameters {
}
export declare class ForumPost {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Get a Treasury's Comments
     */
    findTreasuryComments<TResult>(params: IFindTreasuryCommentsParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindTreasuryCommentsParameters, TResult>>>;
    /**
     * Leave a comment on a Treasury List
     */
    postTreasuryComment<TResult>(params: IPostTreasuryCommentParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IPostTreasuryCommentParameters, TResult>>>;
    /**
     * Delete a given comment on a Treasury List
     */
    deleteTreasuryComment<TResult>(params: IDeleteTreasuryCommentParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>>>;
}
