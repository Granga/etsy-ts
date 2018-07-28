import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
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
declare function getCategory<TResult>(parameters: IGetCategoryParameters, options?: IOptions): Promise<IStandardResponse<IGetCategoryParameters, TResult>>;
/**
 * Retrieves all top-level Categories.
 */
declare function findAllTopCategory<TResult>(parameters: IFindAllTopCategoryParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTopCategoryParameters, TResult>>;
/**
 * Retrieves a second-level Category by tag and subtag.
 */
declare function getSubCategory<TResult>(parameters: IGetSubCategoryParameters, options?: IOptions): Promise<IStandardResponse<IGetSubCategoryParameters, TResult>>;
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
declare function getSubSubCategory<TResult>(parameters: IGetSubSubCategoryParameters, options?: IOptions): Promise<IStandardResponse<IGetSubSubCategoryParameters, TResult>>;
/**
 * Retrieves children of a top-level Category by tag.
 */
declare function findAllTopCategoryChildren<TResult>(parameters: IFindAllTopCategoryChildrenParameters, options?: IOptions): Promise<IStandardResponse<IFindAllTopCategoryChildrenParameters, TResult>>;
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
declare function findAllSubCategoryChildren<TResult>(parameters: IFindAllSubCategoryChildrenParameters, options?: IOptions): Promise<IStandardResponse<IFindAllSubCategoryChildrenParameters, TResult>>;
export declare const Category: {
    getCategory: typeof getCategory;
    findAllTopCategory: typeof findAllTopCategory;
    getSubCategory: typeof getSubCategory;
    getSubSubCategory: typeof getSubSubCategory;
    findAllTopCategoryChildren: typeof findAllTopCategoryChildren;
    findAllSubCategoryChildren: typeof findAllSubCategoryChildren;
};
export {};
