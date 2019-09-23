import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

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
export interface IFindAllShopSectionsParameters extends IStandardParameters {
    shop_id: string | number
}

export interface ICreateShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    title?: string,
    user_id?: number
}

export interface IGetShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number[]
}

export interface IUpdateShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number,
    title?: string,
    user_id?: number
}

export interface IDeleteShopSectionParameters extends IStandardParameters {
    shop_id: string | number,
    shop_section_id: number
}

//methods
/**
 * Retrieves a set of ShopSection objects associated to a Shop.
 */
function findAllShopSections<TResult>(parameters: IFindAllShopSectionsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopSectionsParameters, TResult>> {
    return request<IFindAllShopSectionsParameters, TResult>("/shops/:shop_id/sections", parameters, "GET", options);
}

/**
 * Creates a new ShopSection.
 */
function createShopSection<TResult>(parameters: ICreateShopSectionParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopSectionParameters, TResult>> {
    return request<ICreateShopSectionParameters, TResult>("/shops/:shop_id/sections", parameters, "POST", options);
}

/**
 * Retrieves a ShopSection by id and shop_id
 */
function getShopSection<TResult>(parameters: IGetShopSectionParameters, options?: IOptions): Promise<IStandardResponse<IGetShopSectionParameters, TResult>> {
    return request<IGetShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "GET", options);
}

/**
 * Updates a ShopSection with the given id.
 */
function updateShopSection<TResult>(parameters: IUpdateShopSectionParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopSectionParameters, TResult>> {
    return request<IUpdateShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT", options);
}

/**
 * Deletes the ShopSection with the given id.
 */
function deleteShopSection<TResult>(parameters: IDeleteShopSectionParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopSectionParameters, TResult>> {
    return request<IDeleteShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE", options);
}

export const ShopSection = {
    findAllShopSections,
    createShopSection,
    getShopSection,
    updateShopSection,
    deleteShopSection
};
