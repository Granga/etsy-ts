"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageType = void 0;
var client_1 = require("../client/client");
//methods class
var ImageType = /** @class */ (function () {
    function ImageType() {
    }
    /**
     * Lists available image types along with their supported sizes.
     */
    ImageType.listImageTypes = function (parameters, options) {
        return client_1.request("/image_types", parameters, "GET", options);
    };
    return ImageType;
}());
exports.ImageType = ImageType;
