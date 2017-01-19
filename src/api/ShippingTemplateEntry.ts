import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IShippingTemplateEntry {
    shipping_template_entry_id: number,
    shipping_template_id: number,
    currency_code: string,
    origin_country_id: number,
    destination_country_id: number,
    destination_region_id: number,
    primary_cost: number,
    secondary_cost: number
}

export interface ICreateShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_id: number,
    destination_country_id?: number,
    primary_cost: number,
    secondary_cost: number,
    destination_region_id?: number
}
export interface IGetShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number[]
}
export interface IUpdateShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number,
    destination_country_id?: number,
    primary_cost?: number,
    secondary_cost?: number
}
export interface IDeleteShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number
}

/**
 * Creates a new ShippingTemplateEntry
 */
export function createShippingTemplateEntry<TResult>(parameters: ICreateShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, ICreateShippingTemplateEntryParameters>> {
    return request<IStandardResponse<TResult, ICreateShippingTemplateEntryParameters>>(parameters, '/shipping/templates/entries', 'POST');
}
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
export function getShippingTemplateEntry<TResult>(parameters: IGetShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, IGetShippingTemplateEntryParameters>> {
    return request<IStandardResponse<TResult, IGetShippingTemplateEntryParameters>>(parameters, '/shipping/templates/entries/:shipping_template_entry_id', 'GET');
}
/**
 * Updates a ShippingTemplateEntry
 */
export function updateShippingTemplateEntry<TResult>(parameters: IUpdateShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, IUpdateShippingTemplateEntryParameters>> {
    return request<IStandardResponse<TResult, IUpdateShippingTemplateEntryParameters>>(parameters, '/shipping/templates/entries/:shipping_template_entry_id', 'PUT');
}
/**
 * Deletes the ShippingTemplateEntry
 */
export function deleteShippingTemplateEntry<TResult>(parameters: IDeleteShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, IDeleteShippingTemplateEntryParameters>> {
    return request<IStandardResponse<TResult, IDeleteShippingTemplateEntryParameters>>(parameters, '/shipping/templates/entries/:shipping_template_entry_id', 'DELETE');
}
