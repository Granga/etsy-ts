import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface ICountry {
    /**
     * The country's numeric ID.
     */
    country_id: number,
    /**
     * The two-letter country code according to ISO 3166-1-alpha-2.
     */
    iso_country_code: string,
    /**
     * The three-letter country code according to the World Bank.
     */
    world_bank_country_code: string,
    /**
     * The country's plain-English name.
     */
    name: string,
    /**
     * The country's plain-English name slugified; suitable for interpolation into a url.
     */
    slug: string,
    /**
     * The country's latitude.
     */
    lat: number,
    /**
     * The country's longitude.
     */
    lon: number
}

//parameters types
export interface IFindAllCountryParameters {

}
export interface IGetCountryParameters {
    country_id: number[]
}
export interface IFindByIsoCodeParameters {
    limit?: number,
    offset?: number,
    page?: number,
    iso_code: string
}

//methods class
export class Country extends ApiRequest {
    constructor(
        options: IOptions
    ) {
        super(options);
    }


    /**
     * Finds all Country.
     */
    async findAllCountry<TResult>(
        params: IFindAllCountryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindAllCountryParameters, TResult>>> {
        return this.request<IFindAllCountryParameters, TResult>("GET", "/countries", params, extra);
    }

    /**
     * Retrieves a Country by id.
     */
    async getCountry<TResult>(
        params: IGetCountryParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IGetCountryParameters, TResult>>> {
        return this.request<IGetCountryParameters, TResult>("GET", "/countries/:country_id", params, extra);
    }

    /**
     * Get the country info for the given ISO code.
     */
    async findByIsoCode<TResult>(
        params: IFindByIsoCodeParameters & IStandardParameters,
        extra?: IRequestOptions
    ): Promise<AxiosResponse<IStandardResponse<IFindByIsoCodeParameters, TResult>>> {
        return this.request<IFindByIsoCodeParameters, TResult>("GET", "/countries/iso/:iso_code", params, extra);
    }
}
