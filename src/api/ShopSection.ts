import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IShopSection {
    shop_section_id: number,
    title: string,
    rank: number,
    user_id: number,
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
export function findAllShopSections <TResult>(parameters: IFindAllShopSectionsParameters): Promise<IStandardResponse<IFindAllShopSectionsParameters, TResult>> {
    return request<IFindAllShopSectionsParameters, TResult>("/shops/:shop_id/sections", parameters, "GET");
}
/**
 * Creates a new ShopSection.
 */
export function createShopSection <TResult>(parameters: ICreateShopSectionParameters): Promise<IStandardResponse<ICreateShopSectionParameters, TResult>> {
    return request<ICreateShopSectionParameters, TResult>("/shops/:shop_id/sections", parameters, "POST");
}
/**
 * Retrieves a ShopSection by id and shop_id
 */
export function getShopSection <TResult>(parameters: IGetShopSectionParameters): Promise<IStandardResponse<IGetShopSectionParameters, TResult>> {
    return request<IGetShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "GET");
}
/**
 * Updates a ShopSection with the given id.
 */
export function updateShopSection <TResult>(parameters: IUpdateShopSectionParameters): Promise<IStandardResponse<IUpdateShopSectionParameters, TResult>> {
    return request<IUpdateShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT");
}
/**
 * Deletes the ShopSection with the given id.
 */
export function deleteShopSection <TResult>(parameters: IDeleteShopSectionParameters): Promise<IStandardResponse<IDeleteShopSectionParameters, TResult>> {
    return request<IDeleteShopSectionParameters, TResult>("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE");
}

export const ShopSection = {
    findAllShopSections,
    createShopSection,
    getShopSection,
    updateShopSection,
    deleteShopSection
};
