import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShippingTemplate {
    shipping_template_id: number;
    title: string;
    user_id: number;
    min_processing_days: number;
    max_processing_days: number;
    processing_days_display_label: string;
    origin_country_id: number;
}
export interface ICreateShippingTemplateParameters extends IStandardParameters {
    title: string;
    origin_country_id: number;
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    destination_region_id?: number;
    min_processing_days?: number;
    max_processing_days?: number;
}
export interface IGetShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number[];
}
export interface IUpdateShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number;
    title?: string;
    origin_country_id?: number;
    min_processing_days?: number;
    max_processing_days?: number;
}
export interface IDeleteShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number;
}
export interface IFindAllShippingTemplateEntriesParameters extends IStandardParameters {
    shipping_template_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserShippingProfilesParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class ShippingTemplate {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Creates a new ShippingTemplate
     */
    createShippingTemplate<TResult>(parameters: ICreateShippingTemplateParameters): Promise<IStandardResponse<ICreateShippingTemplateParameters, TResult>>;
    /**
     * Retrieves a ShippingTemplate by id.
     */
    getShippingTemplate<TResult>(parameters: IGetShippingTemplateParameters): Promise<IStandardResponse<IGetShippingTemplateParameters, TResult>>;
    /**
     * Updates a ShippingTemplate
     */
    updateShippingTemplate<TResult>(parameters: IUpdateShippingTemplateParameters): Promise<IStandardResponse<IUpdateShippingTemplateParameters, TResult>>;
    /**
     * Deletes the ShippingTemplate with the given id.
     */
    deleteShippingTemplate<TResult>(parameters: IDeleteShippingTemplateParameters): Promise<IStandardResponse<IDeleteShippingTemplateParameters, TResult>>;
    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    findAllShippingTemplateEntries<TResult>(parameters: IFindAllShippingTemplateEntriesParameters): Promise<IStandardResponse<IFindAllShippingTemplateEntriesParameters, TResult>>;
    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    findAllUserShippingProfiles<TResult>(parameters: IFindAllUserShippingProfilesParameters): Promise<IStandardResponse<IFindAllUserShippingProfilesParameters, TResult>>;
}
