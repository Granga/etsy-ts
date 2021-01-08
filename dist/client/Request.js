"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var axios_1 = __importDefault(require("axios"));
var crypto_1 = require("crypto");
var oauth_1_0a_1 = __importDefault(require("oauth-1.0a"));
function request(axiosConfig, params, oauth) {
    var finalConfig = __assign({}, axiosConfig);
    finalConfig.url = fillUriPlaceholders(axiosConfig.url, params);
    switch (finalConfig.method.toUpperCase()) {
        case "GET":
        case "DELETE":
            if (Object.keys(params).length > 0) {
                var encodedParameters = encodePrameters(params);
                finalConfig.url += "?" + encodedParameters;
            }
            break;
        default:
            finalConfig.data = params;
    }
    var client = createClient(finalConfig, oauth);
    return client.request(finalConfig);
}
exports.request = request;
function createClient(axiosConfig, tokens) {
    var client = axios_1.default.create(__assign({ baseURL: "https://openapi.etsy.com/v2" }, axiosConfig));
    client.interceptors.request.use(function (config) {
        if ((tokens === null || tokens === void 0 ? void 0 : tokens.apiKeys) && (tokens === null || tokens === void 0 ? void 0 : tokens.token)) {
            var requestData = {
                url: combineURLs(config.baseURL, config.url),
                method: config.method,
                data: __assign({}, (config.data ? config.data : {})),
            };
            var authHeader = generateOAuthHeader(requestData, tokens);
            config.headers = __assign(__assign({}, config.headers), authHeader);
        }
        else if (tokens === null || tokens === void 0 ? void 0 : tokens.apiKeys) {
            config.params = __assign(__assign({}, config.params), { api_key: tokens.apiKeys.key });
        }
        return config;
    });
    client.interceptors.response.use(function (response) { return response; }, function (error) {
        if (error) {
            error.message = captureErrorMessage(error);
        }
        throw error;
    });
    return client;
}
function captureErrorMessage(e) {
    if (e["isAxiosError"] === true) {
        var error = e;
        if (error.response) {
            return error.response.data || e.toString();
        }
    }
    return e.toString();
}
function encodePrameters(parameters) {
    if (Object.keys(parameters).length > 0) {
        return Object.keys(parameters)
            .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]); })
            .join('&');
    }
    return "";
}
function combineURLs(baseURL, relativeURL) {
    return relativeURL
        ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
        : baseURL;
}
function fillUriPlaceholders(uri, parameters) {
    var keys = Object.keys(parameters).filter(function (key) { return uri.indexOf("/:" + key) > -1; });
    keys.forEach(function (key) {
        uri = uri.replace("/:" + key, "/" + parameters[key]);
        delete parameters[key];
    });
    return uri;
}
function generateOAuthHeader(request_data, tokens) {
    var oauth = new oauth_1_0a_1.default({
        consumer: {
            key: tokens.apiKeys.key,
            secret: tokens.apiKeys.secret,
        },
        signature_method: "HMAC-SHA1",
        hash_function: function (base_string, key) {
            return crypto_1.createHmac('sha1', key)
                .update(base_string)
                .digest('base64');
        },
    });
    var authorized_data = oauth.authorize(request_data, tokens.token);
    return oauth.toHeader(authorized_data);
}
