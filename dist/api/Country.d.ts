/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface ICountry {
    country_id: number;
    iso_country_code: string;
    world_bank_country_code: string;
    name: string;
    slug: string;
    lat: number;
    lon: number;
}
export interface IFindAllCountryParameters extends IStandardParameters {
}
export interface IGetCountryParameters extends IStandardParameters {
    country_id: number[];
}
export interface IFindByIsoCodeParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    iso_code: string;
}
/**
* Finds all Country.
*/
export declare function findAllCountry<TResult>(parameters: IFindAllCountryParameters): Bluebird<IStandardResponse<TResult, IFindAllCountryParameters>>;
/**
* Retrieves a Country by id.
*/
export declare function getCountry<TResult>(parameters: IGetCountryParameters): Bluebird<IStandardResponse<TResult, IGetCountryParameters>>;
/**
* Get the country info for the given ISO code.
*/
export declare function findByIsoCode<TResult>(parameters: IFindByIsoCodeParameters): Bluebird<IStandardResponse<TResult, IFindByIsoCodeParameters>>;
