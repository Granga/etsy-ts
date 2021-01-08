import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
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
export interface ICreateShippingTemplateParameters {
    title: string;
    origin_country_id: number;
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    destination_region_id?: number;
    min_processing_days?: number;
    max_processing_days?: number;
}
export interface IGetShippingTemplateParameters {
    shipping_template_id: number[];
}
export interface IUpdateShippingTemplateParameters {
    shipping_template_id: number;
    title?: string;
    origin_country_id?: number;
    min_processing_days?: number;
    max_processing_days?: number;
}
export interface IDeleteShippingTemplateParameters {
    shipping_template_id: number;
}
export interface IFindAllShippingTemplateEntriesParameters {
    shipping_template_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllUserShippingProfilesParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export declare class ShippingTemplate {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Creates a new ShippingTemplate
     */
    createShippingTemplate<TResult>(params: ICreateShippingTemplateParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateParameters, TResult>>>;
    /**
     * Retrieves a ShippingTemplate by id.
     */
    getShippingTemplate<TResult>(params: IGetShippingTemplateParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetShippingTemplateParameters, TResult>>>;
    /**
     * Updates a ShippingTemplate
     */
    updateShippingTemplate<TResult>(params: IUpdateShippingTemplateParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateParameters, TResult>>>;
    /**
     * Deletes the ShippingTemplate with the given id.
     */
    deleteShippingTemplate<TResult>(params: IDeleteShippingTemplateParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateParameters, TResult>>>;
    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    findAllShippingTemplateEntries<TResult>(params: IFindAllShippingTemplateEntriesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllShippingTemplateEntriesParameters, TResult>>>;
    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    findAllUserShippingProfiles<TResult>(params: IFindAllUserShippingProfilesParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IFindAllUserShippingProfilesParameters, TResult>>>;
}
