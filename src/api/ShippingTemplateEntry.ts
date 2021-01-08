import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export interface ICreateShippingTemplateEntryParameters {
    shipping_template_id: number,
    destination_country_id?: number,
    primary_cost: number,
    secondary_cost: number,
    destination_region_id?: number
}

export interface IGetShippingTemplateEntryParameters {
    shipping_template_entry_id: number[]
}

export interface IUpdateShippingTemplateEntryParameters {
    shipping_template_entry_id: number,
    destination_country_id?: number,
    primary_cost?: number,
    secondary_cost?: number
}

export interface IDeleteShippingTemplateEntryParameters {
    shipping_template_entry_id: number
}

//methods class
export class ShippingTemplateEntry {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Creates a new ShippingTemplateEntry
     */
    async createShippingTemplateEntry<TResult>(
        params: ICreateShippingTemplateEntryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>> {
        return request<ICreateShippingTemplateEntryParameters, TResult>({
            ...this.config,
            url: "/shipping/templates/entries",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    async getShippingTemplateEntry<TResult>(
        params: IGetShippingTemplateEntryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>>> {
        return request<IGetShippingTemplateEntryParameters, TResult>({
            ...this.config,
            url: "/shipping/templates/entries/:shipping_template_entry_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Updates a ShippingTemplateEntry
     */
    async updateShippingTemplateEntry<TResult>(
        params: IUpdateShippingTemplateEntryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>>> {
        return request<IUpdateShippingTemplateEntryParameters, TResult>({
            ...this.config,
            url: "/shipping/templates/entries/:shipping_template_entry_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Deletes the ShippingTemplateEntry
     */
    async deleteShippingTemplateEntry<TResult>(
        params: IDeleteShippingTemplateEntryParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>>> {
        return request<IDeleteShippingTemplateEntryParameters, TResult>({
            ...this.config,
            url: "/shipping/templates/entries/:shipping_template_entry_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
