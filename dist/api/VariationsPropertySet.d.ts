import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
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
export declare class VariationsPropertySet {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Find the property set for the category id
     */
    findPropertySet<TResult>(parameters: IFindPropertySetParameters): Promise<IStandardResponse<IFindPropertySetParameters, TResult>>;
}
