"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a set of ShopSection objects associated to a Shop.
 */
function findAllShopSections(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections', 'GET');
}
exports.findAllShopSections = findAllShopSections;
/**
 * Creates a new ShopSection.
 */
function createShopSection(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections', 'POST');
}
exports.createShopSection = createShopSection;
/**
 * Retrieves a ShopSection by id and shop_id
 */
function getShopSection(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id', 'GET');
}
exports.getShopSection = getShopSection;
/**
 * Updates a ShopSection with the given id.
 */
function updateShopSection(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id', 'PUT');
}
exports.updateShopSection = updateShopSection;
/**
 * Deletes the ShopSection with the given id.
 */
function deleteShopSection(parameters) {
    return HttpRequest_1.request(parameters, '/shops/:shop_id/sections/:shop_section_id', 'DELETE');
}
exports.deleteShopSection = deleteShopSection;
