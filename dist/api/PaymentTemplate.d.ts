import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function findShopPaymentTemplates<TResult>(parameters: IFindShopPaymentTemplatesParameters, options?: IOptions): Promise<IStandardResponse<IFindShopPaymentTemplatesParameters, TResult>>;
/**
 * Creates a new PaymentTemplate
 */
declare function createShopPaymentTemplate<TResult>(parameters: ICreateShopPaymentTemplateParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopPaymentTemplateParameters, TResult>>;
/**
 * Updates a PaymentTemplate
 */
declare function updateShopPaymentTemplate<TResult>(parameters: IUpdateShopPaymentTemplateParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopPaymentTemplateParameters, TResult>>;
/**
 * Retrieves a set of PaymentTemplate objects associated to a User.
 */
declare function findAllUserPaymentTemplates<TResult>(parameters: IFindAllUserPaymentTemplatesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserPaymentTemplatesParameters, TResult>>;
export declare const PaymentTemplate: {
    findShopPaymentTemplates: typeof findShopPaymentTemplates;
    createShopPaymentTemplate: typeof createShopPaymentTemplate;
    updateShopPaymentTemplate: typeof updateShopPaymentTemplate;
    findAllUserPaymentTemplates: typeof findAllUserPaymentTemplates;
};
export {};
