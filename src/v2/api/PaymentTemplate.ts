import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IPaymentTemplate {
    /**
     * The numeric ID for this payment template
     */
    payment_template_id: number,
    /**
     * True if the seller accepts bank transfers for payment
     */
    allow_bt: boolean,
    /**
     * True if the seller accepts checks for payment
     */
    allow_check: boolean,
    /**
     * True if the seller accepts money order payments
     */
    allow_mo: boolean,
    /**
     * True if the seller accepts other payments
     */
    allow_other: boolean,
    /**
     * True if the seller accepts paypal
     */
    allow_paypal: boolean,
    /**
     * True if the seller accepts credit cards
     */
    allow_cc: boolean,
    /**
     * The users paypal email address.
     */
    paypal_email: string,
    /**
     * The name of the seller.
     */
    name: string,
    /**
     * The first line of the seller's address.
     */
    first_line: string,
    /**
     * The second line of the seller's address.
     */
    second_line: string,
    /**
     * The seller's city.
     */
    city: string,
    /**
     * The seller's state.
     */
    state: string,
    /**
     * The seller's zip code.
     */
    zip: string,
    /**
     * The seller's country.
     */
    country_id: number,
    /**
     * The user's numeric ID.
     */
    user_id: number,
    /**
     * Provided for backward compatibility to ListingPayment. This will return the same value as payment_template_id.
     */
    listing_payment_id: number
}

//parameters types
export interface IFindShopPaymentTemplatesParameters {
    shop_id: string | number
}

export interface ICreateShopPaymentTemplateParameters {
    shop_id: string | number,
    allow_check?: boolean,
    allow_mo?: boolean,
    allow_other?: boolean,
    allow_paypal?: boolean,
    allow_cc?: boolean,
    paypal_email?: string,
    name?: string,
    first_line?: string,
    second_line?: string,
    city?: string,
    state?: string,
    zip?: string,
    country_id?: number
}

export interface IUpdateShopPaymentTemplateParameters {
    shop_id: string | number,
    allow_check?: boolean,
    allow_mo?: boolean,
    allow_other?: boolean,
    allow_paypal?: boolean,
    allow_cc?: boolean,
    paypal_email?: string,
    name?: string,
    first_line?: string,
    second_line?: string,
    city?: string,
    state?: string,
    zip?: string,
    country_id?: number,
    payment_template_id: number
}

export interface IFindAllUserPaymentTemplatesParameters {
    user_id: string | number
}

//methods class
export class PaymentTemplate extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves the PaymentTemplate associated with the Shop
     */
    async findShopPaymentTemplates<TResult>(
        params: IFindShopPaymentTemplatesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindShopPaymentTemplatesParameters, TResult>>> {
        return this.request<IFindShopPaymentTemplatesParameters, TResult>("GET", "/shops/:shop_id/payment_templates", params, extra);
    }

    /**
     * Creates a new PaymentTemplate
     */
    async createShopPaymentTemplate<TResult>(
        params: ICreateShopPaymentTemplateParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShopPaymentTemplateParameters, TResult>>> {
        return this.request<ICreateShopPaymentTemplateParameters, TResult>("POST", "/shops/:shop_id/payment_templates", params, extra);
    }

    /**
     * Updates a PaymentTemplate
     */
    async updateShopPaymentTemplate<TResult>(
        params: IUpdateShopPaymentTemplateParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShopPaymentTemplateParameters, TResult>>> {
        return this.request<IUpdateShopPaymentTemplateParameters, TResult>(
            "PUT",
            "/shops/:shop_id/payment_templates/:payment_template_id",
            params,
            extra
        );
    }

    /**
     * Retrieves a set of PaymentTemplate objects associated to a User.
     */
    async findAllUserPaymentTemplates<TResult>(
        params: IFindAllUserPaymentTemplatesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserPaymentTemplatesParameters, TResult>>> {
        return this.request<IFindAllUserPaymentTemplatesParameters, TResult>("GET", "/users/:user_id/payments/templates", params, extra);
    }
}
