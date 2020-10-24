"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
var client_1 = require("../client/client");
//methods class
var Style = /** @class */ (function () {
    function Style() {
    }
    /**
     * Retrieve all suggested styles.
     */
    Style.findSuggestedStyles = function (parameters, options) {
        return client_1.request("/taxonomy/styles", parameters, "GET", options);
    };
    return Style;
}());
exports.Style = Style;
