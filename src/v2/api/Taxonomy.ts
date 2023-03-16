import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface ITaxonomy {
    /**
     * The unique ID of this taxonomy node.
     */
    id: number,
    /**
     * Depth in the taxonomy, roots are at level 0.
     */
    level: number,
    /**
     * Human readable name for this taxonomy node.
     */
    name: string,
    /**
     * Path of our parent node.
     */
    parent: string,
    /**
     * ID of our parent node.
     */
    parent_id: number,
    /**
     * Path from the root to this node, separated by periods.
     */
    path: string,
    /**
     * The corresponding ID in Etsy's Category API resource.
     */
    category_id: number,
    /**
     * The child Taxonomy nodes, embedded directly in the response.
     */
    children: any[],
    /**
     * The taxonomy_ids of our child nodes.
     */
    children_ids: number[],
    /**
     * The taxonomy_ids of this node and all its parents. They are listed in order from root to leaf.
     */
    full_path_taxonomy_ids: number[]
}

//parameters types
export interface IGetBuyerTaxonomyParameters {

}

export interface IGetSellerTaxonomyParameters {

}

export interface IGetSellerTaxonomyVersionParameters {

}

//methods class
export class Taxonomy extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    async getBuyerTaxonomy<TResult>(
        params: IGetBuyerTaxonomyParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetBuyerTaxonomyParameters, TResult>>> {
        return this.request<IGetBuyerTaxonomyParameters, TResult>("GET", "/taxonomy/buyer/get", params, extra);
    }

    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    async getSellerTaxonomy<TResult>(
        params: IGetSellerTaxonomyParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetSellerTaxonomyParameters, TResult>>> {
        return this.request<IGetSellerTaxonomyParameters, TResult>("GET", "/taxonomy/seller/get", params, extra);
    }

    /**
     * Get the current version of the seller taxonomy
     */
    async getSellerTaxonomyVersion<TResult>(
        params: IGetSellerTaxonomyVersionParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetSellerTaxonomyVersionParameters, TResult>>> {
        return this.request<IGetSellerTaxonomyVersionParameters, TResult>("GET", "/taxonomy/seller/version", params, extra);
    }
}
