import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ITaxonomy {
    id: number,
    level: number,
    name: string,
    parent: string,
    parent_id: number,
    path: string,
    category_id: number,
    children: any[],
    children_ids: number[],
    full_path_taxonomy_ids: number[]
}

//parameters types
export interface IGetBuyerTaxonomyParameters extends IStandardParameters {

}
export interface IGetSellerTaxonomyParameters extends IStandardParameters {

}

//methods
/**
 * Retrieve the entire taxonomy as seen by buyers in search.
 */
function getBuyerTaxonomy <TResult>(parameters: IGetBuyerTaxonomyParameters, options?: IOptions): Promise<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>> {
    return request<IGetBuyerTaxonomyParameters, TResult>("/taxonomy/buyer/get", parameters, "GET", options);
}
/**
 * Retrieve the entire taxonomy as used by sellers in the listing process.
 */
function getSellerTaxonomy <TResult>(parameters: IGetSellerTaxonomyParameters, options?: IOptions): Promise<IStandardResponse<IGetSellerTaxonomyParameters, TResult>> {
    return request<IGetSellerTaxonomyParameters, TResult>("/taxonomy/seller/get", parameters, "GET", options);
}

export const Taxonomy = {getBuyerTaxonomy, getSellerTaxonomy};
