import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
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
export declare class ShippingTemplateEntry {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Creates a new ShippingTemplateEntry
     */
    createShippingTemplateEntry<TResult>(parameters: ICreateShippingTemplateEntryParameters): Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>;
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    getShippingTemplateEntry<TResult>(parameters: IGetShippingTemplateEntryParameters): Promise<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>>;
    /**
     * Updates a ShippingTemplateEntry
     */
    updateShippingTemplateEntry<TResult>(parameters: IUpdateShippingTemplateEntryParameters): Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>>;
    /**
     * Deletes the ShippingTemplateEntry
     */
    deleteShippingTemplateEntry<TResult>(parameters: IDeleteShippingTemplateEntryParameters): Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>>;
}
