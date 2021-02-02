import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class ShippingTemplate {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Creates a new ShippingTemplate
     */
    async createShippingTemplate<TResult>(
        params: ICreateShippingTemplateParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<ICreateShippingTemplateParameters, TResult>>> {
        return request<ICreateShippingTemplateParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a ShippingTemplate by id.
     */
    async getShippingTemplate<TResult>(
        params: IGetShippingTemplateParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetShippingTemplateParameters, TResult>>> {
        return request<IGetShippingTemplateParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Updates a ShippingTemplate
     */
    async updateShippingTemplate<TResult>(
        params: IUpdateShippingTemplateParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShippingTemplateParameters, TResult>>> {
        return request<IUpdateShippingTemplateParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Deletes the ShippingTemplate with the given id.
     */
    async deleteShippingTemplate<TResult>(
        params: IDeleteShippingTemplateParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShippingTemplateParameters, TResult>>> {
        return request<IDeleteShippingTemplateParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    async findAllShippingTemplateEntries<TResult>(
        params: IFindAllShippingTemplateEntriesParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShippingTemplateEntriesParameters, TResult>>> {
        return request<IFindAllShippingTemplateEntriesParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shipping/templates/:shipping_template_id/entries",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    async findAllUserShippingProfiles<TResult>(
        params: IFindAllUserShippingProfilesParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserShippingProfilesParameters, TResult>>> {
        return request<IFindAllUserShippingProfilesParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/users/:user_id/shipping/templates",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
