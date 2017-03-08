import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function findAllCountry <TResult>(parameters: IFindAllCountryParameters, options?: IOptions): Promise<IStandardResponse<IFindAllCountryParameters, TResult>> {
    return request<IFindAllCountryParameters, TResult>("/countries", parameters, "GET", options);
}
/**
 * Retrieves a Country by id.
 */
function getCountry <TResult>(parameters: IGetCountryParameters, options?: IOptions): Promise<IStandardResponse<IGetCountryParameters, TResult>> {
    return request<IGetCountryParameters, TResult>("/countries/:country_id", parameters, "GET", options);
}
/**
 * Get the country info for the given ISO code.
 */
function findByIsoCode <TResult>(parameters: IFindByIsoCodeParameters, options?: IOptions): Promise<IStandardResponse<IFindByIsoCodeParameters, TResult>> {
    return request<IFindByIsoCodeParameters, TResult>("/countries/iso/:iso_code", parameters, "GET", options);
}

export const Country = {findAllCountry, getCountry, findByIsoCode};
