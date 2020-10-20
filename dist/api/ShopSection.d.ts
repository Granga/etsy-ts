import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function findAllShopSections<TResult>(parameters: IFindAllShopSectionsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopSectionsParameters, TResult>>;
/**
 * Creates a new ShopSection.
 */
declare function createShopSection<TResult>(parameters: ICreateShopSectionParameters, options?: IOptions): Promise<IStandardResponse<ICreateShopSectionParameters, TResult>>;
/**
 * Retrieves a ShopSection by id and shop_id
 */
declare function getShopSection<TResult>(parameters: IGetShopSectionParameters, options?: IOptions): Promise<IStandardResponse<IGetShopSectionParameters, TResult>>;
/**
 * Updates a ShopSection with the given id.
 */
declare function updateShopSection<TResult>(parameters: IUpdateShopSectionParameters, options?: IOptions): Promise<IStandardResponse<IUpdateShopSectionParameters, TResult>>;
/**
 * Deletes the ShopSection with the given id.
 */
declare function deleteShopSection<TResult>(parameters: IDeleteShopSectionParameters, options?: IOptions): Promise<IStandardResponse<IDeleteShopSectionParameters, TResult>>;
export declare const ShopSection: {
    findAllShopSections: typeof findAllShopSections;
    createShopSection: typeof createShopSection;
    getShopSection: typeof getShopSection;
    updateShopSection: typeof updateShopSection;
    deleteShopSection: typeof deleteShopSection;
};
export {};
