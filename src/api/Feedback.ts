import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IFeedback {
    /**
     * The feedback record's numeric ID.
     */
    feedback_id: number,
    /**
     * The transaction's numeric ID.
     */
    transaction_id: number,
    /**
     * The numeric ID of the user who wrote this feedback.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    creator_user_id: number,
    /**
     * The numeric ID of the user who received this feedback.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    target_user_id: number,
    /**
     * The numeric ID of the user who was the seller in this transaction.
     */
    seller_user_id: number,
    /**
     * The numeric ID of the user who was the buyer in this transaction.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    buyer_user_id: number,
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number,
    /**
     * A message left by the author, explaining the feedback.
     */
    message: string,
    /**
     * The feedback's value; 1 is positive, -1 is negative, and 0 is neutral.
     */
    value: number,
    /**
     * The numeric ID of the feedback's image (if present).  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_feedback_id: number,
    /**
     * The url to a photo provided with the feedback, dimensions 25x25.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_25x25: string,
    /**
     * The url to a photo provided with the feedback, dimensions 155x125.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_155x125: string,
    /**
     * The url to a photo provided with the feedback, dimensions fullxfull.  Note: This field may be absent, depending on the buyer's privacy settings.
     */
    image_url_fullxfull: string
}

//parameters types
export interface IFindAllUserFeedbackAsAuthorParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllUserFeedbackAsBuyerParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllUserFeedbackAsSellerParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllUserFeedbackAsSubjectParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllFeedbackFromBuyersParameters {
    user_id?: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IFindAllFeedbackFromSellersParameters {
    user_id?: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods class
export class Feedback {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    async findAllUserFeedbackAsAuthor<TResult>(
        params: IFindAllUserFeedbackAsAuthorParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsAuthorParameters, TResult>>> {
        return request<IFindAllUserFeedbackAsAuthorParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/feedback/as-author",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    async findAllUserFeedbackAsBuyer<TResult>(
        params: IFindAllUserFeedbackAsBuyerParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsBuyerParameters, TResult>>> {
        return request<IFindAllUserFeedbackAsBuyerParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/feedback/as-buyer",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    async findAllUserFeedbackAsSeller<TResult>(
        params: IFindAllUserFeedbackAsSellerParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsSellerParameters, TResult>>> {
        return request<IFindAllUserFeedbackAsSellerParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/feedback/as-seller",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    async findAllUserFeedbackAsSubject<TResult>(
        params: IFindAllUserFeedbackAsSubjectParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserFeedbackAsSubjectParameters, TResult>>> {
        return request<IFindAllUserFeedbackAsSubjectParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/feedback/as-subject",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    async findAllFeedbackFromBuyers<TResult>(
        params: IFindAllFeedbackFromBuyersParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllFeedbackFromBuyersParameters, TResult>>> {
        return request<IFindAllFeedbackFromBuyersParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/feedback/from-buyers",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    async findAllFeedbackFromSellers<TResult>(
        params: IFindAllFeedbackFromSellersParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllFeedbackFromSellersParameters, TResult>>> {
        return request<IFindAllFeedbackFromSellersParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/feedback/from-sellers",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
