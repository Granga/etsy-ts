"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions = {
    baseUrl: "https://www.etsy.com/api/v2/ajax",
    json: true
};
function request(uri, parameters, method, options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, body, encodedParameters, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = __assign({}, defaultOptions, options);
                    url = options.baseUrl + fillUriPlaceholders(uri, parameters);
                    switch (method.toUpperCase()) {
                        case "GET":
                        case "DELETE":
                            if (Object.keys(parameters).length > 0) {
                                encodedParameters = encodePrameters(parameters);
                                url += "?" + encodedParameters;
                            }
                            break;
                        default:
                            body = JSON.stringify(parameters);
                    }
                    return [4 /*yield*/, fetch(url, { method: method, body: body })];
                case 1:
                    response = _a.sent();
                    if (response.ok == true) {
                        return [2 /*return*/, response.json()];
                    }
                    else {
                        throw response.statusText;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.request = request;
function fillUriPlaceholders(uri, parameters) {
    var keys = Object.keys(parameters).filter(function (key) { return uri.indexOf("/:" + key) > -1; });
    keys.forEach(function (key) {
        uri = uri.replace("/:" + key, "/" + parameters[key]);
        delete parameters[key];
    });
    return uri;
}
function encodePrameters(parameters) {
    if (Object.keys(parameters).length > 0) {
        Object.keys(parameters)
            .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]); })
            .join('&');
    }
    return "";
}
