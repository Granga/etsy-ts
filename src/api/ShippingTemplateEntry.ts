import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

//fields
export interface IShippingTemplateEntry {
    /**
     * The numeric ID of this shipping template entry.
     */
    shipping_template_entry_id: number,
    /**
     * The numeric ID of the template this entry belongs to.
     */
    shipping_template_id: number,
    /**
     * The currency code for the prices in this template entry.
     */
    currency_code: string,
    /**
     * The numeric ID of the country from which the listing ships.
     */
    origin_country_id: number,
    /**
     * The numeric ID of the country to which the listing ships (optional).  If missing, these fees apply to all destinations.
     */
    destination_country_id: number,
    /**
     * The numeric ID of the region to which the listing ships (optional).  Regions are collections of countries.
     */
    destination_region_id: number,
    /**
     * The shipping fee for this item, if shipped alone.
     */
    primary_cost: number,
    /**
     * The shipping fee for this item, if shipped with another item.
     */
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
function createShippingTemplateEntry<TResult>(parameters: ICreateShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>> {
    return request<ICreateShippingTemplateEntryParameters, TResult>("/shipping/templates/entries", parameters, "POST", options);
}

/**
 * Retrieves a ShippingTemplateEntry by id.
 */
function getShippingTemplateEntry<TResult>(parameters: IGetShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>> {
    return request<IGetShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET", options);
}

/**
 * Updates a ShippingTemplateEntry
 */
function updateShippingTemplateEntry<TResult>(parameters: IUpdateShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>> {
    return request<IUpdateShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT", options);
}

/**
 * Deletes the ShippingTemplateEntry
 */
function deleteShippingTemplateEntry<TResult>(parameters: IDeleteShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>> {
    return request<IDeleteShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE", options);
}

export const ShippingTemplateEntry = {
    createShippingTemplateEntry,
    getShippingTemplateEntry,
    updateShippingTemplateEntry,
    deleteShippingTemplateEntry
};
