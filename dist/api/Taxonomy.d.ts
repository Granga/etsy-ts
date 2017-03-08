import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
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
export declare const Taxonomy: {
    getBuyerTaxonomy: <TResult>(parameters: IGetBuyerTaxonomyParameters, options?: IOptions) => Promise<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>>;
    getSellerTaxonomy: <TResult>(parameters: IGetSellerTaxonomyParameters, options?: IOptions) => Promise<IStandardResponse<IGetSellerTaxonomyParameters, TResult>>;
};
