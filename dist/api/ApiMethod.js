"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMethod = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get a list of all methods available.
 */
function getMethodTable(parameters, options) {
    return client_1.request("/", parameters, "GET", options);
}
exports.ApiMethod = { getMethodTable };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpTWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9BcGlNZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBeUNyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBVSxVQUFxQyxFQUFFLE9BQWtCO0lBQ3RGLE9BQU8sZ0JBQU8sQ0FBcUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEYsQ0FBQztBQUVZLFFBQUEsU0FBUyxHQUFHLEVBQUMsY0FBYyxFQUFDLENBQUMifQ==