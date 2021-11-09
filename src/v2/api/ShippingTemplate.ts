import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IShippingTemplate {
    /**
     * The numeric ID of this shipping template.
     */
    shipping_template_id: number,
    /**
     * The name of this shipping template.
     */
    title: string,
    /**
     * The numeric ID of the user who owns this shipping template.
     */
    user_id: number,
    /**
     * The minimum number of days for processing the listing.
     */
    min_processing_days: number,
    /**
     * The maximum number of days for processing the listing.
     */
    max_processing_days: number,
    /**
     * Translated display label for processing days.
     */
    processing_days_display_label: string,
    /**
     * The numeric ID of the country from which the listing ships.
     */
    origin_country_id: number
}

//parameters types
export interface ICreateShippingTemplateParameters {
    title: string,
    origin_country_id: number,
    destination_country_id?: number,
    primary_cost: number,
    secondary_cost: number,
    destination_region_id?: number,
    min_processing_days?: number,
    max_processing_days?: number
}
export interface IGetShippingTemplateParameters {
    shipping_template_id: number[]
}
export interface IUpdateShippingTemplateParameters {
    shipping_template_id: number,
    title?: string,
    origin_country_id?: number,
    min_processing_days?: number,
    max_processing_days?: number
}
export interface IDeleteShippingTemplateParameters {
    shipping_template_id: number
}
export interface IFindAllShippingTemplateEntriesParameters {
    shipping_template_id: number,
    limit?: number,
    offset?: number,
    page?: number
}
export interface IFindAllUserShippingProfilesParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

//methods class
export class ShippingTemplate extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Creates a new ShippingTemplate
     */
    async createShippingTemplate<TResult>(
        params: ICreateShippingTemplateParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateParameters, TResult>>> {
        return this.request<ICreateShippingTemplateParameters, TResult>("POST", "/shipping/templates", params, extra);
    }

    /**
     * Retrieves a ShippingTemplate by id.
     */
    async getShippingTemplate<TResult>(
        params: IGetShippingTemplateParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShippingTemplateParameters, TResult>>> {
        return this.request<IGetShippingTemplateParameters, TResult>(
            "GET",
            "/shipping/templates/:shipping_template_id",
            params,
            extra
        );
    }

    /**
     * Updates a ShippingTemplate
     */
    async updateShippingTemplate<TResult>(
        params: IUpdateShippingTemplateParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateParameters, TResult>>> {
        return this.request<IUpdateShippingTemplateParameters, TResult>(
            "PUT",
            "/shipping/templates/:shipping_template_id",
            params,
            extra
        );
    }

    /**
     * Deletes the ShippingTemplate with the given id.
     */
    async deleteShippingTemplate<TResult>(
        params: IDeleteShippingTemplateParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateParameters, TResult>>> {
        return this.request<IDeleteShippingTemplateParameters, TResult>(
            "DELETE",
            "/shipping/templates/:shipping_template_id",
            params,
            extra
        );
    }

    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    async findAllShippingTemplateEntries<TResult>(
        params: IFindAllShippingTemplateEntriesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShippingTemplateEntriesParameters, TResult>>> {
        return this.request<IFindAllShippingTemplateEntriesParameters, TResult>(
            "GET",
            "/shipping/templates/:shipping_template_id/entries",
            params,
            extra
        );
    }

    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    async findAllUserShippingProfiles<TResult>(
        params: IFindAllUserShippingProfilesParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserShippingProfilesParameters, TResult>>> {
        return this.request<IFindAllUserShippingProfilesParameters, TResult>(
            "GET",
            "/users/:user_id/shipping/templates",
            params,
            extra
        );
    }
}
