import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface ICountry {
    country_id: number,
    iso_country_code: string,
    world_bank_country_code: string,
    name: string,
    slug: string,
    lat: number,
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
export function findAllCountry <TResult>(parameters: IFindAllCountryParameters): Promise<IStandardResponse<IFindAllCountryParameters, TResult>> {
    return request<IFindAllCountryParameters, TResult>("/countries", parameters, "GET");
}
/**
 * Retrieves a Country by id.
 */
export function getCountry <TResult>(parameters: IGetCountryParameters): Promise<IStandardResponse<IGetCountryParameters, TResult>> {
    return request<IGetCountryParameters, TResult>("/countries/:country_id", parameters, "GET");
}
/**
 * Get the country info for the given ISO code.
 */
export function findByIsoCode <TResult>(parameters: IFindByIsoCodeParameters): Promise<IStandardResponse<IFindByIsoCodeParameters, TResult>> {
    return request<IFindByIsoCodeParameters, TResult>("/countries/iso/:iso_code", parameters, "GET");
}

export const Country = {findAllCountry, getCountry, findByIsoCode};
