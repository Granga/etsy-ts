"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a top-level Category by tag.
 */
function getCategory(parameters) {
    return HttpRequest_1.request(parameters, '/categories/:tag', 'GET');
}
exports.getCategory = getCategory;
/**
 * Retrieves all top-level Categories.
 */
function findAllTopCategory(parameters) {
    return HttpRequest_1.request(parameters, '/taxonomy/categories', 'GET');
}
exports.findAllTopCategory = findAllTopCategory;
/**
 * Retrieves a second-level Category by tag and subtag.
 */
function getSubCategory(parameters) {
    return HttpRequest_1.request(parameters, '/categories/:tag/:subtag', 'GET');
}
exports.getSubCategory = getSubCategory;
/**
 * Retrieves a third-level Category by tag, subtag and subsubtag.
 */
function getSubSubCategory(parameters) {
    return HttpRequest_1.request(parameters, '/categories/:tag/:subtag/:subsubtag', 'GET');
}
exports.getSubSubCategory = getSubSubCategory;
/**
 * Retrieves children of a top-level Category by tag.
 */
function findAllTopCategoryChildren(parameters) {
    return HttpRequest_1.request(parameters, '/taxonomy/categories/:tag', 'GET');
}
exports.findAllTopCategoryChildren = findAllTopCategoryChildren;
/**
 * Retrieves children of a second-level Category by tag and subtag.
 */
function findAllSubCategoryChildren(parameters) {
    return HttpRequest_1.request(parameters, '/taxonomy/categories/:tag/:subtag', 'GET');
}
exports.findAllSubCategoryChildren = findAllSubCategoryChildren;
