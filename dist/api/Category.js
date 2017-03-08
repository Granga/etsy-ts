"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a top-level Category by tag.
 */
function getCategory(parameters) {
    return httpClient_1.request("/categories/:tag", parameters, "GET");
}
exports.getCategory = getCategory;
/**
 * Retrieves all top-level Categories.
 */
function findAllTopCategory(parameters) {
    return httpClient_1.request("/taxonomy/categories", parameters, "GET");
}
exports.findAllTopCategory = findAllTopCategory;
/**
 * Retrieves a second-level Category by tag and subtag.
 */
function getSubCategory(parameters) {
    return httpClient_1.request("/categories/:tag/:subtag", parameters, "GET");
}
exports.getSubCategory = getSubCategory;
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
function getSubSubCategory(parameters) {
    return httpClient_1.request("/categories/:tag/:subtag/:subsubtag", parameters, "GET");
}
exports.getSubSubCategory = getSubSubCategory;
/**
 * Retrieves children of a top-level Category by tag.
 */
function findAllTopCategoryChildren(parameters) {
    return httpClient_1.request("/taxonomy/categories/:tag", parameters, "GET");
}
exports.findAllTopCategoryChildren = findAllTopCategoryChildren;
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
function findAllSubCategoryChildren(parameters) {
    return httpClient_1.request("/taxonomy/categories/:tag/:subtag", parameters, "GET");
}
exports.findAllSubCategoryChildren = findAllSubCategoryChildren;
exports.Category = {
    getCategory: getCategory,
    findAllTopCategory: findAllTopCategory,
    getSubCategory: getSubCategory,
    getSubSubCategory: getSubSubCategory,
    findAllTopCategoryChildren: findAllTopCategoryChildren,
    findAllSubCategoryChildren: findAllSubCategoryChildren
};
