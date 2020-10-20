"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const defaultOptions = {
    baseUrl: "https://www.etsy.com/api/v2/ajax",
    json: true
};
async function request(uri, parameters, method, options) {
    options = Object.assign(Object.assign({}, defaultOptions), options);
    let url = options.baseUrl + fillUriPlaceholders(uri, parameters);
    let body;
    switch (method.toUpperCase()) {
        case "GET":
        case "DELETE":
            if (Object.keys(parameters).length > 0) {
                let encodedParameters = encodePrameters(parameters);
                url += "?" + encodedParameters;
            }
            break;
        default:
            body = JSON.stringify(parameters);
    }
    let response = (await axios_1.default({
        method: method,
        url: url,
        data: body
    }));
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    }
    else {
        throw response.statusText;
    }
}
exports.request = request;
function fillUriPlaceholders(uri, parameters) {
    let keys = Object.keys(parameters).filter(key => uri.indexOf(`/:${key}`) > -1);
    keys.forEach(key => {
        uri = uri.replace(`/:${key}`, `/${parameters[key]}`);
        delete parameters[key];
    });
    return uri;
}
function encodePrameters(parameters) {
    if (Object.keys(parameters).length > 0) {
        return Object.keys(parameters)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]))
            .join('&');
    }
    return "";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXNDO0FBUXRDLE1BQU0sY0FBYyxHQUFHO0lBQ25CLE9BQU8sRUFBRSxrQ0FBa0M7SUFDM0MsSUFBSSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBRUssS0FBSyxVQUFVLE9BQU8sQ0FBdUIsR0FBVyxFQUFFLFVBQXVCLEVBQUUsTUFBYyxFQUFFLE9BQWtCO0lBQ3hILE9BQU8sbUNBQU8sY0FBYyxHQUFLLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLElBQUksSUFBSSxDQUFDO0lBRVQsUUFBUSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDMUIsS0FBSyxLQUFLLENBQUM7UUFDWCxLQUFLLFFBQVE7WUFDVCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxpQkFBaUIsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BELEdBQUcsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUM7YUFDbEM7WUFDRCxNQUFNO1FBRVY7WUFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6QztJQUVELElBQUksUUFBUSxHQUFHLENBQUMsTUFBTSxlQUFLLENBQUM7UUFDeEIsTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQyxDQUFDLENBQUM7SUFFSixJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2pELE9BQU8sUUFBUSxDQUFDLElBQXdELENBQUM7S0FDNUU7U0FDSTtRQUNELE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQztLQUM3QjtBQUNMLENBQUM7QUE5QkQsMEJBOEJDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxHQUFXLEVBQUUsVUFBZTtJQUNyRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsVUFBZTtJQUNwQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNwQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUMifQ==