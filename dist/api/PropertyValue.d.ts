import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IPropertyValue {
    property_id: number;
    property_name: string;
    scale_id: number;
    scale_label: string;
    value_ids: number[];
    values: string[];
}
export interface IGetAttributesParameters extends IStandardParameters {
    listing_id: number;
}
export interface IGetAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
}
export interface IUpdateAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
    value_ids?: number[];
    values?: string[];
    scale_id?: number;
}
export interface IDeleteAttributeParameters extends IStandardParameters {
    listing_id: number;
    property_id: number;
}
export declare const PropertyValue: {
    getAttributes: <TResult>(parameters: IGetAttributesParameters, options?: IOptions) => Promise<IStandardResponse<IGetAttributesParameters, TResult>>;
    getAttribute: <TResult>(parameters: IGetAttributeParameters, options?: IOptions) => Promise<IStandardResponse<IGetAttributeParameters, TResult>>;
    updateAttribute: <TResult>(parameters: IUpdateAttributeParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateAttributeParameters, TResult>>;
    deleteAttribute: <TResult>(parameters: IDeleteAttributeParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteAttributeParameters, TResult>>;
};
