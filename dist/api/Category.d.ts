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
export declare const Category: {
    getCategory: <TResult>(parameters: IGetCategoryParameters, options?: IOptions) => Promise<IStandardResponse<IGetCategoryParameters, TResult>>;
    findAllTopCategory: <TResult>(parameters: IFindAllTopCategoryParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllTopCategoryParameters, TResult>>;
    getSubCategory: <TResult>(parameters: IGetSubCategoryParameters, options?: IOptions) => Promise<IStandardResponse<IGetSubCategoryParameters, TResult>>;
    getSubSubCategory: <TResult>(parameters: IGetSubSubCategoryParameters, options?: IOptions) => Promise<IStandardResponse<IGetSubSubCategoryParameters, TResult>>;
    findAllTopCategoryChildren: <TResult>(parameters: IFindAllTopCategoryChildrenParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllTopCategoryChildrenParameters, TResult>>;
    findAllSubCategoryChildren: <TResult>(parameters: IFindAllSubCategoryChildrenParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllSubCategoryChildrenParameters, TResult>>;
};
