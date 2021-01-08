import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IBillCharge {
    /**
     * The numeric ID for this bill charge record.
     */
    bill_charge_id: number,
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number,
    /**
     * The name of the type of charge.
     */
    type: string,
    /**
     * The Listing, Transaction or Shipping Label ID to which the charge applies.
     */
    type_id: number,
    /**
     * The user's numeric ID.
     */
    user_id: number,
    /**
     * The amount charged.
     */
    amount: number,
    /**
     * The currency of the charge.
     */
    currency_code: string,
    /**
     * Year that the charge was created.
     */
    creation_year: number,
    /**
     * Month that the charge was created.
     */
    creation_month: number,
    /**
     * Time when charge was last modified.
     */
    last_modified_tsz: number
}

//parameters types
export interface IGetUserChargesMetadataParameters {
    user_id: string | number
}

export interface IFindAllUserChargesParameters {
    limit?: number,
    offset?: number,
    page?: number,
    user_id: string | number,
    sort_order?: "up" | "down",
    min_created?: number,
    max_created?: number
}

//methods class
export class BillCharge {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Metadata for the set of BillCharges objects associated to a User
     */
    async getUserChargesMetadata<TResult>(
        params: IGetUserChargesMetadataParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetUserChargesMetadataParameters, TResult>>> {
        return request<IGetUserChargesMetadataParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/charges/meta",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
     */
    async findAllUserCharges<TResult>(
        params: IFindAllUserChargesParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUserChargesParameters, TResult>>> {
        return request<IFindAllUserChargesParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/charges",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
