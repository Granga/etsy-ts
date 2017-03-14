"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a top-level Category by tag.
 */
function getCategory(parameters, options) {
    return client_1.request("/categories/:tag", parameters, "GET", options);
}
/**
 * Retrieves all top-level Categories.
 */
function findAllTopCategory(parameters, options) {
    return client_1.request("/taxonomy/categories", parameters, "GET", options);
}
/**
 * Retrieves a second-level Category by tag and subtag.
 */
function getSubCategory(parameters, options) {
    return client_1.request("/categories/:tag/:subtag", parameters, "GET", options);
}
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
function getSubSubCategory(parameters, options) {
    return client_1.request("/categories/:tag/:subtag/:subsubtag", parameters, "GET", options);
}
/**
 * Retrieves children of a top-level Category by tag.
 */
function findAllTopCategoryChildren(parameters, options) {
    return client_1.request("/taxonomy/categories/:tag", parameters, "GET", options);
}
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
function findAllSubCategoryChildren(parameters, options) {
    return client_1.request("/taxonomy/categories/:tag/:subtag", parameters, "GET", options);
}
exports.Category = {
    getCategory: getCategory,
    findAllTopCategory: findAllTopCategory,
    getSubCategory: getSubCategory,
    getSubSubCategory: getSubSubCategory,
    findAllTopCategoryChildren: findAllTopCategoryChildren,
    findAllSubCategoryChildren: findAllSubCategoryChildren
};
