"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const node_fetch_1 = require("node-fetch");
class HttpClient {
    constructor(options) {
        this.options = options;
        const defaultOptions = {
            baseUrl: "https://etsy.com/api/v2/ajax",
            json: true
        };
        this.options = __assign({ options }, defaultOptions);
    }
    http(url, parameters, method = "GET") {
        return __awaiter(this, void 0, void 0, function* () {
            method = method.toUpperCase();
            url = this.options.baseUrl + url;
            let body;
            if (method === "GET" || method === "DELETE") {
                url += "?" + Object.keys(parameters)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
                    .join('&');
            }
            else if (method === "POST" || method === "PATCH" || method === "PUT") {
                body = JSON.stringify(parameters);
            }
            let fetch;
            if (window && window["fetch"]) {
                fetch = window["fetch"];
            }
            else {
                fetch = node_fetch_1.default;
            }
            let response = yield fetch(url, { method, body });
            console.log(response);
            if (response.ok == true) {
                return response.json();
            }
            else {
                throw response.statusText;
            }
        });
    }
}
exports.HttpClient = HttpClient;
