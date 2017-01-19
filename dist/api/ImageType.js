"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Lists available image types along with their supported sizes.
 */
function listImageTypes(parameters) {
    return HttpRequest_1.request(parameters, '/image_types', 'GET');
}
exports.listImageTypes = listImageTypes;
