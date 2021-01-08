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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE2RTtBQUM3RSxpQ0FBb0M7QUFDcEMsMERBQStCO0FBSS9CLFNBQWdCLE9BQU8sQ0FDbkIsV0FBK0IsRUFDL0IsTUFBbUIsRUFDbkIsS0FBb0I7SUFFcEIsSUFBSSxXQUFXLGdCQUNSLFdBQVcsQ0FDakIsQ0FBQztJQUVGLFdBQVcsQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEdBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV6RSxRQUFTLFdBQVcsQ0FBQyxNQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQ2xELEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxRQUFRO1lBQ1QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksaUJBQWlCLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxXQUFXLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQzthQUM5QztZQUNELE1BQU07UUFFVjtZQUNJLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0tBQ2pDO0lBRUQsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQTFCRCwwQkEwQkM7QUFFRCxTQUFTLFlBQVksQ0FDakIsV0FBK0IsRUFDL0IsTUFBcUI7SUFFckIsSUFBSSxNQUFNLEdBQUcsZUFBSyxDQUFDLE1BQU0sWUFDckIsT0FBTyxFQUFFLDZCQUE2QixJQUNuQyxXQUFXLEVBQ2hCLENBQUM7SUFFSCxNQUFNLENB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