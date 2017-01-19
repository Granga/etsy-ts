/// <reference types="bluebird" />
import * as Bluebird from "bluebird";
import { IStandardParameters } from "../common/IStandardParameters";
import { IStandardResponse } from "../common/IStandardResponse";
export interface ICategory {
    category_id: number;
    name: string;
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
    page_description: string;
    page_title: string;
    category_name: string;
    short_name: string;
    long_name: string;
    num_children: number;
}
export interface IGetCategoryParameters extends IStandardParameters {
    tag: string;
}
export interface IFindAllTopCategoryParameters extends IStandardParameters {
}
export interface IGetSubCategoryParameters extends IStandardParameters {
    tag: string;
    subtag: string;
}
export interface IGetSubSubCategoryParameters extends IStandardParameters {
    tag: string;
    subtag: string;
    subsubtag: string;
}
export interface IFindAllTopCategoryChildrenParameters extends IStandardParameters {
    tag: string;
}
export interface IFindAllSubCategoryChildrenParameters extends IStandardParameters {
    tag: string;
    subtag: string;
}
/**
 * Retrieves a top-level Category by tag.
 */
export declare function getCategory<TResult>(parameters: IGetCategoryParameters): Bluebird<IStandardResponse<TResult, IGetCategoryParameters>>;
/**
 * Retrieves all top-level Categories.
 */
export declare function findAllTopCategory<TResult>(parameters: IFindAllTopCategoryParameters): Bluebird<IStandardResponse<TResult, IFindAllTopCategoryParameters>>;
/**
 * Retrieves a second-level Category by tag and subtag.
 */
export declare function getSubCategory<TResult>(parameters: IGetSubCategoryParameters): Bluebird<IStandardResponse<TResult, IGetSubCategoryParameters>>;
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
export declare function getSubSubCategory<TResult>(parameters: IGetSubSubCategoryParameters): Bluebird<IStandardResponse<TResult, IGetSubSubCategoryParameters>>;
/**
 * Retrieves children of a top-level Category by tag.
 */
export declare function findAllTopCategoryChildren<TResult>(parameters: IFindAllTopCategoryChildrenParameters): Bluebird<IStandardResponse<TResult, IFindAllTopCategoryChildrenParameters>>;
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
export declare function findAllSubCategoryChildren<TResult>(parameters: IFindAllSubCategoryChildrenParameters): Bluebird<IStandardResponse<TResult, IFindAllSubCategoryChildrenParameters>>;
