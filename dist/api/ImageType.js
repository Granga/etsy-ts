"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageType = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Lists available image types along with their supported sizes.
 */
function listImageTypes(parameters, options) {
    return client_1.request("/image_types", parameters, "GET", options);
}
exports.ImageType = { listImageTypes };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9JbWFnZVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFEO0FBeUJyRCxTQUFTO0FBQ1Q7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBVSxVQUFxQyxFQUFFLE9BQWtCO0lBQ3RGLE9BQU8sZ0JBQU8sQ0FBcUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkcsQ0FBQztBQUVZLFFBQUEsU0FBUyxHQUFHLEVBQUMsY0FBYyxFQUFDLENBQUMifQ==