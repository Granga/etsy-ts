import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare class ShopSection {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    findAllShopSections<TResult>(parameters: IFindAllShopSectionsParameters): Promise<IStandardResponse<IFindAllShopSectionsParameters, TResult>>;
    /**
     * Creates a new ShopSection.
     */
    createShopSection<TResult>(parameters: ICreateShopSectionParameters): Promise<IStandardResponse<ICreateShopSectionParameters, TResult>>;
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    getShopSection<TResult>(parameters: IGetShopSectionParameters): Promise<IStandardResponse<IGetShopSectionParameters, TResult>>;
    /**
     * Updates a ShopSection with the given id.
     */
    updateShopSection<TResult>(parameters: IUpdateShopSectionParameters): Promise<IStandardResponse<IUpdateShopSectionParameters, TResult>>;
    /**
     * Deletes the ShopSection with the given id.
     */
    deleteShopSection<TResult>(parameters: IDeleteShopSectionParameters): Promise<IStandardResponse<IDeleteShopSectionParameters, TResult>>;
}
