import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function createShippingTemplateEntry<TResult>(parameters: ICreateShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>;
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
declare function getShippingTemplateEntry<TResult>(parameters: IGetShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>>;
/**
 * Updates a ShippingTemplateEntry
 */
declare function updateShippingTemplateEntry<TResult>(parameters: IUpdateShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>>;
/**
 * Deletes the ShippingTemplateEntry
 */
declare function deleteShippingTemplateEntry<TResult>(parameters: IDeleteShippingTemplateEntryParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>>;
export declare const ShippingTemplateEntry: {
    createShippingTemplateEntry: typeof createShippingTemplateEntry;
    getShippingTemplateEntry: typeof getShippingTemplateEntry;
    updateShippingTemplateEntry: typeof updateShippingTemplateEntry;
    deleteShippingTemplateEntry: typeof deleteShippingTemplateEntry;
};
export {};
