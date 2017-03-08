import {IOptions, request} from "../client/client";
import {IStandardParameters} from "../client/IStandardParameters";
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
function getCategory <TResult>(parameters: IGetCategoryParameters, options?: IOptions): Promise<IStandardResponse<IGetCategoryParameters, TResult>> {
    return request<IGetCategoryParameters, TResult>("/categories/:tag", parameters, "GET", options);
}
/**
 * Retrieves all top-level Categories.
 */
function findAllTopCategory <TResult>(parameters: IFindAllTopCategoryParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTopCategoryParameters, TResult>> {
    return request<IFindAllTopCategoryParameters, TResult>("/taxonomy/categories", parameters, "GET", options);
}
/**
 * Retrieves a second-level Category by tag and subtag.
 */
function getSubCategory <TResult>(parameters: IGetSubCategoryParameters, options?: IOptions): Promise<IStandardResponse<IGetSubCategoryParameters, TResult>> {
    return request<IGetSubCategoryParameters, TResult>("/categories/:tag/:subtag", parameters, "GET", options);
}
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
function getSubSubCategory <TResult>(parameters: IGetSubSubCategoryParameters, options?: IOptions): Promise<IStandardResponse<IGetSubSubCategoryParameters, TResult>> {
    return request<IGetSubSubCategoryParameters, TResult>("/categories/:tag/:subtag/:subsubtag", parameters, "GET", options);
}
/**
 * Retrieves children of a top-level Category by tag.
 */
function findAllTopCategoryChildren <TResult>(parameters: IFindAllTopCategoryChildrenParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTopCategoryChildrenParameters, TResult>> {
    return request<IFindAllTopCategoryChildrenParameters, TResult>("/taxonomy/categories/:tag", parameters, "GET", options);
}
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
function findAllSubCategoryChildren <TResult>(parameters: IFindAllSubCategoryChildrenParameters, options?: IOptions): Promise<IStandardResponse<IFindAllSubCategoryChildrenParameters, TResult>> {
    return request<IFindAllSubCategoryChildrenParameters, TResult>("/taxonomy/categories/:tag/:subtag", parameters, "GET", options);
}

export const Category = {
    getCategory,
    findAllTopCategory,
    getSubCategory,
    getSubSubCategory,
    findAllTopCategoryChildren,
    findAllSubCategoryChildren
};
