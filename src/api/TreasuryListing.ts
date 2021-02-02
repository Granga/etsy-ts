import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
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
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Add listing to a Treasury
     */
    async addTreasuryListing<TResult>(
        params: IAddTreasuryListingParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IAddTreasuryListingParameters, TResult>>> {
        return request<IAddTreasuryListingParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/treasuries/:treasury_key/listings",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Remove listing from a Treasury
     */
    async removeTreasuryListing<TResult>(
        params: IRemoveTreasuryListingParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>> {
        return request<IRemoveTreasuryListingParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/treasuries/:treasury_key/listings/:listing_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
