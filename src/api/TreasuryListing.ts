import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class TreasuryListing {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Add listing to a Treasury
     */
    async addTreasuryListing<TResult>(
        params: IAddTreasuryListingParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IAddTreasuryListingParameters, TResult>>> {
        return request<IAddTreasuryListingParameters, TResult>({
            ...this.config,
            url: "/treasuries/:treasury_key/listings",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Remove listing from a Treasury
     */
    async removeTreasuryListing<TResult>(
        params: IRemoveTreasuryListingParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>> {
        return request<IRemoveTreasuryListingParameters, TResult>({
            ...this.config,
            url: "/treasuries/:treasury_key/listings/:listing_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
