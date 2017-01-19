/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IShopSection {
    shop_section_id: number;
    title: string;
    rank: number;
    user_id: number;
    active_listing_count: number;
}
export interface IFindAllShopSectionsParameters extends IStandardParameters {
    shop_id: string | number;
}
export interface ICreateShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    title?: string;
    user_id?: number;
}
export interface IGetShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number[];
}
export interface IUpdateShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    title?: string;
    user_id?: number;
}
export interface IDeleteShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
}
/**
 * Retrieves a set of ShopSection objects associated to a Shop.
 */
export declare function findAllShopSections<TResult>(parameters: IFindAllShopSectionsParameters): Bluebird<IStandardResponse<TResult, IFindAllShopSectionsParameters>>;
/**
 * Creates a new ShopSection.
 */
export declare function createShopSection<TResult>(parameters: ICreateShopSectionParameters): Bluebird<IStandardResponse<TResult, ICreateShopSectionParameters>>;
/**
 * Retrieves a ShopSection by id and shop_id
 */
export declare function getShopSection<TResult>(parameters: IGetShopSectionParameters): Bluebird<IStandardResponse<TResult, IGetShopSectionParameters>>;
/**
 * Updates a ShopSection with the given id.
 */
export declare function updateShopSection<TResult>(parameters: IUpdateShopSectionParameters): Bluebird<IStandardResponse<TResult, IUpdateShopSectionParameters>>;
/**
 * Deletes the ShopSection with the given id.
 */
export declare function deleteShopSection<TResult>(parameters: IDeleteShopSectionParameters): Bluebird<IStandardResponse<TResult, IDeleteShopSectionParameters>>;
