import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
export declare const VariationsPropertySet: {
    findPropertySet: <TResult>(parameters: IFindPropertySetParameters, options?: IOptions) => Promise<IStandardResponse<IFindPropertySetParameters, TResult>>;
};
