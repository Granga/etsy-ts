import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IListingTranslation {
    listing_id: number;
    language: string;
    title: string;
    description: string;
    tags: string[];
}
export interface IGetListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
}
export interface ICreateListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IUpdateListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
    title?: string;
    description?: string;
    tags?: string[];
}
export interface IDeleteListingTranslationParameters extends IStandardParameters {
    listing_id: number;
    language: string;
}
export declare const ListingTranslation: {
    getListingTranslation: <TResult>(parameters: IGetListingTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IGetListingTranslationParameters, TResult>>;
    createListingTranslation: <TResult>(parameters: ICreateListingTranslationParameters, options?: IOptions) => Promise<IStandardResponse<ICreateListingTranslationParameters, TResult>>;
    updateListingTranslation: <TResult>(parameters: IUpdateListingTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IUpdateListingTranslationParameters, TResult>>;
    deleteListingTranslation: <TResult>(parameters: IDeleteListingTranslationParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteListingTranslationParameters, TResult>>;
};
