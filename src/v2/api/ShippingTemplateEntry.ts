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
     * The numeric ID of the shipping carrier.
     */
    shipping_carrier_id: number,
    /**
     * The string representation of a shipping carrier's mail class.
     */
    mail_class: string,
    /**
     * The minimum delivery time that a shipment will take, in days.
     */
    min_delivery_time: number,
    /**
     * The maximum delivery time that a shipment will take, in days.
     */
    max_delivery_time: number,
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
export interface IGetShippingCarriersParameters {
    origin_country_iso: string
}

export interface ICreateShippingTemplateEntryParameters {
    shipping_template_id: number,
    destination_country_id?: number,
    primary_cost: number,
    secondary_cost: number,
    destination_region_id?: number,
    shipping_carrier_id?: number,
    mail_class?: string,
    min_delivery_time?: number,
    max_delivery_time?: number
}

export interface IGetShippingTemplateEntryParameters {
    shipping_template_entry_id: number[]
}

export interface IUpdateShippingTemplateEntryParameters {
    shipping_template_entry_id: number,
    destination_country_id?: number,
    primary_cost?: number,
    secondary_cost?: number,
    shipping_carrier_id?: number,
    mail_class?: string,
    min_delivery_time?: number,
    max_delivery_time?: number
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
     * Retrieves a list of available shipping carriers and the mail classes associated with them for a given country
     */
    async getShippingCarriers<TResult>(
        params: IGetShippingCarriersParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShippingCarriersParameters, TResult>>> {
        return this.request<IGetShippingCarriersParameters, TResult>("GET", "/shipping/shipping-carriers", params, extra);
    }

    /**
     * Creates a new ShippingTemplateEntry
     */
    async createShippingTemplateEntry<TResult>(
        params: ICreateShippingTemplateEntryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>>> {
        return this.request<ICreateShippingTemplateEntryParameters, TResult>("POST", "/shipping/templates/entries", params, extra);
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
