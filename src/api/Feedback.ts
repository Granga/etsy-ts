import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class Feedback {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsAuthor<TResult>(parameters: IFindAllUserFeedbackAsAuthorParameters): Promise<IStandardResponse<IFindAllUserFeedbackAsAuthorParameters, TResult>> {
        return this.client.http<IFindAllUserFeedbackAsAuthorParameters, TResult>("/users/:user_id/feedback/as-author", parameters, "GET");
    }

    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsBuyer<TResult>(parameters: IFindAllUserFeedbackAsBuyerParameters): Promise<IStandardResponse<IFindAllUserFeedbackAsBuyerParameters, TResult>> {
        return this.client.http<IFindAllUserFeedbackAsBuyerParameters, TResult>("/users/:user_id/feedback/as-buyer", parameters, "GET");
    }

    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSeller<TResult>(parameters: IFindAllUserFeedbackAsSellerParameters): Promise<IStandardResponse<IFindAllUserFeedbackAsSellerParameters, TResult>> {
        return this.client.http<IFindAllUserFeedbackAsSellerParameters, TResult>("/users/:user_id/feedback/as-seller", parameters, "GET");
    }

    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSubject<TResult>(parameters: IFindAllUserFeedbackAsSubjectParameters): Promise<IStandardResponse<IFindAllUserFeedbackAsSubjectParameters, TResult>> {
        return this.client.http<IFindAllUserFeedbackAsSubjectParameters, TResult>("/users/:user_id/feedback/as-subject", parameters, "GET");
    }

    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromBuyers<TResult>(parameters: IFindAllFeedbackFromBuyersParameters): Promise<IStandardResponse<IFindAllFeedbackFromBuyersParameters, TResult>> {
        return this.client.http<IFindAllFeedbackFromBuyersParameters, TResult>("/users/:user_id/feedback/from-buyers", parameters, "GET");
    }

    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromSellers<TResult>(parameters: IFindAllFeedbackFromSellersParameters): Promise<IStandardResponse<IFindAllFeedbackFromSellersParameters, TResult>> {
        return this.client.http<IFindAllFeedbackFromSellersParameters, TResult>("/users/:user_id/feedback/from-sellers", parameters, "GET");
    }
}
