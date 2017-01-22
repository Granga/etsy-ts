import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

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

export class ShippingTemplateEntry {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Creates a new ShippingTemplateEntry
     */
    createShippingTemplateEntry<TResult>(parameters: ICreateShippingTemplateEntryParameters): Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, TResult>> {
        return this.client.http<ICreateShippingTemplateEntryParameters, TResult>("/shipping/templates/entries", parameters, "POST");
    }

    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    getShippingTemplateEntry<TResult>(parameters: IGetShippingTemplateEntryParameters): Promise<IStandardResponse<IGetShippingTemplateEntryParameters, TResult>> {
        return this.client.http<IGetShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET");
    }

    /**
     * Updates a ShippingTemplateEntry
     */
    updateShippingTemplateEntry<TResult>(parameters: IUpdateShippingTemplateEntryParameters): Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, TResult>> {
        return this.client.http<IUpdateShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT");
    }

    /**
     * Deletes the ShippingTemplateEntry
     */
    deleteShippingTemplateEntry<TResult>(parameters: IDeleteShippingTemplateEntryParameters): Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, TResult>> {
        return this.client.http<IDeleteShippingTemplateEntryParameters, TResult>("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE");
    }
}
