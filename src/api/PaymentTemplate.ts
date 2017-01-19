import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

/**
 * Retrieves the PaymentTemplate associated with the Shop
 */
export function findShopPaymentTemplates<TResult>(parameters: IFindShopPaymentTemplatesParameters): Bluebird<IStandardResponse<TResult, IFindShopPaymentTemplatesParameters>> {
    return request<IStandardResponse<TResult, IFindShopPaymentTemplatesParameters>>(parameters, '/shops/:shop_id/payment_templates', 'GET');
}
/**
 * Creates a new PaymentTemplate
 */
export function createShopPaymentTemplate<TResult>(parameters: ICreateShopPaymentTemplateParameters): Bluebird<IStandardResponse<TResult, ICreateShopPaymentTemplateParameters>> {
    return request<IStandardResponse<TResult, ICreateShopPaymentTemplateParameters>>(parameters, '/shops/:shop_id/payment_templates', 'POST');
}
/**
 * Updates a PaymentTemplate
 */
export function updateShopPaymentTemplate<TResult>(parameters: IUpdateShopPaymentTemplateParameters): Bluebird<IStandardResponse<TResult, IUpdateShopPaymentTemplateParameters>> {
    return request<IStandardResponse<TResult, IUpdateShopPaymentTemplateParameters>>(parameters, '/shops/:shop_id/payment_templates/:payment_template_id', 'PUT');
}
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
export function findAllUserPaymentTemplates<TResult>(parameters: IFindAllUserPaymentTemplatesParameters): Bluebird<IStandardResponse<TResult, IFindAllUserPaymentTemplatesParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserPaymentTemplatesParameters>>(parameters, '/users/:user_id/payments/templates', 'GET');
}
