import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IShippingTemplateEntry {
    /**
     * The numeric ID of this shipping template entry.
     */
    shipping_template_entry_id: number;
    /**
     * The numeric ID of the template this entry belongs to.
     */
    shipping_template_id: number;
    /**
     * The currency code for the prices in this template entry.
     */
    currency_code: string;
    /**
     * The numeric ID of the country from which the listing ships.
     */
    origin_country_id: number;
    /**
     * The numeric ID of the country to which the listing ships (optional).  If missing, these fees apply to all destinations.
     */
    destination_country_id: number;
    /**
     * The numeric ID of the region to which the listing ships (optional).  Regions are collections of countries.
     */
    destination_region_id: number;
    /**
     * The shipping fee for this item, if shipped alone.
     */
    primary_cost: number;
    /**
     * The shipping fee for this item, if shipped with another item.
     */
    secondary_cost: number;
}
export interface ICreateShippingTemplateEntryParameters {
    shipping_template_id: number;
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    destination_region_id?: number;
}
export interface IGetShippingTemplateEntryParameters {
    shipping_template_entry_id: number[];
}
export interface IUpdateShippingTemplateEntryParameters {
    shipping_template_entry_id: number;
    destination_country_id?: number;
    primary_cost?: number;
    secondary_cost?: number;
}
export interface IDeleteShippingTemplateEntryParameters {
    shipping_template_entry_id: number;
}
export declare class ShippingTemplateEntry {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Creates a new ShippingTemplateEntry
     */
    createShippingTemplateEntry<TResult>(params: ICreateShippingTemplateEntryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>>;
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    getShippingTemplateEntry<TResult>(params: IGetShippingTemplateEntryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>>>;
    /**
     * Updates a ShippingTemplateEntry
     */
    updateShippingTemplateEntry<TResult>(params: IUpdateShippingTemplateEntryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>>>;
    /**
     * Deletes the ShippingTemplateEntry
     */
    deleteShippingTemplateEntry<TResult>(params: IDeleteShippingTemplateEntryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>>>;
}
