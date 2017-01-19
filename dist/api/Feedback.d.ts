/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IFeedback {
    feedback_id: number;
    transaction_id: number;
    creator_user_id: number;
    target_user_id: number;
    seller_user_id: number;
    buyer_user_id: number;
    creation_tsz: number;
    message: string;
    value: number;
    image_feedback_id: number;
    image_url_25x25: string;
    image_url_155x125: string;
    image_url_fullxfull: string;
}
export interface IFindAllUserFeedbackAsAuthorParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsBuyerParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsSellerParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsSubjectParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllFeedbackFromBuyersParameters extends IStandardParameters {
    user_id?: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllFeedbackFromSellersParameters extends IStandardParameters {
    user_id?: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export declare function findAllUserFeedbackAsAuthor<TResult>(parameters: IFindAllUserFeedbackAsAuthorParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsAuthorParameters>>;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export declare function findAllUserFeedbackAsBuyer<TResult>(parameters: IFindAllUserFeedbackAsBuyerParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsBuyerParameters>>;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export declare function findAllUserFeedbackAsSeller<TResult>(parameters: IFindAllUserFeedbackAsSellerParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsSellerParameters>>;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
export declare function findAllUserFeedbackAsSubject<TResult>(parameters: IFindAllUserFeedbackAsSubjectParameters): Bluebird<IStandardResponse<TResult, IFindAllUserFeedbackAsSubjectParameters>>;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
 */
export declare function findAllFeedbackFromBuyers<TResult>(parameters: IFindAllFeedbackFromBuyersParameters): Bluebird<IStandardResponse<TResult, IFindAllFeedbackFromBuyersParameters>>;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
 */
export declare function findAllFeedbackFromSellers<TResult>(parameters: IFindAllFeedbackFromSellersParameters): Bluebird<IStandardResponse<TResult, IFindAllFeedbackFromSellersParameters>>;
