"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Lists available image types along with their supported sizes.
 */
function listImageTypes(parameters) {
    return httpClient_1.request("/image_types", parameters, "GET");
}
exports.listImageTypes = listImageTypes;
exports.ImageType = {listImageTypes: listImageTypes};
