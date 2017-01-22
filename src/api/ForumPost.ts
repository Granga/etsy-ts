import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class ForumPost {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Get a Treasury's Comments
     */
    findTreasuryComments<TResult>(parameters: IFindTreasuryCommentsParameters): Promise<IStandardResponse<IFindTreasuryCommentsParameters, TResult>> {
        return this.client.http<IFindTreasuryCommentsParameters, TResult>("/treasuries/:treasury_key/comments", parameters, "GET");
    }

    /**
     * Leave a comment on a Treasury List
     */
    postTreasuryComment<TResult>(parameters: IPostTreasuryCommentParameters): Promise<IStandardResponse<IPostTreasuryCommentParameters, TResult>> {
        return this.client.http<IPostTreasuryCommentParameters, TResult>("/treasuries/:treasury_key/comments", parameters, "POST");
    }

    /**
     * Delete a given comment on a Treasury List
     */
    deleteTreasuryComment<TResult>(parameters: IDeleteTreasuryCommentParameters): Promise<IStandardResponse<IDeleteTreasuryCommentParameters, TResult>> {
        return this.client.http<IDeleteTreasuryCommentParameters, TResult>("/treasuries/:treasury_key/comments/:comment_id", parameters, "DELETE");
    }
}
