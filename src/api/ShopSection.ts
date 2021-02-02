import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IShopSection {
    /**
     * The numeric ID of the shop section.
     */
    shop_section_id: number,
    /**
     * The title of the section.
     */
    title: string,
    /**
     * Display order.
     */
    rank: number,
    /**
     * The ID of the user who owns this shop section.
     */
    user_id: number,
    /**
     * The number of active listings currently in the section.
     */
    active_listing_count: number
}

//parameters types
export interface IFindAllShopSectionsParameters {
    shop_id: string | number
}

export interface ICreateShopSectionParameters {
    shop_id: string | number,
    title?: string,
    user_id?: number
}

export interface IGetShopSectionParameters {
    shop_id: string | number,
    shop_section_id: number[]
}

export interface IUpdateShopSectionParameters {
    shop_id: string | number,
    shop_section_id: number,
    title?: string,
    user_id?: number
}

export interface IDeleteShopSectionParameters {
    shop_id: string | number,
    shop_section_id: number
}

//methods class
export class ShopSection {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    async findAllShopSections<TResult>(
        params: IFindAllShopSectionsParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopSectionsParameters, TResult>>> {
        return request<IFindAllShopSectionsParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/sections",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Creates a new ShopSection.
     */
    async createShopSection<TResult>(
        params: ICreateShopSectionParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<ICreateShopSectionParameters, TResult>>> {
        return request<ICreateShopSectionParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/sections",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a ShopSection by id and shop_id
     */
    async getShopSection<TResult>(
        params: IGetShopSectionParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetShopSectionParameters, TResult>>> {
        return request<IGetShopSectionParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/sections/:shop_section_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Updates a ShopSection with the given id.
     */
    async updateShopSection<TResult>(
        params: IUpdateShopSectionParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShopSectionParameters, TResult>>> {
        return request<IUpdateShopSectionParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/sections/:shop_section_id",
            method: "PUT"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Deletes the ShopSection with the given id.
     */
    async deleteShopSection<TResult>(
        params: IDeleteShopSectionParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShopSectionParameters, TResult>>> {
        return request<IDeleteShopSectionParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/shops/:shop_id/sections/:shop_section_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
