import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface ITreasuryListing {
    /**
     * The detailed fields of the listing
     */
    data: any;
    /**
     * Time the listing was added to this Treasury, in epoch seconds
     */
    creation_tsz: number;
}
export interface IAddTreasuryListingParameters {
    treasury_key: string;
    listing_id: number;
}
export interface IRemoveTreasuryListingParameters {
    treasury_key: string;
    listing_id: number;
}
export declare class TreasuryListing {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: ApiKeyDetails);
    /**
     * Add listing to a Treasury
     */
    addTreasuryListing<TResult>(params: IAddTreasuryListingParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IAddTreasuryListingParameters, TResult>>>;
    /**
     * Remove listing from a Treasury
     */
    removeTreasuryListing<TResult>(params: IRemoveTreasuryListingParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IRemoveTreasuryListingParameters, TResult>>>;
}
