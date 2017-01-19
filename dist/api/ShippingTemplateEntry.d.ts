/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IShippingTemplateEntry {
    shipping_template_entry_id: number;
    shipping_template_id: number;
    currency_code: string;
    origin_country_id: number;
    destination_country_id: number;
    destination_region_id: number;
    primary_cost: number;
    secondary_cost: number;
}
export interface ICreateShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_id: number;
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    destination_region_id?: number;
}
export interface IGetShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number[];
}
export interface IUpdateShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number;
    destination_country_id?: number;
    primary_cost?: number;
    secondary_cost?: number;
}
export interface IDeleteShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number;
}
/**
 * Creates a new ShippingTemplateEntry
 */
export declare function createShippingTemplateEntry<TResult>(parameters: ICreateShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, ICreateShippingTemplateEntryParameters>>;
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
export declare function getShippingTemplateEntry<TResult>(parameters: IGetShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, IGetShippingTemplateEntryParameters>>;
/**
 * Updates a ShippingTemplateEntry
 */
export declare function updateShippingTemplateEntry<TResult>(parameters: IUpdateShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, IUpdateShippingTemplateEntryParameters>>;
/**
 * Deletes the ShippingTemplateEntry
 */
export declare function deleteShippingTemplateEntry<TResult>(parameters: IDeleteShippingTemplateEntryParameters): Bluebird<IStandardResponse<TResult, IDeleteShippingTemplateEntryParameters>>;
