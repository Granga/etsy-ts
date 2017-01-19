import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IShippingTemplate {
    shipping_template_id: number,
    title: string,
    user_id: number,
    min_processing_days: number,
    max_processing_days: number,
    processing_days_display_label: string,
    origin_country_id: number
}

export interface ICreateShippingTemplateParameters extends IStandardParameters {
    title: string,
    origin_country_id: number,
    destination_country_id?: number,
    primary_cost: number,
    secondary_cost: number,
    destination_region_id?: number,
    min_processing_days?: number,
    max_processing_days?: number
}
export interface IGetShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number[]
}
export interface IUpdateShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number,
    title?: string,
    origin_country_id?: number,
    min_processing_days?: number,
    max_processing_days?: number
}
export interface IDeleteShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number
}
export interface IFindAllShippingTemplateEntriesParameters extends IStandardParameters {
    shipping_template_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserShippingProfilesParameters extends IStandardParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

/**
 * Creates a new ShippingTemplate
 */
export function createShippingTemplate<TResult>(parameters: ICreateShippingTemplateParameters): Bluebird<IStandardResponse<TResult, ICreateShippingTemplateParameters>> {
    return request<IStandardResponse<TResult, ICreateShippingTemplateParameters>>(parameters, '/shipping/templates', 'POST');
}
/**
 * Retrieves a ShippingTemplate by id.
 */
export function getShippingTemplate<TResult>(parameters: IGetShippingTemplateParameters): Bluebird<IStandardResponse<TResult, IGetShippingTemplateParameters>> {
    return request<IStandardResponse<TResult, IGetShippingTemplateParameters>>(parameters, '/shipping/templates/:shipping_template_id', 'GET');
}
/**
 * Updates a ShippingTemplate
 */
export function updateShippingTemplate<TResult>(parameters: IUpdateShippingTemplateParameters): Bluebird<IStandardResponse<TResult, IUpdateShippingTemplateParameters>> {
    return request<IStandardResponse<TResult, IUpdateShippingTemplateParameters>>(parameters, '/shipping/templates/:shipping_template_id', 'PUT');
}
/**
 * Deletes the ShippingTemplate with the given id.
 */
export function deleteShippingTemplate<TResult>(parameters: IDeleteShippingTemplateParameters): Bluebird<IStandardResponse<TResult, IDeleteShippingTemplateParameters>> {
    return request<IStandardResponse<TResult, IDeleteShippingTemplateParameters>>(parameters, '/shipping/templates/:shipping_template_id', 'DELETE');
}
/**
 * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
 */
export function findAllShippingTemplateEntries<TResult>(parameters: IFindAllShippingTemplateEntriesParameters): Bluebird<IStandardResponse<TResult, IFindAllShippingTemplateEntriesParameters>> {
    return request<IStandardResponse<TResult, IFindAllShippingTemplateEntriesParameters>>(parameters, '/shipping/templates/:shipping_template_id/entries', 'GET');
}
/**
 * Retrieves a set of ShippingTemplate objects associated to a User.
 */
export function findAllUserShippingProfiles<TResult>(parameters: IFindAllUserShippingProfilesParameters): Bluebird<IStandardResponse<TResult, IFindAllUserShippingProfilesParameters>> {
    return request<IStandardResponse<TResult, IFindAllUserShippingProfilesParameters>>(parameters, '/users/:user_id/shipping/templates', 'GET');
}
