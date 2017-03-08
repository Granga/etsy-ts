import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function createShippingTemplateEntry<TResult>(parameters: ICreateShippingTemplateEntryParameters): Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>;
/**
 * Retrieves a ShippingTemplateEntry by id.
 */
export declare function getShippingTemplateEntry<TResult>(parameters: IGetShippingTemplateEntryParameters): Promise<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>>;
/**
 * Updates a ShippingTemplateEntry
 */
export declare function updateShippingTemplateEntry<TResult>(parameters: IUpdateShippingTemplateEntryParameters): Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>>;
/**
 * Deletes the ShippingTemplateEntry
 */
export declare function deleteShippingTemplateEntry<TResult>(parameters: IDeleteShippingTemplateEntryParameters): Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>>;
export declare const ShippingTemplateEntry: {
    createShippingTemplateEntry: <TResult>(parameters: ICreateShippingTemplateEntryParameters) => Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>;
    getShippingTemplateEntry: <TResult>(parameters: IGetShippingTemplateEntryParameters) => Promise<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>>;
    updateShippingTemplateEntry: <TResult>(parameters: IUpdateShippingTemplateEntryParameters) => Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>>;
    deleteShippingTemplateEntry: <TResult>(parameters: IDeleteShippingTemplateEntryParameters) => Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>>;
};
