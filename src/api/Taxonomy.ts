import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
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
export function getBuyerTaxonomy <TResult>(parameters: IGetBuyerTaxonomyParameters): Promise<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>> {
    return request<IGetBuyerTaxonomyParameters, TResult>("/taxonomy/buyer/get", parameters, "GET");
}
/**
 * Retrieve the entire taxonomy as used by sellers in the listing process.
 */
export function getSellerTaxonomy <TResult>(parameters: IGetSellerTaxonomyParameters): Promise<IStandardResponse<IGetSellerTaxonomyParameters, TResult>> {
    return request<IGetSellerTaxonomyParameters, TResult>("/taxonomy/seller/get", parameters, "GET");
}

export const Taxonomy = {getBuyerTaxonomy, getSellerTaxonomy};
