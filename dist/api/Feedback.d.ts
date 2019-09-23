import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IFeedback {
    /**
     * The feedback record's numeric ID.
     */
    feedback_id: number;
    /**
     * The transaction's numeric ID.
     */
    transaction_id: number;
    /**
     * The numeric ID of the user who wrote this feedback.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    creator_user_id: number;
    /**
     * The numeric ID of the user who received this feedback.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    target_user_id: number;
    /**
     * The numeric ID of the user who was the seller in this transaction.
     */
    seller_user_id: number;
    /**
     * The numeric ID of the user who was the buyer in this transaction.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    buyer_user_id: number;
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * A message left by the author, explaining the feedback.
     */
    message: string;
    /**
     * The feedback's value; 1 is positive, -1 is negative, and 0 is neutral.
     */
    value: number;
    /**
     * The numeric ID of the feedback's image (if present).  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_feedback_id: number;
    /**
     * The url to a photo provided with the feedback, dimensions 25x25.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_25x25: string;
    /**
     * The url to a photo provided with the feedback, dimensions 155x125.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_155x125: string;
    /**
     * The url to a photo provided with the feedback, dimensions fullxfull.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
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
