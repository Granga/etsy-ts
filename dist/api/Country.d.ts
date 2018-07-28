import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function findAllCountry<TResult>(parameters: IFindAllCountryParameters, options?: IOptions): Promise<IStandardResponse<IFindAllCountryParameters, TResult>>;
/**
 * Retrieves a Country by id.
 */
declare function getCountry<TResult>(parameters: IGetCountryParameters, options?: IOptions): Promise<IStandardResponse<IGetCountryParameters, TResult>>;
/**
 * Get the country info for the given ISO code.
 */
declare function findByIsoCode<TResult>(parameters: IFindByIsoCodeParameters, options?: IOptions): Promise<IStandardResponse<IFindByIsoCodeParameters, TResult>>;
export declare const Country: {
    findAllCountry: typeof findAllCountry;
    getCountry: typeof getCountry;
    findByIsoCode: typeof findByIsoCode;
};
export {};
