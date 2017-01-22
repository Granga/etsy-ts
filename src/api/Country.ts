import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface ICountry {
    country_id: number,
    iso_country_code: string,
    world_bank_country_code: string,
    name: string,
    slug: string,
    lat: number,
    lon: number
}


export interface IFindAllCountryParameters extends IStandardParameters {

}
export interface IGetCountryParameters extends IStandardParameters {
    country_id: number[]
}
export interface IFindByIsoCodeParameters extends IStandardParameters {
    limit?: number,
    offset?: number,
    page?: number,
    iso_code: string
}

export class Country {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Finds all Country.
     */
    findAllCountry<TResult>(parameters: IFindAllCountryParameters): Promise<IStandardResponse<IFindAllCountryParameters, TResult>> {
        return this.client.http<IFindAllCountryParameters, TResult>("/countries", parameters, "GET");
    }

    /**
     * Retrieves a Country by id.
     */
    getCountry<TResult>(parameters: IGetCountryParameters): Promise<IStandardResponse<IGetCountryParameters, TResult>> {
        return this.client.http<IGetCountryParameters, TResult>("/countries/:country_id", parameters, "GET");
    }

    /**
     * Get the country info for the given ISO code.
     */
    findByIsoCode<TResult>(parameters: IFindByIsoCodeParameters): Promise<IStandardResponse<IFindByIsoCodeParameters, TResult>> {
        return this.client.http<IFindByIsoCodeParameters, TResult>("/countries/iso/:iso_code", parameters, "GET");
    }
}
