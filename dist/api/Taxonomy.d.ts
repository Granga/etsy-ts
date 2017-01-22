import { IStandardParameters } from "../client/IStandardParameters";
import { EtsyApiClient } from "../client/EtsyApiClient";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ITaxonomy {
    id: number;
    level: number;
    name: string;
    parent: string;
    parent_id: number;
    path: string;
    category_id: number;
    children: any[];
    children_ids: number[];
    full_path_taxonomy_ids: number[];
}
export interface IGetBuyerTaxonomyParameters extends IStandardParameters {
}
export interface IGetSellerTaxonomyParameters extends IStandardParameters {
}
export declare class Taxonomy {
    private client;
    constructor(client: EtsyApiClient);
    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    getBuyerTaxonomy<TResult>(parameters: IGetBuyerTaxonomyParameters): Promise<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>>;
    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    getSellerTaxonomy<TResult>(parameters: IGetSellerTaxonomyParameters): Promise<IStandardResponse<IGetSellerTaxonomyParameters, TResult>>;
}
