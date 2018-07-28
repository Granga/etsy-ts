import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function findAllUserFeedbackAsAuthor<TResult>(parameters: IFindAllUserFeedbackAsAuthorParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsAuthorParameters, TResult>>;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
declare function findAllUserFeedbackAsBuyer<TResult>(parameters: IFindAllUserFeedbackAsBuyerParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsBuyerParameters, TResult>>;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
declare function findAllUserFeedbackAsSeller<TResult>(parameters: IFindAllUserFeedbackAsSellerParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsSellerParameters, TResult>>;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
declare function findAllUserFeedbackAsSubject<TResult>(parameters: IFindAllUserFeedbackAsSubjectParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserFeedbackAsSubjectParameters, TResult>>;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
 */
declare function findAllFeedbackFromBuyers<TResult>(parameters: IFindAllFeedbackFromBuyersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeedbackFromBuyersParameters, TResult>>;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
 */
declare function findAllFeedbackFromSellers<TResult>(parameters: IFindAllFeedbackFromSellersParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeedbackFromSellersParameters, TResult>>;
export declare const Feedback: {
    findAllUserFeedbackAsAuthor: typeof findAllUserFeedbackAsAuthor;
    findAllUserFeedbackAsBuyer: typeof findAllUserFeedbackAsBuyer;
    findAllUserFeedbackAsSeller: typeof findAllUserFeedbackAsSeller;
    findAllUserFeedbackAsSubject: typeof findAllUserFeedbackAsSubject;
    findAllFeedbackFromBuyers: typeof findAllFeedbackFromBuyers;
    findAllFeedbackFromSellers: typeof findAllFeedbackFromSellers;
};
export {};
