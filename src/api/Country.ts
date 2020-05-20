import { IOptions, request } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";

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

//methods
/**
 * Finds all Country.
 */
function findAllCountry<TResult>(parameters: IFindAllCountryParameters, options?: IOptions): Promise<IStandardResponse<IFindAllCountryParameters, TResult>> {
    return request<IFindAllCountryParameters, TResult>("/countries", parameters, "GET", options);
}

/**
 * Retrieves a Country by id.
 */
function getCountry<TResult>(parameters: IGetCountryParameters, options?: IOptions): Promise<IStandardResponse<IGetCountryParameters, TResult>> {
    return request<IGetCountryParameters, TResult>("/countries/:country_id", parameters, "GET", options);
}

/**
 * Get the country info for the given ISO code.
 */
function findByIsoCode<TResult>(parameters: IFindByIsoCodeParameters, options?: IOptions): Promise<IStandardResponse<IFindByIsoCodeParameters, TResult>> {
    return request<IFindByIsoCodeParameters, TResult>("/countries/iso/:iso_code", parameters, "GET", options);
}

export const Country = {findAllCountry, getCountry, findByIsoCode};
