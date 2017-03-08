import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
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
export declare const ShippingTemplate: {
    createShippingTemplate: <TResult>(parameters: ICreateShippingTemplateParameters, options?: IOptions) => Promise<IStandardResponse<ICreateShippingTemplateParameters, TResult>>;
    getShippingTemplate: <TResult>(parameters: IGetShippingTemplateParameters, options?: IOptions) => Promise<IStandardResponse<IGetShippingTemplateParameters, TResult>>;
    updateShippingTemplate: <TResult>(parameters: IUpdateShippingTemplateParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateShippingTemplateParameters, TResult>>;
    deleteShippingTemplate: <TResult>(parameters: IDeleteShippingTemplateParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteShippingTemplateParameters, TResult>>;
    findAllShippingTemplateEntries: <TResult>(parameters: IFindAllShippingTemplateEntriesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllShippingTemplateEntriesParameters, TResult>>;
    findAllUserShippingProfiles: <TResult>(parameters: IFindAllUserShippingProfilesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllUserShippingProfilesParameters, TResult>>;
};
