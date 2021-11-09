import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

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
export class ShopSection extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    async findAllShopSections<TResult>(
        params: IFindAllShopSectionsParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllShopSectionsParameters, TResult>>> {
        return this.request<IFindAllShopSectionsParameters, TResult>("GET", "/shops/:shop_id/sections", params, extra);
    }

    /**
     * Creates a new ShopSection.
     */
    async createShopSection<TResult>(
        params: ICreateShopSectionParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<ICreateShopSectionParameters, TResult>>> {
        return this.request<ICreateShopSectionParameters, TResult>("POST", "/shops/:shop_id/sections", params, extra);
    }

    /**
     * Retrieves a ShopSection by id and shop_id
     */
    async getShopSection<TResult>(
        params: IGetShopSectionParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetShopSectionParameters, TResult>>> {
        return this.request<IGetShopSectionParameters, TResult>(
            "GET",
            "/shops/:shop_id/sections/:shop_section_id",
            params,
            extra
        );
    }

    /**
     * Updates a ShopSection with the given id.
     */
    async updateShopSection<TResult>(
        params: IUpdateShopSectionParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IUpdateShopSectionParameters, TResult>>> {
        return this.request<IUpdateShopSectionParameters, TResult>(
            "PUT",
            "/shops/:shop_id/sections/:shop_section_id",
            params,
            extra
        );
    }

    /**
     * Deletes the ShopSection with the given id.
     */
    async deleteShopSection<TResult>(
        params: IDeleteShopSectionParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IDeleteShopSectionParameters, TResult>>> {
        return this.request<IDeleteShopSectionParameters, TResult>(
            "DELETE",
            "/shops/:shop_id/sections/:shop_section_id",
            params,
            extra
        );
    }
}
