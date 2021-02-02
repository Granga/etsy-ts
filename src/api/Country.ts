import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { request } from "../client/Request";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

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
export class Country {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: Token
    ) {
    }


    /**
     * Finds all Country.
     */
    async findAllCountry<TResult>(
        params: IFindAllCountryParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindAllCountryParameters, TResult>>> {
        return request<IFindAllCountryParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/countries",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Retrieves a Country by id.
     */
    async getCountry<TResult>(
        params: IGetCountryParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IGetCountryParameters, TResult>>> {
        return request<IGetCountryParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/countries/:country_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }

    /**
     * Get the country info for the given ISO code.
     */
    async findByIsoCode<TResult>(
        params: IFindByIsoCodeParameters & IStandardParameters,
        options ?: (IOAuthTokens & { axiosConfig?: AxiosRequestConfig })
    ): Promise<AxiosResponse<IStandardResponse<IFindByIsoCodeParameters, TResult>>> {
        return request<IFindByIsoCodeParameters, TResult>({
            ...this.config, ...options?.axiosConfig,
            url: "/countries/iso/:iso_code",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...options});
    }
}
