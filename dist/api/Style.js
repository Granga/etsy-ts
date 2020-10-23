import { request } from "../client/client";
//methods class
export class Style {
    /**
     * Retrieve all suggested styles.
     */
    static findSuggestedStyles(parameters, options) {
        return request("/taxonomy/styles", parameters, "GET", options);
    }
}
