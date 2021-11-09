import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface ITreasuryListing {
    /**
     * The detailed fields of the listing
     */
    data: any,
    /**
     * Time the listing was added to this Treasury, in epoch seconds
     */
    creation_tsz: number
}

//parameters types
export interface IAddTreasuryListingParameters {
    treasury_key: string,
    listing_id: number
}
export interface IRemoveTreasuryListingParameters {
    treasury_key: string,
    listing_id: number
}

//methods class
export class TreasuryListing extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Add listing to a Treasury
     */
    async addTreasuryListing<TResult>(
        params: IAddTreasuryListingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IAddTreasuryListingParameters, TResult>>> {
        return this.request<IAddTreasuryListingParameters, TResult>(
            "POST",
            "/treasuries/:treasury_key/listings",
            params,
            extra
        );
    }

    /**
     * Remove listing from a Treasury
     */
    async removeTreasuryListing<TResult>(
        params: IRemoveTreasuryListingParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>> {
        return this.request<IRemoveTreasuryListingParameters, TResult>(
            "DELETE",
            "/treasuries/:treasury_key/listings/:listing_id",
            params,
            extra
        );
    }
}
