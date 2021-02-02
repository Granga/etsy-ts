import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IShopSection {
    /**
     * The numeric ID of the shop section.
     */
    shop_section_id: number;
    /**
     * The title of the section.
     */
    title: string;
    /**
     * Display order.
     */
    rank: number;
    /**
     * The ID of the user who owns this shop section.
     */
    user_id: number;
    /**
     * The number of active listings currently in the section.
     */
    active_listing_count: number;
}
export interface IFindAllShopSectionsParameters {
    shop_id: string | number;
}
export interface ICreateShopSectionParameters {
    shop_id: string | number;
    title?: string;
    user_id?: number;
}
export interface IGetShopSectionParameters {
    shop_id: string | number;
    shop_section_id: number[];
}
export interface IUpdateShopSectionParameters {
    shop_id: string | number;
    shop_section_id: number;
    title?: string;
    user_id?: number;
}
export interface IDeleteShopSectionParameters {
    shop_id: string | number;
    shop_section_id: number;
}
export declare class ShopSection {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    findAllShopSections<TResult>(params: IFindAllShopSectionsParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllShopSectionsParameters, TResult>>>;
    /**
     * Creates a new ShopSection.
     */
    createShopSection<TResult>(params: ICreateShopSectionParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<ICreateShopSectionParameters, TResult>>>;
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    getShopSection<TResult>(params: IGetShopSectionParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetShopSectionParameters, TResult>>>;
    /**
     * Updates a ShopSection with the given id.
     */
    updateShopSection<TResult>(params: IUpdateShopSectionParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IUpdateShopSectionParameters, TResult>>>;
    /**
     * Deletes the ShopSection with the given id.
     */
    deleteShopSection<TResult>(params: IDeleteShopSectionParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IDeleteShopSectionParameters, TResult>>>;
}
