import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShippingTemplate {
    /**
     * The numeric ID of this shipping template.
     */
    shipping_template_id: number;
    /**
     * The name of this shipping template.
     */
    title: string;
    /**
     * The numeric ID of the user who owns this shipping template.
     */
    user_id: number;
    /**
     * The minimum number of days for processing the listing.
     */
    min_processing_days: number;
    /**
     * The maximum number of days for processing the listing.
     */
    max_processing_days: number;
    /**
     * Translated display label for processing days.
     */
    processing_days_display_label: string;
    /**
     * The numeric ID of the country from which the listing ships.
     */
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
/**
 * Creates a new ShippingTemplate
 */
declare function createShippingTemplate<TResult>(parameters: ICreateShippingTemplateParameters, options?: IOptions): Promise<IStandardResponse<ICreateShippingTemplateParameters, TResult>>;
/**
 * Retrieves a ShippingTemplate by id.
 */
declare function getShippingTemplate<TResult>(parameters: IGetShippingTemplateParameters, options?: IOptions): Promise<IStandardResponse<IGetShippingTemplateParameters, TResult>>;
/**
 * Updates a ShippingTemplate
 */
declare function updateShippingTemplate<TResult>(parameters: IUpdateShippingTemplateParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShippingTemplateParameters, TResult>>;
/**
 * Deletes the ShippingTemplate with the given id.
 */
declare function deleteShippingTemplate<TResult>(parameters: IDeleteShippingTemplateParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShippingTemplateParameters, TResult>>;
/**
 * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
 */
declare function findAllShippingTemplateEntries<TResult>(parameters: IFindAllShippingTemplateEntriesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShippingTemplateEntriesParameters, TResult>>;
/**
 * Retrieves a set of ShippingTemplate objects associated to a User.
 */
declare function findAllUserShippingProfiles<TResult>(parameters: IFindAllUserShippingProfilesParameters, options?: IOptions): Promise<IStandardResponse<IFindAllUserShippingProfilesParameters, TResult>>;
export declare const ShippingTemplate: {
    createShippingTemplate: typeof createShippingTemplate;
    getShippingTemplate: typeof getShippingTemplate;
    updateShippingTemplate: typeof updateShippingTemplate;
    deleteShippingTemplate: typeof deleteShippingTemplate;
    findAllShippingTemplateEntries: typeof findAllShippingTemplateEntries;
    findAllUserShippingProfiles: typeof findAllUserShippingProfiles;
};
export {};
