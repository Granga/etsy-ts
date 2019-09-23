import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ICategory {
    /**
     * The identifier for this category.
     */
    category_id: number;
    /**
     * The programmatic name for this category.
     */
    name: string;
    /**
     * The "title" meta tag value for the category's landing page (may be null).
     */
    meta_title: string;
    /**
     * The "keywords" meta tag value for the category's landing page (may be null).
     */
    meta_keywords: string;
    /**
     * The "description" meta tag value for the category's landing page (may be null).
     */
    meta_description: string;
    /**
     * A short description of the category from the category' landing page (may be null).
     */
    page_description: string;
    /**
     * The title of the category's landing page (may be null).
     */
    page_title: string;
    /**
     * The category's string ID.
     */
    category_name: string;
    /**
     * A short display name for the category.
     */
    short_name: string;
    /**
     * A longer display name for the category.
     */
    long_name: string;
    /**
     * The number of subcategories below this one. Subcatgories append a new tag to the end of their parent's category_name.
     */
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
