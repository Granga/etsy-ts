import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


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

/**
 * Finds all Country.
 */
export function findAllCountry<TResult>(parameters: IFindAllCountryParameters): Bluebird<IStandardResponse<TResult, IFindAllCountryParameters>> {
    return request<IStandardResponse<TResult, IFindAllCountryParameters>>(parameters, '/countries', 'GET');
}
/**
 * Retrieves a Country by id.
 */
export function getCountry<TResult>(parameters: IGetCountryParameters): Bluebird<IStandardResponse<TResult, IGetCountryParameters>> {
    return request<IStandardResponse<TResult, IGetCountryParameters>>(parameters, '/countries/:country_id', 'GET');
}
/**
 * Get the country info for the given ISO code.
 */
export function findByIsoCode<TResult>(parameters: IFindByIsoCodeParameters): Bluebird<IStandardResponse<TResult, IFindByIsoCodeParameters>> {
    return request<IStandardResponse<TResult, IFindByIsoCodeParameters>>(parameters, '/countries/iso/:iso_code', 'GET');
}
