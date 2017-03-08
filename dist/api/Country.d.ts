import {IStandardParameters} from "../client/IStandardParameters";
import {IStandardResponse} from "../client/IStandardResponse";
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
export declare function findAllCountry<TResult>(parameters: IFindAllCountryParameters): Promise<IStandardResponse<IFindAllCountryParameters, TResult>>;
/**
 * Retrieves a Country by id.
 */
export declare function getCountry<TResult>(parameters: IGetCountryParameters): Promise<IStandardResponse<IGetCountryParameters, TResult>>;
/**
 * Get the country info for the given ISO code.
 */
export declare function findByIsoCode<TResult>(parameters: IFindByIsoCodeParameters): Promise<IStandardResponse<IFindByIsoCodeParameters, TResult>>;
export declare const Country: {
    findAllCountry: <TResult>(parameters: IFindAllCountryParameters) => Promise<IStandardResponse<IFindAllCountryParameters, TResult>>;
    getCountry: <TResult>(parameters: IGetCountryParameters) => Promise<IStandardResponse<IGetCountryParameters, TResult>>;
    findByIsoCode: <TResult>(parameters: IFindByIsoCodeParameters) => Promise<IStandardResponse<IFindByIsoCodeParameters, TResult>>;
};
