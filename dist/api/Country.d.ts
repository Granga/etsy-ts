import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface ICountry {
    /**
     * The country's numeric ID.
     */
    country_id: number;
    /**
     * The two-letter country code according to ISO 3166-1-alpha-2.
     */
    iso_country_code: string;
    /**
     * The three-letter country code according to the World Bank.
     */
    world_bank_country_code: string;
    /**
     * The country's plain-English name.
     */
    name: string;
    /**
     * The country's plain-English name slugified; suitable for interpolation into a url.
     */
    slug: string;
    /**
     * The country's latitude.
     */
    lat: number;
    /**
     * The country's longitude.
     */
    lon: number;
}
export interface IFindAllCountryParameters {
}
export interface IGetCountryParameters {
    country_id: number[];
}
export interface IFindByIsoCodeParameters {
    limit?: number;
    offset?: number;
    page?: number;
    iso_code: string;
}
export declare class Country {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Finds all Country.
     */
    findAllCountry<TResult>(params: IFindAllCountryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindAllCountryParameters, TResult>>>;
    /**
     * Retrieves a Country by id.
     */
    getCountry<TResult>(params: IGetCountryParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IGetCountryParameters, TResult>>>;
    /**
     * Get the country info for the given ISO code.
     */
    findByIsoCode<TResult>(params: IFindByIsoCodeParameters & IStandardParameters, options?: (IOAuthTokens & {
        axiosConfig?: AxiosRequestConfig;
    })): Promise<AxiosResponse<IStandardResponse<IFindByIsoCodeParameters, TResult>>>;
}
