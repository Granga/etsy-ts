import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types

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

//methods

/**
 * Creates a new ShippingTemplateEntry
 */
export function createShippingTemplateEntry <TResult>(parameters: ICreateShippingTemplateEntryParameters): Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>> {
    return request<ICreateShippingTemplateEntryParameters, TResult>("/shipping/templates/entries", parameters, "POST");
}
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
export function getShippingTemplateEntry <TResult>(parameters: IGetShippingTemplateEntryParameters): Promise<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>> {
    return request<IGetShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET");
}
/**
 * Updates a ShippingTemplateEntry
 */
export function updateShippingTemplateEntry <TResult>(parameters: IUpdateShippingTemplateEntryParameters): Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>> {
    return request<IUpdateShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT");
}
/**
 * Deletes the ShippingTemplateEntry
 */
export function deleteShippingTemplateEntry <TResult>(parameters: IDeleteShippingTemplateEntryParameters): Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>> {
    return request<IDeleteShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE");
}

export const ShippingTemplateEntry = {
    createShippingTemplateEntry,
    getShippingTemplateEntry,
    updateShippingTemplateEntry,
    deleteShippingTemplateEntry
};
