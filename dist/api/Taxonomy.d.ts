import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
/**
 * Retrieve the entire taxonomy as seen by buyers in search.
 */
export declare function getBuyerTaxonomy<TResult>(parameters: IGetBuyerTaxonomyParameters): Promise<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>>;
/**
 * Retrieve the entire taxonomy as used by sellers in the listing process.
 */
export declare function getSellerTaxonomy<TResult>(parameters: IGetSellerTaxonomyParameters): Promise<IStandardResponse<IGetSellerTaxonomyParameters, TResult>>;
export declare const Taxonomy: {
    getBuyerTaxonomy: <TResult>(parameters: IGetBuyerTaxonomyParameters) => Promise<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>>;
    getSellerTaxonomy: <TResult>(parameters: IGetSellerTaxonomyParameters) => Promise<IStandardResponse<IGetSellerTaxonomyParameters, TResult>>;
};
