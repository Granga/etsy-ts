import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
export interface IPaymentTemplate {
    payment_template_id: number;
    allow_bt: boolean;
    allow_check: boolean;
    allow_mo: boolean;
    allow_other: boolean;
    allow_paypal: boolean;
    allow_cc: boolean;
    paypal_email: string;
    name: string;
    first_line: string;
    second_line: string;
    city: string;
    state: string;
    zip: string;
    country_id: number;
    user_id: number;
    listing_payment_id: number;
}
export interface IFindShopPaymentTemplatesParameters extends IStandardParameters {
    shop_id: string | number;
}
export interface ICreateShopPaymentTemplateParameters extends IStandardParameters {
    shop_id: string | number;
    allow_check?: boolean;
    allow_mo?: boolean;
    allow_other?: boolean;
    allow_paypal?: boolean;
    allow_cc?: boolean;
    paypal_email?: string;
    name?: string;
    first_line?: string;
    second_line?: string;
    city?: string;
    state?: string;
    zip?: string;
    country_id?: number;
}
export interface IUpdateShopPaymentTemplateParameters extends IStandardParameters {
    shop_id: string | number;
    allow_check?: boolean;
    allow_mo?: boolean;
    allow_other?: boolean;
    allow_paypal?: boolean;
    allow_cc?: boolean;
    paypal_email?: string;
    name?: string;
    first_line?: string;
    second_line?: string;
    city?: string;
    state?: string;
    zip?: string;
    country_id?: number;
    payment_template_id: number;
}
export interface IFindAllUserPaymentTemplatesParameters extends IStandardParameters {
    user_id: string | number;
}
/**
 * Retrieves the PaymentTemplate associated with the Shop
 */
export declare function findShopPaymentTemplates<TResult>(parameters: IFindShopPaymentTemplatesParameters): Promise<IStandardResponse<IFindShopPaymentTemplatesParameters, TResult>>;
/**
 * Creates a new PaymentTemplate
 */
export declare function createShopPaymentTemplate<TResult>(parameters: ICreateShopPaymentTemplateParameters): Promise<IStandardResponse<ICreateShopPaymentTemplateParameters, TResult>>;
/**
 * Updates a PaymentTemplate
 */
export declare function updateShopPaymentTemplate<TResult>(parameters: IUpdateShopPaymentTemplateParameters): Promise<IStandardResponse<IUpdateShopPaymentTemplateParameters, TResult>>;
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
export declare function findAllUserPaymentTemplates<TResult>(parameters: IFindAllUserPaymentTemplatesParameters): Promise<IStandardResponse<IFindAllUserPaymentTemplatesParameters, TResult>>;
export declare const PaymentTemplate: {
    findShopPaymentTemplates: <TResult>(parameters: IFindShopPaymentTemplatesParameters) => Promise<IStandardResponse<IFindShopPaymentTemplatesParameters, TResult>>;
    createShopPaymentTemplate: <TResult>(parameters: ICreateShopPaymentTemplateParameters) => Promise<IStandardResponse<ICreateShopPaymentTemplateParameters, TResult>>;
    updateShopPaymentTemplate: <TResult>(parameters: IUpdateShopPaymentTemplateParameters) => Promise<IStandardResponse<IUpdateShopPaymentTemplateParameters, TResult>>;
    findAllUserPaymentTemplates: <TResult>(parameters: IFindAllUserPaymentTemplatesParameters) => Promise<IStandardResponse<IFindAllUserPaymentTemplatesParameters, TResult>>;
};
