import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IFeedback {
    feedback_id: number,
    transaction_id: number,
    creator_user_id: number,
    target_user_id: number,
    seller_user_id: number,
    buyer_user_id: number,
    creation_tsz: number,
    message: string,
    value: number,
    image_feedback_id: number,
    image_url_25x25: string,
    image_url_155x125: string,
    image_url_fullxfull: string
}

//parameters types
export interface IFindAllUserFeedbackAsAuthorParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserFeedbackAsBuyerParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserFeedbackAsSellerParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserFeedbackAsSubjectParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllFeedbackFromBuyersParameters extends IStandardParameters {
    user_id?: string | number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllFeedbackFromSellersParameters extends IStandardParameters {
    user_id?: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsAuthor <TResult>(parameters: IFindAllUserFeedbackAsAuthorParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsAuthorParameters, TResult>> {
    return request<IFindAllUserFeedbackAsAuthorParameters, TResult>("/users/:user_id/feedback/as-author", parameters, "GET", options);
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsBuyer <TResult>(parameters: IFindAllUserFeedbackAsBuyerParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsBuyerParameters, TResult>> {
    return request<IFindAllUserFeedbackAsBuyerParameters, TResult>("/users/:user_id/feedback/as-buyer", parameters, "GET", options);
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSeller <TResult>(parameters: IFindAllUserFeedbackAsSellerParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsSellerParameters, TResult>> {
    return request<IFindAllUserFeedbackAsSellerParameters, TResult>("/users/:user_id/feedback/as-seller", parameters, "GET", options);
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSubject <TResult>(parameters: IFindAllUserFeedbackAsSubjectParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsSubjectParameters, TResult>> {
    return request<IFindAllUserFeedbackAsSubjectParameters, TResult>("/users/:user_id/feedback/as-subject", parameters, "GET", options);
}
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromBuyers <TResult>(parameters: IFindAllFeedbackFromBuyersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeedbackFromBuyersParameters, TResult>> {
    return request<IFindAllFeedbackFromBuyersParameters, TResult>("/users/:user_id/feedback/from-buyers", parameters, "GET", options);
}
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromSellers <TResult>(parameters: IFindAllFeedbackFromSellersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeedbackFromSellersParameters, TResult>> {
    return request<IFindAllFeedbackFromSellersParameters, TResult>("/users/:user_id/feedback/from-sellers", parameters, "GET", options);
}

export const Feedback = {
    findAllUserFeedbackAsAuthor,
    findAllUserFeedbackAsBuyer,
    findAllUserFeedbackAsSeller,
    findAllUserFeedbackAsSubject,
    findAllFeedbackFromBuyers,
    findAllFeedbackFromSellers
};
