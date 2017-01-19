import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface IShopSection {
    shop_section_id: number,
    title: string,
    rank: number,
    user_id: number,
    active_listing_count: number
}

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

/**
 * Retrieves a set of ShopSection objects associated to a Shop.
 */
export function findAllShopSections<TResult>(parameters: IFindAllShopSectionsParameters): Bluebird<IStandardResponse<TResult, IFindAllShopSectionsParameters>> {
    return request<IStandardResponse<TResult, IFindAllShopSectionsParameters>>(parameters, '/shops/:shop_id/sections', 'GET');
}
/**
 * Creates a new ShopSection.
 */
export function createShopSection<TResult>(parameters: ICreateShopSectionParameters): Bluebird<IStandardResponse<TResult, ICreateShopSectionParameters>> {
    return request<IStandardResponse<TResult, ICreateShopSectionParameters>>(parameters, '/shops/:shop_id/sections', 'POST');
}
/**
 * Retrieves a ShopSection by id and shop_id
 */
export function getShopSection<TResult>(parameters: IGetShopSectionParameters): Bluebird<IStandardResponse<TResult, IGetShopSectionParameters>> {
    return request<IStandardResponse<TResult, IGetShopSectionParameters>>(parameters, '/shops/:shop_id/sections/:shop_section_id', 'GET');
}
/**
 * Updates a ShopSection with the given id.
 */
export function updateShopSection<TResult>(parameters: IUpdateShopSectionParameters): Bluebird<IStandardResponse<TResult, IUpdateShopSectionParameters>> {
    return request<IStandardResponse<TResult, IUpdateShopSectionParameters>>(parameters, '/shops/:shop_id/sections/:shop_section_id', 'PUT');
}
/**
 * Deletes the ShopSection with the given id.
 */
export function deleteShopSection<TResult>(parameters: IDeleteShopSectionParameters): Bluebird<IStandardResponse<TResult, IDeleteShopSectionParameters>> {
    return request<IStandardResponse<TResult, IDeleteShopSectionParameters>>(parameters, '/shops/:shop_id/sections/:shop_section_id', 'DELETE');
}
