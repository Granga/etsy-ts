import * as Bluebird from "bluebird";
import {request} from "../common/HttpRequest";
import {IStandardParameters} from "../common/IStandardParameters";
import {IStandardResponse} from "../common/IStandardResponse";


export interface ICategory {
    category_id: number,
    name: string,
    meta_title: string,
    meta_keywords: string,
    meta_description: string,
    page_description: string,
    page_title: string,
    category_name: string,
    short_name: string,
    long_name: string,
    num_children: number
}

export interface IGetCategoryParameters extends IStandardParameters {
    tag: string
}
export interface IFindAllTopCategoryParameters extends IStandardParameters {

}
export interface IGetSubCategoryParameters extends IStandardParameters {
    tag: string,
    subtag: string
}
export interface IGetSubSubCategoryParameters extends IStandardParameters {
    tag: string,
    subtag: string,
    subsubtag: string
}
export interface IFindAllTopCategoryChildrenParameters extends IStandardParameters {
    tag: string
}
export interface IFindAllSubCategoryChildrenParameters extends IStandardParameters {
    tag: string,
    subtag: string
}

/**
 * Retrieves a top-level Category by tag.
 */
export function getCategory<TResult>(parameters: IGetCategoryParameters): Bluebird<IStandardResponse<TResult, IGetCategoryParameters>> {
    return request<IStandardResponse<TResult, IGetCategoryParameters>>(parameters, '/categories/:tag', 'GET');
}
/**
 * Retrieves all top-level Categories.
 */
export function findAllTopCategory<TResult>(parameters: IFindAllTopCategoryParameters): Bluebird<IStandardResponse<TResult, IFindAllTopCategoryParameters>> {
    return request<IStandardResponse<TResult, IFindAllTopCategoryParameters>>(parameters, '/taxonomy/categories', 'GET');
}
/**
 * Retrieves a second-level Category by tag and subtag.
 */
export function getSubCategory<TResult>(parameters: IGetSubCategoryParameters): Bluebird<IStandardResponse<TResult, IGetSubCategoryParameters>> {
    return request<IStandardResponse<TResult, IGetSubCategoryParameters>>(parameters, '/categories/:tag/:subtag', 'GET');
}
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
export function getSubSubCategory<TResult>(parameters: IGetSubSubCategoryParameters): Bluebird<IStandardResponse<TResult, IGetSubSubCategoryParameters>> {
    return request<IStandardResponse<TResult, IGetSubSubCategoryParameters>>(parameters, '/categories/:tag/:subtag/:subsubtag', 'GET');
}
/**
 * Retrieves children of a top-level Category by tag.
 */
export function findAllTopCategoryChildren<TResult>(parameters: IFindAllTopCategoryChildrenParameters): Bluebird<IStandardResponse<TResult, IFindAllTopCategoryChildrenParameters>> {
    return request<IStandardResponse<TResult, IFindAllTopCategoryChildrenParameters>>(parameters, '/taxonomy/categories/:tag', 'GET');
}
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
export function findAllSubCategoryChildren<TResult>(parameters: IFindAllSubCategoryChildrenParameters): Bluebird<IStandardResponse<TResult, IFindAllSubCategoryChildrenParameters>> {
    return request<IStandardResponse<TResult, IFindAllSubCategoryChildrenParameters>>(parameters, '/taxonomy/categories/:tag/:subtag', 'GET');
}
