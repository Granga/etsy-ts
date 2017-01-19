"use strict";
const rp = require("request-promise");
function request(parameters, url, method = "GET", baseUrl = "https://etsy.com/api/v2/ajax") {
    method = method.toUpperCase();
    let rpOptions = {
        method,
        url,
        baseUrl,
        json: true
    };
    if (method === "GET" || method === "DELETE") {
        rpOptions.qs = parameters;
    }
    else if (method === "POST" || method === "PATCH" || method === "PUT") {
        rpOptions.body = parameters;
    }
    return rp(rpOptions).promise();
}
exports.request = request;
