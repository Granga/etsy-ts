"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxonomyNodeProperty = void 0;
const client_1 = require("../client/client");
//methods
/**
 * Get the possible properties of a taxonomy node
 */
function getTaxonomyNodeProperties(parameters, options) {
    return client_1.request("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET", options);
}
exports.TaxonomyNodeProperty = { getTaxonomyNodeProperties };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGF4b25vbXlOb2RlUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL1RheG9ub215Tm9kZVByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQXFEckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUyx5QkFBeUIsQ0FBVSxVQUFnRCxFQUFFLE9BQWtCO0lBQzVHLE9BQU8sZ0JBQU8sQ0FBZ0QsMENBQTBDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxSSxDQUFDO0FBRVksUUFBQSxvQkFBb0IsR0FBRyxFQUFDLHlCQUF5QixFQUFDLENBQUMifQ==