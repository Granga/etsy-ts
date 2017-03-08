import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IShippingInfo {
    shipping_info_id: number;
    origin_country_id: number;
    destination_country_id: number;
    currency_code: string;
    primary_cost: number;
    secondary_cost: number;
    listing_id: number;
    region_id: number;
    origin_country_name: string;
    destination_country_name: string;
}
export interface IFindAllListingShippingProfileEntriesParameters extends IStandardParameters {
}
export interface ICreateShippingInfoParameters extends IStandardParameters {
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    region_id?: number;
    listing_id: number;
}
export interface IGetShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number[];
}
export interface IUpdateShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number;
    destination_country_id?: number;
    primary_cost?: number;
    secondary_cost?: number;
    region_id?: number;
    listing_id?: number;
}
export interface IDeleteShippingInfoParameters extends IStandardParameters {
    shipping_info_id: number;
}
export declare const ShippingInfo: {
    findAllListingShippingProfileEntries: <TResult>(parameters: IFindAllListingShippingProfileEntriesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>;
    createShippingInfo: <TResult>(parameters: ICreateShippingInfoParameters, options?: IOptions) => Promise<IStandardResponse<ICreateShippingInfoParameters, TResult>>;
    getShippingInfo: <TResult>(parameters: IGetShippingInfoParameters, options?: IOptions) => Promise<IStandardResponse<IGetShippingInfoParameters, TResult>>;
    updateShippingInfo: <TResult>(parameters: IUpdateShippingInfoParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateShippingInfoParameters, TResult>>;
    deleteShippingInfo: <TResult>(parameters: IDeleteShippingInfoParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteShippingInfoParameters, TResult>>;
};
