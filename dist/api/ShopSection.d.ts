import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
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
export declare const ShopSection: {
    findAllShopSections: <TResult>(parameters: IFindAllShopSectionsParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllShopSectionsParameters, TResult>>;
    createShopSection: <TResult>(parameters: ICreateShopSectionParameters, options?: IOptions) => Promise<IStandardResponse<ICreateShopSectionParameters, TResult>>;
    getShopSection: <TResult>(parameters: IGetShopSectionParameters, options?: IOptions) => Promise<IStandardResponse<IGetShopSectionParameters, TResult>>;
    updateShopSection: <TResult>(parameters: IUpdateShopSectionParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateShopSectionParameters, TResult>>;
    deleteShopSection: <TResult>(parameters: IDeleteShopSectionParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteShopSectionParameters, TResult>>;
};
