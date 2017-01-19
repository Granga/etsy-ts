/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface IVariationsPropertySet {
    property_set_id: number;
    properties: [any, any];
    qualifying_properties: [any, any];
    options: [any, any];
    qualifiers: [any, any];
}
export interface IFindPropertySetParameters extends IStandardParameters {
    category_id?: number;
    taxonomy_id?: number;
    recipient_id?: number;
}
/**
* Find the property set for the category id
*/
export declare function findPropertySet<TResult>(parameters: IFindPropertySetParameters): Bluebird<IStandardResponse<TResult, IFindPropertySetParameters>>;
