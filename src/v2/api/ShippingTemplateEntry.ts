import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ShippingTemplateEntry extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Creates a new ShippingTemplateEntry
     */
    async createShippingTemplateEntry<TResult>(
        params: ICreateShippingTemplateEntryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>> {
        return this.request<ICreateShippingTemplateEntryParameters, TResult>(
            "POST",
            "/shipping/templates/entries",
            params,
            extra
        );
    }

    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    async getShippingTemplateEntry<TResult>(
        params: IGetShippingTemplateEntryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>>> {
        return this.request<IGetShippingTemplateEntryParameters, TResult>(
            "GET",
            "/shipping/templates/entries/:shipping_template_entry_id",
            params,
            extra
        );
    }

    /**
     * Updates a ShippingTemplateEntry
     */
    async updateShippingTemplateEntry<TResult>(
        params: IUpdateShippingTemplateEntryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>>> {
        return this.request<IUpdateShippingTemplateEntryParameters, TResult>(
            "PUT",
            "/shipping/templates/entries/:shipping_template_entry_id",
            params,
            extra
        );
    }

    /**
     * Deletes the ShippingTemplateEntry
     */
    async deleteShippingTemplateEntry<TResult>(
        params: IDeleteShippingTemplateEntryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>>> {
        return this.request<IDeleteShippingTemplateEntryParameters, TResult>(
            "DELETE",
            "/shipping/templates/entries/:shipping_template_entry_id",
            params,
            extra
        );
    }
}
