import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface ITreasuryListing {
    data: any,
    creation_tsz: number
}


export interface IAddTreasuryListingParameters extends IStandardParameters {
    treasury_key: string,
    listing_id: number
}
export interface IRemoveTreasuryListingParameters extends IStandardParameters {
    treasury_key: string,
    listing_id: number
}

export class TreasuryListing {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Add listing to a Treasury
     */
    addTreasuryListing<TResult>(parameters: IAddTreasuryListingParameters): Promise<IStandardResponse<IAddTreasuryListingParameters, TResult>> {
        return this.client.http<IAddTreasuryListingParameters, TResult>("/treasuries/:treasury_key/listings", parameters, "POST");
    }

    /**
     * Remove listing from a Treasury
     */
    removeTreasuryListing<TResult>(parameters: IRemoveTreasuryListingParameters): Promise<IStandardResponse<IRemoveTreasuryListingParameters, TResult>> {
        return this.client.http<IRemoveTreasuryListingParameters, TResult>("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE");
    }
}
