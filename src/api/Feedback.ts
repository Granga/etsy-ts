import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export function findAllUserFeedbackAsAuthor<TResult>(parameters: IFindAllUserFeedbackAsAuthorParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsAuthorParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserFeedbackAsAuthorParameters>>(parameters, '/users/:user_id/feedback/as-author', 'GET');
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export function findAllUserFeedbackAsBuyer<TResult>(parameters: IFindAllUserFeedbackAsBuyerParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsBuyerParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserFeedbackAsBuyerParameters>>(parameters, '/users/:user_id/feedback/as-buyer', 'GET');
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export function findAllUserFeedbackAsSeller<TResult>(parameters: IFindAllUserFeedbackAsSellerParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsSellerParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserFeedbackAsSellerParameters>>(parameters, '/users/:user_id/feedback/as-seller', 'GET');
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export function findAllUserFeedbackAsSubject<TResult>(parameters: IFindAllUserFeedbackAsSubjectParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsSubjectParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserFeedbackAsSubjectParameters>>(parameters, '/users/:user_id/feedback/as-subject', 'GET');
}
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
 */
export function findAllFeedbackFromBuyers<TResult>(parameters: IFindAllFeedbackFromBuyersParameters): Bluebird<IStandardResponse<TResult, IFindAllFeedbackFromBuyersParameters>> {
    return request<IStandardResponse<TResult, IFindAllFeedbackFromBuyersParameters>>(parameters, '/users/:user_id/feedback/from-buyers', 'GET');
}
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
 */
export function findAllFeedbackFromSellers<TResult>(parameters: IFindAllFeedbackFromSellersParameters): Bluebird<IStandardResponse<TResult, IFindAllFeedbackFromSellersParameters>> {
    return request<IStandardResponse<TResult, IFindAllFeedbackFromSellersParameters>>(parameters, '/users/:user_id/feedback/from-sellers', 'GET');
}
