import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface IFindAllUserFeedbackAsAuthorParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsBuyerParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsSellerParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserFeedbackAsSubjectParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllFeedbackFromBuyersParameters {
    user_id?: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllFeedbackFromSellersParameters {
    user_id?: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class Feedback {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsAuthor<TResult>(params: IFindAllUserFeedbackAsAuthorParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsAuthorParameters, TResult>>>;
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsBuyer<TResult>(params: IFindAllUserFeedbackAsBuyerParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsBuyerParameters, TResult>>>;
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSeller<TResult>(params: IFindAllUserFeedbackAsSellerParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsSellerParameters, TResult>>>;
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSubject<TResult>(params: IFindAllUserFeedbackAsSubjectParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsSubjectParameters, TResult>>>;
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromBuyers<TResult>(params: IFindAllFeedbackFromBuyersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllFeedbackFromBuyersParameters, TResult>>>;
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromSellers<TResult>(params: IFindAllFeedbackFromSellersParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllFeedbackFromSellersParameters, TResult>>>;
}
