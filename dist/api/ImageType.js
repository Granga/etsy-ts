"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
* Lists available image types along with their supported sizes.
*/
function listImageTypes(parameters, options) {
    return client_1.request("/image_types", parameters, "GET", options);
}
exports.ImageType = { listImageTypes: listImageTypes };
