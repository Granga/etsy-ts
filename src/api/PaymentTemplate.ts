import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IPaymentTemplate {
    payment_template_id: number,
    allow_bt: boolean,
    allow_check: boolean,
    allow_mo: boolean,
    allow_other: boolean,
    allow_paypal: boolean,
    allow_cc: boolean,
    paypal_email: string,
    name: string,
    first_line: string,
    second_line: string,
    city: string,
    state: string,
    zip: string,
    country_id: number,
    user_id: number,
    listing_payment_id: number
}

//parameters types

export interface IFindShopPaymentTemplatesParameters extends IStandardParameters {
    shop_id: string | number
}
export interface ICreateShopPaymentTemplateParameters extends IStandardParameters {
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
export interface IUpdateShopPaymentTemplateParameters extends IStandardParameters {
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
export interface IFindAllUserPaymentTemplatesParameters extends IStandardParameters {
    user_id: string | number
}

//methods

/**
 * Retrieves the PaymentTemplate associated with the Shop
 */
export function findShopPaymentTemplates <TResult>(parameters: IFindShopPaymentTemplatesParameters): Promise<IStandardResponse<IFindShopPaymentTemplatesParameters, TResult>> {
    return request<IFindShopPaymentTemplatesParameters, TResult>("/shops/:shop_id/payment_templates", parameters, "GET");
}
/**
 * Creates a new PaymentTemplate
 */
export function createShopPaymentTemplate <TResult>(parameters: ICreateShopPaymentTemplateParameters): Promise<IStandardResponse<ICreateShopPaymentTemplateParameters, TResult>> {
    return request<ICreateShopPaymentTemplateParameters, TResult>("/shops/:shop_id/payment_templates", parameters, "POST");
}
/**
 * Updates a PaymentTemplate
 */
export function updateShopPaymentTemplate <TResult>(parameters: IUpdateShopPaymentTemplateParameters): Promise<IStandardResponse<IUpdateShopPaymentTemplateParameters, TResult>> {
    return request<IUpdateShopPaymentTemplateParameters, TResult>("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT");
}
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
export function findAllUserPaymentTemplates <TResult>(parameters: IFindAllUserPaymentTemplatesParameters): Promise<IStandardResponse<IFindAllUserPaymentTemplatesParameters, TResult>> {
    return request<IFindAllUserPaymentTemplatesParameters, TResult>("/users/:user_id/payments/templates", parameters, "GET");
}

export const PaymentTemplate = {
    findShopPaymentTemplates,
    createShopPaymentTemplate,
    updateShopPaymentTemplate,
    findAllUserPaymentTemplates
};
