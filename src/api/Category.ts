import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
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

//parameters types

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

//methods

/**
 * Retrieves a top-level Category by tag.
 */
export function getCategory <TResult>(parameters: IGetCategoryParameters): Promise<IStandardResponse<IGetCategoryParameters, TResult>> {
    return request<IGetCategoryParameters, TResult>("/categories/:tag", parameters, "GET");
}
/**
 * Retrieves all top-level Categories.
 */
export function findAllTopCategory <TResult>(parameters: IFindAllTopCategoryParameters): Promise<IStandardResponse<IFindAllTopCategoryParameters, TResult>> {
    return request<IFindAllTopCategoryParameters, TResult>("/taxonomy/categories", parameters, "GET");
}
/**
 * Retrieves a second-level Category by tag and subtag.
 */
export function getSubCategory <TResult>(parameters: IGetSubCategoryParameters): Promise<IStandardResponse<IGetSubCategoryParameters, TResult>> {
    return request<IGetSubCategoryParameters, TResult>("/categories/:tag/:subtag", parameters, "GET");
}
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
export function getSubSubCategory <TResult>(parameters: IGetSubSubCategoryParameters): Promise<IStandardResponse<IGetSubSubCategoryParameters, TResult>> {
    return request<IGetSubSubCategoryParameters, TResult>("/categories/:tag/:subtag/:subsubtag", parameters, "GET");
}
/**
 * Retrieves children of a top-level Category by tag.
 */
export function findAllTopCategoryChildren <TResult>(parameters: IFindAllTopCategoryChildrenParameters): Promise<IStandardResponse<IFindAllTopCategoryChildrenParameters, TResult>> {
    return request<IFindAllTopCategoryChildrenParameters, TResult>("/taxonomy/categories/:tag", parameters, "GET");
}
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
export function findAllSubCategoryChildren <TResult>(parameters: IFindAllSubCategoryChildrenParameters): Promise<IStandardResponse<IFindAllSubCategoryChildrenParameters, TResult>> {
    return request<IFindAllSubCategoryChildrenParameters, TResult>("/taxonomy/categories/:tag/:subtag", parameters, "GET");
}

export const Category = {
    getCategory,
    findAllTopCategory,
    getSubCategory,
    getSubSubCategory,
    findAllTopCategoryChildren,
    findAllSubCategoryChildren
};
